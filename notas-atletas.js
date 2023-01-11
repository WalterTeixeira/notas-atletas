let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   let obterNomes = atletas.map(function(nome){
       return nome.nome
   })
   
   let obterNotas = atletas.map(function(nota){
     return nota.notas
   })
   
   for (let i = 0; i < obterNotas.length; i++) {
       let organizar = obterNotas[i];
       function comparaNumeros(a,b) {
           if (a == b) return 0; 
           if (a < b) return -1; 
           if (a > b) return 1;
       }
           let obtemNotasEmOrdem = organizar.sort(comparaNumeros).slice(1,4);
           
           let soma = 0
           obtemNotasEmOrdem.forEach(function(nota){
               soma = soma + nota
               soma = soma / obtemNotasEmOrdem.length
           })
   
           
   
           console.log(`Atleta: ${obterNomes[i]}`)
           console.log(`Notas Obtidas: ${obterNotas[i]}`)
           console.log(`Média Válida: ${soma}`)
           console.log(" ")
          
   }