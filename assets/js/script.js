// Get the modal
var nobsModal = document.getElementById("nobs-modal");
const runBuddyModal = document.getElementById("run-buddy-modal")

// Get the button that opens the modal
var nobsBtn = document.querySelector(".nobs-modal-btn");
const runBuddyBtn = document.querySelector(".run-buddy-modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
nobsBtn.onclick = function() {
  nobsModal.style.display = "block";
}

runBuddyBtn.onclick = function() {
    runBuddyModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    nobsModal.style.display = "none";
}

span.onclick = function() {
    runBuddyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == runBuddyModal) {
      runBuddyModal.style.display = "none";
    }
})

window.addEventListener("click", function(event) {
    if (event.target == nobsModal) {
      nobsModal.style.display = "none";
    }
    console.log(event)
})