# 15.07.2019
## DOM Manipulation
- When accessing the child elements of a target parent element. The way directly target the desired target is
 - parentNode or parentElement (the most commonly used one nonetheless parentNode) 
 - Why I got stuck on single functionality for quite a long time
    - clear structuring of the HTML document flow from the start is vital to facilitate 
    - Revising my old JS block of code
        ```javascript
        const accordions = document.getElementsByClassName('js-accordion');
        ```
        - as more than one accordions are stored in the variable `accordions` for loop comes in handy to iterate through each of those (`forEach` would equally be valid)
        - we are trying to attach the `.addEventListener` method which on click should return a function named `toggleClass` 
        - called it `toggleClass` in my `.js` file
        - `this.classList.toggle('active')`
        - from here on for the content contained within the accordion, we will define a another `addEventListener`

        - Apply Refactoring (based on the DRY convention)
        - ClassList uses the following functions to change or even just access classes on an element
         - the keyword `contains`, checks whether the element has a class
         - `add` - adds a class to the element
         - `remove` - removes a class
         - `replace` - replaces an old value by a new one
         - `toggle` - adds a class if not present, or removes if it already exists

# 16.07.2019
## Project problem
### Understanding the DOM manipulation
- Recap of what the function toggleClass inside the classes.js (the upcoming-classes page of the frontend trainee design implementation) achieves
```javascript
function toggleClass(htmlElement) {
        const elementClassList = htmlElement.classList;
        const buttonLabel = htmlElement.nextElementSibling;
        // const accordionParent = htmlElement.parentNode; // is the parent each of the togglingIcons
        if (elementClassList.contains('glyphicon-plus')) {
            elementClassList.toggle('glyphicon-minus');
            buttonLabel.innerText = 'Less';
        } else if (elementClassList.contains('glyphicon-minus')) {
            elementClassList.toggle('glyphicon-plus');
            buttonLabel.innerText = 'Tell me more';
        }
```
- it takes a parameter (in this case noted as *htmlElement*)
    - this parameter is an array of accordions (above togglingIcons[i])
- the _htmlElement.classList_ is then stored in a variable called 'elementClassList'
- the next sibling for the htmlElement parameter(*htmlElement.classList*) is then defined and saved as *buttonLabel* 
- then follows a conditional statement where the condition is if elementClasslist contains the class (glyphicon-plus) to toggle to 'glyphicon-minus' and vice versa for (glyphicon-minus)

#### Issue
- while we got the button to toggle between the plus and minus signs, the innerText of the variable _buttonLabel_ won't toggle back after the first click
- after toggled to *minus-icon* on the browser inspector shows that the span holding the glyphicons contains both `glyph.glyphicon-plus.glyphicon-minus`
- 
#### Workaround attempted
- applying `.remove` and `.add` method one after the other
- `.replace(old value, new value)`
- storing the queried containers of specific  after by
#### Solution
- having had the class namee _plus-icon_ selected(*bold* in the code), `const togglingIcons = document.getElementsByClassName('glyphicon *glyphicon-plus*');` the conditional statement wouldn't get past the first conditional statement indicated below
   
    ```javascript
    if (elementClassList.contains('glyphicon-plus')) {
        elementClassList.toggle('glyphicon-minus');
        buttonLabel.innerText = 'Less';
    }
    ```
  -Today's latest codes during one-on-one with João
  ```javascript
    for (let i = 0; i < togglingIcons.length; i += 1) {
        togglingIcons[i].addEventListener('click', function() {
            toggleClass(togglingIcons[i]);
        });
        }
        // the htmlElement is represents each of the togglingIcons, not all of them (not the list)
        function toggleClass(htmlElement) {
        const elementClassList = htmlElement.classList;
        const buttonLabel = htmlElement.nextElementSibling;
        // const accordionParent = htmlElement.parentNode; // is the parent each of the togglingIcons
        if (elementClassList.contains('glyphicon-plus')) {
            elementClassList.toggle('glyphicon-minus');
            buttonLabel.innerText = 'Less';
        } else if (elementClassList.contains('glyphicon-minus')) {
            elementClassList.toggle('glyphicon-plus');
            buttonLabel.innerText = 'Tell me more';
        }
        }
      const togglingIcons = document.getElementsByClassName('glyphicon glyphicon-plus');
    ```

