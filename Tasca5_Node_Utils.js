// Tasca 5: Entrega d'exercici: Node Utils

// Nivell 1 Ex 1

/*Crea una funció que imprimeixi recursivament un 
missatge per la consola amb demores d'un segon.
*/
function recurse(n){
    setTimeout(() => {
        let x = n - 1;
       console.log('Hello World')   
       if (x > 0) {
        recurse(x);
    }                                               
    }, 1000);
}
recurse(10);


// Nivell 1 Ex 2
/*
Crea una funció que, en executar-la, escrigui una frase en un fitxer.
*/

var fs = require('fs');

var WriteInFile = (FileName, Txt) => fs.appendFile(FileName, Txt, function(err){
    if(err) throw err;
    console.log(FileName+' saved');
});



// Nivell 1 Ex 3
/*
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
*/
const ShowFileContent = FileName => fs.readFile(FileName, 'utf8',(err,data) =>{ if (err) throw err;
console.log(data)});



// Nivell 2 Ex 1
/* 
Crea una funció que comprimeixi el fitxer del nivell 1.
*/

var zlib = require ('zlib');
var fs = require('fs');
var gzip = zlib.createGzip();

function Compress(FileName){
    let r =fs.createReadStream(FileName);
    let w = fs.createWriteStream(FileName+'.gz');
    r.pipe(gzip).pipe(w);
}


/*
Crea una funció que llisti per la consola el contingut del directori d'usuari
 de l'ordinador utilizant Node Child Processes.
*/

var ChildProcess = require('child_process');
var exec = ChildProcess.exec;
var os = require('os');

console.log(os.homedir());
console.log(os.userInfo.name);
let ShowDirectoryContent = () => exec('dir %USERPROFILE%', (error, stdout, stderr) =>{if(error) console.log(error);
 if (stderr) console.log(stderr);
 console.log(stdout);
});

ShowDirectoryContent();


// Nivell 3 Ex 1
/*
Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament,
a partir del fitxer del nivell 1.
*/
//var fsp = fs.promises;

var fsp = require('fs').promises;

async function EncodeFile(MyFile, encoding){
    let content = await fsp.readFile(MyFile, 'utf8');
    let encodedContent = Buffer.from(content).toString(encoding);
    await fsp.writeFile(encoding+MyFile, encodedContent, encoding);
}

/*
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme
 aes-192-cbc, i esborri els fitxers inicials.
*/

const crypto = require('crypto');

var key = crypto.randomBytes(24);
var iv = crypto.randomBytes(16);


const enc= (text, enc) => {
    const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
    const encrypted = cipher.update(text, enc,'hex') + cipher.final('hex');
    return encrypted
};

async function EncryptFile(MyFile){
    let ContentFromFile = await fsp.readFile(MyFile, 'hex');
    let encriptedContent = enc(ContentFromFile,'hex');
    await fsp.writeFile(MyFile+'.enc', encriptedContent, 'hex');
    await fsp.unlink(MyFile);
}

/*
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
tornant a generar una còpia de l'inicial.
*/
const decr = (hash) => {
    const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
    const decrpyted = decipher.update(hash, 'hex','utf8')+  decipher.final('utf8');
    return decrpyted;
};


async function DecryptFile(MyFile){
    let encryptedContentFromFile = await fsp.readFile(MyFile, 'hex');
    let decryptedContent = decr(encryptedContentFromFile, 'hex');
    await fsp.writeFile('Copy'+MyFile.substr(0,MyFile.length-4), decryptedContent, 'utf8');
    await fsp.unlink(MyFile);
    console.log(decryptedContent)
}

async function fun(){
    await WriteInFile('MyFile.txt','There was once a little teapod short and stout. ');
    await ShowFileContent('MyFile.txt');
    Compress('MyFile.txt');
    await EncodeFile('MyFile.txt','hex');
    await EncodeFile('MyFile.txt','Base64');
    await EncryptFile('Base64MyFile.txt');
    await EncryptFile('hexMyFile.txt');
    await DecryptFile('hexMyFile.txt.enc');
    await DecryptFile('Base64MyFile.txt.enc');
}

fun();
