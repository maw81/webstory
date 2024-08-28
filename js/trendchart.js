var options = {
    series: [{
      name: "Desktops",
      data: [115, 116, 71, 44, 41.3, 26.67]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'ASFR Perempuan Umur 15-19 Tahun di Indonesia',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', '#f3f3f3'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['SP1971', 'SP1980', 'SP1990', 'SP2000', 'SP2010', 'SP2020'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chartId"), options);
  chart.render();
