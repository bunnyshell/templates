#!/bin/sh

[ "$DEBUG" = "true" ] && set -x

echo "Enabling PHP extensions..."

PHP_EXT_DIR=/usr/local/etc/php/conf.d

# Enable PHP extensions
PHP_EXT_COM_ON=docker-php-ext-enable

[ -d ${PHP_EXT_DIR} ] && rm -f ${PHP_EXT_DIR}/docker-php-ext-*.ini

if [ -x "$(command -v ${PHP_EXT_COM_ON})" ] && [ ! -z "${PHP_EXTENSIONS}" ]; then
  ${PHP_EXT_COM_ON} ${PHP_EXTENSIONS}
fi

echo "Running development entrypoint: Magento build & deploy..."

# Magento build

if [ -n "$RUN_BUILD" ] && [ "$RUN_BUILD" -ne 0 ]; then
    composer global config http-basic.repo.magento.com "$MAGE_PUBKEY" "$MAGE_PRIVKEY"

    composer install --prefer-dist --optimize-autoloader --no-interaction

    bin/magento module:enable --all

    bin/magento setup:install \
      ${MAGE_ADMIN_FIRSTNAME:+--admin-firstname "$MAGE_ADMIN_FIRSTNAME"} \
      ${MAGE_ADMIN_LASTNAME:+--admin-lastname "$MAGE_ADMIN_LASTNAME"} \
      ${MAGE_ADMIN_EMAIL:+--admin-email "$MAGE_ADMIN_EMAIL"} \
      ${MAGE_ADMIN_USER:+--admin-user "$MAGE_ADMIN_USER"} \
      ${MAGE_ADMIN_PASSWORD:+--admin-password "$MAGE_ADMIN_PASSWORD"} \
      ${MAGE_BASE_URL:+--base-url "$MAGE_BASE_URL"} \
      ${MAGE_BACKEND_FRONTNAME:+--backend-frontname "$MAGE_BACKEND_FRONTNAME"} \
      ${MAGE_DB_HOST:+--db-host "$MAGE_DB_HOST"} \
      ${MAGE_DB_NAME:+--db-name "$MAGE_DB_NAME"} \
      ${MAGE_DB_USER:+--db-user "$MAGE_DB_USER"} \
      ${MAGE_DB_PASSWORD:+--db-password "$MAGE_DB_PASSWORD"} \
      ${MAGE_DB_PREFIX:+--db-prefix "$MAGE_DB_PREFIX"} \
      ${MAGE_DB_SSL_KEY:+--db-ssl-key "$MAGE_DB_SSL_KEY"} \
      ${MAGE_DB_SSL_CERT:+--db-ssl-cert "$MAGE_DB_SSL_CERT"} \
      ${MAGE_DB_SSL_CA:+--db-ssl-ca "$MAGE_DB_SSL_CA"} \
      ${MAGE_LANGUAGE:+--language "$MAGE_LANGUAGE"} \
      ${MAGE_CURRENCY:+--currency "$MAGE_CURRENCY"} \
      ${MAGE_TIMEZONE:+--timezone "$MAGE_TIMEZONE"} \
      ${MAGE_USE_REWRITES:+--use-rewrites "$MAGE_USE_REWRITES"} \
      ${MAGE_USE_SECURE:+--use-secure "$MAGE_USE_SECURE"} \
      ${MAGE_BASE_URL_SECURE:+--base-url-secure "$MAGE_BASE_URL_SECURE"} \
      ${MAGE_USE_SECURE_ADMIN:+--use-secure-admin "$MAGE_USE_SECURE_ADMIN"} \
      ${MAGE_ADMIN_USE_SECURITY_KEY:+--admin-use-security-key "$MAGE_ADMIN_USE_SECURITY_KEY"} \
      ${MAGE_SESSION_SAVE:+--session-save "$MAGE_SESSION_SAVE"} \
      ${MAGE_KEY:+--key "$MAGE_KEY"} \
      ${MAGE_CLEANUP_DATABASE:+--cleanup-database "$MAGE_CLEANUP_DATABASE"} \
      ${MAGE_DB_INIT_STATEMENTS:+--db-init-statements "$MAGE_DB_INIT_STATEMENTS"} \
      ${MAGE_SALES_ORDER_INCREMENT_PREFIX:+--sales-order-increment-prefix "$MAGE_SALES_ORDER_INCREMENT_PREFIX"} \
      ${MAGE_SEARCH_ENGINE:+--search-engine "$MAGE_SEARCH_ENGINE"} \
      ${MAGE_ELASTICSEARCH_HOST:+--elasticsearch-host "$MAGE_ELASTICSEARCH_HOST"} \
      ${MAGE_ELASTICSEARCH_PORT:+--elasticsearch-port "$MAGE_ELASTICSEARCH_PORT"} \
      ${MAGE_ELASTICSEARCH_INDEX_PREFIX:+--elasticsearch-index-prefix "$MAGE_ELASTICSEARCH_INDEX_PREFIX"} \
      ${MAGE_ELASTICSEARCH_TIMEOUT:+--elasticsearch-timeout "$MAGE_ELASTICSEARCH_TIMEOUT"} \
      ${MAGE_ELASTICSEARCH_ENABLE_AUTH:+--elasticsearch-enable-auth "$MAGE_ELASTICSEARCH_ENABLE_AUTH"} \
      ${MAGE_ELASTICSEARCH_USERNAME:+--elasticsearch-username "$MAGE_ELASTICSEARCH_USERNAME"} \
      ${MAGE_ELASTICSEARCH_PASSWORD:+--elasticsearch-password "$MAGE_ELASTICSEARCH_PASSWORD"} \
      ${MAGE_AMQP_HOST:+--amqp-host "$MAGE_AMQP_HOST"} \
      ${MAGE_AMQP_PORT:+--amqp-port "$MAGE_AMQP_PORT"} \
      ${MAGE_AMQP_USER:+--amqp-user "$MAGE_AMQP_USER"} \
      ${MAGE_AMQP_PASSWORD:+--amqp-password "$MAGE_AMQP_PASSWORD"} \
      ${MAGE_AMQP_VIRTUALHOST:+--amqp-virtualhost "$MAGE_AMQP_VIRTUALHOST"} \
      ${MAGE_AMQP_SSL:+--amqp-ssl "$MAGE_AMQP_SSL"} \
      ${MAGE_CONSUMERS_WAIT_FOR_MESSAGES:+--consumers-wait-for-messages "$MAGE_CONSUMERS_WAIT_FOR_MESSAGES"} \
      ${MAGE_LOCK_PROVIDER:+--lock-provider "$MAGE_LOCK_PROVIDER"} \
      ${MAGE_LOCK_DB_PREFIX:+--lock-db-prefix "$MAGE_LOCK_DB_PREFIX"} \
      ${MAGE_LOCK_ZOOKEEPER_HOST:+--lock-zookeeper-host "$MAGE_LOCK_ZOOKEEPER_HOST"} \
      ${MAGE_LOCK_ZOOKEEPER_PATH:+--lock-zookeeper-path "$MAGE_LOCK_ZOOKEEPER_PATH"} \
      ${MAGE_LOCK_FILE_PATH:+--lock-file-path "$MAGE_LOCK_FILE_PATH"} \
      ${MAGE_CONSUMERS_WAIT_FOR_MESSAGES:+--consumers-wait-for-messages "$MAGE_CONSUMERS_WAIT_FOR_MESSAGES"} \
      ${MAGE_INIT_PARAMS:+--magento-init-params "$MAGE_INIT_PARAMS"}

    bin/magento setup:di:compile

    bin/magento setup:static-content:deploy -f

    echo "Finished Magento build."
else
  echo "Skipping Magento build. Set RUN_BUILD to 1 if you need the build to run."
fi

# Magento deploy

if [ -n "$RUN_DEPLOY" ] && [ "$RUN_DEPLOY" -ne 0 ]; then
    bin/magento setup:upgrade --keep-generated

    bin/magento cache:flush

    bin/magento indexer:reindex

    echo "Finished Magento deploy."
else
  echo "Skipping Magento build. Set RUN_DEPLOY to 1 if you need the build to run."
fi

echo "Running original entrypoint..."

exec /docker-entrypoint.sh "$@"
