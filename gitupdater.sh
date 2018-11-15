#!/bin/bash

git add .
git status
echo -n "[Enter the commit message]: "
read CHANGE_MSG
git commit -m "${CHANGE_MSG}"
git push -u origin master

exit