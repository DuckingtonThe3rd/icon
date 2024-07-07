document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('donutChart').getContext('2d');
    const data = {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#0056ff', '#d9d9d9'],
            borderWidth: 0
        }],
        labels: ['Filled', 'Remaining']
    };

    const options = {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    const donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    function animateChart() {
        donutChart.data.datasets[0].data = [100, 0];
        donutChart.update();

        setTimeout(() => {
            donutChart.data.datasets[0].data = [0, 100];
            donutChart.update();
        }, 2000);
    }

    setInterval(animateChart, 4000);
    animateChart();
});
