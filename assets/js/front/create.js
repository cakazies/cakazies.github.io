$(document).ready(function(){
    $.ajax({
        url: "https://api.github.com/users/cakazies/repos",
        jsonp: true,
        method: "GET",
        dataType: "json",
        success: function(res) {
            let data = JSON.parse(JSON.stringify(res))
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].name + " and " + data[i].html_url + " and " + data[i].description)
            }
        }
    });
});

