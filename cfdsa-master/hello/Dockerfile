FROM node:latest

ENV APP_PORT=3000 APP_DIR=/app

WORKDIR ${APP_DIR}

ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD public public

RUN npm install

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
	CMD curl -s -f http://localhost:${APP_PORT}/ready > /dev/null || exit 1

EXPOSE ${APP_PORT}

ENTRYPOINT [ "node", "main.js" ]
