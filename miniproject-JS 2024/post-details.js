let url = new URL(location.href)
let value = url.searchParams.get("data")
let parseValue = JSON.parse(value)

let ul = document.createElement("ul")
for (const key in parseValue) {
  if (parseValue.hasOwnProperty(key)){
    let li = document.createElement("li")
    li.innerText = `${key}: ${parseValue[key]}`
    ul.append(li)
    document.body.appendChild(ul)
  }
}
// another method to display comments of this post
// fetch(`https://jsonplaceholder.typicode.com/posts/${parseValue.id}/comments`)
//      .then(response => response.json())
//      .then(json => {
//        let container = document.createElement("div")
//        for (const item of json) {
//          let p = document.createElement("p")
//          for (const key in item) {
//            if (item.hasOwnProperty(key)){
//              p.innerText += `${key}: ${item[key]} | `;                }
//          }
//container.appendChild(p)
//         }
//         document.body.appendChild(container)
//       })
let h2 = document.createElement("h2")
h2.innerText = "Comments to this post"
document.body.appendChild(h2)
function foobar() {
  let value = JSON.parse(url.searchParams.get("data"))
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
      let container = document.createElement("div")
      container.className = "container"
      for (const item of json) {
        if (value.id === item.postId){
          let box = document.createElement("div")
          box.className = "box"
          for (const key in item) {
            if (item.hasOwnProperty(key)){
              box.innerText += `${key}: ${item[key]} | `;
              container.appendChild(box)
            }
          }
          document.body.appendChild(container)
        }
      }
    })
    .catch(e => {
    console.log(e)
  })
}
foobar()
