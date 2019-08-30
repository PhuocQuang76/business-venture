alert("WELCOME TO THE WEBPAGE");
const calculate = () => {
    let response = 'n';

    let number1;
    let number2;
    let total;

    let visitorName = prompt("Please enter your name:","type your name here");
    alert(visitorName + ", welcome to addition calculation.");
    let innerCalc = () => {
        let firstNumber = prompt("PLease enter your first number:").trim();
        while (firstNumber.length == 0 || isNaN(firstNumber)) {
            alert("Invalid input. Please input a numnber.");
            firstNumber = prompt("PLease enter your first number:").trim();
        }

        //This is a typical promise construct in ES6
        appendtape(firstNumber).then(() => {// a promise is returned here.
            return appendtape("+");
        }).then(() => {
            let secondNumber = parseInt(prompt("PLease enter your second number:"));
            while (secondNumber.length == 0 || isNaN(secondNumber)) {
                alert("Invalid input. Please input a numnber.");
                secondNumber = prompt("PLease enter your first number:").trim();
            }
            return Promise.resolve(secondNumber);
        }).then((secondNumber) => {
            return appendtape(secondNumber);
        }).then((secondNumber) => {
            let total = parseInt(firstNumber) + parseInt(secondNumber);
            alert("The sum of your two numbers is: " + total);
            if (total > 10) {
                alert(total + ": This is a big number");
            } else {
                alert(total + ": This is a small number");
            }
            return appendtape("total: " + total);
        }).then(()=>{
            return appendtape("-----------------");
        }).then(() => {
            response = prompt("Do you want to try the calculation again? (y = \"yes\", n = \"no\")");
            return Promise.resolve(response);
        }).then(response => {
            if (response == 'y' || response == 'Y') {
                innerCalc();
            }
        });
    };
    innerCalc();
};

const appendtape = (number) => {
    //html dom manipulation is asynchronous.
    //The prompts an alerts are executed right away.
    //I created a promise, setup a timeout to "wait" for the
    //dom manipulation to complete and execute on completion of promise.
    return new Promise((resolve) => {
        var node = document.createElement("div");
        var textnode = document.createTextNode(number);
        node.appendChild(textnode);
        document.getElementById("tape").appendChild(node);
        //let the promise return the input;
        setTimeout(()=>{resolve(number);}, 300);
    });
};

const cleartape = () => {
    document.getElementById("tape").innerHTML = "";
};

const greetings = () => {
    if (document.readyState === "complete" )
        alert("Thank you for using my calculation program.");
};