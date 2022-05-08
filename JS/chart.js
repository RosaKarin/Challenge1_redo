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
    // title: 'Poll results for pie of the day',
    width: 500,
    height: 300
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

// https://developers.google.com/chart/interactive/docs/quick_start
google.charts.load('current', {
  packages: ['corechart'],
  callback: init
});



