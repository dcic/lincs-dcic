FROM php:7.0-cli

RUN apt-get update && \
    apt-get install -y nodejs && \
    apt-get install -y npm

COPY . /usr/src/lincs-dcic
WORKDIR /usr/src/lincs-dcic

RUN npm install -g bower
RUN bower install

EXPOSE 8000

CMD [ "php", "-S", "localhost:8000" ]
