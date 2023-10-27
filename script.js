console.log('loaded')

const rootElement = document.querySelector("#root")

const fetchUrl = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const skeletonComponent = () => `
    <header></header>
    <main></main>
    <footer></footer>
`

const headerButtonComponent = (buttonText) => `
    <button id="${buttonText.toLowerCase()}">${buttonText}</button>
`

const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
    </div>
`

const makeDomFromData = (data, rootElement, componentFn) => {
    data.forEach(value => rootElement.insertAdjacentHTML("beforeend", componentFn(value)))
}

async function init() { // felkészítjük a js-t, hogy a függvényben lesznek aszinkron kódok
    rootElement.insertAdjacentHTML("beforeend", skeletonComponent())
    const headerElement = document.querySelector("header")
    const mainElement = document.querySelector("main")
    const footerElement = document.querySelector("footer")

    makeDomFromData(["Countries", "Swapi", "Contact"], headerElement, headerButtonComponent)
    const swapiButtonElement = document.querySelector("#swapi")
    swapiButtonElement.addEventListener("click", () => {
        mainElement.innerHTML = "Under construction!!!!!!!!!!!!"
    })

    const data = await fetchUrl("https://restcountries.com/v3.1/all")
    makeDomFromData(data, mainElement, countryComponent)
    const countryElements = document.querySelectorAll("div.country")
    countryElements.forEach((countryElement) => {
        countryElement.addEventListener("click", () => {
            countryElement.classList.toggle("clicked")
        })
    })
}

init()