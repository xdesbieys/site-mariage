ARG NODE_VERSION=14.9

# "node" stage
FROM node:${NODE_VERSION}-alpine AS node

WORKDIR /srv/app

COPY ./app .

RUN set -eux; \
    yarn install; \
    yarn build;

COPY docker/node/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
CMD ["node"]
