#!/bin/bash
# fml with this cross-compiling hack

sed -e 's/^\(\s*\)\$\$\(\s*\)$/\1\%displaymath%\2/g' -e 's/\$\$/\$/g' -e 's/%displaymath%/$$/g' $1.md | \
    pandoc -o $1.pdf -f markdown-fancy_lists -V fontsize=12pt -V geometry=margin=1in --template=../../_pandoc.template.latex
