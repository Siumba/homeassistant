#!/bin/bash

#after install
passwd
HOSTNAME="ihouse"
sudo -- sh -c "echo '$HOSTNAME' > /etc/hostname"
cd /
sudo apt-get update
sudo apt-get -y upgrade

#install docker
curl -sSL get.docker.com | sh
sudo usermod -aG docker pi
sudo apt-get install -y libffi-dev libssl-dev
sudo apt-get install -y python3 python3-pip
sudo apt-get remove python-configparser
sudo pip3 install docker-compose

#install hassio
sudo mkdir /opt/hassio
sudo apt-get install -y jq
sudo apt-get install -y network-manager
sudo apt-get install -y apparmor-utils
sudo curl -sL "https://raw.githubusercontent.com/home-assistant/supervised-installer/master/installer.sh" | bash -s
sudo apt-get install -y git

#install homebridge
sudo mkdir /opt/homebridge
cd /opt/homebridge
HOMEBRIDGECOMPOSE=$(cat <<-END
version: "2"
services:
  homebridge:
    image: oznu/homebridge:latest
    container_name: homebridge
    restart: always
    network_mode: host
    environment:
      - TZ=Europe/Amsterdam
      - PGID=1000
      - PUID=1000
      - HOMEBRIDGE_CONFIG_UI=1
      - HOMEBRIDGE_CONFIG_UI_PORT=8555
      - PACKAGES=ffmpeg
    volumes:
      - ./homebridge:/homebridge
END
)
sudo -- sh -c "echo '$HOMEBRIDGECOMPOSE' > /opt/homebridge/docker-compose.yaml"
sudo docker-compose up -d

#install teslamate
sudo mkdir /opt/teslamate
cd /opt/teslamate
TESLAMATECOMPOSE=$(cat <<-END
version: "3"

services:
  teslamate:
    image: teslamate/teslamate:latest
    restart: always
    environment:
      - DATABASE_USER=teslamate
      - DATABASE_PASS=secret
      - DATABASE_NAME=teslamate
      - DATABASE_HOST=database
      - MQTT_HOST=mosquitto
    ports:
      - 4000:4000
    volumes:
      - ./import:/opt/app/import
    cap_drop:
      - all

  database:
    image: postgres:12
    restart: always
    environment:
      - POSTGRES_USER=teslamate
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=teslamate
    volumes:
      - teslamate-db:/var/lib/postgresql/data

  grafana:
    image: teslamate/grafana:latest
    restart: always
    environment:
      - DATABASE_USER=teslamate
      - DATABASE_PASS=secret
      - DATABASE_NAME=teslamate
      - DATABASE_HOST=database
    ports:
      - 3000:3000
    volumes:
      - teslamate-grafana-data:/var/lib/grafana

  mosquitto:
    image: eclipse-mosquitto:1.6
    restart: always
    ports:
      - 1883:1883
    volumes:
      - mosquitto-conf:/mosquitto/config
      - mosquitto-data:/mosquitto/data

volumes:
    teslamate-db:
    teslamate-grafana-data:
    mosquitto-conf:
    mosquitto-data:
END
)
sudo -- sh -c "echo '$TESLAMATECOMPOSE' > /opt/teslamate/docker-compose.yaml"
sudo docker-compose up -d

##install samba
sudo apt-get install -y samba samba-common-bin
SMBCONF=$(cat <<-END
[global] 
netbios name = ihouse 
server string = The HA File Center
workgroup = WORKGROUP 
hosts allow = 
socket options = TCP_NODELAY IPTOS_LOWDELAY SO_RCVBUF=65536 SO_SNDBUF=65536 
remote announce = remote
browse sync =

[homeassistant]
path = /opt/hassio
comment = No comment
browsable = yes
read only = no
valid users =
writable = yes
guest ok = yes
public = yes
create mask = 0777
directory mask = 0777
force user = root
force create mode = 0777
force directory mode = 0777
hosts allow =
END
)

sudo -- sh -c "echo '$SMBCONF' > /etc/samba/smb.conf"
sudo smbpasswd -a pi
sudo systemctl restart smbd

exit
