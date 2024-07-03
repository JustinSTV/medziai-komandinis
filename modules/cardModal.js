export default class CardModal {
   constructor(treeData) {
      this.treeData = treeData
      return this.render()
   }
   render() {
      const cardModal = document.createElement('dialog');
      cardModal.classList.add('cardModal');

      const mainModalDiv = document.createElement('div');

      const treeImage = document.createElement('img')
      treeImage.setAttribute('src', this.treeData.image)
      treeImage.setAttribute('alt', this.treeData.name)

      const infoField = document.createElement('div')
      infoField.classList.add('infoField')

      const treeName = document.createElement('h1');
      treeName.textContent = this.treeData.name;
      const treeDescription = document.createElement('p');
      treeDescription.textContent = this.treeData.description;

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