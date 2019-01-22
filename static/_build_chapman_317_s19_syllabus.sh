gpp -U "<#" ">" "\B" "|" ">" "<" ">" "#" "~~" \
    chapman_317_s19_syllabus.pandoc.md | \
    pandoc -o chapman_317_s19_syllabus.pdf \
           -V links-as-notes=true \
           -V geometry=margin=1in
