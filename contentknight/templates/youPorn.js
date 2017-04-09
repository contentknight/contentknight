
var request = require("request");

var cheerio = require("cheerio");


console.log("\n***********************************\n" +
            "Grabbing links\n" +
            "from YouPorn" +
            "\n***********************************\n");



request("https://www.youporn.com/search/?query=myalennon", function(error, response, html) {

  
  var $ = cheerio.load(html);


  var result = [];


  $("div.video-box-title").each(function(i, element) {

    var title = $(this).text();

    var link = "https://youporn.com" + $(element).children().attr("href");

   
    result.push({
      title: title,
      link: link
    });

  });

 
  console.log(result);
});
