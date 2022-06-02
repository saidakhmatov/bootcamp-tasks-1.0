let num1 = document.querySelector("input")
let num2 = document.getElementById("num2")
let btnAdd = document.getElementById("btn")
let result = document.getElementById("result")
let select = document.querySelector("select");


btnAdd.addEventListener("click",function() {
    switch (select.value) {
        case "add":
            return result.textContent = (parseInt(num1.value)+parseInt(num2.value));            
        case "subtract":
            return result.textContent = (parseInt(num1.value)-parseInt(num2.value));
        case "multiply":
            return result.textContent = (parseInt(num1.value)*parseInt(num2.value));
        case "divide":
            return result.textContent = (parseInt(num1.value)/parseInt(num2.value));

        default:
            result.textContent = ('Please choose operator')
        }
})