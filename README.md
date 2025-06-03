# 💱 Conversor de Moedas

Este é um projeto simples e funcional de um conversor de moedas feito com **HTML**, **CSS** e **JavaScript** puro. Ele permite ao usuário converter valores entre três moedas: **Real (BRL)**, **Dólar (USD)** e **Euro (EUR)**, usando taxas de câmbio fixas.

---

## 🖥️ Funcionalidades

- Campo para inserir o valor a ser convertido.
- Seletores de moeda de origem e destino.
- Botões para **converter** ou **limpar** os campos.
- Exibição do resultado da conversão formatado com duas casas decimais.
- Conversão direta entre BRL, USD e EUR com base em taxas pré-definidas.

---

## 💡 Como Funciona

O `script.js` contém:

- Um listener no formulário que impede o comportamento padrão de recarregamento.
- Leitura do valor e das moedas selecionadas.
- Um objeto com taxas de câmbio fixas.
- Lógica para calcular o valor convertido (ou manter o valor se as moedas forem iguais).
- Exibição do resultado dinamicamente na página.

### 📊 Taxas de câmbio fixas utilizadas:

```js
const exchangeRates = {
  BRL: { USD: 0.17, EUR: 0.15 },
  USD: { BRL: 5.73, EUR: 0.88 },
  EUR: { USD: 1.13, BRL: 6.50 }
};
```

---

## 🎨 Layout e Estilo

O CSS proporciona:

- Layout centralizado e responsivo.
- Cartão com sombra e bordas arredondadas.
- Estilização moderna para inputs, selects e botões.
- Cores suaves e tipografia amigável.

---

## 📱 Responsividade

O design é responsivo para dispositivos com telas menores, com layout adaptado para telas com largura inferior a 400px.

---

## 📌 Observações

- As taxas de câmbio são estáticas e não representam os valores reais do mercado. 
- Para uma versão realista, seria necessário integrar com uma API de câmbio em tempo real (como a ExchangeRate-API ou Open Exchange Rates).

---

## ✍️ Autor

Desenvolvido por Rennan Rentz.