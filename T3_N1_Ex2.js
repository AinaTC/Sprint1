/*
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció
 un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.
*/

const fun_cb = p => {if(p%2 === 0){
    console.log(p+' is an even number');
}
else if (p%2 === 1){
    console.log(p+' is an odd number');
} else(console.log(p + ' is not a number'))
}

const fun = (par, cb) =>  cb(par);

fun(2,fun_cb);
fun(11,fun_cb);
fun(10,fun_cb);
fun(5, fun_cb);
fun('ds', fun_cb);
