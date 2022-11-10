export class Aluno {

    constructor(nome,matricula,nota1,nota2,nota3){
        this.nome = nome
        this.matricula = matricula
        this.nota1 = Number(nota1)
        this.nota2 = Number(nota2)
        this.nota3 = Number(nota3)
    }

    calculaMedia(){
        return ((this.nota1  + this.nota2 + this.nota3) / 3).toFixed(2)
    }

}

