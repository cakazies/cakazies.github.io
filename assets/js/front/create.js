var result = new Array()
var category = new Array()
var software = new Array()
var bisnis = new Array()
var entertain = new Array()
var communication = new Array()
var utilities = new Array()
var mostApps = new Array()
var mostAppsTime = new Array()
let appSoftware;
var timeSoftware = 0;
var timeBisnis = 0;
var timeEntertain = 0;
var timeCommunication = 0;
var timeUtilities = 0;
var countSouftware = 0;
var countBisnis = 0;
var countEntertain = 0;
var countCommunication = 0;
var countUtilities = 0;
var countAll = 0 ;

// get data from recuetime
var t = new Date()
var today = new Date().toJSON().slice(0,10);
t.setDate(t.getDate() - 30);
var yesterday = t.toJSON().slice(0,10)


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.rescuetime.com/anapi/data?key=B63tHs0dvkidjPYvvRtFjDxg7A1boJhPOccZJ1jE&restrict_kind=activity&restrict_begin="+yesterday+"&restrict_end="+today+"&format=json"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url)
.then(response => response.text())
.then(contents => {
    data = JSON.parse(contents)
    for (let i = 0; i < data.rows.length; i++) {
        if (data.rows[i][5] == "2") {
            timeSoftware = timeSoftware + data.rows[i][1]
            software[countSouftware] = data.rows[i][3]
            countSouftware++;
        }else if (data.rows[i][5] == "1") {
            timeBisnis = timeBisnis + data.rows[i][1]
            bisnis[countBisnis] = data.rows[i][3]
            countBisnis++;
        }else if (data.rows[i][5] == "-2") {
            timeEntertain = timeEntertain + data.rows[i][1]
            entertain[countEntertain] = data.rows[i][3]
            countEntertain++;
        }else if (data.rows[i][5] == "-1") {
            timeCommunication = timeCommunication + data.rows[i][1]
            communication[countCommunication] = data.rows[i][3]
            countCommunication++;
        }else if (data.rows[i][5] == "0") {
            timeUtilities = timeUtilities + data.rows[i][1]
            utilities[countUtilities] = data.rows[i][3]
            countUtilities++;
        }
        countAll = countAll + data.rows[i][1]
    }

    mostApps[0] = data.rows[0][3]
    mostApps[1] = data.rows[1][3]
    mostApps[2] = data.rows[2][3]
    mostApps[3] = data.rows[3][3]
    mostApps[4] = data.rows[4][3]
    mostAppsTime[0] = (data.rows[0][1]/3600).toLocaleString()
    mostAppsTime[1] = (data.rows[1][1]/3600).toLocaleString()
    mostAppsTime[2] = (data.rows[2][1]/3600).toLocaleString()
    mostAppsTime[3] = (data.rows[3][1]/3600).toLocaleString()
    mostAppsTime[4] = (data.rows[4][1]/3600).toLocaleString()
    result['software'] = (timeSoftware/3600).toLocaleString()
    result["bisnis"] = (timeBisnis/3600).toLocaleString()
    result["entertain"] = (timeEntertain/3600).toLocaleString()
    result["communication"] = (timeCommunication/3600).toLocaleString()
    result["utilities"] = (timeUtilities/3600).toLocaleString()
    category["software"] = software
    category["bisnis"] = bisnis
    category["entertain"] = entertain
    category["communication"] = communication
    category["utilities"] = utilities
    setGrafik(result, mostApps, mostAppsTime)

})
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


// $.ajax({
//     url: "https://www.rescuetime.com/anapi/data?key=B63tHs0dvkidjPYvvRtFjDxg7A1boJhPOccZJ1jE&restrict_kind=activity&restrict_begin="+yesterday+"&restrict_end="+today+"&format=json",
//     method: "GET",
//     solrUrl: 'http://www.mywebapp.com/solr',
//     // headers: {  'Access-Control-Allow-Origin': '*' },
//     success: function(res) {
//         data = JSON.parse(JSON.stringify(res))
//         for (let i = 0; i < data.rows.length; i++) {
//             if (data.rows[i][5] == "2") {
//                 timeSoftware = timeSoftware + data.rows[i][1]
//                 software[countSouftware] = data.rows[i][3]
//                 countSouftware++;
//             }else if (data.rows[i][5] == "1") {
//                 timeBisnis = timeBisnis + data.rows[i][1]
//                 bisnis[countBisnis] = data.rows[i][3]
//                 countBisnis++;
//             }else if (data.rows[i][5] == "-2") {
//                 timeEntertain = timeEntertain + data.rows[i][1]
//                 entertain[countEntertain] = data.rows[i][3]
//                 countEntertain++;
//             }else if (data.rows[i][5] == "-1") {
//                 timeCommunication = timeCommunication + data.rows[i][1]
//                 communication[countCommunication] = data.rows[i][3]
//                 countCommunication++;
//             }else if (data.rows[i][5] == "0") {
//                 timeUtilities = timeUtilities + data.rows[i][1]
//                 utilities[countUtilities] = data.rows[i][3]
//                 countUtilities++;
//             }
//             countAll = countAll + data.rows[i][1]
//         }

