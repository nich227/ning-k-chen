# Ning K Chen - Docker HTTPS Production Deployment

This setup provides a production-ready NextJS application with HTTPS support using Docker and Nginx.

## Quick Start

1. **Initial Setup** (run once):
   ```bash
   ./setup.sh
   ```
   This will:
   - Generate self-signed SSL certificates
   - Build the Docker containers
   - Start the services

2. **Access the Application**:
   - HTTPS: https://localhost (port 443)
   - HTTP requests are automatically redirected to HTTPS

## Management Commands

Use the `manage.sh` script for easy service management:

```bash
# Start services
./manage.sh start

# Stop services
./manage.sh stop

# Restart services
./manage.sh restart

# Rebuild and restart (after code changes)
./manage.sh rebuild

# View logs
./manage.sh logs

# Check status
./manage.sh status
```

## Architecture

- **NextJS App**: Runs in a Node.js 20 Alpine container
- **Nginx**: Handles HTTPS termination and reverse proxy
- **SSL**: Self-signed certificates (replace with real certificates for production)

## Files

- `Dockerfile`: Multi-stage build for NextJS app
- `docker-compose.yml`: Service orchestration
- `nginx.conf`: Nginx configuration with HTTPS
- `setup.sh`: Initial setup script
- `manage.sh`: Service management script
- `ssl/`: SSL certificates directory

## Production Notes

For production deployment:
1. Replace self-signed certificates with real SSL certificates
2. Update `nginx.conf` with your domain name
3. Configure firewall rules for ports 80 and 443
4. Consider using Docker secrets for sensitive data

## Troubleshooting

- Check service status: `./manage.sh status`
- View logs: `./manage.sh logs`
- Rebuild after changes: `./manage.sh rebuild`
