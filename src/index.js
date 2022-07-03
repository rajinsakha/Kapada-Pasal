const actions = [{
    triggers: ["hello", "hi"],
    response: "k xa sathi",
},
{

    triggers: ["info", "aafno baray"],
    response: "we are kapdapasal",
},
{

    triggers: ["order", "i want to order", 'saman kinnu xa'],
    response: "what do you want to order",
},
{

    triggers: ["bye"],
    response: "Bye have a great day!!",
},

]
let messages = []

const inputEl = document.getElementById("input");
const sendEl = document.getElementById("send");
const chatDisplay = document.getElementsByClassName("chat-display")[0];


sendEl.addEventListener("click", (e) => {

    const userMsg = createMessage(inputEl.value, 'user');
    update(userMsg);
    let response = "Not Programmed for that message";
    actions.forEach(action => {
        action.triggers.forEach(trigger => {
            if (trigger === inputEl.value) {
                response = action.response
            }
        })

    })
    const botMsg = createMessage(response, "bot");
    update(botMsg)
    render(messages);


})


const render = (messages) => {
    chatDisplay.textContent = "";
    messages.forEach(message => {
        const container = document.createElement('div');
        if (message.type === "user") {
            console.log(message.type)

            container.textContent = `${message.text} :user`;
            chatDisplay.appendChild(container)
            container.style.textAlign = "right"

        } else {
            container.textContent = `${message.text} :bot`;
            chatDisplay.appendChild(container)

        }
    })
    return container;
}

const createMessage = (message, isBot) => { 
    const messageObj = {
        text: message,
        type: isBot
    }

    return messageObj
}

const update = (createdMessage) => {
    messages.push(createdMessage);
}