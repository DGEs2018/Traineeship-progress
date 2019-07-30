# 22.07.2019
## More git rebase, and git merge master (while on the branch)
- There are two possible ways to integrate changes from one branch into another 
    - rebase
    - merge

### git rebase
    - When diverging the main branch and made commits on two different branches
    - `git checkout branchname`
    - `git rebase master`
    - rebasing is chosen for its cleaner commit history, as it would make it appear as if all the change that's been made follows a linear track.
 - Merge conflict
    - 

 - `git add -A`, to add every change but not preferable (best would be to be specifically target individual files on which change has been made - TAKE THIS TO THE JOURNAL)
### merge
- the easiest way to integrate branches to the master
- 

# 23.07.2019
## Rebase and/or git merge master from the separate branch
    - 

## Destructuring and the spread operator in javascript

### the spread operator
    - the spread of operator is one of the new utilities introduced with ES6
    - the spread operator allows an iterable to spread or expand inside a receiver
```javascript
    const toBeSpread = 'DAWIT'
    const individualChars = [...toBeSpread]; 
```
 would return `['D', 'A', 'W', 'I', 'T']`
 
### destructuring
    - making a copy of individual items from an object or an array and assigning them to a variable
    - 




[Refer this link for the complete blog](https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831)

# 24.07.2019
## Another way of importing Google Map APISs with neither an API key nor a javascript function
- Google maps could be imported with using user's generated API key
- These could nonetheless have requesting quotat could be limiting unless one has a paid annual subscription. The other ways to be able to display
### Using <iframe> tag
#### one way 
- go to [Google Map Search](https://www.google.com/maps/@47.3579502,8.5256369,15z) 
- search for the place of interest
- click the share button and go to the 'Embed a map' tab
- copy using the *Copy HTML* and embed it within body of the html file.
#### another way
- go to [Google Map Search](https://www.google.com/maps/@47.3579502,8.5256369,15z) 
- under the sandwich menu, next to the _Search Google Maps_ place holder
- go to your places, in there under the _maps_ tab (at the rightmost), find and the _create map_
- clicking at the share button, you'll be prompted with a small window, _map name_ and _description_ fields could be filled
- again there pops up another dialogue window
- click on the _Change_ tab, select _*On* - Public on the web_ (by default _*Off* - Specific people_ is selected), press *save*
- under the _vertical triple dots (more options icon/overflow menu)_, clicking _Embed on my site_ will display a small window containing the <iframe> link
- finally paste this similarly in the div under the body of the html file

# 25.07.2019
## iframes
### Definition
- the HTML inline frame element represents a nested browsing context. 
    - browsing context is the environment in which a browser displays a document (normally tab, but possibly also a window or a frame within a page)
- `<iframe>`elements can be used to embed an inline frame containing document within the current document.
- Especially useful, when you reusability is needed
- nested browsing contexts can be navigated by these window object property
    - window.top (top-level browsing context)
    - window.parent (parent browsing context)
    - window.frameElement (browsing context container, but null if there is none)
    [HTML Inline Frame element(<iframe>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#Example2)
### Customizing list styles bullet point styles of the list items    
- How to [More about list style](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style)
    - List style is a CSS property is a shorthand to set list style properties
        - `list-style-type`
        - `list-style-image`
        - `list-style-position`
    - This property is applied to list items, i.e elements with `display: list-item;`
    - By default including `<li>`
    - As the property is inherited, it can be set on a parent element, in which case it's either `<ol>` or `<ul>` and apply the same list styling to the contained items.
 - `list-stle-type: disc, square, dash...`
