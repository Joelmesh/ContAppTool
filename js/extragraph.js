var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
    }, {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
    }]
};

var ctx = document.getElementById("chart").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data);


// inserting the new dataset after 3 seconds
setTimeout(function() {

    var myNewDataset = {
        label: "My Second dataset",
        fillColor: "rgba(187,205,151,0.5)",
        strokeColor: "rgba(187,205,151,0.8)",
        highlightFill: "rgba(187,205,151,0.75)",
        highlightStroke: "rgba(187,205,151,1)",
        data: [48, 40, 19, 86, 27, 90, 28]
    }

    var bars = []
    myNewDataset.data.forEach(function (value, i) {
        bars.push(new myBarChart.BarClass({
            value: value,
            label: myBarChart.datasets[0].bars[i].label,
            x: myBarChart.scale.calculateBarX(myBarChart.datasets.length + 1, myBarChart.datasets.length, i),
            y: myBarChart.scale.endPoint,
            width: myBarChart.scale.calculateBarWidth(myBarChart.datasets.length + 1),
            base: myBarChart.scale.endPoint,
            strokeColor: myNewDataset.strokeColor,
            fillColor: myNewDataset.fillColor
        }))
    })

    myBarChart.datasets.push({
        bars: bars
    })

    myBarChart.update();
}, 3000);