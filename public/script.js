
var tl=gsap.timeline();

tl.from("#top-left,#top-right",{
  y:-200,
  duration:1,
  opscity:0,
  stagger:0.6
})


tl.from("#midhero h1",{
  y:200,
  duration:1,
  stagger:0.6
})

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
})



Shery.makeMagnet("#top-left,#top-right", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});



// Shery.textAnimate("#textmid", {
//   style: 2,
//   y: 10,
//   delay: 0.1,
//   duration: 1,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   multiplier: 0.1,
// });


const confirmfile=document.getElementById('confirmfile').addEventListener('click',()=>{
  Papa.parse(document.getElementById('uploadfile').files[0],{
    download:true,
    header:true,
    skipEmptyLines:true,
    complete:function(results){
      console.log(results);
    }
  });
})


var confirm=document.querySelector("#confirmfile");
var line=document.querySelector("#barline");
var n=document.querySelector("#incnum");
var txt=document.querySelector("#progressbar h3");

confirm.addEventListener("click",function(){
  var count=0;
  txt.style.opacity=1;
  var int=setInterval(function(){
    if(count==100){
      txt.textContent="Uploaded suscessfully"
      clearInterval(int);
    }
    line.style.width=count+"%";
    n.textContent=count;
    count++;
  },30)
})

function submitForm(event) {
  event.preventDefault();  
  const content = document.getElementById("desc").value;  

  fetch("/createfile", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: content })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network error');
      }
      return response.text();
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Error occurred');
  });
}

var submit = document.querySelector("#submitbutton");
var clear = document.querySelector("#desc");


submit.addEventListener("click", async function() {
  await someAsyncFunction();
  
  clear.value = "";
});

async function someAsyncFunction() {
  return new Promise(resolve => setTimeout(resolve, 1000));
};



const ctx = document.getElementById('chart').getContext('2d');
const xlables = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlables,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'yellow',
                'orange',
                'red',
                'black',
                'blue',
                'violet'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                },
                color: '#fff',
            }
        }
    },
    plugins: [ChartDataLabels]
});
