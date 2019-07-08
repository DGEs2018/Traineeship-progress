# 24.06.2019
* CSS reset vs normalizing
- Why should we CSS reset or normalize
    - Different browsers have  a set of default stylesdifferent property preferences, 
        - disadvantage
            - this might hinder users from implementing their own styles
    - but when the users themselves wish to use their own style and have control over the styles, either CSS reset or normalizing comes in handy
        - advantage
            - user are at liberty and have more control applying their own styles on their choice of selector
- Partials (in Sass)
    - Definition
        - partials are .scss files which contain snippets of CSS to be incorporated in other Sass files.
        - a case in point where these could come handy is for instance when applying styling targeting certain selectors
        - example - CSS reset properties 
        - Helps modularize and easier maintainance
    - Setting up partial Sass files
        - set up a folder called
        - create a file that starts only with _ ()
        - the underscore signals the Sass file that this should not be generated into a .css output file (like it normally does)
        - import this file in the scss file `@import "complete file path this time ignoring the _";`

# 25.06.2019
* Procedures for troubleshooting (when files are messed up with the CSS)
- Inspect page
    - hover over the elements and observe which sections / divs appear to be larger than the document size
    - think of possible fixes, and experiment in real-time with the targeted `property: value;` pairs
- Measure units that make a difference
    - using percentage instead of vh
        - difference is that vh scales and adapts to any device
        - whereas percentage sticks to width and height parameters given
        - 
- [Here's a blog on creating modular and scalable CSS](https://www.creativebloq.com/css3/create-modular-and-scalable-css-9134351)

- Best practices or approaches to organize CSS
[Methods to Organize CSS](https://css-tricks.com/methods-organize-css/) 

# 26.06.2019
* Last tids of bits learnt from the landing-page implementation
- CSS partials should be placed at the root folder, so it serves all of the tasks from now on
- block names referred when applying the BEM methodology shouldn't be generic but rather particularly reflecting the content of the elements inside.
- using classes is a good convention for styling - avoid IDs
- <br/> element is a bad practice to use it as a spacing
    - better practices are either margins or paddings
- when putting in links refering to fonts inside html, best practice is bundling them all inside one link
    - this minimizes the number of requests to the server to once
    - defining the font-size at the root-folder, specify the exact font size using `:root {font-size: 16px;}`