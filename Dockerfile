FROM php:7.0-cli

RUN apt-get update && \
    apt-get install -y git && \
    apt-get install -y nodejs && \
    apt-get install -y npm

RUN ln -s /usr/bin/nodejs /usr/bin/node

COPY . /usr/src/
WORKDIR /usr/src/

RUN npm install -g bower
RUN bower install --allow-root

EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000"]
