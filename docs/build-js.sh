#!/usr/bin/env bash
shopt -s globstar

rm assets/*.js assets/*.css

(
cd ..
echo Compiling Svelte code...
npm i
npm run build
echo Compiling as Userscript...
node userscript_compile.cjs
cp -r dist/* docs/
)

echo Done
