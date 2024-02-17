
function displayFlightsInfo(bookedFlights) {
    var flightsList = document.getElementById("flightList");
    flightsList.innerHTML = ""; // Clear the existing content

    bookedFlights.forEach(function (flight, index) {
        var listItem = document.createElement("li");

        listItem.innerHTML =
            "Country: " + flight.country +
            " | Date: " + flight.date +
            " | Time: " + flight.time +
            " | Gate: " + flight.gate +
            "<br>Assigned Seat: " + flight.seat +
            " | Assigned Bags: " + flight.bags +
            "<br>Addons: Extra Seats - " + flight.extraSeats +
            " | Extra Bags - " + flight.extraBags +
            " | Price: " + (typeof flight.price === 'number' ? flight.price.toFixed(2) + " PHP" : "Invalid price") +
            ' <button onclick="editFlight(' + index + ')">Edit Flight</button>';

        flightsList.appendChild(listItem);
    });
}
function cancelAllFlights() {
    // Clear booked flights and seat information in localStorage
    localStorage.removeItem("bookedFlights");

    // Clear the displayed flight list
    var flightList = document.getElementById("flightList");
    flightList.innerHTML = "<p>No booked flights</p>";

    // Call the resetBookedFlights function to reset total flight price
    resetBookedFlights();
    // Also, call displayFlightsInfo to update the flights list on the page
    displayFlightsInfo([]);
}