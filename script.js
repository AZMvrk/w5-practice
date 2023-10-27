console.log('loaded')

const rootElement = document.querySelector("#root")
console.dir(rootElement)
const mainElement = document.querySelector("main")

const fetchUrl = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

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
    const data = await fetchUrl("https://restcountries.com/v3.1/all")

    makeDomFromData(data, rootElement, countryComponent)
    
    //data.forEach(country => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))

    /* const countryElement = document.querySelector("div.country")
    console.log(countryElement)
    countryElement.addEventListener("click", () => {
        countryElement.classList.toggle("clicked")
    }) */

    const countryElements = document.querySelectorAll("div.country")
    countryElements.forEach((countryElement) => {
        countryElement.addEventListener("click", () => {
            countryElement.classList.toggle("clicked")
        })
    })
}

init()