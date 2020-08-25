install:
	npm install

build:
	rm -rf dist
	NODE_ENV=production
	npx webpack --config webpack.config.js

lint:
	npx eslint 
	