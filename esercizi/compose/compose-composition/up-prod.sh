#!/usr/bin/env bash
docker-compose -f docker-compose-db.yml -f docker-compose-services.yml -f docker-compose-gw.yml $1
