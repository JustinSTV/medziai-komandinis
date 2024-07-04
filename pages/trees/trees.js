import TreeCard from "../../modules/TreeCard.js";

const treeCardsOuput = document.querySelector("#treeCards");

fetch("/trees.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((tree) => {
      const treeCard = new TreeCard(tree);
      treeCardsOuput.appendChild(treeCard.renderTreeCard());
    });
  })
  .catch((err) => console.error(err));
