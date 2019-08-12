# 05.08.2019
# proxy

## HTML forms & label
### Definition
- HTML forms allow for interaction of users with the webpage

- There are a variety of elements that belong to forms
    - <input></input> - one line text
    - <textarea></textarea> - text body of more than a line (such as a message)
- NBs - never nest `<form>` tags inside another `form`

#### the `label` element
- The label element is a way to link the input elements 
- label elements help associate the id attribute of the input, these help direct the to go to the input field on click or submit event
- 

# 06.08.2019
## behaviour in forms
```javascript
    // grabs the value of all the elements with the Id email and store it a variable called _yourEmail_
    const yourEmail = document.getElementById('email').value;
    console.log(yourEmail);
    // grabs the value of all the elements with the Id yourname and store it a variable called _yourEmail_
    const yourName = document.getElementById('yourname').value;
    console.log(yourName);
    //
    // a function named alertInput which alerts the given input in the backtick
    function alertInput() {
    alert(`Username is ${yourName}``Useremail is ${yourEmail}`);
    }
    //this line gets all elements with the id name subscribe-form, and is triggered to run the function alertOnSubmit, which calls the previously defined function
    document.getElementById('subscribe-form').onsubmit = function alertOnSubmit() {
    alertInput();
    };

    const userName = document.getElementById('form_el').elements[0].value;
    const emailName = document.getElementById('form_el').elements[1].value;

    const clearMyFields = () => {
    if (document.getElementById('subscribe-form').onsubmit === true) {
        // document.getElementById('email').value === document.getElementById('yourname').value === null
    }
    };
```

# 07.08.2019
### Submitting form data
- Where does the data go from the user's end ?
    - the form enables  how the data will be sent
    - the attributes of the form are thought to help configure the request to be sent on clicking submit
    - `action` and `method` are the essential attributes
- action
    - determines where to the data goes, it neeeds a value that must be a valid URL
    - even refreshing the current page counts to action (meaning the page reloads)
    - mostly the case by default
    - unless wished the user can stop the event from refreshing by adjusting `e.preventDefault`
- method
    - defines how data is sent, the common ones of the HTTP protocol being `GET` and `POST`

- when the action attribute is labelled as `action="\subscribed"` the page will be redirected to this page

- this could be of an interest if user needs to be directed to that page with a certain message

#### the attribute `name` attribute
- names are important to reference form data
- when removing the `name` attribute is removed we see no parameters in the URL

- when we need to attach an event, we've to choose either one or the other 
- either on a separated javascript
- onsubmit attribute inside the HTML form
    - for extra actions on the method `.onsubmit()` javascript function will be involved
- attributes determine the behaviour of forms

# 08.08.2019
### the <fieldset> & <legend> elements
- the <fieldset> serves to categorize groups of input forms 
- <legend></legend> enables naming the above categorised group of similar purpose
- <options></options>
- <select><select>
- 

# 09.08.2019
### APIs
#### Definition
- APIs are communication between applications, just like users interact/communicate with devices, apps / softwares do so amongst eachother
- APIs facilitates developer's life quite
- A multitude of APIs are available on programmableweb.com
- Google, Youtube  and Facebook APIs are common
- Twilio is one such common API exposed to the public 
    - 