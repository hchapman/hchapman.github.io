gpp -H \
    chapman_369_f17a_syllabus.pandoc.md | \
    pandoc -o chapman_369_f17a_syllabus.pdf \
           --filter pandoc-include \
           -V links-as-notes=true \
           -V geometry=margin=1in
