const celularDoJoao = {
    modelo: 'Iphone',
    fabricante: 'Apple',
    anoModelo: 2023,
    anoFabricacao: 2022,
    acelerar: function(){
        console.log("mais rapido");
    
    }
}

const celularDaMaria = {
    modelo: 'Galax A14',
    fabricante: 'Samsung',
    anoModelo: 2022,
    anoFabricacao: 2021,
    acelerar: function(){
        console.log("mais rapido");
    }
}
function Celular(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    thids.anoModelo = anoModelo;
    this.anoFabricacacao = anoFabricacao;
    this.acelerar = function(){
        console.log("mais rapido");
    }
}

const celularDoJoao1 = new Celular("Iphone", "Apple", 2023, 2022);
const carroDaMaria1 = new Celular("Galax A14", "Samsung", 2022,2021);

console.log(celularDoJoao1);
console.log(celularDaMaria1);

