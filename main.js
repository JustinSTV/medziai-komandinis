import CardModal from "./modules/cardModal.js"

//?? aprašytas modalas
document
   .querySelector('#modal')
   .addEventListener('click', () => {
      const modal = new CardModal()

      document.body.append(modal)

      modal.showModal()
   })