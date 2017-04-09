 
var request = require("request");

var cheerio = require("cheerio");


console.log("\n***********************************\n" +
            "Grabbing links\n" +
            "from PORNHUB feat: MissAlice - ULTIMATE ALICE PLAYLIST" +
            "\n***********************************\n");



request("https://www.pornhub.com/playlist/4943641", function(error, response, html) {

  
  var $ = cheerio.load(html);


  var result = [];


  $("span.title").each(function(i, element) {

    var title = $(this).text();

    var link = "https://pornhub.com" + $(element).children().attr("href");

   
    result.push({
      title: title,
      link: link
    });

  });

 
  console.log(result);
});