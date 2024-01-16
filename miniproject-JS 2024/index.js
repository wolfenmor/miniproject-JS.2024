// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    let containerDiv = document.getElementById("container")
    for (const item of json) {
      let user = document.createElement("div")
      user.innerText = `id: ${item.id} name: ${item.name}`
      user.className = "user-box"

      let divForButton = document.createElement("div")
      divForButton.className = "button-div"
      let btn = document.createElement("button")
      btn.innerText = `Click to see more details`
      divForButton.appendChild(btn)


      user.appendChild(divForButton)
      containerDiv.appendChild(user)

      btn.onclick = function (e) {
        e.preventDefault()
        window.location.href = "./user-details.html?data=" + JSON.stringify(item)
      }
      btn.addEventListener("mouseover", function () {
        btn.style.background = "black"
        btn.style.color = "white"
      })
      btn.addEventListener("mouseout", function (){
        btn.style.background = "white"
        btn.style.color = "black"
      })
    }
  })
  .catch(e => {
    console.log(e)
  })
