// Check for matching malls
function checkMatch() {
    let commonMalls = ferChoices.filter(mall => larChoices.includes(mall));

    if (commonMalls.length === 1) {
        document.getElementById("result-text").innerHTML = `LET'S GO TO ${commonMalls[0]}`;
        document.getElementById("result-page").style.display = "block";
        document.getElementById("fer-page").style.display = "none";
        document.getElementById("lar-page").style.display = "none";
    } else if (commonMalls.length > 1) {
        // Filter out non-matching malls
        remainingMalls = commonMalls;
        ferChoices = [];
        larChoices = [];
        // Hide previous selections and show the filtered options again
        document.getElementById("lar-page").style.display = "none";
        document.getElementById("fer-page").style.display = "block";
        resetChoices();
    } else {
        document.getElementById("result-text").innerHTML = "No matching malls. Try again!";
        document.getElementById("result-page").style.display = "block";
        document.getElementById("fer-page").style.display = "none";
        document.getElementById("lar-page").style.display = "none";
    }
}
