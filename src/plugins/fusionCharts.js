import Vue from "vue"
import VueFusionCharts from "vue-fusioncharts"
import FusionCharts from "fusioncharts"
import ZoomScatter from "fusioncharts/fusioncharts.zoomscatter"
import TimeSeries from "fusioncharts/fusioncharts.timeseries"
import PowerCharts from "fusioncharts/fusioncharts.powercharts"
import OverlappedColumn2D from "fusioncharts/fusioncharts.overlappedcolumn2d"
import Charts from "fusioncharts/fusioncharts.charts"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
import * as excel from "fusioncharts/fusioncharts.excelexport"

Vue.use(
  VueFusionCharts,
  ZoomScatter,
  TimeSeries,
  PowerCharts,
  OverlappedColumn2D,
  Charts,
  FusionTheme,
  excel
)