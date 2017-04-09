
var request = require("request");

var cheerio = require("cheerio");


console.log("\n***********************************\n" +
            "Grabbing every illegal link\n" +
            "from Tube8:" +
            "\n***********************************\n");



request("https://www.tube8.com/searches.html?q=model+name", function(error, response, html) {

  
  var $ = cheerio.load(html);


  var result = [];


  $("p.video_title").each(function(i, element) {

    var title = $(this).text();

    var link = "https://tube8.com" + $(element).children().attr("href");

   
    result.push({
      title: title,
      link: link
    });

  });

 
  console.log(result);
});