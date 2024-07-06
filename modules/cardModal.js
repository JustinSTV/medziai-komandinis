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

      const treeName = document.createElement('h2');
      treeName.textContent = this.props.name;

      const treeSpecies = document.createElement('p');
      treeSpecies.textContent = `Rušis: ${this.props.species}`

      const treeAge = document.createElement('p');
      treeAge.textContent = `Amžius: ${this.props.age_years}`

      const treeHeight = document.createElement('p');
      treeHeight.textContent = `Aukštis: ${this.props.height_meters} m.`

      const treeDiameter = document.createElement('p');
      treeDiameter.textContent = `Skersmuo: ${this.props.diameter_cm} cm`

      const treeSpread = document.createElement('p');
      treeSpread.textContent = `Medžių paplitimas: ${this.props.spread}`


      const treeDescription = document.createElement('p');
      treeDescription.textContent = this.props.features;


      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('closeButton');
      closeButton.addEventListener('click', () => {
         cardModal.close();
      });

      infoField.append(treeName, treeDescription, treeSpecies, treeAge, treeHeight, treeDiameter, treeSpread)

      mainModalDiv.append(treeImage, infoField)
      cardModal.append(mainModalDiv, closeButton);
      return cardModal;
   }
}