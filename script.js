const input = document.querySelector(".boxinput")
const btn = document.querySelector(".boxbtn")
const list = document.querySelector(".boxlist")

function addLine() {
  const txt = input.value.trim()
  if(txt === "") {
    return;
  }
  if(txt.length > 25) {
    return;
  }

  const line  = document.createElement("li")
  const text = document.createElement("span")
  const btn1 = document.createElement("button")
  const btn2 = document.createElement("button")
  const btn3 = document.createElement("button")
  btn1.textContent = "Done"
  btn2.textContent = "Edit"
  btn3.textContent = "Delete"
  text.textContent = txt
  line.append(text)
  line.append(btn1)
  line.append(btn2)
  line.append(btn3)
  list.append(line)
  input.value = ""
  line.classList.add("boxline")
  btn1.classList.add("done")
  btn2.classList.add("edit")
  btn3.classList.add("delete")
  text.style.marginRight = "auto"
  let input2 = null
btn1.addEventListener("click", () => {
  if(input2) {
    if(input2.value.length > 25) {
      return;
    }
    text.textContent = input2.value
    input2.replaceWith(text)
    input2 = null
  }
    text.style.color = "limegreen"
})
btn2.addEventListener("click", () => {
    input2 = document.createElement("input")
    input2.value = text.textContent
    text.replaceWith(input2)
    input2.addEventListener("keydown", (event) => {
         if(event.key === "Escape") {
          input2.replaceWith(text)
          input2 = null
         }
         else if(event.key === "Enter") {
          if(input2.value.length > 25) {
            return;
          }
        text.textContent = input2.value
        input2.replaceWith(text)
        input2 = null
        text.style.color = "limegreen"
         }
    })
})
btn3.addEventListener("click", () => {
  line.remove()
})
}
input.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
      addLine()
  }
})