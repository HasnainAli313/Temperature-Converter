// Get input elements
const degreeInput = document.getElementById('degree');
const typeInput = document.getElementById('type');
const resultInput = document.getElementById('result');

// Add event listener to convert button
const convertButton = document.querySelector('.btn');
convertButton.addEventListener("click",convertTemperature);

// Function to convert temperature
function convertTemperature(event){

    // prevent button's default submit action
    event.preventDefault();

    // Get the input values
    const degree = parseFloat(degreeInput.value);
    const type = typeInput.value;

    // Check the selected type and perform the conversion
    let result;
    let symbol;
    if(type === "fahrenheit"){
        symbol ="C";
        result = (degree - 32) * (5 / 9);
    } else if (type === 'celsius') {
        symbol ="F";
      result = (degree * 9 / 5) + 32;
    }

    // display the result 
    resultInput.value = result.toFixed(4)+"°"+symbol;

}