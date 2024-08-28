var options = {
    series: [{
      name: "Laki-Laki",
      data: [69.62, 70.86, 70.98, 71.37, 72.1, 72.44, 71.63]}, 
      {  name: "Perempuan",
        data: [70.83, 71.42, 71.99, 72.36, 72.72, 73.09, 73.15]}, 
        {  name: "Laki-Laki+Perempuan",
            data: [72.11, 72, 73.04, 73.41, 73.36, 73.78, 74.75]}],
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
    text: ' ',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', '#f3f3f3'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['2016', '2017', '2018', '2019', '2021', '2022','2023'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chartIdlima"), options);
  chart.render();
