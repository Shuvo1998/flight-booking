
function increaseTicketQuantity(id) {
    if(id == "increase-btn"){
        const ticketQuantity = document.getElementById('increase-btn');
    }else if(id == "increase-hundred"){
         ticketQuantity = document.getElementById('increase-hundred');
    }
    const ticketCountNo = parseInt(ticketQuantity.value);
    const newCount = ticketCountNo + 1;
    ticketQuantity.value = newCount;
    setSubtotal();
    calculateVat();
    calculateTotal();
}
function getDecreased() {
    const ticketInput = document.getElementById('ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    const newCount = ticketCount - 1;
    ticketInput.value = newCount <= 0 ? 0 : newCount;
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
function setSubtotal() {
    const t = parseInt(document.getElementById('ticket-quantity').value) * 150 + parseInt(document.getElementById('value-hundred').value) * 100;
    (document.getElementById('sub-total')).innerText = t;
}
function getSubtotal() {
    const t = parseInt(document.getElementById('ticket-quantity').value) * 150 + parseInt(document.getElementById('value-hundred').value) * 100;
    return (document.getElementById('sub-total')).innerText = t;
}
function calculateVat() {
    const Cost = document.getElementById('sub-total')
    const totalCost = parseInt(Cost.innerText);
    document.getElementById('total-vat').innerText = totalCost * 0.1;
}
function getVat() {
    const Cost = document.getElementById('sub-total')
    const totalCost = parseInt(Cost.innerText);
    return document.getElementById('total-vat').innerText = totalCost * 0.1;
}
function calculateTotal() {
    document.getElementById('total').innerText = getSubtotal() + getVat();
}

function showDetails() {
    const bookingDetails = document.getElementById('home-page');
    const bookingInfo = document.getElementById('booking-info');
    bookingDetails.style.display = "none";
    bookingInfo.style.display = "block";

}