
window.onload = function() {

    const xhttp = new XMLHttpRequest();
    const form = document.querySelector('#form');

    function sendJson(event) {
        event.preventDefault();
        num1 = parseFloat(event.target.querySelector("#num1").value)
        num2 = parseFloat(event.target.querySelector("#num2").value)
        operation = event.target.querySelector("#operation").value
        const jsonOb = {
            "num1": num1,
            "num2": num2,
            "operation": operation
        }
        sendReq(jsonOb);
    }

    form.addEventListener('submit', sendJson)

    function sendReq(jsonOb) {
        xhttp.open("POST", "/jsondata", true);
        xhttp.setRequestHeader('Content-type', 'application/json');
        
        xhttp.onload = function () {
            const result = JSON.parse(xhttp.response);

            let num1 = result.num1; 
            let num2 = result.num2; 
            let operation = result.operation; 
            let answer = result.result;

            if(isNaN(answer)) {
                document.querySelector("#result").innerHTML = answer;
            } else {
                document.querySelector("#result").innerHTML = num1 + " " + operation + " " + num2 + " = " + answer;
            }  
        };
        xhttp.send(JSON.stringify(jsonOb));
    }  
};