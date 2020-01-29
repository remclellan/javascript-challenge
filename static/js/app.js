// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

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

