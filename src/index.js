import { Aluno } from "./Aluno";
import { adicionarLinha } from "./functions";


const nome = document.getElementById("nome")
const matricula = document.getElementById("matricula")
const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const nota3 = document.getElementById("nota3")
const btn = document.getElementById("btnForm")
const tabela = document.getElementById("boletim")
const alunos = []


btn.onclick = () => {
    if(nome.value.length == 0 || matricula.value.length != 3 || nota1.value.length == 0 || nota2.value.length == 0  || nota3.value.length == 0  ){
        alert("Preencha os dados corretamente")
    }else{    
        const aluno = new Aluno()      
        aluno.nome = nome.value
        aluno.matricula = matricula.value
        aluno.nota1 = parseFloat(nota1.value)
        aluno.nota2 = parseFloat(nota2.value)
        aluno.nota3 = parseFloat(nota3.value)      
        aluno.media = ((aluno.nota1 + aluno.nota2 + aluno.nota3) / 3).toFixed(2)

        adicionarLinha(tabela) 
             
        alunos.push({nome:aluno.nome,
                    matricula:aluno.matricula,
                    media:aluno.media
        })
          
        console.log(alunos)
        
    }
}


tabela.onclick = (event) =>{
    if(event.target.classList.contains("delete")){
        if(confirm("Deseja deletar os dados desse aluno?")){
            event.target.parentElement.parentElement.remove()
        }
    }
}




















