
<template>
  <div class="word">
  <canvas id="myChart"></canvas>
</div>
</template>
<script>
// import { PieController } from 'chart.js/dist';
// import { Chart } from 'chart.js/dist';

 export default {
    data(){
      return{
        
      }

    },mounted(){
        const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },
//     responsive: true,
//   }
// });
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['bitcoin', 'Ethereum', 'ada'],
    datasets: [{
      data: [300, 150, 80],
      backgroundColor: ['#61A0AF', '#F06C9B', '#96C9DC']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        caretPadding: 4
      }
    }
  }
});



    }
 }
</script>

<style scoped>
.word{
    width: 20%;
    height: 20%;
    background-color: aliceblue;
}
</style>