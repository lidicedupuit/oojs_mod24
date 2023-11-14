function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + "diz olá");
    }

    
}
function Aparelho(nome, marca, valor) {
    this.marca = marca;
    //this.valor = valor;
    let _preco = preco;

  
    this.getvalor = function (){
        //return `o valor de ${this.nome} é ${_preco}`;
        return _preco;
    }

    this.setvalor = function(valor){
        if (typeof valor === 'number') {
            _preco = valor;
        }        
    }
    this.aumento = function (){
        const novoPreco = _preco * 1.1;      
        _preco = novoPreco;
    }
   
   console.log(novoPreco)
    _preco = novoPreco;
}
