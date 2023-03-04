# Just to remember some commands in order to utilize the Docker workflow

docker build --target dev . -t node_development
docker run -it -v ${PWD}:/work -p 3000:3000 /bin/sh

docker build --target dev . -t python
docker run -it -v ${PWD}:/work python sh
