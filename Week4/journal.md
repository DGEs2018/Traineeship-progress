# 23.04.2019
* How the Internet works (a personal reference I've been using and would strongly recommend - many of the lessons from <https://www.edx.org/course/cs50s-apr-computer-science-principles-harvardx-cs50-ap>)
    - IP Adresses
    - TCP / IP
    - DNS
    - DHCP
    - Server : what it is 
    - Web server - a quick glimpse at how to set up one with node.js & Express
  - | Command           | Function                              |
  - |---                |---                                    |
  - |pwd                | print the current working directory   |
 * Installed Preview Markdown Extension `cmd + shift + v` (comes in handy to preview changes made on text editor)
 * Read up concerning the `.gitignore` file and created one at the root folder TRAINEESHIP-PROGRESS 
 * On algorithms and time complexity - from the introduction to CS module
    - Algorithmic thinking when going about to solve problems and its time complexity  
    - Importance of algorithm

# 24.04.2019
* CLI recap 
    - cd alone takes one to the root directory
    - pwd shows the working directory, including the whole path
    Binary system - letters represented in terms of numbers
    - The analogy of frames per second in movies, screens and computers
    - Multiple layers
      - OS, node - provides you with the enviroment to run and be executed in the OS 
      - Computer programs (such as touch `filename`) 
      - setTimeout(printHello, 2000) is one program given by
      - npm init -y (npm)
      - npm install luxon (need that for libraries building server)
      - lookup for luxon.js for further 
      - library could mean as somebody else's code
      - difference between a browser and node
      
      - Quick recap from the prework session,
      - data types 
         - boolean
         - strings
         - number
         - defined
         - array (could be another one, which could contain / hold)
         .methods
         .reverse, .split, .join - can't for example be directly applied on strings (in JS on array)


         The same code is written for many different types of browsers cross-browsers
         - difference between framework / blurry boundary between (has a mental model to work with, nextjs) and library - a library should be easy to be usable in any framework
         - NextJs - could differently execute both in both client and server-sided
         - Which browsers

         Time-complexity, n square algorithm should be avoided for the reason of time

         - The Internet
         - URL & DNS
         - The router and server link - cable to the closest router
         - With the help of intermediary router, connection is secured

# 25.04.2019
- Quick recap from the previous lesson
    - The Internet - isn't single computer per se, but rather a connection of computers
    - Client side - data is requested from only one computer

- Focus of the day on client and server communication
    - DNS - got started with name vs server, text file a
    - request consists of 
       - url
       - address of the server
       - path
       - info through URL, with # & ?
       - Methods - GET, POST(create / comment on a webpage), PATCH(editting preexisting message on a blog post for instance), DELETE, PUT etc.
       - Headers(analogous to the a list of key value pair that needs to be sent), User Agent (browser type), 
       - Body (ex. when sending a Tweet), is always ONLY in plain text form
    
    - Response
      - Body (most essential, html file) is always sent as text. 
      - Headers (to be able to understand what type of html text is being sent)
      - Content type
      - Status (signals whether the message sent is successful...)
        - 1xx
        - 2xx(request successful, OK)
        - 3xx(page redirected perhaps)
        - 4xx(something wrong with the page)
        - 5xx(server problems)
    
    - REST
        - Set a best of practices
        - JSON (a way a t)
        - HTML & JS could be sent to a client, and rendered
        - An example of what's not REST - SOAP (where for example in the snippet instead of    GET uses POST)
        - each section provides information about the page
        - Using REST API - has multiples of endpoints
            - /posts, posts/comments, /users, /likes - as each of them are separated
        - Can respond in xml format also
        
    - GraphQL 
        - Client only has one endpoint called data
        - Ideal to get a lot different resources on the same page (), per single request over the data
        - Very similar to querying in database
        - Response of GraphQL is 90% JSON
    - Postman
        - Always username, id, content-type
    - Authentication
        - One REST API could be shared by multiple users
        