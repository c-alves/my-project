<template>
  <div id="chart-container">
     <fusioncharts
          :type="type"
          :width="width"
          :height="height"
          :data-format="dataFormat"
          :data-source="dataSource"
        />  
  </div>
</template>

<script>
// @ is an alias to /src


var jsonify = res => res.json();
var dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/annotating-on-multivariate-chart-data.json"
).then(jsonify);
var schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/annotating-on-multivariate-chart-schema.json"
).then(jsonify);

export default {
  name: 'Home',
  components: {    
  },
  data(){
    return {
    width: "100%",
    height: "400",
    type: "timeseries",
    dataFormat: "json",
    dataSource: {
      chart: {},
      data: [],

      caption: {
        text: "USA - Interest Rate & Inflation Rate"
      },
      subcaption: {
        text: "1980 - 2011"
      },
      yaxis: [
        {
          plot: "Interest Rate",
          format: {
            suffix: "%"
          },
          title: "Interest Rate"
        },
        {
          plot: "Inflation Rate",
          format: {
            suffix: "%"
          },
          title: "Inflation Rate"
        }
      ],
      datamarker: [
        {
          value: "Inflation Rate",
          time: "Sep-1981",
          timeformat: "%b-%Y",
          tooltext:
            "Efforts by the FED ensured that inflation reduces from 10% to 5% gradually."
        },
        {
          value: "Inflation Rate",
          time: "Dec-1986",
          timeformat: "%b-%Y",
          tooltext:
            " “Inflation took it’s worst being in 25 years”, said the Labour Department"
        },
        {
          value: "Inflation Rate",
          time: "Oct-1990",
          timeformat: "%b-%Y",
          tooltext: "Inflation Rate moved out of the desired band of 4% - 6%"
        },
        {
          value: "Inflation Rate",
          time: "Jul-2009",
          timeformat: "%b-%Y",
          tooltext:
            "Inflation Rate went negative as a result of quantity easing measures taken by the FED."
        },
        {
          value: "Interest Rate",
          time: "Mar-1980",
          identifier: "H",
          timeformat: "%b-%Y",
          tooltext:
            "As a part of credit control program, under the leadership of Paul Volcker, the Fed tightened the money supply, allowing the federal fund rates to approach 20 percent."
        },
        {
          value: "Interest Rate",
          time: "Aug-1982",
          identifier: "L",
          timeformat: "%b-%Y",
          tooltext:
            "The FED eases off the monetary brakes, allowing interest rates to fall and the economy to begin a strong recovery."
        },
        {
          value: "Interest Rate",
          time: "Oct-1987",
          identifier: "L",
          timeformat: "%b-%Y",
          tooltext:
            "The FED is forced to ease rate after the stock market crash."
        },
        {
          value: "Interest Rate",
          time: "May-1989",
          identifier: "H",
          timeformat: "%b-%Y",
          tooltext:
            "Liquidity problem forced the Fed to increase rate to nearly 10%."
        },
        {
          value: "Interest Rate",
          time: "Sept-1992",
          identifier: "L",
          timeformat: "%b-%Y",
          tooltext:
            "To fight the jobless economy growth the Fed had to reduce the interest rate to 3%."
        },
        {
          value: "Interest Rate",
          time: "Jun-2003",
          identifier: "L",
          timeformat: "%b-%Y",
          tooltext:
            "Struggling to revive the economy, the FED cuts it’s benchmark rate to 1%."
        },
        {
          value: "Interest Rate",
          time: "Sep-2007",
          identifier: "L",
          timeformat: "%b-%Y",
          tooltext: "Fed started reducing the Federal Fund Rate."
        },
        {
          value: "Interest Rate",
          time: "Dec-2008",
          identifier: "L",
          timeformat: "%b-%Y",
          tooltext:
            "Fed reduced the interest rates to sub 0.25% to manage the menace of longest economic downturn since World War 2"
        }
      ]
    }
  

    }
  },   
   mounted: function() {
     console.log("Hi I am")
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      console.log("Hi I a 2")
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      this.dataSource.data = fusionTable;
    });
  }
}
</script>
