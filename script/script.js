//book now button handler
document.getElementById("bookNowBtn").addEventListener("click", function () {
    document.getElementById("purchingProcessArea").style.display = "none"
    document.getElementById("purchage-history").style.display = "block"
})
//economy class ticket number handler for increase
document.getElementById("economyTicketIncrease").addEventListener("click", function () {
    const ticketCount = inputHandler("numberOfEconomyTicket")
    updateTicketNumber(true, ticketCount, "economyClass", "numberOfEconomyTicket")
})
//economy class ticket number handler for decrease
document.getElementById("economyTicketDecrease").addEventListener("click", function () {
    const ticketCount = inputHandler("numberOfEconomyTicket")
    updateTicketNumber(false, ticketCount, "economyClass", "numberOfEconomyTicket")
})
//first class ticket number handler for increase
document.getElementById("firstClassTicketIncrease").addEventListener("click", function () {
    const ticketCount = inputHandler("numberOfFirstClassTicket")
    updateTicketNumber(true, ticketCount, "firstClass", "numberOfFirstClassTicket")
})
//first class ticket number handler for decrease
document.getElementById("firstClassTicketDecrease").addEventListener("click", function () {
    const ticketCount = inputHandler("numberOfFirstClassTicket")
    updateTicketNumber(false, ticketCount, "firstClass", "numberOfFirstClassTicket")
})
//updating number of ticket for each type
function updateTicketNumber(isIncrease, numberOfTicket, typeOfClass, id) {
    if (isIncrease == true) {
        numberOfTicket++
    }
    else {
        if (numberOfTicket > 0) {
            numberOfTicket--
        }
    }
    document.getElementById(id).value = numberOfTicket
    calculateTotal()
}
//calculate sub-total, tax & total price
function calculateTotal() {
    const numberOfEconomyTicket = inputHandler("numberOfEconomyTicket")
    const numberOfFirstTicket = inputHandler("numberOfFirstClassTicket")
    const subTotalAmount = (numberOfEconomyTicket * 100) + (numberOfFirstTicket * 150)
    document.getElementById("subTotalAmount").innerText = subTotalAmount
    const taxAmount = Math.round(subTotalAmount * 0.1)
    document.getElementById("taxAmount").innerText = taxAmount
    document.getElementById("totalAmount").innerText = (subTotalAmount + taxAmount)
    //update purching history after clicking book now
    document.getElementById("ticketNumberInFirstClassInPurchaseHistory").innerText = numberOfFirstTicket
    document.getElementById("ticketNumberInEconomyClassInPurchaseHistory").innerText = numberOfEconomyTicket
    document.getElementById("totalPaidInPurchaseHistory").innerText = subTotalAmount + taxAmount
}
//inputn handler
function inputHandler(id) {
    const ticketInput = document.getElementById(id)
    const ticketCount = parseInt(ticketInput.value)
    return ticketCount
}