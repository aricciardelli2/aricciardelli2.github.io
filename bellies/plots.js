var trace1 = {
    x: ['burrito', 'pizza', 'chicken'],
    y: [10,18,4],
    type: 'bar',
    name: 'weekend'
}

var trace2 = {
    x: ['burrito', 'pizza', 'chicken'],
    y: [12,12,8],
    type: 'bar',
    name: 'week'
}

var layout = {
    title: "Week vs. Weekend Meals",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Meals"}
}

Plotly.newPlot("plotArea", [trace2, trace1], layout);
