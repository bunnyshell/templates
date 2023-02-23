#!/bin/sh

set -e

workdir=$(pwd);

# run warmup scripts (cache with new env variables)
if [ "${RUN_WARMUP:-true}" = "true" ]; then
  echo "running neo-warmup scripts ..."
  cd $workdir && composer run-script warmup;
else
  echo "RUN_WARMUP set to false, skip warmup scripts"
fi

# wait for DB to be ready
timeout 3m sh -c 'until bin/console dbal:run-sql "SELECT 1" > /dev/null 2>&1; do echo "Waiting for database connection..." && sleep 5; done'
if [ $? -ne 0 ]; then
  echo "timed out while waiting for database to be ready"
  exit 1
fi

# run pre-release scripts
if [ "${RUN_PRE_RELEASE:-true}" = "true" ]; then
  echo "running pre-release scripts ..."
	cd $workdir && composer run-script pre-release;
else
  echo "RUN_PRE_RELEASE set to false, skip pre-release scripts"
fi

# execute the CMD
exec /usr/local/bin/docker-php-entrypoint "$@"
