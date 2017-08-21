var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;

var config={
    user: 'soumyacool2012',
    database: 'soumyacool2012',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
    
};

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':  { 
    title:'Article One  | S.R.M.',
    heading:'Article One',
    date:'Aug 14, 2017',
    content:`   
                <p>This is content. This is content. This is content. This is content. This is content.  
                    </p>
                    <p>
                This is content. This is content. This is content. This is content. This is content.  
                 </p>
                    <p>
                This is content. This is content. This is content. This is content. This is content. 
                 </p>`
    
}, 
'article-two': {
    title:'Article Two  | S.R.M.',
    heading:'Article Two',
    date:'Aug 15, 2017',
    content:`   
                <p>This is content. This is content. This is content. This is content. This is content.  
                    </p>
                    <p>
                This is content. This is content. This is content. This is content. This is content.  
                 </p>
                    <p>
                This is content. This is content. This is content. This is content. This is content. 
                 </p>`},
'article-three':{
    title:'Article Three  | S.R.M.',
    heading:'Article Three',
    date:'Aug 16, 2017',
    content:`   
                <p>This is content. This is content. This is content. This is content. This is content.  
                    </p>
                    <p>
                This is content. This is content. This is content. This is content. This is content.  
                 </p>
                    <p>
                This is content. This is content. This is content. This is content. This is content. 
                 </p>`
}
};

function createTemplate (data) {
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading=data.heading;
        var htmlTemplate= `<html>
            <head>
                <title>
                   ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial scale=1"/>
                       <link href="/ui/style.css" rel="stylesheet" />
        
            </head>
            <body>
                <div class="container">
                <div>
                    <a href="/"> Home </a>
                </div>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
                <hr/>
                </div>
            </body>
            
        </html>`;
        return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool=new Pool(config);
app.get('/test-db', function(res,req){
  //make a select request
  //return a response with the results
  pool.query('SELECT * FROM test',function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }else {
          res.send(JSON.stringify(result.rows));
      }
  });
});



var counter=0;
app.get('/counter',function(req,res){
    counter=counter + 1;
    res.send(counter.toString());
    
});

app.get('/:articleName', function(req,res){
    //articleName== article-one
    //articles[articleName] == content object for article 1
var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
