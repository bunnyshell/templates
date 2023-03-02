#!/bin/sh

if [ -n "$API_URL" ]; then
    echo "Replacing API_URL..."

    sed -i "s|apiUrl: '.*',|apiUrl: '${API_URL}',|" src/environments/environment.ts
fi

exec "$@"
