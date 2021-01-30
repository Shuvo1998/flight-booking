function getIncreased() {
    const ticketInput = document.getElementById('ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    const newCount = ticketCount + 1;
    ticketInput.value = newCount;
    setSubtotal();
    calculateVat();
    calculateTotal();
}
function setSubtotal() {
    const t = parseInt(document.getElementById('ticket-quantity').value) * 150 + parseInt(document.getElementById('value-hundred').value) * 100;
    (document.getElementById('sub-total')).innerText = t;
}
