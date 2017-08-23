#!/bin/bash
pandoc -o $1.pdf -f markdown-fancy_lists -V fontsize=12pt -V geometry=margin=1in --template=../../_pandoc.template.latex $1.md
