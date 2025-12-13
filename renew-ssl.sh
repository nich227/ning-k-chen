#!/bin/bash

cd /home/kevster/Servers/ning-k-chen

# Renew certificate
docker run --rm -v $(pwd)/certbot/conf:/etc/letsencrypt -v $(pwd)/certbot/www:/var/www/certbot certbot/certbot renew --quiet

# Reload nginx if renewal was successful
if [ $? -eq 0 ]; then
    docker-compose exec nginx nginx -s reload
    echo "$(date): SSL certificate renewed and nginx reloaded" >> /var/log/letsencrypt-renewal.log
fi
