const process = require('process');
const fs = require('fs');
const arg = process.argv;
if(arg.length < 3){
    console.log("Not enough arguments");
    process.exit(1);
}
let command : string = "";
let fileName : string = "";
if(arg[2][0] == '-'){
    command = arg[2];
    fileName = arg[3];
}
else{
    fileName = arg[2];
}
const fileContent : Buffer = fs.readFileSync(fileName);
const text : string = fileContent.toString();
const numberOfBytes:number = fileContent.length;
const numberOfWords:number = text.split(/\s+/).filter(word => word.length > 0).length;
const numberOfLines:number = text.split(/\r\n|\r|\n/).length;
// fs.writeFileSync('output.bin', fileContent);
if(command === ""){
    // Default command: read file
    console.log(numberOfLines + " " + numberOfWords + " " + numberOfBytes + " " + fileName);
}
else{
    switch(command){
        case '-c':
            console.log(numberOfBytes + " " + fileName);
            break;
        case '-w':
            console.log(numberOfWords + " " + fileName);
            break;
        case '-l':
            console.log(numberOfLines + " " + fileName);
            break; 
    }
}