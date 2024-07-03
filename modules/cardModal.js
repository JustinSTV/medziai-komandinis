export default class CardModal {
   constructor() {
      return this.render()
   }
   render() {
      const cardModal = document.createElement('dialog')
      cardModal.classList.add('cardModal')

      const mainModalDiv = document.createElement('div')


      cardModal.appendChild(mainModalDiv)
      return cardModal
   }
}