
var request = require("request");

var cheerio = require("cheerio");


console.log("\n***********************************\n" +
            "Grabbing every link\n" +
            "from illegal search:" +
            "\n***********************************\n");



request("http://www.pornmd.com/straight/myalennon", function(error, response, html) {

  
  var $ = cheerio.load(html);


  var result = [];

  $("h2.title-video").each(function(i, element) {

    var title = $(this).text();

    var link =  $(element).children().attr("href");
   
    result.push({
      title: title,
      link: link
    });

  });


 
  console.log(result);
});
//https://www.pornhub.com/playlist/15843451
//https://www.pornhub.com/playlist/8650062
//https://www.pornhub.com/playlist/12000831
//https://www.pornhub.com/playlist/9722801