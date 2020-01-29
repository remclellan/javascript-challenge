// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");

console.log(data)

data.forEach(ufo => {
    console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var date = inputElement.property("value");

    console.log(date);

    function getDates(){
        return tableData.map(d => d.datetime);
      }
    
    var endDate = Math.max(...getDates());
    console.log(endDate);
    

    if (date > endDate) {
        tbody.html("");
    }
    else {
        var filteredData = tableData.filter(tableData => tableData.datetime === date);
        tbody.html("");

        filteredData.forEach(ufo => {
            console.log(ufo);
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key, value]) => {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
});


    


