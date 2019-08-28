'use strict';

const app = require('express')();
const fs = require('fs');

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


app.get('/post_list', (req, res)=>{

    res.json(getData());

})

app.listen(5000, (req, res)=>{
    console.log('listening on port 5000');
    // console.log(post);
});