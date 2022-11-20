export function adicionarLinha(tabela){
    const value1 = nome.value
    const value2 = matricula.value
    const value3 = Number(nota1.value)  
    const value4 = Number(nota2.value)
    const value5 = Number(nota3.value)
    const media = (value3 + value4 + value5) / 3
    const aprovado = (media >= 7) ? "Aprovado" : "Reprovado"
    
    const linha = document.createElement("tr")

    const coluna1 = document.createElement("td")
    const coluna2 = document.createElement("td")
    const coluna3 = document.createElement("td")
    const coluna4 = document.createElement("td")
    const coluna5 = document.createElement("td")
    const coluna6 = document.createElement("td")
    const coluna7 = document.createElement("td")
    const coluna8 = document.createElement("td")

    const button = document.createElement("button")
    button.setAttribute("class","btnTabela delete")
    button.textContent = "Deletar"

    linha.appendChild(coluna1).textContent = value1
    linha.appendChild(coluna2).textContent = value2
    linha.appendChild(coluna3).textContent = value3
    linha.appendChild(coluna4).textContent = value4
    linha.appendChild(coluna5).textContent = value5
    linha.appendChild(coluna6).textContent = media.toFixed(1)
    coluna8.appendChild(button)
    linha.appendChild(coluna7).textContent = aprovado
    linha.appendChild(coluna8)
      
    tabela.appendChild(linha)

    nome.value = ""
    matricula.value = ""
    nota1.value = ""
    nota2.value = ""
    nota3.value = "" 
}



