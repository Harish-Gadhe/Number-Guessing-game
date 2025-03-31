const Minimum = 1; //minimum 
const Maximum = 100;
const Answer = Math.floor(Math.random() * (Maximum - Minimum + 1)) + Minimum;

let Attempts = 0;
let Running = true; 

function checkGuess() {
    if (!Running) return;

    let Guess = document.getElementById("Input").value;
    let alerts = document.getElementById("alerts");

    Guess = Number(Guess);

    if (isNaN(Guess)) {
        alerts.textContent = " Invalid input! Please enter a number.";
    } 
    else if (Guess < Minimum || Guess > Maximum) {
        alerts.textContent = ` Please enter a number between ${Minimum} and ${Maximum}.`;
    } 
    else { 
        Attempts++;
        if (Guess < Answer) {
            alerts.textContent = "Too Low! Try again.";
        } 
        else if (Guess > Answer) {
            alerts.textContent = "Too High! Try again.";
        }
        else {
            alerts.textContent = `🎉 Congratulations! You guessed it in ${Attempts} attempts.`;
            Running = false;
        }
    }
}







// const Minimum = 1;
// const Maximum = 100;
// const Answer = Math.floor(Math.random() * (Maximum - Minimum + 1)) + Minimum;

// let Attempts = 0;
// let Guess; 
// Running = true;

// while (Running) {

//     Guess = window.prompt(`guess a number between ${Minimum} - ${Maximum}`)
//     Guess = Number( Guess);
     
//     if(isNaN(Guess)) {
//        window.alert("Invalid guess! please enter a number");
//     } 
//     else if(Guess < Minimum || Guess > Maximum) {
//         window.alert(`Error! Guess between ${Minimum} To ${Maximum} . `);
//     } 
//     else { 
//         Attempts ++;
//         if(Guess < Answer) {
//            window.alert("Too Low!");
//         } 
//         else if(Guess > Answer) {
//            window.alert("Too High!")
//         }
//         else {
//             window.alert(`Congratulations ! Your total attempts are ${Attempts}` )

//             Running = false;
//         }
//     }

// }

