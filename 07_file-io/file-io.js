const { readFileSync} = require('fs')

const filArg = process.argv[2];

if(filArg){
    try {
        const data = readFileSync(filArg, "");
        process.stdout.write(data)
    } catch (e) {
        console.log("error", e.stack);
    }
}else {
    process.exit()
}

console.log("This is sync version");