# 17.07.2019
## Issue
  - logically wrongly coded
  - atttaching separate addEventListeners to two elements nested within one another
    - as a consequence when this event is triggered, then two functionalities in different target element would be affected
### Workaround / solution
- Rename the wrapper element firstly 
- Then find every of those target element (using document.getElementsByClassName / document.querySelectorAll or other properties.....)
- As we now have a few of them them, we need to iterate through each of them 
- Out of the many ways to go over an array is `for loop`.
- For each of these let's attach an `addEventListener` which on click should trigger two separate functions defined below
- To tell which function to trigger when clicked, apply the if conditions
#### Immediately invoked function expression (IIFE)
  - is a function that calls itself (literally invokes itself after being created, without a need to use console.log)
  - comes in handy when you need a function expression instead of the normal function statement
  - as javascript assumes that anything under a parenthesis is an expression, so does it equally assume when the IIFE function is inside. 
  - This is one of the better-practices than having to lie in the global scope
# 18.07.2019
## Google Maps API
### General API definition
  - Definition
      - the acronym API stands for application programming interface
  - What it does ?
    - it enables communication between two applications
    - while allowing your product or service communicated with other products / services, with no need to know how they are implemented, facilates development process

#### Incorporating Google Maps to web pages
  - After declaring the HTML file as <!DOCTYPE html>
  - Create `<div>`to hold the google map
  - Write a JS function that creates a map in the previously created <div> element
  - Load the Maps JS API using a script tag

    - Loading the map
 ```javascript 
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>
 ```
  - the url inside the script tag above, is where the javascript file that loads everything within the map using the Maps Javascript API.
  - the async attribute aids the browser to load the rest of website while the map also loads 
  - `defer` causes the browser to wait to execute the script until the parsing is done
  >> `async`  will only make the browser wait until the script download is complete, which means it may run the script either before parsing is complete or afterward, depending on when download finishes (and remember it could come from cache).
  >> `defer` scripts will be run in the order they appear in the HTML, once parsing is complete.
  >> `async` scripts may be run in any order, regardless of the order in which they appear in the HTML.
 - [Why use defer with Google Maps Javascript](https://stackoverflow.com/questions/36909380/why-use-defer-with-google-maps-javascript)
 - [async vs defer attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
 - ![async vs defer attributes](async-vs-defer-attributes.png)
### Google map library
- Bootstrap [URL](https://maps.googleapis.com/maps/api/js) links such as these are linked inside the HTML for the page
- This request then loads all of the main JS objects and symbols to be usedin the Maps Javascript API
- Breaking up supplmental components into libraries allow for a quicker and parsing, hence loading.
# 19.07.2019
## Lessons from setting up scss files
### A few of the possible reasons why styling on scss wouldn't show on page
  - over-indentation of CSS property value codes 
  - incorrect path for / missing (from sass compiled) generated css output
  - as for the background-image
  - shorthand background-image: (url) *no-repeat* *cover*; could prevent background images from showing
    - preferably write the extended format
### Using flexbox
  - Visualise boxes all over in the page
  - Distinguish between parent(container / wrapper) and child items 
  - Parent(container / wrapper) where you should apply the `display: flex;` and the immediate descendant/child items
  - Should it be needed, apply flexbox model within the child items themselves (carry on to imagine parent-child item relationship) 
  - Then adjust, among other `property: value;` pairs, manipulating with `justify-content: flex-start flex space-around, space-between` as well `margin: ` & `padding`