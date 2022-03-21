// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//empty heart

  const input = document.getElementById('like-glyph');

  input.addEventListener('click', function() {
    if (input = EMPTY_HEART) {
      mimicServerCall();
      .then(() => {
        input = FULL_HEART;
        document.getElementsById('like-glyph').classList.add('activated-heart');
      })
      .catch(() => {
        setTimeout(document.getElementsById('modal').classList.remove('hidden'), 3000);
      })
    }
      else {
        input = EMPTY_HEART;
        document.getElementsById('like-glyph').classList.remove('activated-heart');
      }
  })





//full heart

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
