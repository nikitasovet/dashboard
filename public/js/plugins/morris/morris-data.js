// Morris.js Charts sample data for SB Admin template

$(function() {

    console.log('morris data init');
    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016-10',
            FFXV: 2666,

        }, {
	    period: '2016-11',
            FFXV: 3000,

        },{
            period: '2016-12',
            FFXV: 3500,

	}],
        xkey: 'period',
        ykeys: ['FFXV'],
        labels: ['FFXV'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Ignis",
            value: 12
        }, {
            label: "Noctis",
            value: 30
        }, {
            label: "Gladios",
            value: 25
        }, {
            label: "Prompto",
            value: 20
        }],
        resize: true
    });



    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'Lundi',
            geekbench: 136
        }, {
            device: 'Mardi',
            geekbench: 137
        }, {
            device: 'Mercredi',
            geekbench: 275
        }, {
            device: 'Jeudi',
            geekbench: 380
        }, {
            device: 'Vendredi',
            geekbench: 655
        },{
            device: 'samedi',
            geekbench: 655
        },{
            device: 'Dimanche',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Minutes'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
