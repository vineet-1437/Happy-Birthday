
const clickbutton = document.querySelector('#text')
  clickbutton.addEventListener("click", function(){
    document.querySelector('.container').style.display = "flex"
  })

function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber ++
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(10000000, 1, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('number').innerText = formattedNumber
    })
  })

  const clickmail = document.querySelector('.icon')
    clickmail.addEventListener("click", function(){
      window.location.href="index2.html"
    })





    
