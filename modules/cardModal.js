export default class CardModal {
   constructor(treeData) {
      this.treeData = treeData
      return this.render()
   }
   render() {
      const cardModal = document.createElement('dialog');
      cardModal.classList.add('cardModal');

      const mainModalDiv = document.createElement('div');

      const treeName = document.createElement('h1');
      treeName.textContent = this.treeData.name;
      const treeDescription = document.createElement('p');
      treeDescription.textContent = this.treeData.description;

      mainModalDiv.append(treeName, treeDescription)
      cardModal.appendChild(mainModalDiv);
      return cardModal;
   }
}