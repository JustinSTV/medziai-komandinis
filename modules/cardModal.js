import TreeCard from "./TreeCard.js";

export default class CardModal {
   constructor(props) {
      this.props = props
      return this.render()
   }
   render() {

      console.log(this.props)

      const cardModal = document.createElement('dialog');
      cardModal.classList.add('cardModal');

      const mainModalDiv = document.createElement('div');

      const treeImage = document.createElement('img')
      treeImage.setAttribute('src', this.props.image)
      treeImage.setAttribute('alt', this.props.name)

      const infoField = document.createElement('div')
      infoField.classList.add('infoField')

      const treeName = document.createElement('h1');
      treeName.textContent = this.props.name;
      const treeDescription = document.createElement('p');
      treeDescription.textContent = this.props.features;

      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('closeButton');
      closeButton.addEventListener('click', () => {
         cardModal.close();
      });

      infoField.append(treeName, treeDescription)

      mainModalDiv.append(treeImage, infoField)
      cardModal.append(mainModalDiv, closeButton);
      return cardModal;
   }
}