
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
	var x = myChart.addCategoryAxis("x", ["class", "variable"]);
	x.addOrderRule(['Poor', 'Mediocre', 'Good']);

	var y = myChart.addMeasureAxis("y", "value");
	x.title = "Wine quality";
	y.title = "Standard deviation";

	// Set y-axis label format: 2 decimals shown
	y.tickFormat = ",.2f";

	// Create bar plots, use averaging as aggregation method
	mySeries = myChart.addSeries("variable", dimple.plot.bar);
	mySeries.aggregate = dimple.aggregateMethod.avg;

	// Set plot margins
	myChart.setMargins("10%", "15%", "10%", "10%")

	// Add legend
	myChart.addLegend("10%", "5%", "90%", "10%");

	// Draw chart
	myChart.draw();
}

// Load data and draw the initial chart
d3.csv("data/wineQualityRedsUpdate.csv", draw);


