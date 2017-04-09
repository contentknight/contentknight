
var request = require("request");

var cheerio = require("cheerio");


console.log("\n***********************************\n" +
            "Grabbing every link\n" +
            "from illegal search:" +
            "\n***********************************\n");



request("http://www.motherless.com/straight/modelname", function(error, response, html) {

  
  var $ = cheerio.load(html);


  var result = [];

  $("div.thumb.video.medium").each(function(i, element) {

    var title = $(this).text();

    var link =  $(element).children().attr("href");
   
    result.push({
      title: title,
      link: link
    });

  });


 
  console.log(result);
});