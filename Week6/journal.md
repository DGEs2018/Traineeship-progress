* 06.05.2019
- SPAs
- What they are ?
    - Are special kind of websites where the user doesn't see any reload despite interacting with the page.
    - SPA relies primarily on JS - interaction with server to change the content in the page.
    - Usually heavy on the first load as this requires the browser to download the entire content.
    - Problems with SEO and SPAs
        - Not very suitable in terms of search engine optimization.
        - HTML sent by the server is by default an empty `<div>` and content is loaded afterwards with JS
        - In case that the crawler can't execute JS - then the reload won't be seen
        - Rendering
        - Multipage applications - as using either server-side or runtime rendering.
        - Client-side rendering
            - Happens in the client - meaning that the client needs to execute JS
            - Hence takes longer to see the content in the page.
            - By default, this makes use of framework such as React or VueJS.
        - Server-side rendering
            - All begins with the client sending a request to a server.
            - In the old way - server can then either respond either with an empty HTML or create HTML before sending it
            - SSR - html is populated in the server & then sent to the client. Then this will be executed at the client side - the plus this time, it now only needs to synchronize with the html instead of having to render the entire page.
    - Include certain files and directories to the .gitignore list
     1. vim .gitignore 
     2. git config --global core.excludesfile ~/.gitignore

* 07.05.2019
- Multi page App
    - Any small action on the web page triggers a complete refresh of page in the 
    - HTML and Content the same files
    - Everything is happening from the server-side
- SPAs
    - Go to page, you find empty HTML in content,
    - Static (files)
    - Content is what needs a DB (isn't hence static content)
    - Different servers
    - The content is then decoupled from the UI
    - So fast that user never sees an empty HTML
    - User just requests more content
        - Problems
            - Some browsers might not be JS indexed
            - Slow / poor connection might affect the content displayed
- Rendering
    - Happens at the client-side (at the browser and/or crawler)
    - Empty <div></div> would then be populated with the content (the JS will do this after fetching content from the )
    - 
    - 