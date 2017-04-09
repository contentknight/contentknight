const pornsearch = require('pornsearch');
const pornhub = pornsearch.load('pornhub');
 
pornhub.videos('clmb')
  .then((response) => {
    console.log(response);
  });
 
