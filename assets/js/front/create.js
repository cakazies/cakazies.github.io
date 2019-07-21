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
            for (let i = 0; i < data.length; i++) {
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

