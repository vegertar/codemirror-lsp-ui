#!/bin/bash -e
# Credits to https://stackoverflow.com/a/60950355

TMP=.tsconfig-lint.json
cat >$TMP <<EOF
{
  "extends": "./tsconfig.json",
  "include": [
EOF
for file in "$@"; do
  echo "    \"$file\"," >> $TMP
done
cat >>$TMP <<EOF
    "unused"
  ]
}
EOF
tsc --project $TMP