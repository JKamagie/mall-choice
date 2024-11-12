let ferChoice = null;
let larChoice = null;

function submitChoice(person) {
    if (person === 'fer') {
        ferChoice = document.getElementById('fer-choice').value;
        document.getElementById('fer-choice-div').classList.add('hidden'); // Hide Fer's dropdown
    } else if (person === 'lar') {
        larChoice = document.getElementById('lar-choice').value;
        document.getElementById('lar-choice-div').classList.add('hidden'); // Hide Lar's dropdown
    }

    // Display result when both choices are made
    if (ferChoice && larChoice) {
        const result = document.getElementById("result");
        if (ferChoice === larChoice) {
            result.textContent = "You both picked the same mall!";
        } else {
            result.textContent = "You picked different malls.";
        }
    }
}
