FROM php:7.0-cli

RUN apt-get update && \
    apt-get install -y git && \
    apt-get install -my wget gnupg && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash && \
    apt-get install -y nodejs



COPY . /usr/src/
WORKDIR /usr/src/

RUN npm install -g bower
RUN bower install --allow-root

EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "router.php"]
