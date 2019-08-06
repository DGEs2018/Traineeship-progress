# 29.07.2019
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
 ### White-space
 - Definition 
 > Whitespace is a set of characters used to show horizontal or vertical spaces between other characters. They are often used to separate tokens in HTML, CSS, JavaScript, and other computer languages.
 - [Reference on MDN](https://developer.mozilla.org/en-US/docs/Glossary/whitespace)

    - the CSS property `white-space` dictates how white space inside an element is handled
    ```css
        white-space: normal;
        white-space: nowrap;
        white-space: pre;
        white-space: pre-wrap;
        white-space: pre-line;
    ```
 - Don't try and entirely replicate the given design from Figma, take care of the outermost dimensions of the containers
 - And then work your way in, that way, you'd avoid using many margins and paddings unless you need to push or separate 
 - Having the dimensions set once, it's often an idea trick to set the width and height of the contents inside to 100% (instead of try to be precise)
 - Max-width would make for a better readability of a block of text such as paragraphs, keeping a constant width regardless of the width of the device
 - Let sometimes the browser take over its responsibility automatically  

# 31.07.2019
### CSS pseudo-class
- A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected elements. Examples include :
    - [To read more](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
    -:hover - meaning to apply some effect when hovering with the mouse on the selected element, it could be an icon, a button, or a paragraph or anything....
    -: 
    - This enables the user to not only in relation to the content of the document tree, but also in relation to tracking the history of events. 
    - A good example is a clickable link where it shows different status 
        - :visited (purple color, after the link has already been clicked)
        - :checked ()

### Node package manager (npm)
#### How to use npm
- To be able to use node package manager first we need to have node installed
- [For that we need to go to this link](https://nodejs.org/en/download/)
- `npm install` then follow the instructions on the documentation ` @glidejs/glidejs`
- The package should then be visible in the `node_modules` folder under the directory where npm is run
- Also the dependency becomees registered within the `package.json` file
- To be able to implement the feature the package has, read up the documentation

# 02.08.2019
### Proxy

(a way to fake, hence one of the possible ways to trick iframe to function, when the X-FRAME-OPTIONS under http response header for a web page - is set to  SAMEORIGIN, meaning disabled and page)
### Use semantically meaningful elements whenever possible
-  Most commonly used ones are 
 ```html
     <aside></aside> 
     <section></section> 
     <header> </header>
     <footer></footer>
     <nav></nav>
```

 ### Possible reasons why using semantically meaningful elements is preferred and advised
 - easier readability for developers collaborating
 - facilitated accessibility
 - search engine optimisation (SEO)
    - certain tags (such as these semantically meaningful ones) are better indexed on search engines



