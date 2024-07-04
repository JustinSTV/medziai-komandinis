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