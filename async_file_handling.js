const fs = require('node:fs');

fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    wordLen(data)
    //    console.log("DATA",data);
})


function wordLen(str){
    // const splitting = str.match(/\S+/g);
    const splitting = str.trim().split(/\s+/)
    console.log(splitting.length);
}