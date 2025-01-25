let emailAddress = document.querySelector ("#emailAddressjs")
console.log(emailAddress)
function handleFocus(){
    emailAddress.style.border="1rem solid green"
}
emailAddress.addEventListener("focus", handleFocus)
function handleInput(){
    emailAddress.style.borderColor="yellow"
}
emailAddress.addEventListener("input", handleInput)
let h2Js = document.querySelector (".h2Js")
console.log(h2Js)

function handleSelect(){
    emailAddress.style.border="4px solid teal"
}
h2Js.addEventListener("select", handleSelect)
// onselect is for input and textarea
let paragraphh = document.querySelector (".first")
console.log(paragraphh)
function handleCopy(){
    paragraphh.style.backgroundColor="teal"
}
paragraphh.addEventListener("copy", handleCopy)
let buttonn = document.querySelector (".buttonn")
console.log(buttonn)
function handleDblclick(){
  
    buttonn.style.backgroundColor="blue"
    return false
}
buttonn.addEventListener("dblclick",handleDblclick )


