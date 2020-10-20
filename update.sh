#!/bin/bash

for pkg in **/package.json; do 
    if  [[ $(cat "$pkg" | jq ".dependencies.\"@roomservice/$1\"") == "null" ]]; then
      continue
    fi

    jq ".dependencies.\"@roomservice/$1\" = \"$2\""  <<< $(cat "$pkg") > $pkg;
    cd "./$(dirname $pkg)";
    yarn;
    cd ..;
done;


