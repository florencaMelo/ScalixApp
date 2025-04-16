const API_KEY = "Bearer pat73Zxmip0UaMrRV";
const BASE_ID = "apptWTdlRculf67Cs";
const TABLE_NAME = "NomeDaTabela"; // Ex: "Empresas" ou o nome da aba da base

document.getElementById("empresaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    fields: {
      nome: document.getElementById("nome").value,
      faturamento: parseFloat(document.getElementById("faturamento").value),
      receita_recorrente: parseFloat(
        document.getElementById("recorrente").value
      ),
      margem_bruta: parseFloat(document.getElementById("margem").value),
      cac: parseFloat(document.getElementById("cac").value),
      ltv: parseFloat(document.getElementById("ltv").value),
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
