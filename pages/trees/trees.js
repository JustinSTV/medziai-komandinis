import TreeCard from "../../modules/TreeCard.js";

const treeCardsOuput = document.querySelector("#treeCards");
let allTrees = [];

const renderTreeCards = (trees) => {
  treeCardsOuput.innerHTML = "";
  trees.forEach((tree) => {
    const treeCard = new TreeCard(tree);
    treeCardsOuput.appendChild(treeCard.renderTreeCard());
  });
};

fetch("/trees.json")
  .then((res) => res.json())
  .then((data) => {
    allTrees = data;
    renderTreeCards(allTrees);

    document
      .querySelector("section#filter > ul > li:nth-of-type(1)")
      .addEventListener("click", () => {
        const filteredTrees = allTrees.filter((tree) => tree.local_LT);
        renderTreeCards(filteredTrees);
      });

    document
      .querySelector("section#filter > ul > li:nth-of-type(2)")
      .addEventListener("click", () => {
        const filteredTrees = allTrees.filter((tree) => !tree.local_LT);
        renderTreeCards(filteredTrees);
      });

    document
      .querySelector("section#filter > ul > li:nth-of-type(3)")
      .addEventListener("click", () => {
        renderTreeCards(allTrees);
      });
  })
  .catch((err) => console.error(err));
