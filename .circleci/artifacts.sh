#!/bin/sh
npx lerna exec -- mkdir -p $CIRCLE_TEST_ARTIFACTS/$(cat package.json \
| grep name \
| head -1 \
| awk -F: '{ print $2 }' \
| sed 's/[",]//g' \
| tr -d '[[:space:]]');
npx lerna exec -- cp test-cover.html $CIRCLE_TEST_ARTIFACTS/$(cat package.json \
| grep name \
| head -1 \
| awk -F: '{ print $2 }' \
| sed 's/[",]//g' \
| tr -d '[[:space:]]');
npx lerna exec -- cp analyze.txt $CIRCLE_TEST_ARTIFACTS/$(cat package.json \
| grep name \
| head -1 \
| awk -F: '{ print $2 }' \
| sed 's/[",]//g' \
| tr -d '[[:space:]]')
