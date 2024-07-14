let firstname = prompt("Enter your first name");
let lastname = prompt("Enter your last name");

if (firstname.match(/^[a-zA-Z]+$/) && lastname.match(/^[a-zA-Z]+$/)) {
    firstname = firstname.charAt(0).toUpperCase()  + firstname.slice(1).toLowerCase();
    lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();

    alert(`Greetings, ${firstname} ${lastname}`);
    console.log(`Greetings, ${firstname} ${lastname} <3`);
}
else {
    alert("Wrong input!");
    console.log("Wrong input!");
}