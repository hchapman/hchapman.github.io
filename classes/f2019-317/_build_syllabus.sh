gpp -U "<#" ">" "\B" "|" ">" "<" ">" "#" "~~" \
    _syllabus.pandoc.md | \
    pandoc -o chapman_317_f19_syllabus.pdf \
           -V links-as-notes=true \
           -V geometry=margin=1in
