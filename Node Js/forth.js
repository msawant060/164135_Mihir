var fs = require ('fs'); 
 var nameFile = process.argv[2]; 
 var textToWrite = "newfile.txt"; 
 
 
 fs.writeFile(textToWrite, nameFile, function(err) { 
   if (err) throw err; 
   console.log('The file has been saved!'); 
 });  
 
 
