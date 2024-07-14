function getPronounce(age, gender) {
    if (/^male$/i.test(gender)) {
        return age < 18 ? "boy" : "man";
    }
    if (/^female$/i.test(gender)) {
        return age < 18 ? "girl" : "woman";
    }

    return age < 18 ? "kid" : "hero";
}

let animal = prompt("What animal is the superhero most similar to?");

if (/^[a-zA-Z]{1,20}$/.test(animal)) {
    let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");

    if (/^male$|^female$/i.test(gender) || gender === "") {
        let age = prompt("How old is the superhero?");

        if (/^[1-9]\d{0,4}$/.test(age)) {
            alert(`The superhero name is: ${animal}-${getPronounce(+age, gender)}!`);
        }
        else {
            alert("Incorrect age!");
        }
    }
    else {
        alert("Incorrect gender!");
    }
}
else {
    alert("Incorrect animal name!");
}