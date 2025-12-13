#!/bin/bash

case "$1" in
    start)
        echo "Starting ning-k-chen services..."
        docker-compose up -d
        ;;
    stop)
        echo "Stopping ning-k-chen services..."
        docker-compose down
        ;;
    restart)
        echo "Restarting ning-k-chen services..."
        docker-compose down
        docker-compose up -d
        ;;
    rebuild)
        echo "Rebuilding and restarting ning-k-chen services..."
        docker-compose down
        docker-compose up --build -d
        ;;
    logs)
        docker-compose logs -f
        ;;
    status)
        docker-compose ps
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|rebuild|logs|status}"
        exit 1
        ;;
esac
