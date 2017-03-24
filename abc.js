var ctx = document.getElementById("chart_hr");
    function newDate(day, month) {
        return moment().date(day).month(month);
    }


var data = {
    labels: [newDate(8,8), newDate(10,8), newDate(12,8), newDate(17,8), newDate(21,8), newDate(23,8), newDate(28,8), newDate(1,9), newDate(4,9)],
    datasets: [
        {
            fill: false,
            data: [140, 180, 150, 150, 180, 150, 150, 150, 170],
            lineTension: 0,
        },
        {
            fill: false,
            data: [80, 100, 80, 80, 80, 80, 100, 80, 100],
            lineTension: 0,
        }
    ]
};
var options = {
    scales: {
        xAxes: [{
            ticks: {
                autoSkip : false,
                callback: function(value, index, values) {
                    return new moment(value).format('DD MMM');
                }
            },
            gridLines : {
                display : false,
            }
        }],
        yAxes: [{
            ticks: {
                min: 50,
                max: 190,
               stepSize: 10
            }
        }],
    },
};
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});