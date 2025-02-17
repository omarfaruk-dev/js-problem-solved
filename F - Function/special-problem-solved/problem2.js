//Problem-02 :  Valid  Bangladeshi Number 

function validContact(contact) {

    if (contact.length === 11 && contact.startsWith("01" && !contact.includes(" "))) {
        return true;
    }
    else if (typeof contact !== "string") {
        return "Invalid";
    }
    else {
        return false;
    }
}

let result = validContact("01578945108");

console.log(result);