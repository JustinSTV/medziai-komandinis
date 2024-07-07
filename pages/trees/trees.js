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

fetch("../trees/trees.json")
  .then((res) => res.json())
  .then((data) => {
    allTrees = data;
    renderTreeCards(allTrees);

    const trees_LTU = document.querySelector(
      "section#filter > ul > li:nth-of-type(1)"
    );
    trees_LTU.addEventListener("click", () => {
      const filteredTrees = allTrees.filter((tree) => tree.local_LT);
      renderTreeCards(filteredTrees);
      trees_LTU.classList.add("active");
      trees_GLO.classList.remove("active");
      trees_ALL.classList.remove("active");
    });

    const trees_GLO = document.querySelector(
      "section#filter > ul > li:nth-of-type(3)"
    );
    trees_GLO.addEventListener("click", () => {
      const filteredTrees = allTrees.filter((tree) => !tree.local_LT);
      renderTreeCards(filteredTrees);
      trees_GLO.classList.add("active");
      trees_LTU.classList.remove("active");
      trees_ALL.classList.remove("active");
    });

    const trees_ALL = document.querySelector(
      "section#filter > ul > li:nth-of-type(5)"
    );
    trees_ALL.addEventListener("click", () => {
      renderTreeCards(allTrees);
      trees_ALL.classList.add("active");
      trees_LTU.classList.remove("active");
      trees_GLO.classList.remove("active");
    });
  })
  .catch((err) => console.error(err));
