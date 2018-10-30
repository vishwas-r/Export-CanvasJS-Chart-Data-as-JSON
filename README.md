# Export CanvasJS Chart Data as JSON

This plugin allows you to export and save CanvasJS Chart's data as JSON.

## CanvasJS
CanvasJS is an HTML5 & JavaScript based Charting Library that runs on all modern devices including iPhone, Android, Desktops, etc. Charts are beautiful and API is very simple to use.

### CanvasJS Features:
- Simple API and easy to use
- Supports 30+ different types of Charts / Graphs
- 10x faster than conventional Flash / SVG based Charting Libraries
- Comes with Several beautiful looking themes
- Well Maintained and Updated Documentation
- Works across browsers (Chrome, Firefox, Safari, IE8+)
- Can be integrated with Serverside and Frontend technologies like ASP.Net, PHP, Spring MVC, JSP, jQuery, Angular, React, etc.


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

##### Note: 
- Plugin was last tested with **CanvasJS v2.2GA**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.
