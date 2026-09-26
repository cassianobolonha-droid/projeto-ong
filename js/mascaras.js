/* ============================================
   ONG AMIGOS DO BEM - Máscaras e Interações
   ============================================ */

// Função para aplicar máscara de CPF (000.000.000-00)
function mascaraCPF(campo) {
  let valor = campo.value.replace(/\D/g, ""); // remove tudo que não é número
  if (valor.length > 11) valor = valor.slice(0, 11); // limita a 11 dígitos
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  campo.value = valor;
}

// Função para aplicar máscara de CEP (00000-000)
function mascaraCEP(campo) {
  let valor = campo.value.replace(/\D/g, "");
  if (valor.length > 8) valor = valor.slice(0, 8);
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
  campo.value = valor;
}

// Função para aplicar máscara de Telefone ((11) 99999-9999)
function mascaraTelefone(campo) {
  let valor = campo.value.replace(/\D/g, "");
  if (valor.length > 11) valor = valor.slice(0, 11);
  if (valor.length <= 10) {
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
  }
  campo.value = valor;
}

// Aplicar as máscaras aos campos quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  const campoCPF = document.getElementById("cpf");
  const campoCEP = document.getElementById("cep");
  const campoTelefone = document.getElementById("telefone");

  if (campoCPF) {
    campoCPF.addEventListener("input", function () { mascaraCPF(this); });
  }
  if (campoCEP) {
    campoCEP.addEventListener("input", function () { mascaraCEP(this); });
  }
  if (campoTelefone) {
    campoTelefone.addEventListener("input", function () { mascaraTelefone(this); });
  }
});