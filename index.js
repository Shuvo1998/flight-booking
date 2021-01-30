function getIncreased() {
    const ticketInput = document.getElementById('ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    const newCount = ticketCount + 1;
    ticketInput.value = newCount;
    setSubtotal();
    calculateVat();
    calculateTotal();
}
