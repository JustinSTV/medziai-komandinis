import CardModal from "./CardModal.js";

export default class TreeCard {
  constructor(props) {
    this.props = props;
  }
  renderTreeCard() {
    const treeCardDiv = document.createElement("div");
    treeCardDiv.classList.add("treeCard");

    const treeCardImg = document.createElement("img");
    treeCardImg.setAttribute("src", `${this.props.image}`);
    treeCardImg.setAttribute("alt", `${this.props.name}`);

    const treeCardTtl = document.createElement("h3");
    treeCardTtl.textContent = this.props.name;

    const treeCardFeat = document.createElement("p");
    treeCardFeat.textContent = this.props.features;

    const treeCardInfo = document.createElement("i");
    treeCardInfo.classList.add("bi", "bi-info-circle-fill");

    treeCardInfo.addEventListener('click', () => {
      const cardModal = new CardModal(this.props)
      document.body.appendChild(cardModal)
      cardModal.showModal()
    })

    treeCardDiv.append(treeCardImg, treeCardTtl, treeCardFeat, treeCardInfo);

    return treeCardDiv;
  }
}
