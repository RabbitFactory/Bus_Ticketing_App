const couponCode = document.getElementById("couponFor15%").innerText;

const remainingSeats = parseInt(
  document.getElementById("seatsRemaining").innerText
);

const ticketPrice = parseInt(document.getElementById("ticketPrice").innerText);

const selectedSeatsNumber = parseInt(
  document.getElementById("selectedSeatsNumber").innerText
);

const totalPrice = parseInt(document.getElementById("totalPrice").innerText);

const grandTotalPrice = parseInt(
  document.getElementById("grandTotalPrice").innerText
);






const seats = document.getElementsByClassName("seat");
let selectedCount = 0;
const maxSelection = 4;

function toggleSeat(event) {
  const seat = event.target; // Get the seat that was clicked

  if (seat.classList.contains("selected")) {
    seat.classList.remove("selected"); // Deselect if already selected
    seat.classList.add("default");
    selectedCount--;
  } else {
    if (selectedCount < maxSelection) {
      seat.classList.add("selected"); // Select if under max limit
      selectedCount++;
    } else {
      alert("You can only select up to " + maxSelection + " seats.");
    }
  }
  seat.offsetWidth;
}

// Use the for...of loop to iterate through the seats
for (let seat of seats) {
  seat.addEventListener("click", toggleSeat); // Attach the toggleSeat function as the event handler
}







