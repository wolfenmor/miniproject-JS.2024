let url = new URL(location.href)
let value = url.searchParams.get("data")
let parseValue = JSON.parse(value)
let ul = document.createElement("ul")
for (const key in parseValue) {
  if (parseValue.hasOwnProperty(key) && key !== 'address' && key !== 'company'){
    let li = document.createElement("li")
    li.innerText = `${key}: ${parseValue[key]}`
    ul.append(li)
    document.body.appendChild(ul)
  }
}
for (const key in parseValue.address) {
  if (parseValue.address.hasOwnProperty(key) && key !== "geo") {
    let li = document.createElement("li")
    li.innerText = `${key}: ${parseValue.address[key]}`
    ul.appendChild(li)
  }
}
for (const key in parseValue.address.geo) {
  let li = document.createElement("li")
  li.innerText = `${key}: ${parseValue.address.geo[key]}`
  ul.appendChild(li)
}
for (const key in parseValue.company) {
  let li = document.createElement("li")
  li.innerText = `${key}: ${parseValue.company[key]}`
  ul.appendChild(li)
}

let postButton = document.createElement("button")
document.body.appendChild(postButton)
postButton.innerText = "post of current user"
postButton.className = "post-button"

let divForButton = document.createElement("div")
divForButton.className = "divForButton"
divForButton.appendChild(postButton)
document.body.appendChild(divForButton)

fetch(`https://jsonplaceholder.typicode.com/users/${parseValue.id}/posts`)
  .then(response => response.json())
  .then(json => {
    // another method to display this user
    // function foobar() {
    // let value = JSON.parse(url.searchParams.get("data"))
    // console.log(value)
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //      .then(response => response.json())
    //      .then(json => {
    //        for (const item of json) {
    //          if (value.id === item.userId){
    //            console.log(item)
    //          }
    //        }
    //      })
    //}
    let postContainer = document.createElement("div")
    postContainer.className = "post-container"

    postButton.onclick = function (e) {
      e.preventDefault()
      postButton.style.display = "none"
      let h2 = document.createElement("h2")
      h2.innerText = "post of current user"
      document.body.appendChild(h2)

      for (const item of json) {
        let div = document.createElement("div")
        div.innerText = `name of the title: ${item.title}`
        div.className = "post"

        let postInfoButton = document.createElement("button")
        postInfoButton.className = "postInfo-button"
        postInfoButton.innerText = "details of the current post"

        postContainer.append(div, divForButton, postInfoButton)
        document.body.appendChild(postContainer)

        postInfoButton.addEventListener("click",  (e) => {
          e.preventDefault()
          window.location.href = "./post-details.html?data=" + JSON.stringify(item)
        })
      }
    }
  })
  .catch(e => {
    console.log(e)
  })
