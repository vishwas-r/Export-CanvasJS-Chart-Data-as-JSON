# Export CanvasJS Chart Data as JSON

This is a plugin for CanvasJS Charts that allows you to export and save CanvasJS Chart's data as JSON.

## CanvasJS
CanvasJS is built from ground up for high performance data visualization and can render millions of data points in a matter of milliseconds. CanvasJS is trusted by 500K+ users in 192 Countries. Customers include Microsoft, NASA, Apple, Intel, Boing, Samsung, BMW, Sony, HP etc


### How to Use?
- Create and Render CanvasJS Chart
- Call CanvasJSDataAsJSON method with chart and filename as parameter
```
var chart = new CanvasJS.Chart("chartContainer", {
    .
    .
    .
    //Chart Options
    .
    .
    .
});
chart.render();

CanvasJSDataAsJSON(chart, "filename");
```

#### When exportEnabled is set to true
![exportEnabled true](https://raw.githubusercontent.com/vishwas-r/Export-CanvasJS-Chart-Data-as-JSON/master/screenshots/export-chart-as-json-dropdown.png)

#### When exportEnabled is set to false
![exportEnabled false](https://raw.githubusercontent.com/vishwas-r/Export-CanvasJS-Chart-Data-as-JSON/master/screenshots/export-chart-as-json-export-false.png)

#### When exportEnabled is set to false & zoomEnabled is set to true
![exportEnabled false](https://raw.githubusercontent.com/vishwas-r/Export-CanvasJS-Chart-Data-as-JSON/master/screenshots/export-chart-as-json-zooming.png)


##### Note: 
- Plugin was last tested with **CanvasJS v2.3.1GA**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.
