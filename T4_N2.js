/*
Crea una nova funció asíncrona que cridi a una altra que retorni 
una Promise que efectuï la seva funció resolve() després de 
2 segons de la seva invocació.
*/

async function asynFun(){
    let res = await promFun();
}

let promFun = () => {
    new Promise((resolve, reject) =>{ 
        setTimeout(() => resolve(console.log('Promesa')), 2000);
    })
}

asynFun();