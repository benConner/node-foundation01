// const { readFileSync} = require('fs')
//
// const filArg = process.argv[2];
//
// if(filArg){
//     try {
//         const data = readFileSync(filArg, "");
//         process.stdout.write(data)
//     } catch (e) {
//         console.log("error", e.stack);
//     }
// }else {
//     process.exit()
// }
//
// console.log("This is sync version");

const {readFile} = require('fs');

const fileArg = process.argv[2];

if(fileArg){
    readFile(fileArg, (err, data)=>{
        if(err) return console.error(err);
        process.stdout.write(data);
    });
}else {
    process.exit()
}

console.log("This async version");
