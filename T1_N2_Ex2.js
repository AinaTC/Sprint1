//Invoca una funció que retorni un valor mitjançant template literals.
function ex2(Nom, Cognom){
    let NomUsuari = Nom;
    let CognomUsuari = Cognom;
    console.log( `Nom:${NomUsuari}, Cognom:${CognomUsuari}`);
}

ex2("Aina", "Tubau");
//module.exports = { ex2 };