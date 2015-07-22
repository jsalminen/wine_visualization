
// Create empty global variable for the chart object
var myChart = null;



// Function to draw the initial chart
function draw(data) {
	// Set up image size
	var h = 440;
	var w = 740;

	// Create svg element
	var svg = d3.select(".chart-holder")
				.append("svg")
            	.attr("width", w)
            	.attr("height", h)
            	.append("g")
            	.attr("class", "chart");

    // Create chart in the svg element using the supplied data
	myChart = new dimple.chart(svg, data);

	// Add axes and axis titles
	var x = myChart.addCategoryAxis("x", "quality");
	var y = myChart.addMeasureAxis("y", "alcohol");
	x.title = "Quality";
	y.title = "Average alcohol % vol";


	// Create bar plots, use averaging as aggregation method
	mySeries = myChart.addSeries(null, dimple.plot.bar);
	mySeries.aggregate = dimple.aggregateMethod.avg;

	// Draw chart
	myChart.draw();
}

// Load data and draw the initial chart
d3.csv("data/wineQualityReds.csv", draw);


