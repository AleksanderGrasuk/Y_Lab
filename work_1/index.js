
(function fetch() {
  const btn = document.getElementById('btn')
  btn.addEventListener('submit', async function (e) {
    e.preventDefault()
    let response = await fetch('')
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let json = await response.json()
    } else {
      alert("Ошибка HTTP: " + response.status)
    }
  })
})()



