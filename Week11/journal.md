# 13.06.2019
* Git workflow and creating .gitignore file
- Starting with the pole for all project
    - git-clone repository link
    - add .gitignore file and make the list of files to be ignored (`DS_Store`, `node_modules`)
        - if `vim .gitignore` command is used to open the file, then
         `esc` `:wq` to get off the file, write (save) and quit - equivalent to save and close.
        - easier to use should be `nano .gitignore` command, where the list of commands is mentioned at the bottom of the file
- SASS
    - As cascading stylesheets grown, and become more complex and hard to maintain - preprocessed sass comes in handier to use.
    ```$my-example-sass-font: monospace, verdana;
       $my-example-color: #555; 
       body {
           font: 75% $my-example-sass-font;
           color: $my-example-color;
       }
    ```
