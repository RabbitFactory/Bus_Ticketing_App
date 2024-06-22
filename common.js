const couponCode = document.getElementById("couponFor15%").innerText;

const remainingSeats = parseInt(
  document.getElementById("seatsRemaining").innerText
);

const ticketPrice = parseInt(document.getElementById("ticketPrice").innerText);

const selectedSeatsNumber = parseInt(
  document.getElementById("selectedSeatsNumber").innerText
);

const totalPrice = document.getElementById("totalPrice");

const grandTotalPrice = document.getElementById("grandTotalPrice");

const couponInput = document.getElementById('couponInput');

let couponInputValue = couponInput.value;

const couponApplyButton = document.getElementById('couponButton');

const phoneInput = document.getElementById('phoneInput');

const finalBtn = document.getElementById('finalBtn');


const input_box_id = document.getElementById('input_box_id');


const seats = document.getElementsByClassName("seat");
let selectedCount = 0;
const maxSelection = 4;

function toggleSeat(event) {
  const seat = event.target; 

  if (seat.classList.contains("selected")) {
    seat.classList.remove("selected"); 
    seat.classList.add("default");
    selectedCount--;

    const seatInfoDivId = "seatInfo_" + seat.id;
    const seatInfoDiv = document.getElementById(seatInfoDivId);
    if(seatInfoDiv){
      seatInfoDiv.remove();
    }

  } else {
    if (selectedCount < maxSelection) {
      seat.classList.add("selected"); 
      selectedCount++;

      const seatInfoDiv = document.createElement("div");
      seatInfoDiv.id = "seatInfo_" + seat.id;
      seatInfoDiv.innerHTML = `
      <div class="flex justify-between border-b-2 border-dashed pb-4">
        <p>${seat.id}</p>
        <p>Economy</p>
        <p>550</p>
      </div>`;

      const seatInfoContainer = document.getElementById('seatInfoContainer');
      seatInfoContainer.appendChild(seatInfoDiv);


    } else {
      alert("You can only select up to " + maxSelection + " seats.");
    }
 
  }

  document.getElementById("selectedSeatsNumber").innerText = selectedCount;
  totalPrice.innerText = 550 * selectedCount;

  if(selectedCount === 4){
    
    couponInput.removeAttribute('disabled')
    couponApplyButton.removeAttribute('disabled')


    couponApplyButton.addEventListener('click', function() {
     
      if (couponInput.value === 'NEW15') {
       
        grandTotalPrice.innerText =(550 * 4) -((550 * 4) * 0.15);

        const discount = document.createElement("div");
        discount.innerHTML = `
          <div class= "flex justify-between">
            <p>Total Discount</p>
            <p>330</p>
          </div>
        `
        seatInfoContainer.appendChild(discount);

        input_box_id.classList.add('hidden');

      }   else if(couponInput.value === 'Couple 20'){


        grandTotalPrice.innerText =(550 * 4) -((550 * 4) * 0.2);


        const discount = document.createElement("div");
        discount.innerHTML = `
          <div class= "flex justify-between">
            <p>Total Discount</p>
            <p>440</p>
          </div>
        `
        seatInfoContainer.appendChild(discount);

        input_box_id.classList.add('hidden');

      }
          
      
      else {
        
        alert('Invalid coupon code');
      }
    });



  }


function validatePhoneInput() {
  let phoneInputValue = phoneInput.value.trim(); 
  
  if (selectedCount === 4 && phoneInputValue !== '') {
    finalBtn.removeAttribute('disabled');
  } 
}

phoneInput.addEventListener('input', validatePhoneInput);


validatePhoneInput();

}


for (let seat of seats) {
  seat.addEventListener("click", toggleSeat); 
}