//         mostApps[0] = data.rows[0][3]
//         mostApps[1] = data.rows[1][3]
//         mostApps[2] = data.rows[2][3]
//         mostApps[3] = data.rows[3][3]
//         mostApps[4] = data.rows[4][3]
//         mostAppsTime[0] = (data.rows[0][1]/3600).toLocaleString()
//         mostAppsTime[1] = (data.rows[1][1]/3600).toLocaleString()
//         mostAppsTime[2] = (data.rows[2][1]/3600).toLocaleString()
//         mostAppsTime[3] = (data.rows[3][1]/3600).toLocaleString()
//         mostAppsTime[4] = (data.rows[4][1]/3600).toLocaleString()
//         result['software'] = (timeSoftware/3600).toLocaleString()
//         result["bisnis"] = (timeBisnis/3600).toLocaleString()
//         result["entertain"] = (timeEntertain/3600).toLocaleString()
//         result["communication"] = (timeCommunication/3600).toLocaleString()
//         result["utilities"] = (timeUtilities/3600).toLocaleString()
//         category["software"] = software
//         category["bisnis"] = bisnis
//         category["entertain"] = entertain
//         category["communication"] = communication
//         category["utilities"] = utilities
//         setGrafik(result, mostApps, mostAppsTime)
//     },
//     error: function (request, error) {
//         console.log(" Can't do because: " + error);
//     }
// });

// this for github get data from github
$(document).ready(function(){
    let html = ""
    let data
    $.ajax({
        url: "https://api.github.com/users/cakazies/repos",
        jsonp: true,
        method: "GET",
        dataType: "json",
        success: function(res) {
            data = JSON.parse(JSON.stringify(res))
            for (let i = 0; i < 16; i++) {
                html += '<div class="portfolio-item col-xs-6 col-sm-4 col-md-3" ><div class="portfolio-bg"><div class="portfolio"><h4 style="margin:10px;">'+data[i].name+'</h4><p style="margin:10px;">'+data[i].description+'</p><br><a style="margin:10px;" target="_blank" href="'+data[i].html_url+'"><i class="fa fa-link" aria-hidden="true"></i>Link</a></div></div></div>'
                // console.log(data[i].name + " and " + data[i].html_url + " and " + data[i].description)
            }
            $("#githubcom").html(html)
        }
    });
    

    $.getJSON( "data/app.json", function( data ) {
        let html2 = ""
        for (let i = 0; i < data.data.length; i++) {
            html2 += '<div class="portfolio-item col-xs-6 col-sm-4 col-md-3" ><div class="portfolio-bg"><div class="portfolio"><div class="tt-overlay"></div><div class="links">'
            if (data.data[i].link != null ){
                html2 += '<a target="_blank" rel="noopener" href="'+data.data[i].link+'"><i class="fas fa-external-link-alt"></i></a>'
            }
            html2 += '<a class="image-link" target="_blank" href="'+data.data[i].img+'"><i class="fa fa-search-plus"></i></a></div><img src="'+data.data[i].img+'" alt="'+data.data[i].name+'" /><div class="portfolio-info"><h3>'+data.data[i].name+'</h3></div></div></div></div>'
        }
        $("#apps").html(html2)
    });

});

function setGrafik(result, mostApps, mostAppsTime) {
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Productivity 30 last Days'
        },
        subtitle: {
            text: 'Source: <a href="https://www.rescuetime.com/" target="_blank">rescuetime.com</a>'
        },
        xAxis: {
            categories: ['Software <br/> Development', 'Entertainment', 'Utilities', 'Communication <br/> Scheduling', 'Business'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Time Spend',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' hours'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        
        credits: {
            enabled: false
        },
        series: [{
            name: 'Time spend',
            data: [parseFloat(result["software"]), parseFloat(result["entertain"]), parseFloat(result["utilities"]), parseFloat(result["communication"]), parseFloat(result["bisnis"])]
        }]
    });

        // Make monochrome colors
    var pieColors = (function () {
        var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;
    
        for (i = 0; i < 10; i += 1) {
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());

  // Build the chart
    Highcharts.chart('percentage', {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
        },
        title: {
        text: 'Productivity Pulse 30 last Days'
        },
        subtitle: {
            text: 'Source: <a href="https://www.rescuetime.com/" target="_blank">rescuetime.com</a>'
        },
        tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
                property: 'percentage',
                operator: '>',
                value: 4
            }
            }
        }
        },
        series: [{
        name: 'Share',
        data: [
            { name: 'Productive', y: (parseFloat(result["software"])+parseFloat(result["bisnis"])) },
            { name: 'Netral', y: parseFloat(result["utilities"]) },
            { name: 'Disturber', y: (parseFloat(result["entertain"])+parseFloat(result["communication"])) }
        ]
        }]
    });

    Highcharts.chart('apps', {
        title: {
            text: 'Using Apps 30 last Days'
        },
        subtitle: {
            text: 'Source: <a href="https://www.rescuetime.com/" target="_blank" >rescuetime.com</a>'
        },
        tooltip: {
            valueSuffix: ' hours'
        },
        xAxis: {
            categories: [mostApps[0], mostApps[1], mostApps[2], mostApps[3], mostApps[4]]
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: [parseFloat(mostAppsTime[0]), parseFloat(mostAppsTime[1]), parseFloat(mostAppsTime[2]), parseFloat(mostAppsTime[3]), parseFloat(mostAppsTime[4])],
            showInLegend: true
        }]
    });    
}
