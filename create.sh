#!/bin/bash

if [[ -z "$1" ]]; then
    echo ""
    echo "Usage: sh ./script <example>"
    echo ""
    exit 1
fi

git clone \
  --depth 1 \
  --filter=blob:none \
  --no-checkout \
  https://github.com/getroomservice/examples.git \
  tmp_examples ;

cd tmp_examples;

if git checkout master -- $1; then
  cd ..;
  mv tmp_examples/$1 $1;
  rm -rf tmp_examples;
else 
 echo ""
 echo "  🚨 '$1' is not an example! 🚨"
 echo ""
 rm -rf tmp_examples;
 exit 1;
fi
