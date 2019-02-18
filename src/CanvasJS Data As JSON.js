function CanvasJSDataAsJSON(chart, fileName) {
	var toolBar = document.getElementsByClassName("canvasjs-chart-toolbar")[0];
	if (chart.options.exportEnabled) {
		var exportJSON = document.createElement('div');
		var text = document.createTextNode("Save as JSON");
		exportJSON.setAttribute("style", "padding: 12px 8px; background-color: white; color: black")
		exportJSON.appendChild(text);
		exportJSON.addEventListener("mouseover", function() {
			exportJSON.setAttribute("style", "padding: 12px 8px; background-color: #2196F3; color: white")
		});
		exportJSON.addEventListener("mouseout", function() {
			exportJSON.setAttribute("style", "padding: 12px 8px; background-color: white; color: black")
		});
		exportJSON.addEventListener("click", function() {
			downloadJSON({
				filename: (fileName || "chart-data") + ".json",
				chart: chart
			})
		});
    
		toolBar.lastChild.appendChild(exportJSON);
	} else {
		var base64Img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4wISBxkv6UqNPAAAABN0RVh0U29mdHdhcmUAUGhvdG9TY2FwZYB1kb8AAAFMSURBVDhP3dM7LwVBGMbxiUvE/VpqJKIQhdAplKg4CQoF30JCpdAqSHwBLaFW6IWGIBKFOAp3CSHRkPB/ZncnY8+cwxEaT/LLzszOO3ubNf82ZRiMmr+XY6yiwvYCaUd3Sh864acBXTjEO7bRBhddYQWv0ARfFr1QhrCBW6TnXWMANpqUniCbqEcl9GihOWnTcJ0HTGIcw1CacAS/qJAXuM6FOl5KsAO/oJAD6N26gStUayDOLPwC0R2cYh/P8ZisoRY2yaC/YB3ukZzTex5FK7QHlT3o3JzteQktmIHGdqGtE8oWpqKmaUFV1AwvuIx1lNtebkrRGDXNCE7QbHsktGBPfPwqE1DtE3Lu8BJ5f6M8WUJS6z5osqDuUL+VHvO7FqDaG9TA5g4afMM5zorwCNVqD+sCNv3wt8hPzOBTOjAPfd1iLGIMfxVjPgAX3Z+XV+s1aQAAAABJRU5ErkJggg==";
		var exportButton = document.createElement('button');
		var chartBound = chart.container.getBoundingClientRect();

		exportButton.style.cssText = "position:absolute;display: inline-block;padding: 0px 4px;width: 35px;height: 27px;cursor: pointer;text-align: center;text-decoration: none;background-color: #fff;border: 1px solid rgb(33, 150, 243);left:" + (chartBound.right - (chart.options.zoomEnabled ? 115 : 60)) + "px; top:" + (chartBound.top + 2) + "px";
		var img = document.createElement("IMG");
		img.setAttribute("src", base64Img);
		exportButton.appendChild(img);
		exportButton.addEventListener("mouseover", function() {
			this.style.cssText = this.style.cssText + "background-color: rgb(33, 150, 243)";
		});
		exportButton.addEventListener("mouseout", function() {
			this.style.cssText = this.style.cssText + "background-color: #fff;";
		});
		exportButton.addEventListener("click", function() {
			downloadJSON({
				filename: (fileName || "chart-data") + ".json",
				chart: chart
			})
		});

		chart.container.parentNode.insertBefore(exportButton, chart.container.nextSibling);
	}
};

function convertChartDataToJSON(args) {
	var result, data;
	data = args.data || null;
  
	if (data == null || !data.length) {
		return null;
	}
  
  result = JSON.stringify(data);
	return result;
}

function downloadJSON(args) {
	var data, filename, link;
	var jsonData;	
	jsonData = convertChartDataToJSON(args.chart.options);
	
	if (jsonData == null) return;
	filename = args.filename || 'chart-data.json';
	if (!jsonData.match(/^application:json/i)) {
		jsonData = 'data:text/json;charset=utf-8,' + jsonData;
	}
	data = encodeURI(jsonData);
	link = document.createElement('a');
	link.setAttribute('href', data);
	link.setAttribute('download', filename);
	document.body.appendChild(link); // Required for FF
	link.click();
	document.body.removeChild(link);
}
