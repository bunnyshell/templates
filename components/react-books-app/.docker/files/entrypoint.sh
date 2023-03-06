#!/bin/sh

if [ -n "$REACT_APP_BASE_API" ] && [ -d '/usr/share/nginx/html/static/js/' ]; then
    echo "Replacing REACT_APP_BASE_API..."

    find '/usr/share/nginx/html/static/js/' -type f -name "*.js.map" -exec sed -i "s|baseURL: .\${process.env.REACT_APP_BASE_API}.,|baseURL: '${REACT_APP_BASE_API}',|" {} \;
    find '/usr/share/nginx/html/static/js/' -type f -name "*.js" -exec sed -i "s|create({baseURL:\"\"|create({baseURL:\"${REACT_APP_BASE_API}\"|" {} \;
fi

exec "$@"
