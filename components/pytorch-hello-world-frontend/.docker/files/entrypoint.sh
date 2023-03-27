#!/bin/sh

echo "Running custom entrypoint."

# replacement for the API URL
if [ -n "$API_URL" ] && [ -f 'js/app.js' ]; then
    echo "Replacing API_URL..."

    sed -i "s|<<API_URL>>|${API_URL}|" js/app.js
fi

exec "$@"