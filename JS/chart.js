// Speed visialisation - ITEM1
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(speed);

function speed() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Speed', 29876]
    ]);

    var options = {
          width: 400, height: 180,
          yellowFrom:35000, yellowTo: 44999,
          redFrom: 45000, redTo: 50000,
          minorTicks: 8, max: 50000
    };

    var chart = new google.visualization.Gauge(document.getElementById('speed'));
    chart.draw(data, options);
   
    setInterval(function() {
        data.setValue(0, 1, 29876 + Math.round(2000 * Math.random()));
        chart.draw(data, options);
    }, 1000);
}
    // var gaugeOptions = {min: 0, max: 280, yellowFrom: 200, yellowTo: 250,
    //   redFrom: 250, redTo: 280, minorTicks: 5};
    // var gauge;


// KM travelled visualisation- ITEM2
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Travelled km'],
          ['Mon',  500],
          ['Tues',  990],
          ['Wed',  900],
          ['Thu',  1030],
          ['Fri',  900],
          ['Sat',  1200],
          ['Sun',  1050]
        ]);

        var options = {
          title: '',
          hAxis: {title: 'Day of the week',  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Travelled kilometers', minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

// // // Water left visualisation- ITEM3
//     google.charts.load("current", {packages:['corechart']});
//     google.charts.setOnLoadCallback(drawChart);
//     function drawChart() {
//       var data = google.visualization.arrayToDataTable([
//         ["Element", "Contents in %", { role: "style" } ],
//         ["Water", 95, "blue"],
//       ]);

//       var view = new google.visualization.DataView(data);
//       view.setColumns([0, 1,
//                        { calc: "stringify",
//                          sourceColumn: 1,
//                          type: "string",
//                          role: "annotation" },
//                        2]);

//       var options = {
//         title: "",
//         width: 0,
//         height: 325,
//         bar: {groupWidth: "95%"},
//         legend: { position: "center" },
//       };
//       var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
//       chart.draw(view, options);
//   };

// Pie chart about pie of the day - ITEM4
const pieChart = {
  chart: null,
  data: [
    ['Pies', 'Votes'],
    ['Bananoffee', 11],
    ['Raspberry cheesecake', 9],
    ['Chocolate fudge', 6],
    ['Mocha', 4]
  ],
  element: '#pieChart',
  options: {
    width: 500,
    height: 300,
  }
};

const init = () => {
  pieChart.chart = new google.visualization.PieChart(
    document.querySelector(pieChart.element)
  );
  pieChart.chart.draw(
    google.visualization.arrayToDataTable(pieChart.data),
    pieChart.options
  );
};

google.charts.load('current', {
  packages: ['corechart'],
  callback: init
});




