let inputElement = document.getElementById("input");

let inputArray = [];
let historyArray = [];

inputElement.addEventListener("input", function () {
  const inputValue = inputElement.value;
  inputArray = inputValue.split("");
  console.log("Input Array", inputArray);
  console.log("History Array", historyArray);
});

//if user press "B" Button
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is "Backspace"
  if (event.key === "Backspace" && inputArray.length > 0) {
    event.preventDefault();
    console.log("Backspace/Undo is pressed");

    undo(inputArray);

    console.log("undo InputArray", inputArray);
    console.log("undo HistoryArray", historyArray);
  } else if (event.key === "z" && event.ctrlKey) {
    event.preventDefault();
    console.log("CTRL + Z is pressed");

    redo(historyArray);

    console.log("redo InputArray", inputArray);
    console.log("redo HistoryArray", historyArray);
  }
});

//undo
function undo(inputArray) {
  const undoCharacter = inputArray.pop();
  historyArray.push(undoCharacter);
  inputElement.value = inputArray.join("");
}

//redo
function redo(historyArray) {
  const redoCharacter = historyArray.pop();
  inputArray.push(redoCharacter);
  inputElement.value = inputArray.join("");
}
