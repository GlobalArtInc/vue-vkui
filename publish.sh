#!/bin/bash

# build it
yarn build

# remove the old stuff
rm -rf ~/vue-vkui-npm

# 
mkdir ~/vue-vkui-npm

# copy the important stuff
cp -r src ~/vue-vkui-npm
cp -r dist ~/vue-vkui-npm

# copy over package spec, license and readme
cp package.json ~/vue-vkui-npm
cp LICENSE ~/vue-vkui-npm
cp README.md ~/vue-vkui-npm

# remove the example component
rm ~/vue-vkui-npm/src/App.vue
rm -rf ~/vue-vkui-npm/src/pages

# remove the generated demo.html
rm ~/vue-vkui-npm/dist/demo.html

exit 0
