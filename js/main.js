Chart.defaults.global.legend.display = false;

const ctx = document.getElementById('myChart').getContext('2d')

const data = database;

const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map(index =>
            index.day
        ),
        datasets: [
            {
                data: data.map(index =>
                    index.amount
                ),
                backgroundColor: [
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(186, 34%, 60%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)'
                ],
            }
        ]
    },
    options: {
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                }
            ],
            yAxes: [
                {
                    display: false,
                    gridLines: {
                        display: false,
                    }
                }
            ],
        },
        borderSkipped: false,
        cornerRadius: 7,
    }
});