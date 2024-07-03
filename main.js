import CardModal from "./modules/cardModal.js"

//?? aprašytas modalas

fetch('trees.json')
   .then(res => res.json())
   .then(data => {
      const mainSec = document.querySelector('#mainSec');

      data.forEach(element => {
         console.log(element)

         const oneCard = document.createElement('div')
         oneCard.classList.add('card')

         const cardName = document.createElement('h1')
         cardName.textContent = element.name

         const cardModalBtn = document.createElement('button')
         cardModalBtn.textContent = 'More Info'

         cardModalBtn.addEventListener('click', () => {
            const modal = new CardModal(element)
            document.body.append(modal)
            modal.showModal()
         })

         oneCard.append(cardName, cardModalBtn)
         mainSec.append(oneCard);
      })

   })