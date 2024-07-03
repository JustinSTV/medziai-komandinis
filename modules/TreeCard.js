export default class TreeCard {
  constructor(props) {
    this.props = props;
  }
  renderCard() {
    const treeCardDiv = document.createElement("div");
    treeCardDiv.classList.add("treeCard");

    // porps to be revised after tree.json was filled in
    const treeCardTtl = document.createElement("h3");
    treeCardTtl.textContent = this.props.title;

    const treeCardImg = document.createElement("img");
    treeCardImg.setAttribute("src", this.props.url);
    treeCardImg.setAttribute("alt", `${this.props.title} paveikslėlis`);

    const treeCardDesc = document.createElement("p");
    treeCardDesc.textContent = this.props.description;

    const treeCardInfo = document.createElement("i");
    treeCardInfo.classList.add("bi bi-info-circle-fill");

    treeCardDiv.append(treeCardTtl, treeCardImg, treeCardDesc, treeCardInfo);

    return TreeCard;
  }
}
