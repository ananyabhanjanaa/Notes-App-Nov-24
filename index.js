const express =  require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
   ////readdir se files naam ke folder ka saara content show hoga on console, content of dir means uske andar ki files and subdirectories
   fs.readdir(`./files`, function(err, files){
      // console.log(files);
      res.render("index" , {files:files});
});
})

app.post('/create', function(req, res){
   
})
app.listen(3000);