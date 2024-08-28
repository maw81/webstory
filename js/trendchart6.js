var options = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021',
      '2022'
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chartIdenam"), options);
  chart.render();