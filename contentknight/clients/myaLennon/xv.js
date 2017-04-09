
var request = require("request");

var cheerio = require("cheerio");


console.log("\n***********************************\n" +
            "Grabbing links\n" +
            "from XVIDEOS feat: MyaLennon" +
            "\n***********************************\n");



request("https://www.xvideos.com/?k=mya+lennon", function(error, response, html) {

  
  var $ = cheerio.load(html);


  var result = [];


  $("p").each(function(i, element) {

    var title = $(this).text();

    var link = "https://xvideos.com" + $(element).children().attr("href");

   
    result.push({
      title: title,
      link: link
    });

  });

 
  console.log(result);
});
