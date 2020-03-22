var input= prompt("Enter a word.")


if (input === input.toUpperCase()){
    console.log("You are shouting!");
} else if (input === input.toLowerCase()){
    console.log("You are whispering.");
}
    else {
        console.log("You are talking normally.");
    }

