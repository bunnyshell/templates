#syntax=docker/dockerfile:1.4

FROM php:8.2-fpm-alpine AS base

# create user docker
RUN addgroup -g 1000 docker && \
    adduser -u 1000 -G docker -h /home/docker -s /bin/sh -D docker

# add usefull tools
RUN apk add --no-cache \
        nano \
		git

# install PHP extensions
COPY --from=mlocati/php-extension-installer:latest /usr/bin/install-php-extensions /usr/local/bin/

RUN set -eux; \
    install-php-extensions \
        apcu \
    	intl \
		opcache \
        pdo_mysql

# install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
ENV COMPOSER_HOME=/tmp/composer

# copy config files
COPY .docker/php/php-customize.ini ${PHP_INI_DIR}/conf.d/docker-php-customize.ini
COPY .docker/php/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["/usr/local/bin/docker-entrypoint"]
CMD ["php-fpm"]

# default values for some environment variables we use in some config files
ENV PHP_MEMORY_LIMIT=2G
ENV PHP_OPCACHE_ENABLE=1
ENV PHP_OPCACHE_VALIDATE_TIMESTAMPS=1

# prepare folders for usage
RUN mkdir /var/www/var && \
    chown -R docker:docker /var/www && \
    rm -rf /var/www/html

# setup workdir and user (next commands will run under this context, but also the running container will inherit this - if not overriden at runtime)
WORKDIR /var/www
USER docker

# - copy composer.json and composer lock (optimise image build - copy only these files and run install, if these change rarely we can reuse this image layer too)
COPY composer.json composer.lock symfony.lock ./

# Prod image
FROM base AS prod

# - composer install without scripts
ENV APP_ENV=prod
RUN composer install --optimize-autoloader --no-scripts --no-dev

# - copy the rest of the code (except the ones in .dockerignore) (optimise image build - we expect these to change everytime, so keep this as late as possible)
COPY --chown=docker:docker . .

# - run some build scripts
RUN composer run-script build

# Dev image
FROM base AS dev

USER root

RUN set -eux; \
	install-php-extensions xdebug

#COPY .docker/php/php-ext-xdebug.ini ${PHP_INI_DIR}/conf.d/php-ext-xdebug.ini

RUN mv "$PHP_INI_DIR/php.ini" "$PHP_INI_DIR/php.ini-production"; \
	mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

ENV APP_ENV=dev
ENV XDEBUG_MODE=off
ENV XDEBUG_START_WITH_REQUEST=trigger

VOLUME /var/www/var/

USER docker

# - composer install without scripts
ENV APP_ENV=dev
RUN composer install --optimize-autoloader --no-scripts

# - copy the rest of the code (except the ones in .dockerignore) (optimise image build - we expect these to change everytime, so keep this as late as possible)
COPY --chown=docker:docker . .
