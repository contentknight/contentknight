var request = require("request");

var cheerio = require("cheerio");


console.log("\n***********************************\n" +
            "Grabbing links\n" +
            "from YouPorn feat: MissAlice" +
            "\n***********************************\n");



request("https://www.google.com/search?q=myalennon&oq=myalennon&aqs=chrome.0.69i59l2j69i60l3j69i59.3190j0j4&sourceid=chrome&ie=UTF-8#q=myalennon+xvideos&tbm=vid&start=30", function(error, response, html) {

  
  var $ = cheerio.load(html);


  var result = [];


  $("div.s").each(function(i, element) {

    var title = $(this).text();

    var link = $(element).children().attr("href");

   
    result.push({
      title: title,
      link: link
    });

  });

 
  console.log(result);
});


