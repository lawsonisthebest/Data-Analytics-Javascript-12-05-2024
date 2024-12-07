const viewsDay1 = document.querySelector(".viewsDay1");
const viewsDay2 = document.querySelector(".viewsDay2");
const viewsDay3 = document.querySelector(".viewsDay3");
const viewsDay4 = document.querySelector(".viewsDay4");
const viewsDay5 = document.querySelector(".viewsDay5");
const viewsDay6 = document.querySelector(".viewsDay6");
const viewsDay7 = document.querySelector(".viewsDay7");

const charts = document.querySelector(".charts");
charts.style = "opacity: 0";

const totalViews = document.querySelector('.totalViews');
const totalLikes = document.querySelector('.totalLikes');
const totalComments = document.querySelector('.totalComments');

const likesInp = document.querySelector(".likes");
const commentsInp = document.querySelector(".comments");

const impressionsDay1 = document.querySelector(".impressionsDay1");
const impressionsDay2 = document.querySelector(".impressionsDay2");
const impressionsDay3 = document.querySelector(".impressionsDay3");
const impressionsDay4 = document.querySelector(".impressionsDay4");
const impressionsDay5 = document.querySelector(".impressionsDay5");
const impressionsDay6 = document.querySelector(".impressionsDay6");
const impressionsDay7 = document.querySelector(".impressionsDay7");

function submit(){
  charts.style = "opacity: 1";

  var impressionsData = [impressionsDay1.value, impressionsDay2.value, impressionsDay3.value, impressionsDay4.value, impressionsDay5.value, impressionsDay6.value, impressionsDay7.value];
  var viewsData = [viewsDay1.value, viewsDay2.value, viewsDay3.value, viewsDay4.value, viewsDay5.value, viewsDay6.value, viewsDay7.value];
  
  totalViews.innerHTML = parseInt(viewsDay1.value) + parseInt(viewsDay2.value) + parseInt(viewsDay3.value) + parseInt(viewsDay4.value) + parseInt(viewsDay5.value) + parseInt(viewsDay6.value) + parseInt(viewsDay7.value)
  totalLikes.innerHTML = likesInp.value;
  totalComments.innerHTML = commentsInp.value;

  var areaChartOptions = {
    chart: {
      height: '100%',
      width: '100%',
      type: "area",
      foreColor: 'white',
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "Total",
        data: impressionsData
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 1,
        opacityTo: .75,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "Day 5",
        "Day 6",
        "Day 7"
      ],
      labels: {
        style: {
            fontSize: '1.5vw',
        },
      }
    },
    yaxis: {
      labels: {
        style: {
            fontSize: '1.5vw'
        }
      }
    },
  };
  
  var pieChartOptions = {
    chart: {
      height: '100%',
      width: '100%',
      type: "area",
      foreColor: 'white',
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "Total",
        data: viewsData
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 1,
        opacityTo: .75,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "Day 5",
        "Day 6",
        "Day 7"
      ],
      labels: {
        style: {
            fontSize: '1.5vw',
        },
      }
    },
    yaxis: {
      labels: {
        style: {
            fontSize: '1.5vw'
        }
      }
    },
  }
  
  console.log(viewsData);
  
  
  var areaChart = new ApexCharts(document.querySelector(".area-chart"), areaChartOptions);
  var pieChart = new ApexCharts(document.querySelector(".pie-chart"), pieChartOptions);
  
  pieChart.render();
  areaChart.render();
}

function clearData(){
  location.reload();
}