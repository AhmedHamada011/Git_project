// Create phone book app
// Ask the user for operation through JS prompt
// If user enters “add”
// Ask him for the name of the contact and phone number
// Then create js object for that contact and add it to contacts array
// Then ask him for new operation and repeat
// If user enters “search”
// Ask him for something to search for
// Get the user input and search in the contacts array in name and phone
// Then show the user the full details of that contact
// Then ask him for new operation and repeat


let contactObj = {} ;
let count = 0 ; 
while (true) {

    let enterOperation = prompt (" Enter add or search ");
    if (enterOperation === "add") {
        let addContact = {} ;
        addContact["Name"] = prompt (" Enter contact name ") ;
        addContact["Phone"] = prompt (" Enter contact phone ");
        contactObj[`contact ${count}`] = addContact ;
        count++;
    }
    else if (enterOperation === "search") {
        let getContactValues = Object.values(contactObj); // [Object{} , Object{} .. etc]
        let userPhone = prompt (" search by phone number ");
        for (let i = 0 ; i < getContactValues.length ; i++) {
            if (userPhone === getContactValues[i]["Phone"] ) {
                confirm (`Contact name : ${ getContactValues[i]["Name"] } \nContact phone number : ${getContactValues[i]["Phone"] }`) ;
                break;
            }
        }
    }
}