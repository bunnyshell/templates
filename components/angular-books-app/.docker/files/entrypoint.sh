#!/bin/sh

# replacement for the dev environment / target
if [ -n "$API_URL" ] && [ -f 'src/environments/environment.ts' ]; then
    echo "Replacing API_URL for dev..."

    sed -i "s|apiUrl: '.*',|apiUrl: '${API_URL}',|" src/environments/environment.ts
fi

# replacement for the prod environment / target
if [ -n "$API_URL" ] && [ -d '/usr/share/nginx/html' ]; then
    echo "Replacing API_URL for prod..."

    find '/usr/share/nginx/html' -type f -name "*.js" -exec sed -i "s|this.apiUrl=\"[^\"]*\"|this.apiUrl=\"${API_URL}\"|" {} \;
fi

exec "$@"
