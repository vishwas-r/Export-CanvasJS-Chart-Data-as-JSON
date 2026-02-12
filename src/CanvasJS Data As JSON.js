(function () {
    var CanvasJS = window.CanvasJS || CanvasJS ? window.CanvasJS : null;

    if (CanvasJS == null)
        CanvasJS = require("@canvasjs/charts")

    if (CanvasJS) {
        CanvasJS.Chart.prototype.exportAsJSON = function (fileName) {
            CanvasJSDataAsJSON(this, fileName);
        }

        var chartRender = CanvasJS.Chart.prototype.render;
        CanvasJS.Chart.prototype.render = function (options) {
            var result = chartRender.apply(this, arguments);
            this.exportAsJSON();
            return result;
        }
    }

    function CanvasJSDataAsJSON(chart, fileName) {
        if (chart.exportEnabled && chart._dropdownMenu) {
            var exportJSON = chart._dropdownMenu.getElementsByClassName("canvasjs-chart-json-export")[0];

            if (!exportJSON) {
                exportJSON = document.createElement('div');
                exportJSON.setAttribute("class", "canvasjs-chart-json-export");
                var text = document.createTextNode("Save as JSON");
                exportJSON.setAttribute("style", "padding: 12px 8px; cursor: pointer; background-color: " + chart.toolbar.itemBackgroundColor + "; color: " + chart.toolbar.fontColor);
                exportJSON.appendChild(text);
                exportJSON.addEventListener("mouseover", function () {
                    exportJSON.setAttribute("style", "padding: 12px 8px; cursor: pointer; background-color: " + chart.toolbar.itemBackgroundColorOnHover + "; color: " + chart.toolbar.fontColorOnHover);
                });
                exportJSON.addEventListener("mouseout", function () {
                    exportJSON.setAttribute("style", "padding: 12px 8px; cursor: pointer; background-color: " + chart.toolbar.itemBackgroundColor + "; color: " + chart.toolbar.fontColor);
                });
                exportJSON.addEventListener("click", function () {
                    parseJSON({
                        filename: (fileName || "chart-data") + ".json",
                        chart: chart
                    })
                });

                chart._dropdownMenu.appendChild(exportJSON);
            }

            if (exportJSON.parentNode === chart._dropdownMenu)
                chart._dropdownMenu.appendChild(exportJSON);
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

    function parseJSON(args) {
        var filename;
        var jsonData;
        jsonData = convertChartDataToJSON(args.chart.options);

        if (jsonData == null) return;
        filename = args.filename || 'chart-data.json';
        if (!jsonData.match(/^application:json/i)) {
            jsonData = 'data:text/json;charset=utf-8,' + jsonData;
        }
        downloadFile(jsonData, filename);
    }

    function downloadFile(extData, filename) {
        var data = encodeURI(extData);
        var link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        document.body.appendChild(link); // Required for FF
        link.click();
        document.body.removeChild(link);
    }

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = CanvasJSDataAsJSON;
    }
    else {
        if (typeof define === 'function' && define.amd) {
            define([], function () {
                return CanvasJSDataAsJSON;
            });
        }
        else {
            window.CanvasJSDataAsJSON = CanvasJSDataAsJSON;
        }
    }
})();
