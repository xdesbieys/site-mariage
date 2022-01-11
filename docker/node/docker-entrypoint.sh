#!/bin/sh
set -e

if [ "$1" = 'node' ]; then
    if [ "$APP_ENV" != 'prod' ]; then
        yarn install
    fi
fi

"$@"
