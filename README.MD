Build and run:
yarn install
yarn run webpack
Open application.
Run unit tests in order to run and test the flattener.
(E.g. in Webstorm; Select test file; Ctrl+alt+F5)


Internal notes - to build:
in bash (as some peculiar error on my machine)
export NODE_OPTIONS=--openssl-legacy-provider; yarn run webpack --watch