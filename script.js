const API_KEY =
  "Bearer pat73ZxmipOUaMrRV.48038784e643a3d80d658252c502818d0599fef3cdec57278290ac20e6843304";
const BASE_ID = "apptWTdlRculf67Cs";
const TABLE_NAME = "Table 1"; // Ex: "Empresas" ou o nome da aba da base

document.getElementById("empresaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("enviou");
  const data = {
    fields: {
      nome: document.getElementById("nome").value,
      faturamento: parseFloat(document.getElementById("faturamento").value),
      segmento: document.getElementById("segmento").value,
      receita_recorrente: parseFloat(
        document.getElementById("recorrente").value
      ),
      margem_bruta: parseFloat(document.getElementById("margem").value),
      churn: parseFloat(document.getElementById("churn").value),
      cacLtv: parseFloat(document.getElementById("cacltv").value),
      multiplicador: parseFloat(document.getElementById("multiplicador").value),
    },
  };

  fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
    method: "POST",
    headers: {
      Authorization: API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      document.getElementById("mensagem").innerText =
        "Empresa cadastrada com sucesso!";
      document.getElementById("empresaForm").reset();
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("mensagem").innerText =
        "Erro ao cadastrar empresa.";
    });
});
