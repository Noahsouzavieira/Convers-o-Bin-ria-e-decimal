
//Manipulado dados vinculados no HTML para JScript//
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

            //CONVERSÃO//

//converter decimal em binário quando o usuário inserir no campo decimal//

decInp.addEventListener("input", () =>
{
    let decValue = parseInt(decInp.value);
    //converte o valor decimal para o valor binário//
    binInp.value = decValue.toString(2);
});

//converter binário para decimal quando o usuário inserir no campo binário//

binInp.addEventListener("input", () => { 
    let binValue = binInp.value;

 //Se o número binário for válido converta-o para decimal//
    if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 2);
    errorMsg.textContent = ""
    }
    //Senão exibir uma mensagem de erro//
    else {
    errorMsg.textContet = "Insira uma entrada binária válida";
    }
   //função para verificar se o número binário é o valor i.e não contém nenhum número diferente de 0 e 1//
   function binValidator(num){
        for(let i = 0; i < num.length; i++) {
            if(num[i]!="0" && num[i]!="1") {
              return false;
            }
        }
        return true;
    }
  
});    





