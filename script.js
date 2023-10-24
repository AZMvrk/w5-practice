console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement)

/* rootElement.innerHTML = `
    <h1>hello world</h1>
    <div>
        <p>lorem ipsum</p>
        <h2>subtitle</h2>
        <button>click me!</button>
    </div>
`

const array = ["kismacska", "kutyus", "zebra", "kecske"] */

/* const jsonLikeArray = [
    {
        countryName: "Hungary",
        population: 8900000
    },
    {
        countryName: "England",
        population: 18000000
    },
    {
        countryName: "USA",
        population: 230000000
    }
]

for (let i = 0; i < jsonLikeArray.length; i++) {
    rootElement.innerHTML += `
        <h3>name: ${jsonLikeArray[i].countryName}</h3>
        <h4>population: ${jsonLikeArray[i].population}</h4>
    `
} */

fetch("https://restcountries.com/v3.1/all") // elküldjük adatért a JS-t, visszatér valamikor adattal
    .then((res) => res.json()) // megjött az adat, de ki kell csomagolni, visszatér valamikor a kicsomagolt adattal
    .then((data) => { // megjött a kicsomagolt adat, innentől használhatjuk
        console.log(data)

        for (let i = 0; i <data.length; i++) {
            console.log(data[i].name.common)
            console.log(data[i].population)

            rootElement.innerHTML += `
                <h3>country name: ${data[i].name.common}</h3>
                <h4>country population: ${data[i].population}</h4>
            `
        }
    }) 