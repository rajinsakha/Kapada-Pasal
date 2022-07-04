function getBotResponse(input) {
    //Products
    if (input.toLowerCase() === "show me the latest product" || input.toLowerCase() === "show me the product" || input.toLowerCase() === "show the product" || input.toLowerCase() === "show the product") {
        const response={
            text:'../images/jordan.png',
            price:"Rs: 8000",
            info:"Call me at 9742867560 or you can email me at guidayashish@gmail.com",
            type:"img"
        }
        return response;
    }

    // Simple responses
    if (input.toLowerCase() ===  "hello" || input.toLowerCase() === "hi") {
        const response = {
            text:'Hello',
            type:"text"
        }
        return response;
    } else if (input.toLowerCase() === "goodbye" ||input.toLowerCase()=== "bye") {
        const response = {
            text:'Talk to you later!',
            type:"text"
        }
        return response;
    } else if (input.toLowerCase() === "how can i contact you" ||input.toLowerCase()=== 'contact'||input.toLowerCase() === "how can i contact")  {
        const response = {
            text:'Call me at 9842884884 or you can email me at kapdapasal@buy.com',
            type:"text"
        }
        return response;
    }
     else {
        const response = {
            text:'Try asking something else!',
            type:"text"
        }
        return response;
    }
}