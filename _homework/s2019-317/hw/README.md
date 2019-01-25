Auto Jekyll/PDF Homework Generation
===================================

Right now I'm writing kramdown for Jekyll, and compiling PDFs with Pandoc. This
produces a few fun problems with things like ordered lists and display math. The
mantra here is "write Jekyll, fix Pandoc", as pandoc PDFs are already generated
by script rather than Github upload.

Homework markdown posted here has the following caveats, enumerated below. This
list should continue to grow as homework gets more exciting:

+ Ordered lists always go "1. -> a. -> i.". This is implemented in a CSS style
  for homework content. They are still denoted with pure markdown 1., 2., etc.
  (no Pandoc fancy lists)
  
+ Display math (math typically typeset between \[\]) delimiters MUST be alone on
  a line, with only whitespace on either end. Inline math, on the other hand,
  MUST have some non-whitespace characters.

