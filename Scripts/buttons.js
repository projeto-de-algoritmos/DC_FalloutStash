//VARIÁVEIS E FUNÇÕES DO BOTÃO KNAPSACK
const knapsackButton = document.querySelector("#knapsack-button");
const knapsackAnswer = document.querySelector("#resposta-knapsack");
const knapsackItems = document.querySelector("#selectedItemList");
const itensSelecionados = [];
let itensTexto = "";

//utitliza o Knapsack para devolver os elementos de maior valor que preencham a mochila ao clicar no botão "knapsack"
const optimizeBag = () => {
  const activeList = document.querySelectorAll(".active");
  let itemID = 0;

  activeList.forEach((item) => {
    itemID = item.getAttribute("id");
    itensSelecionados.push(itens[itemID]);
  });

  const itensSelecionadosOrdenados = quicksort(itensSelecionados);

  knapsackPromise(
    itensSelecionadosOrdenados.length - 1,
    300,
    itensSelecionadosOrdenados,
    0
  ).then((result) => {
    result.itens_selecionados.forEach((item) => {
      itensTexto += `<li>${item.nome} <br> <img src="./Stylesheet/imgs/weight.png" width = "20px"> ${item.peso} <br> <img src="./Stylesheet/imgs/caps-removebg-preview.png" width = "20px"> ${item.valor} </li>`;
    });

    let resultTexto = "";

    if (result.capacidade === 300) {
      resultTexto = `Você não selecionou nenhum item :( <br> Clique em inventário e selecione os itens que deseja levar!`;
    } else {
      resultTexto = `Dos itens selecionados, os mais valiosos que consegue levar custam, ao todo, ${result.valor_total} caps e sobrou ${result.capacidade} de capacidade. <br> Seguem os itens listados abaixo`;
    }

    knapsackAnswer.innerHTML = resultTexto;
    knapsackItems.innerHTML = itensTexto;
    knapsackButton.setAttribute("disabled", "true");
    filterForm.setAttribute("style", "display: show");
  });
};

//adiciona classe "active" nos elementos da lista
const inidividualKnapsackItems = document
  .querySelector("#selectedItemList")
  .getElementsByTagName("li");
for (let i = 0; i < inidividualKnapsackItems.length; i++) {
  inidividualKnapsackItems[i].addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
  });
}

//VARIÁVEIS E FUNÇÕES DO BOTÃO INVENTÁRIO
const inventarioButton = document.querySelector("#inventario-button");

//recarrega a página ao clicar no botão para mostrar o inventário novamente
inventarioButton.addEventListener("click", (event) => {
  location.reload();
});

//VARIÁVEIS E FUNÇÕES DO FORM FILTRO
const filterForm = document.querySelector("#filter-form");
const dropdownOrderType = document.querySelector("#orderType");
const dropdownOrderBy = document.querySelector("#orderBy");
const filteredItems = [];

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  itensTexto = "";

  switch (dropdownOrderType.value) {
    case "caps":
      if (dropdownOrderBy.value === "crescente") {
        filteredItems.length = 0;
        mergeSortCapsUp(itensSelecionados).forEach((item) => {
          filteredItems.push(item);
        });
      } else {
        filteredItems.length = 0;
        mergeSortCapsDown(itensSelecionados).forEach((item) => {
          filteredItems.push(item);
        });
      }
      break;

    case "nome":
      if (dropdownOrderBy.value === "crescente") {
        filteredItems.length = 0;
        mergeSortNomeUp(itensSelecionados).forEach((item) => {
          filteredItems.push(item);
        });
      } else {
        filteredItems.length = 0;
        mergeSortNomeDown(itensSelecionados).forEach((item) => {
          filteredItems.push(item);
        });
      }
      break;

    case "peso":
      if (dropdownOrderBy.value === "crescente") {
        filteredItems.length = 0;
        mergeSortPesoUp(itensSelecionados).forEach((item) => {
          filteredItems.push(item);
        });
      } else {
        filteredItems.length = 0;
        mergeSortPesoDown(itensSelecionados).forEach((item) => {
          filteredItems.push(item);
        });
      }
      break;

    default:
      break;
  }

  filteredItems.forEach((item) => {
    itensTexto += `<li>${item.nome} <br> <img src="./Stylesheet/imgs/weight.png" width = "20px"> ${item.peso} <br> <img src="./Stylesheet/imgs/caps-removebg-preview.png" width = "20px"> ${item.valor} </li>`;
  });

  knapsackItems.innerHTML = itensTexto;
});
