#29.06.2019
### Issues I stumbled up on and learned from
- a paragraph wouldn't appear when given class name, or should the class name have followed BEM convention ?
- setting height / width to 100% in css, once a certain dimension is given saves so much time using

# 30.07.2019
- Modules in CSS 
  - In development the term 'module' often describes an encapsulated building block / comprising the larger program
  - In the context of CSS describes a consistent approach for creating CSS
  - Components, objects or web parts
    - CSS modules are built based on a set of guidelines to create a collection of reusable bilding 
    - Examples 
      - .nav, .search, .logo, .breadcrumbs, .title, .button, .icon, .media-object, .list, .frame, .slider, .card, etc

      - should be independent & not be coupled and   
      .content-area .btn {
   //style rules
          } 
 ## Best practice lessons which would save one a pile of time
 - Read up on white-space: no wrap; what it does, 
 - Don't try and entirely replicate the given design from Figma, take care of the outermost dimensions of the containers
 - And then work your way in, that way, you'd avoid using many margins and paddings unless you need to push or separate 
 - Max-width would make for a better readability of a block of text such as paragraphs, keeping a constant width regardless of the width of the device
 - Let sometimes the browser take over its responsibility automatically  