// first class part handling
function getIncreased() {
    const ticketInput = document.getElementById('ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    const newCount = ticketCount + 1;
    ticketInput.value = newCount;
    setSubtotal();
    calculateVat();
    calculateTotal();
}
function getDecreased() {
    const ticketInput = document.getElementById('ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    const newCount = ticketCount - 1;
    ticketInput.value = newCount <= 0 ? 0 :newCount;
    setSubtotal();
    calculateVat();
    calculateTotal();
}

// Economy part handling
function getIncreasedSecond() {
    const ticketInputSecond = document.getElementById('value-hundred');
    const ticketCountSecond = parseInt(ticketInputSecond.value);
    const newCountSecond = ticketCountSecond + 1;
    ticketInputSecond.value = newCountSecond;
    setSubtotal();
    calculateVat();
    calculateTotal();
}
function getDecreasedSecond() {
    const ticketInputSecond = document.getElementById('value-hundred');
    const ticketCountSecond = parseInt(ticketInputSecond.value);
    const newCountSecond = ticketCountSecond - 1;
    ticketInputSecond.value = newCountSecond <= 0 ? 0 : newCountSecond;
    setSubtotal();
    calculateVat();
    calculateTotal();
}

//calculations
function setSubtotal() {
    const t = parseInt(document.getElementById('ticket-quantity').value) * 150 + parseInt(document.getElementById('value-hundred').value) * 100;
    (document.getElementById('sub-total')).innerText = t;
}
function getSubtotal(){
    const t = parseInt(document.getElementById('ticket-quantity').value) * 150 + parseInt(document.getElementById('value-hundred').value) * 100;
    return (document.getElementById('sub-total')).innerText = t;
}
function getTotalTickets(){
  return  parseInt(document.getElementById('ticket-quantity').value) + parseInt(document.getElementById('value-hundred').value);
}
function calculateVat(){
    const Cost = document.getElementById('sub-total')
    const totalCost = parseInt(Cost.innerText);
    document.getElementById('total-vat').innerText = totalCost * 0.1;
}
function getVat(){
    const Cost = document.getElementById('sub-total')
    const totalCost = parseInt(Cost.innerText);
    return document.getElementById('total-vat').innerText = totalCost * 0.1;
}
function calculateTotal(){
    document.getElementById('total').innerText = getSubtotal() + getVat();
}
function getTotalAmount(){
    return  document.getElementById('total').innerText = getSubtotal() + getVat();
}

//extra part handling
function showDetails(){
   const bookingDetails = document.getElementById('home-page');
   const bookingInfo = document.getElementById('booking-info');
   bookingDetails.style.display = "none";
   bookingInfo.style.display = "block";
   const showTicket = document.getElementById('show-ticket');
   const showAmount = document.getElementById('show-amount');
   showTicket.innerText = getTotalTickets();
   showAmount.innerText = getTotalAmount();
}