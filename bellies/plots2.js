var drinks = ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"];
var number = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6];

var trace = {
    labels: drinks,
    values: number,
    type: "pie"
};

var layout = {
    title: "Morman Wedding Drink Selections"
};

Plotly.newPlot("plotArea", [trace], layout);