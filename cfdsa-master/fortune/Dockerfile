FROM node:latest
## docker build
ENV APP_PORT=5000 APP_DIR=/fortune

# create directory and change directory.
WORKDIR ${APP_DIR}

#copy files to working directory
ADD main.js .
ADD package.json .

#copy directory
ADD public public
ADD views views

#install libraries from package.json
RUN npm install

##docker run

HEALTHCHECK --interval=30s --timeout=30s --retries=3 \ 
    CMD curl -s -f http://localhost:${APP_PORT}/health || exit 1

EXPOSE ${APP_PORT}

#how should the image be executed
ENTRYPOINT [ "node", "main.js" ]

#options
#CMD [ "3000" ]
