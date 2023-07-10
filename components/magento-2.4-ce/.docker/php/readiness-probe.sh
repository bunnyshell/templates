#!/bin/sh

if [ $(ps aux | grep "php-fpm" | grep "pool www" | grep -v "grep" | wc -l) -gt 1 ]
then
  exit 0
else
  exit 1
fi
