class Atleta {
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
		this.calculaCategoria();
    this.imc = this.calculaIMC();
    this.media = this.calculaMediaValida();
		this.mostraInformacoes();
  }

  calculaCategoria(){
    if (this.idade >= 9 && this.idade <= 11){
      this.categoria = "Infantil";
    }

    else if (this.idade === 12 || this.idade === 13){
      this.categoria = "Juvenil";
    }

    else if (this.idade === 14 || this.idade === 15){
      this.categoria = "Intermediário";
    }

    else if (this.idade >= 16 && this.idade <= 30){
      this.categoria = "Adulto";
    }

    else {
      this.categoria = "Sem categoria";
    }
  }


calculaIMC(){
		let imc = this.peso / (this.altura * this.altura);
		return imc;
}

calculaMediaValida(){
	
		let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
	
    let notasAtleta = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
    let soma = notasAtleta.reduce((total, atual) => total + atual, 0);
    return soma / notasAtleta.length;	
}

obtemNomeAtleta(){
		return `Nome: ${this.nome}`
}

obtemIdadeAtleta(){
		return `Idade: ${this.idade}`;
}

obtemPesoAtleta(){
		return `Peso: ${this.peso}`;
}

obtemNotasAtleta(){
		return `Notas: ${this.notas}`;
}

obtemCategoria(){
		return `Categoria: ${this.categoria}`;
}

obtemIMC(){
		return`IMC: ${this.imc}`;
}

obtemMediaValida(){
		return`Média: ${this.media}`;
}
mostraInformacoes(){
	console.log(this.obtemNomeAtleta());
	console.log(this.obtemIdadeAtleta());
	console.log(this.obtemPesoAtleta());
	console.log(this.obtemNotasAtleta());
	console.log(this.obtemCategoria());
	console.log(this.obtemIMC());
	console.log(this.obtemMediaValida());
	console.log("--------------------------------");
}

}


let atleta = new Atleta ("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
let atleta1 = new Atleta ("Ruan Guths",26, 82, 1.72, [10, 9.34, 9, 10, 5]);