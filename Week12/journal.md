# 17.06.2019
* Setting up sass
- to run the server everytime change is made to both `package.json` & the `.scss` files `npm run sass | npm run dev` needs to run in the root terminal
- sass watch can be set to constantly note changes and reload the server automatically - this is done within the "scripts" section in the `package.json` file `"sass --watch pages/Landing/landing.scss:pages/Landing/landing.css"`. After the `sass --watch` `input path : output path` follows.
- CSS
    - <img></img> is NOT to be confused with background image. One doesn't necessarily need the img element in html to insert a background image.
    - Unmatching path of an image could find `Refused to apply style from...is not a supported stylesheet MIME type, and strict MIME checking is enabled.`
    - viewport units
        - em, rem, vh, vw
        - vw - viewport width in percentage
        - vh - viewport height in percentage
        - pixels - used to be very commonly especially before responsive designs were introduced
            - disadvantage -  unit isn't scalable. Meaning pixel size is fixed and doesn't change according as viewport size varies
        - so then em, rem, percent and viewport units were introduced
