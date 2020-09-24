#!/bin/bash

for pkg in **/package.json; do 
    jq ".dependencies.\"@roomservice/browser\" = \"$1\""  <<< $(cat "$pkg") > $pkg;
    cd "./$(dirname $pkg)";
    yarn;
    cd ..;
done;


