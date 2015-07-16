
// Create empty global variable for the chart object
var myChart = null;

// List chart axis labels associated with different features
var axisLabels = {"alcohol": "Average alcohol % vol",
				  "volatile.acidity": "Average acetic acid g/l",
				  "fixed.acidity": "Average tartaric acid g/l",
				  "citric.acid": "Average citric acid g/l",
				  "sulphates": "Average potassium sulphate g/l",
				  "free.sulfur.dioxide": "Average sulfur dioxide mg/l",
				  "total.sulfur.dioxide": "Average sulfur dioxide mg/l"};

// List chart description texts associated with different features
var descriptions = {"alcohol": "Red wines typically have 9 to 14 percent alcohol. Better wines tend to be stronger.",
				    "volatile.acidity": "Too much of acetic acid in wine can lead to an unpleasant, vinegar-like taste.",
				    "fixed.acidity": "Most of the acids in wine are non-volatile, which means they do not evaporate easily.",
				    "citric.acid": "Small amounts of citric acid can add freshness to the wine.",
				    "sulphates": "Potassium sulphate is an wine additive that can increase levels of sulfur dioxide in the wine. The gas acts as a preservative.",
				    "free.sulfur.dioxide": "Free form of sulfur dioxide gas prevents microbe growth and oxidation of the wine.",
				    "total.sulfur.dioxide": "Low amounts of sulfur dioxide in wine are mostly undetectable, but at larger concentrations the taste and nose of the wine can be affected."};

// List chart title texts associated with different features
var titles = {"alcohol": "Alcohol",
			  "volatile.acidity": "Volatile acids",
			  "fixed.acidity": "Fixed acids",
			  "citric.acid": "Citric acid",
			  "sulphates": "Sulphates",
			  "free.sulfur.dioxide": "Free-form sulfur dioxide",
			  "total.sulfur.dioxide": "Total amount of sulfur dioxide"};

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

	// Set y-axis label format: 2 decimals shown
	y.tickFormat = ",.2f";

	// Create bar plots, use averaging as aggregation method
	mySeries = myChart.addSeries(null, dimple.plot.bar);
	mySeries.aggregate = dimple.aggregateMethod.avg;

	// Draw chart
	myChart.draw();

	// Add description text
	d3.select("div.description")
		.append("p")
		.attr("class", "description")
		.text(descriptions["alcohol"]);

	// Add chart title
	d3.select("div.chart-title")
		.append("h2")
		.attr("class", "chart-title")
		.text(titles["alcohol"]);
}

// Function to update the chart in response to button clicks
function update_chart(variable) {
	// Update y-axis measure and title according to new variable
	myChart.axes[1].measure = variable;
	myChart.axes[1].title = axisLabels[variable];

	// Re-draw the chart with 1000ms delay
	myChart.draw(1000);

	// Remove old description text
	d3.select("p.description")
		.remove();
	// Add new description text
	d3.select("div.description")
		.append("p")
		.attr("class", "description")
		.text(descriptions[variable]);

	// Remove old chart title
	d3.select("h2.chart-title")
		.remove();
	// Add new chart title
	d3.select("div.chart-title")
		.append("h2")
		.attr("class", "chart-title")
		.text(titles[variable]);
}

// Load data and draw the initial chart
d3.csv("data/wineQualityReds.csv", draw);


