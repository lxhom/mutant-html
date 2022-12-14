#!/usr/bin/env bash
shopt -s globstar

rm -rf assets build;

(
cd ..
echo Compiling Svelte code...
npm i
npm run build
echo Compiling as Userscript...
node userscript_compile.cjs
cp -r dist/* docs/
)

mkdir build; (

# shellcheck disable=SC2164
cd build

version="2020.04"
for res in 32 128; do
  echo Downloading Mutant Standard ${version} in ${res}x
  wget https://mutant.tech/dl/${version}/mtnt_${version}_short_webp${res}.zip
  echo Unzipping...
  unzip -q mtnt_${version}_short_webp${res}.zip
  mkdir ../assets/webp_${res}/
  echo Restructuring...
  mv mtnt_${version}_short_webp${res}/**/*.webp ../assets/webp_${res}/
done;

# fuck i broke compat already. eh, not too bad, its a couple of lines
echo Downloading Mutant Standard ${version} in SVG
# https://mutant.tech/dl/2020.04/mtnt_2020.04_short_svg.zip
wget https://mutant.tech/dl/${version}/mtnt_${version}_short_svg.zip
echo Unzipping...
unzip -q mtnt_${version}_short_svg.zip
mkdir ../assets/svg/
echo Restructuring...
mv mtnt_${version}_short_svg/**/*.svg ../assets/svg/

echo Downloading Mutant Standard ${version} metadata...
wget https://mutant.tech/dl/${version}/mtnt_${version}_data.json
echo Compresing metadata...
node -p "fs.writeFileSync('../assets/data.json',JSON.stringify(JSON.parse(fs.readFileSync('mtnt_${version}_data.json'))))"

); rm -rf build

echo Done
