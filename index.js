const fs=require('fs');
// const hello='hello world';
// console.log(hello);

//blocking,synchronous way
// const text=fs.readFileSync('C:\\Users\\KIIT\\Downloads\\complete-node-bootcamp-master\\1-node-farm\\input.txt','utf-8');
// console.log(text);
// const textout=`This is what we know about pens:${text}.\n${Date.now()}`;
// fs.writeFileSync('.\\output.txt',textout);
// console.log('file written');

//non blocking,asynchronous way
fs.readFile('C:\\Users\\KIIT\\Downloads\\complete-node-bootcamp-master\\1-node-farm\\start.txt','utf-8',(err,data1)=>{
    fs.readFile(`C:\\Users\\KIIT\\Downloads\\complete-node-bootcamp-master\\1-node-farm\\${data1}.txt`,'utf-8',(err,data2)=>{
    if(err) return console.log('error')
        console.log(data2);
    fs.readFile('C:\\Users\\KIIT\\Downloads\\complete-node-bootcamp-master\\1-node-farm\\append.txt','utf-8',(err,data3)=>{
        console.log(data3);
        fs.writeFileSync('.\\final.txt',`${data2}\n${data3}`);
});
});
});
console.log('Will read file');