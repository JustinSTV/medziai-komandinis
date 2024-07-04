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

const fetchAndDisplayReviews = () => {
   //?? Display'inam visus reviews
   fetch('http://localhost:3000/reviews')
      .then(res => res.json())
      .then(reviews => {
         const reviewsContainer = document.querySelector('#reviewsContainer');
         reviewsContainer.innerHTML = ''
         reviews.forEach(element => {
            const reviewElement = document.createElement('div')

            const reviewUsername = document.createElement('h3')
            reviewUsername.textContent = element.username

            const reviewComment = document.createElement('p')
            reviewComment.textContent = element.reviewComment

            reviewElement.append(reviewUsername, reviewComment)
            reviewsContainer.appendChild(reviewElement)
         })
      })
}

fetchAndDisplayReviews()


document
   .querySelector('form')
   .addEventListener('submit', e => {
      e.preventDefault();

      const ete = e.target.elements;
      const reviewData = {
         username: ete.usernameField.value,
         reviewComment: ete.reviewField.value
      }

      console.log(reviewData);

      //?? postinam naujus reviews į json
      fetch('http://localhost:3000/reviews', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(reviewData)
      })
         .then(response => {
            if (response.ok) {
               fetchAndDisplayReviews()
            }
         })
      e.target.reset();
   })



