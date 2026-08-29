.PHONY: all install build test benchmark start clean docker-build docker-run

all: install build test

install:
	npm install

build:
	npm run build

test:
	npm run test

benchmark:
	npm run benchmark

start:
	npm run start

clean:
	rm -rf dist build coverage

docker-build:
	docker build -t aetheria-game-engine:latest .

docker-run:
	docker run -p 3000:3000 aetheria-game-engine:latest
