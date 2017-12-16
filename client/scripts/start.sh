#!/bin/bash

docker-compose -f docker-compose.yml \
run --service-ports --rm --name=app server
