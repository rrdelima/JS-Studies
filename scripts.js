//var name = "Rodolfo" //declaracao Global

function foo() {
    var name = "Rodolfo"; //declaracao Local
    console.log(name);
}

if(true){
    //var teste = "Rodrigues"; // visivel globalmente. Vaza do bloco para fora...
    //const teste = "Rodrigues"; // visivel somente no bloco
    let teste = "Rodrigues"; // visivel somente no bloco
    teste = "Lima";

    console.log('---', teste);
}

foo();
console.log('---', teste);

