GIT_COMMIT=$(shell git rev-parse HEAD)

build:
	npm install

lint:
	npm run lint

test: build
	npm run test

test-ci: pre test post

pre:
	curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
	chmod +x ./cc-test-reporter
	./cc-test-reporter before-build

post:
	CC_TEST_REPORTER_ID=0c4626a144c6fe4f3bcd9d05dbd5d8e38b811fa82d37cd245f16c5e4807523ae ./cc-test-reporter after-build --coverage-input-type lcov --debug --exit-code 0
