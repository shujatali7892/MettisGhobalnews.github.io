(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('BR100', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#b55b22',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#b55b22'],
                        [0.9, '#ebb08a']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('BR30', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#b55b22',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#b55b22'],
                        [0.9, '#ebb08a']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('KSE100', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#b55b22',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#b55b22'],
                        [0.9, '#ebb08a']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('KSE30', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#b55b22',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#b55b22'],
                        [0.9, '#ebb08a']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('KMI30', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#b55b22',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#b55b22'],
                        [0.9, '#ebb08a']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();