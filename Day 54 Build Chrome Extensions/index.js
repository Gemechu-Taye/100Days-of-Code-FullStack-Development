/* Add anchor tag (<a>) inside the <li>
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        console.log(listItems)
    }
    ulEl.innerHTML = listItems  
}
*/


/* Template Strings
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
*/

/* Writing more template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
const email = `Hey ${recipient} ! How is it going? Cheers Per`

console.log(email)
*/

/* template strings/literals

const recipient = "James"
// Create a new variable, sender, and set its value to your name
let sender = "Gemechu Taye"
// Use your sender variable instead of "Per"
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

console.log(email)
*/

/* template strings/literals on multiple lines

const recipient = "James"
const sender = "Per Harald Borgen"

// Break the email string into multiple lines
const email = `
Hey ${recipient}! 

How is it going? 

Cheers ${sender}
`
console.log(email)
*/

/* Refactor the app to use a template string
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Refactor the code below to use a template string
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
*/
