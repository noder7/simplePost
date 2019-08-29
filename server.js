'use strict';
const app = require('express')();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

function getData(){

    let arrayData = [];
    let files = fs.readdirSync('database/post');
    // console.log(files);
    for(let i=0; i<files.length;i++){
        let bufferData = fs.readFileSync('database/post/'+files[i]);
        let realData = JSON.parse(bufferData);
        // console.log(realData);
        arrayData.push(realData);
    }
    // console.log(arrayData);
    return arrayData;
    
}
function getLength(){
    let dir = fs.readdirSync('database/post');

    return dir.length;
}

app.get('/post_list', (req, res)=>{

    res.json(getData());

    console.log(getLength());
    console.log('get works');
    

});

app.post('/post', (req, res)=>{

    console.log('post works');
    

    let title = req.body.title;
    let objData = {
        id: getLength()+1,
        title: title,
        content: "empty",
        reply: 0,
        views: 0,
        date: new Date()
    }
    objData = JSON.stringify(objData, null, 4);
    let filePath = 'database/post/' + (getLength() + 1) + '.json'
    let file = fs.writeFile( filePath, objData, (err)=>{
        if (err) throw err;
        console.log("this file has been saved!");
        res.redirect('/post_list');
    });
});

app.listen(5000, (req, res)=>{
    console.log('listening on port 5000');
    // console.log(post);
});