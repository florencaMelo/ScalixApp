# 📊 Cadastro de Empresas - Projeto de Aula

Este é um projeto simples de um aplicativo web desenvolvido para a aula de Tecnologia. A aplicação permite cadastrar empresas com base em métricas de negócio e envia os dados diretamente para um banco de dados no **Airtable**.

---

## ✅ Funcionalidades

- Formulário de cadastro de empresas
- Envio automático dos dados para o Airtable via API
- Interface simples com HTML, CSS e JavaScript puro
- Deploy no Vercel
- Código-fonte hospedado no GitHub

---

## 🧱 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Airtable (como banco de dados)
- Git e GitHub
- Vercel (deploy)

---

## 📂 Estrutura de Pastas

---

## 🔌 Configuração do Airtable

1. Crie uma conta em: https://airtable.com
2. Crie uma **Base** chamada `Empresas`
3. Adicione os campos:
   - Nome
   - Faturamento
   - Segmento
   - ReceitaRecorrente
   - MargemBruta
   - Churn
   - CAC_LTV
   - Multiplicador
4. Vá em [https://airtable.com/account](https://airtable.com/account) e copie sua **API Key**
5. No seu código `script.js`, substitua:
   ```js
   const API_KEY = "SEU_API_KEY";
   const BASE_ID = "SEU_BASE_ID";
   ```
