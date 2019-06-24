# 13.06.2019
* Git workflow and creating .gitignore file
- Starting with the pole for all project
    - `git clone <given-repository-link>`
    - `git clone` does already `git init` so it should be skipped
    - add .gitignore file and make the list of files to be ignored (`DS_Store`, `node_modules`)
        - if `vim .gitignore` command is used to open the file, then
         `esc` `:wq` to get off the file, write (save) and quit - equivalent to save and close.
        - easier to use should be `nano .gitignore` command, where the list of commands is mentioned at the bottom of the file
- SASS
    - As cascading stylesheets have grown, and become more complex and hard to maintain - preprocessed sass comes in handier to use.
    _sass_
    ```$my-example-sass-font: monospace, verdana;
       $my-example-color: #555; 
       body {
           font: 75% $my-example-sass-font;
           color: $my-example-color;
       }
    ```
    _css_
    ```body: 75% monospace, verdana;
       color: #555
    ```
    - Nesting
        - Normal CSS doesn't allow a nested hierarchy
        - Sass enables the nesting of CSS selectors enhancing readability
        - Avoids  repetition (i.e. in favour of DRY - making use of variables, mixins, import etc.)
# 14.06.2019
- Should the `node_modules` folder be committed or not ?
    - pros for ignoring `node_modules` (storing them under `node_modules`)
        - adding a new package brings `package.json` & `package-lock.json`
        - while updating however only `package-lock.json` is stored
        - avoids accumulating extra hundreds of MBs of dependencies within the repo. This among other things significantly slows down when switching branchces and checking out codes
        - merge conflicts involving dependency's code might as well require so much time
        - a PR or merge when changing the dependencies involves a lengthy process and at some point might not show diff to its fullest
        - native node modules need to be recompiled when deploying to a platform different from that of the development machine. This could require calling `npm rebuild` that though causes the server to become out of sync
    - cons against ignoring `node_modules` (storing them under `node_modules`)
        - npm package might be removed by its author from the npm registry
        - a case in point is [left-pad incident](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)] in 2016 : such a case might restrict access to a particular functionality.
        - npm (like many others that become deprecated or even updated) is not guaranteed to live at all times, so committing along could save future trouble in such a case
            - mitigation :- everytime you use a package, create fork on GitHub and while updating regularly (automation option also available)
            - but that's impractical due to more nested dependencies
            - offers a possibility of having a private repository server where all dependencies could be hosted
- [Here the source blog](https://flaviocopes.com/should-commit-node-modules-git/)