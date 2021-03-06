DATA VISUALIZATION:
What are good wines made of?
Juho Salminen

SUMMARY
I decided to visualize the relationships between chemical properties of Portuguese Vinho Verde red wines and their subjective quality I had discovered from the dataset collected by Cortez et al. Quality of the wines correlates with amount of alcohol, fixed and volatile acidity, and amounts of citric acid, sulphates and sulfur dioxide. I wanted to quickly demonstrate the user of the chart that there are consistent patterns between chemical properties and wine quality.

DESIGN
I decided to use bar chart showing the average values for different quality wines. This choice hides quite lot of details on individual wines, but emphasises the underlying patterns in the data. As such I considered it a good tradeoff: the users could quickly gain an understanding of the main trends without drowning into the details. X-axis is for different wine qualities and y-axis measures the chemical properties. Axis labels and short descriptive texts explain the displayed variables. I found the default dimple aesthetics quite pleasant and did not modify them, except for increasing the font size slightly. I chose to use wine red (#990012) in the bar chart because it fits the context and as a muted tone does not stand out too much and annoy the eyes. The web page where I found the color code suggested #009987 as a good choice for a complementary color, so I used that in the main headline of the page. To make the chart interactive I added a set of buttons that allow the user to investigate different features of the dataset, while the chart keeps its familiar format. The chart update was delayed by 1000 ms to make the transition smoother. Finally, I added a short, changing explanations below the chart.

Changes after collecting feedback:
- Fixed initially missing chart title and description (typo in the code)
- Removed the mention of the number of wines in the dataset from the introduction text
- Moved description text above the chart to make it more visible
- Tried adding a picture of wines to make the visualization more appealing, but it only made the visualization more cluttered and took attention away from the main chart.

Changes after Udacity review:
- Re-processed the dataset with R. New quality categories: Poor (3-4), Mediocre (5-6), and Good (7-8). Scaled the other variables to have mean zero and standard deviation of one.
- Removed button animations and built a chart that shows all the variables at the same time.
- Moved variable descriptions below the chart. They are all shown at the same time now.
- Changed the main heading color to better match the chart color scheme. Using wine red (#990012).

FEEDBACK

Feedback from L:
- Remember the Data is beautiful? I don't like to read, there's too much numbers in the beginning. A more visual ingress would be nicer. For example in the book there was different coffees represented as cups filled with different amounts of coffee and milk... for espresso and latte or other types.
- Animation is cool!
- The chart title is missing in the beginning.

Feedback from SJ:
- This is funny! I don't know how to improve it. Maybe the written descriptions below the chart could be represented with pictures?

I noticed that this user did not pay attention to the descriptions below the chart, as the description was often below the screen when pressing the buttons.

Feedback from A:
- It wasn't so clear for me, why the orders in X axes changes by selecting different categories in the first glance
- Visualization is okay with me (bars are red) but highly dependent on the audience the overall infographics!
- I am not a frequent wine drinker so for me to look at the charts and visualizations first of all is not a point of interest and the chemical details and explanations are still vague due to lack of drinking experience and knowledge.
- Overall, I assume for a frequent wine user there is enough information provided for better decision for the next drinking experience.

Feedback from Udacity review:
...But this visualization contains 7 separate charts, each chart has a different y-axis variable, and each chart is shown separately. So I as the chart reader have to click from chart to chart. By the time I click through the charts and get to "total sulfur dioxide," I have to remember if wine quality 8 had a lot of alcohol or a little alcohol. But it's hard to remember because that was 7 charts ago. So I either have to write down what qualities make a great wine as I go through the visualizations or I have to keep clicking through the charts until I memorize it. I'd rather the chart maker encode the comparison for me so that I don't have to think too much.

Also, the data set is a little strange because it says wines are ranked from 1-10, but then the red wine data set only has ranks from 3-8. But people are used to thinking of rates from 1-10 or 1-5. It might be good to find a way to deal with this, which I'll discuss...

Resources:

Computer Hope: HTML Color code for #990012:
http://www.computerhope.com/cgi-bin/htmlcolor.pl?c=990012

d3 documentation:
https://github.com/mbostock/d3/wiki/API-Reference

Dimple documentation:
http://dimplejs.org/

P. Cortez, A. Cerdeira, F. Almeida, T. Matos and J. Reis.
Modeling wine preferences by data mining from physicochemical properties.
In Decision Support Systems, Elsevier, 47(4):547-553. ISSN: 0167-9236.

Red wine quality exploration:
https://github.com/jsalminen/RedWineQuality

Flickr: Sherry wines at Fareham wine cellar by Dominic Lockyer
https://flic.kr/p/pc3tHx

Stackoverflow:
http://stackoverflow.com/

Wine quality dataset description:
https://s3.amazonaws.com/udacity-hosted-downloads/ud651/wineQualityInfo.txt