# Ning K Chen Portfolio Website

A modern personal portfolio website built with Next.js 16, React 19, and Tailwind CSS. This is a server-side rendered application designed for showcasing professional work and personal projects.

## Project Overview

This is a Next.js-based portfolio website featuring:
- Modern React 19 with TypeScript
- Tailwind CSS for styling
- Docker containerization for deployment
- SSL/HTTPS support with Let's Encrypt
- Nginx reverse proxy configuration

## Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Production Deployment

### Docker Deployment

1. Build and start the containers:
```bash
docker-compose up -d
```

2. For SSL setup (first time):
```bash
./init-letsencrypt.sh
```

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `/app` - Next.js app directory with pages and components
- `/public` - Static assets
- `/ssl` - SSL certificates directory
- `docker-compose.yml` - Docker services configuration
- `nginx.conf` - Nginx configuration for reverse proxy
- `Dockerfile` - Container build instructions

## SSL Management

The project includes automated SSL certificate management:
- `init-letsencrypt.sh` - Initial SSL setup
- `renew-ssl.sh` - Certificate renewal
- `ssl-setup.sh` - SSL configuration helper

## Management Scripts

- `manage.sh` - General management utilities
- `setup.sh` - Initial project setup
