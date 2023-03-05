#syntax=docker/dockerfile:1.4

FROM php:8.2-fpm-alpine AS base

ARG PHP_MEMORY_LIMIT=1G
ARG PHP_OPCACHE_ENABLE=0
ARG PHP_OPCACHE_VALIDATE_TIMESTAMPS=0
ARG XDEBUG_MODE=off
ARG XDEBUG_START_WITH_REQUEST=no
ARG XDEBUG_IDE_KEY=''

ENV PHP_MEMORY_LIMIT=$PHP_MEMORY_LIMIT
ENV PHP_OPCACHE_ENABLE=$PHP_OPCACHE_ENABLE
ENV PHP_OPCACHE_VALIDATE_TIMESTAMPS=$PHP_OPCACHE_VALIDATE_TIMESTAMPS
ENV XDEBUG_MODE=$XDEBUG_MODE
ENV XDEBUG_START_WITH_REQUEST=$XDEBUG_START_WITH_REQUEST
ENV XDEBUG_IDE_KEY=$XDEBUG_IDE_KEY

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

# Needed for VS Code Remote Development
RUN apk add musl libgcc libstdc++ git curl wget bash ca-certificates gcompat openssh-client

RUN set -eux; \
	install-php-extensions xdebug

COPY .docker/php/php-ext-xdebug.ini ${PHP_INI_DIR}/conf.d/php-ext-xdebug.ini

RUN mv "$PHP_INI_DIR/php.ini" "$PHP_INI_DIR/php.ini-production"; \
	mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

VOLUME /var/www/var/

USER docker

# - composer install without scripts
ENV APP_ENV=dev
RUN composer install --optimize-autoloader --no-scripts

# - copy the rest of the code (except the ones in .dockerignore) (optimise image build - we expect these to change everytime, so keep this as late as possible)
COPY --chown=docker:docker . .
