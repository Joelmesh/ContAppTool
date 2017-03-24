  window.onload = function()
				{
                  var array=["one","two","four"];
                  array.splice(2,0,"Three");
                  console.log(array)



                }


/*Chart.types.Line.extend({
    name: "LineAlt",
    draw: function () {
        Chart.types.Line.prototype.draw.apply(this, arguments);

        // now draw the segments
        var ctx = this.chart.ctx
        this.datasets.forEach(function (dataset) {
            ctx.strokeStyle = dataset.strokeColor

            var previousPoint = {
                value: null
            };
            dataset.points.forEach(function (point) {
                if (previousPoint.value !== null && point.value !== null) {
                    ctx.beginPath();
                    ctx.moveTo(previousPoint.x, previousPoint.y);
                    ctx.lineTo(point.x, point.y);
                    ctx.stroke();
                }
                previousPoint = point;
            })
        })
    }
});

var ctx = document.getElementById("chart").getContext("2d");

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [65, null, 80, 81, 56, 55, 40]
    }, {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, null, 19, null, 27, 90]
    }]
};

var myLineChart = new Chart(ctx).LineAlt(data, {
    datasetFill: false,
    pointDotRadius: 2,
    pointDotStrokeWidth: 3,
    datasetStrokeWidth: 0.01
});