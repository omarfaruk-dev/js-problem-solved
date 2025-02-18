// method - 1

function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }
    else if (email.startsWith(".") || email.startsWith("-") || email.startsWith("_") || email.startsWith("+") || email.startsWith("@") || email.includes(" ") || !email.endsWith(".com")) {
        return false;
    }
    else {
        return true;
    }

}

// const result = validEmail("omar@gmail.com");
// console.log(result);

// method - 2

function validEmail(email) {
    if (typeof email !== "string") return "Invalid";
    if (/^[.\-_+@]/.test(email) || email.includes(" ") || !email.endsWith(".com")){
        return false;
    }
    return true;
  }

  const result = validEmail("chat420@gpt.net");
console.log(result);