var options = {
    series: [{
    name: 'SMA Keatas',
    data: [1, 2, 1]
  }, {
    name: 'SMP Kebawah',
    data: [2, 3, 2]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Perkotaan', 'Perdesaan', 'Perkotaan+Perdesaan'],
  },
  yaxis: {
    title: {
      text: ''
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "% " + val + " percents"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chartIddua"), options);
  chart.render();