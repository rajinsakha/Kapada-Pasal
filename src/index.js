const actions = [{
    triggers: ["hello","hi"],
    response: "k xa sathi",
},
{

    triggers: ["info"],
    response: "we are kapdapasal",
}

]

const inputEl = document.getElementById("input");
const sendEl = document.getElementById("send");



sendEl.addEventListener("click", (e) => {
    let response;
    actions.forEach(action => {
        action.triggers.forEach(trigger => {
            if (trigger === inputEl.value) {
                response = action.response
            }
        })

    })

    alert(response)
})
