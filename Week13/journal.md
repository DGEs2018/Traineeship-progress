#24.06.2019
* CSS reset vs normalizing
- Why should we CSS reset or normalize
    - Different browsers have  a set of default stylesdifferent property preferences, 
        - Disadvantage
            - this might hinder users from implementing their own styles
    - but when the users themselves wish to use their own style and have control over the styles, either CSS reset or normalizing comes in handy
        - Advantage
            - user are at liberty and have more control applying their own styles on their choice of selectors


- Partials (in Sass)
    - Definition
        - Partials are .scss files which contain snippets of CSS to be incorporated in other Sass files.
        - A case in point where these could come handy is for instance when applying styling targeting certain selectors
        - Example - CSS reset properties 
        - Helps modularize and easier maintainance
    - Setting up partial Sass files
        - set up a folder called
        - create a file that starts only with _ ()
        - the underscore signals the Sass file that this should not be generated into a .css output file (like it normally does)
        - import this file in the scss file `@import "complete file path this time ignoring the _";`
        