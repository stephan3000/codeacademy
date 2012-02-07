var bob = {
    firstName: "Bob",
    lastName: "Jones",
    
    phoneNumber: "(650) 777 - 7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson (person) {
    console.log(person.firstName + " " + person.lastName);
}

function list(){
    var i=0;
    for(i=0;i<contacts.length;i++){
        printPerson(contacts[i]);
    }
}

function search(lastName){
  
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
}
}

function add(firstName,lastName,email,telephone){
    var newContact = new Object();
    newContact.firstName = firstName,
    newContact.lastName = lastName,
    
    newContact.telephone=telephone,
    newContact.email=email

contacts[contacts.length]=newContact;
}

list();
search("Jones");
add(
    firstName = prompt("First Name?"),
    lastName = prompt("Last Name?"),
    email = prompt("Email adress?"),
    telephone = prompt("Phone?")
    );