function getData(event){
    console.log('function called')
    event.preventDefault()
    let input = document.getElementById('inputD').value
    let res = document.getElementById('response')
    res.innerHTML = `<h1>${input}</h1>`
}
