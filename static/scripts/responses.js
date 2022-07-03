function getBotResponse(input) {
    //Products
    if (input.toLowerCase() === "show me the latest product" || input.toLowerCase() === "show me the product" || input.toLowerCase() === "show the product") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input.toLowerCase() ===  "hello" || input.toLowerCase() === "hi") {
        return "Hello there! How can we help you?";
    } else if (input.toLowerCase() === "goodbye" ||input.toLowerCase()=== "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}