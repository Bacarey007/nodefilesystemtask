const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts',
res => {
   // console.log(res.statusCode);
   // console.log(res.headers);

   let body = '';

   res.on('data',data => {
       body += data;
   })

   res.on('end', () => console.log(body));
}).on('error', error => console.error(error.message));


var Myfile = require('fs');
const { error } = require('console');

let result = "./result/posts.txt";

let post = "Added successfully"

Myfile.write(result, post,(error)=> {
  if (error) {
      console.log(error);
  } else {
      console.log("created successfully");
  }


});