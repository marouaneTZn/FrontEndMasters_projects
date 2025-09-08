


    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    const statement = document.getElementById("statement");
    // optionButtons should be all the elements within the "options" div
    let optionButtons = document.querySelector("#options").children;
    // explanation should be the "explanation" div
    let explanation = document.querySelector("#explanation");

    


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    let fact = {
        statement : "The JavaScript programming language created in just 10 days?",
        answer : true,
        explanation : "The JavaScript programming language was created by Brendan Eich in just 10 days in May 1995."
    };

    
    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent = fact.statement.toLocaleUpperCase();

        

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    const disable = (button) => {
        button.setAttribute("disabled", "")
    }
    // enable(button) should remove the attribute "disabled" from the button element
    const enable = (button) => button.removeAttribute("disabled");
    


    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    function isCorrect(guess){
        return guess == fact.answer;
    }


    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    for (let button of optionButtons){
        button.addEventListener("click", (event) => {

            // show explanation
            explanation.textContent = fact.explanation;

            // disable all option buttons
            for (let opt of optionButtons){
                disable(opt);
            }

            // Get the clicked button (use currentTarget to avoid issues if nested elements exist)
            const clicked = event.currentTarget;
            // button values are strings "true"/"false" in the HTML; coerce to boolean
            const guess = clicked.value === "true"

            // add appropriate class on the clicked button
            if (isCorrect(guess)){
                clicked.classList.add("correct");
            }
            else{
                clicked.classList.add("incorrect");
            }
        })
    }

    

