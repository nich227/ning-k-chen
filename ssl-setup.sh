#!/bin/bash

# SSL Setup Script for Let's Encrypt
# Usage: ./ssl-setup.sh your-domain.com your-email@example.com

DOMAIN=$1
EMAIL=$2

if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
    echo "Usage: $0 <domain> <email>"
    echo "Example: $0 example.com admin@example.com"
    exit 1
fi

echo "Setting up SSL for domain: $DOMAIN with email: $EMAIL"

# Create directories
mkdir -p certbot/conf certbot/www

# Update docker-compose.yml with actual domain and email
sed -i "s/your-domain.com/$DOMAIN/g" docker-compose.yml
sed -i "s/your-email@example.com/$EMAIL/g" docker-compose.yml

# Update nginx.conf with actual domain
sed -i "s/your-domain.com/$DOMAIN/g" nginx.conf

# Stop existing containers
docker-compose down

# Start nginx without SSL first (for initial certificate request)
cp nginx.conf nginx.conf.backup
cat > nginx.conf << EOF
events {
    worker_connections 1024;
}

http {
    upstream nextjs {
        server nextjs:3000;
    }

    server {
        listen 80;
        server_name $DOMAIN;
        
        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }
        
        location / {
            proxy_pass http://nextjs;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
            proxy_cache_bypass \$http_upgrade;
        }
    }
}
EOF

# Start services
docker-compose up -d nextjs nginx

# Wait for nginx to be ready
sleep 10

# Request certificate
docker-compose run --rm certbot

# Restore full nginx config with SSL
mv nginx.conf.backup nginx.conf

# Restart nginx with SSL
docker-compose restart nginx

echo "SSL setup complete for $DOMAIN"
echo "Certificate will auto-renew. To manually renew: docker-compose run --rm certbot renew"
