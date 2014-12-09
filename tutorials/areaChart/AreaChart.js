//create an area chart with two or more data sets
function areaChart() {
  // These scales are Plottable wrappers for a d3.scale object.
  // Like D3 scales, they manage a mapping from data to visual properties; pixel positions in this case
  // Unlike D3 scales, they automatically set their domain and range, and have event handling to update dependent components on changes
  var xScale = new Plottable.Scale.Ordinal();
  var yScale = new Plottable.Scale.Linear();
  // The Axes and LinePlot are all Components, meaning they take up visual space and are placed by the layout engine
  var xAxis = new Plottable.Axis.Category(xScale, "bottom");
  var yAxis = new Plottable.Axis.Numeric(yScale, "left");

  var areaPlot1 = new Plottable.Plot.Area(areaData1, xScale, yScale);
  //.addDataset(areaData1);
  var areaPlot2 = new Plottable.Plot.Area(areaData2, xScale, yScale);
  //.addDataset(areaData2);
  var renderGroup = new Plottable.Component.Group([areaPlot1, areaPlot2]);
    // Now we'll make a Table to organize the layout of the components. The first row will have a yAxis and renderer; the second will
    // only have the xAxis, and it will be aligned to the column of the renderer.
    // The yAxis is fixed-width and the xAxis is fixed-height, so the renderer will naturally expand to take up all free space
  var areaChart = new Plottable.Component.Table([
     [yAxis, renderGroup],
     [null, xAxis]
     ]);

    areaChart.renderTo("#areaChart");
  }
