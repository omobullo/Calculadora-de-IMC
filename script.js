
const acao = document.getElementById("botao");

//alert("teste")
//nome.value = "Isabela"
acao.addEventListener("click", imc)
function imc (){
//as var de nome peso e h estao dentro do escopo pra evitar que se tornem globais
//  alert("teste");
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");
        if (nome != "" && peso != 0 && altura != 0){
            var conta =(peso / (altura * altura)).toFixed(2);
            //resultado.textContent = conta;
                if (conta < 18.5) {
                    resultado.textContent = `${nome}, seu IMC é ${conta}, e é classificado como magro.`;
                }
                else if (conta > 18.6 && conta < 24.9){
                    resultado.textContent = `${nome}, seu IMC é ${conta}, e é classificado como normal.`;
                }
                else if (conta > 25 && conta < 29.9){
                    resultado.textContent = `${nome}, seu IMC é ${conta}, e é classificado como um grau acima do peso.`;
                }
                else if (conta > 30 && conta < 39.9){
                    resultado.textContent = `${nome}, seu IMC é ${conta}, e é classificado como dois graus acima do peso.`;
                }
                else if (conta > 40) {
                    resultado.textContent = `${nome}, seu IMC é ${conta}, e é classificado como três graus acima do peso.`;
                }
            }
        else {
           resultado.textContent = "Preencha todos os campos."
        }
        
}
