// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear data
    tbody.html("");

    // Loop through each object in the data
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow objec
        // and add each value as a table cell 
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td")
            cell.text(val)
        });
    });
};

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    if (date) {
        filterData = filterData.filter(row => row.datetime === date);
    };

    buildTable(filterData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData)