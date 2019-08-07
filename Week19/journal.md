# 05.08.2019
# proxy

## forms in HTML, label
### Definition
- HTML forms allow for interaction of users with the webpage

- There are a variety of elements that belong to forms
    - <input></input>
    - <textarea></textarea>
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
    - `action` and `method` are the essential ones
- action
    - determines where the data goes to, it neeeds a value that must be a valid URL
- method
    - defines how data is sent, the common ones of the HTTP protocol being `GET` and `POST`