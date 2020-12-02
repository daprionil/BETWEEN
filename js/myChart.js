var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['PHP', 'JAVA', 'JavaScript', 'Python', 'C++', 'C#', 'Otros'],
        datasets: [{
            data: [7.37, 21.42, 8.26, 25.95, 6.31, 7.62, 23.07],
            backgroundColor: [
                'rgba(0, 185, 255,1)',
                'rgba(255, 0, 0  , 1)',
                'rgba(255, 228, 0 , 1)',
                'rgba(0, 179, 43 , 1)',
                'rgba(0, 116, 255 , 1)',
                'rgba(124, 0, 255 , 1)',
                'rgba(255, 0, 240 , 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255 ,1)',
                'rgba(255, 255, 255 , 1)',
                'rgba(255, 255, 255 , 1)',
                'rgba(255, 255, 255 , 1)',
                'rgba(255, 255, 255 , 1)',
                'rgba(255, 255, 255 , 1)',
            ],
            borderWidth: 2
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },


    },

});