new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["2016", "2017", "2018(jan-juni)"],
      datasets: [
        {
          label: "Misstänkta totalt",
          backgroundColor: "Blue",
          data: [3338,3343,1757]
        }, {
          label: "Misstänkta utlänningar",
          backgroundColor: "Grey",
          data: [692,574,291]
        }, {
          label: "Misstänkta asylsökare",
          backgroundColor: "Black",
          data: [161,129,71]
        }
        ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});