var ul = document.querySelector('nav ul')
var menuBtn = document.querySelector('.menu-btn i')

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
    } else {
        ul.classList.add('open')
    }
}

window.addEventListener("load", showDeputies)
window.addEventListener("load", showParties)

var deputiesPage = 1

function loadMoreDeputies() {
    deputiesPage++
    showDeputies()
}

function showDeputies() {
    let containerCard = document.getElementById("container-card")

    let url = `https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=${deputiesPage}&itens=10`
    let headers = {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    }

    fetch(url, headers)
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            data.dados.forEach(element => {
                // aqui
                // cria um element 'a', e coloca isso no parametro href dele:
                // `/perfilpolitico?id=${element.id}`
                // substitui "" por ``
                // mas ja ta certinho
                // gg
                // vou testar
                //boa
                // kk viu
                // nao é ''
                // é ``
                // shift + [
                // ah lllkkk eu tava lá atualizando a pág

                let a = document.createElement("a")
                a.className = "card"
                a.href = `/perfilpolitico.html?id=${element.id}`

                let div = document.createElement("div")
                    // div.className = "card"

                let img = document.createElement("img")
                img.src = element.urlFoto
                img.alt = "Avatar"
                img.style.width = "100%"

                let spam = document.createElement("spam")
                spam.innerHTML = element.nome

                div.appendChild(img)
                div.appendChild(spam)
                a.appendChild(div)
                containerCard.appendChild(a)
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}

function showParties() {
    let partyList = document.getElementById("party-list")

    let url = "https://dadosabertos.camara.leg.br/api/v2/partidos"
    let headers = {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    }

    fetch(url, headers)
        .then((response) => {
            // console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
            data.dados.forEach(element => {

                let li = document.createElement("li")
                let a = document.createElement("a")
                a.href = element.uri
                a.innerHTML = element.sigla

                // gg easy aeee
                // voy salvar
                li.appendChild(a)
                partyList.appendChild(li)
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}