# 08.07.2019
## Commiting best practices
    - commit early commit often
    - commit changes separately, individual commit messages targetting each change
    - this should make the track easier to follow
## Why CSS styling with IDs needs to be avoided and classes should be used for that
1. Class specificity is lower than ID specificity - placing "!Important" is the only one with higher priority to ID. As keeping files maintainable is crucial in development, overriding should be easy enough, hence preference of classes.
2. A class name can be reused while IDs can only be used max once in an HTML file
3. More conventions that IDs are attached to the class attributes, so it’s ideal to keep this consistency to help other easily understand
4. An element can have several classes
    1. Many classes could be added to an HTML element
    In this class naming convention, `<div class="text-bold banner-text js-banner-text"></div>`, classes for styling and a class for a javascript hook are grouped together.
    Although IDs could as well 
[The original link for the blog] (https://dev.to/claireparkerjones/reasons-not-to-use-ids-in-css-4ni4)

# 09.07.2019
## Ways to build accordions(aka collapsibles)
- To avoid browser inconsistencies / provide with cross-browser consistency there are two common approaches implemented
        - Reset CSS
            - is a way to define the style to tailored to user's needs
            - discards the browsers' default styling
        - Normalize.css (unlike Reset CSS, doesn't unstyle the browser's default styling)
            - preserves some useful defaults
            - after comparing the W3C standards of the styles - normalize.css will fix the browser style which is inconsistent
            - applies basic styles before you've even written a single style
            - fixes some common bugs
            - default for h1 to h6 HTML tags
                - bigger font-size
                - margin on the top & bottom
- An example of <h1> default styles in chrome
```h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}```

- one real-life example 
'*Chrome, Safari and Firefox* render <h1> tags that are inside an <article>/ <aside>/ <nav>/ <section> tag with a font-size that is smaller than an independent <h1> tag, and with a different margin size.'

The Internet Explorer and EDGE browsers apply different style. Although it would make sense that the styles in `normalize.css`. But it isn't possible to target IE / EDGE.

For <h1> styles to act the same for all browsers, `normalize.css` defines the  IE/EDGE styles to be applied by all browsers.

```
/* 
  Correct the font size and margin on `h1` elements within `section`  and `article` contexts in Chrome, Firefox, and Safari.
*/
 h1 {  font-size: 2em;  margin: 0.67em 0;} 
 ```


 ```
 <div class="wrap-collabsible">
    <input id="collapsible" class="toggle" type="checkbox">
    <label for="collapsible" class="lbl-toggle">More Info</label>
   <div class="collapsible-content">
    <div class="content-inner">
      <p>
        QUnit is by calling one of the object that are embedded in JavaScript, and faster JavaScript program could also used with
        its elegant, well documented, and functional programming using JS, HTML pages Modernizr is a popular browsers without
        plug-ins. Test-Driven Development.
      </p>
    </div>
  </div>
</div>
```
Ways with the
<summary> and <details> HTML tags
[Accordion with HTML Elements <details> and <summary>] (https://www.imarketinx.de/artikel/html-accordion-details-and-summary.html)
