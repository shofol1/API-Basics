const loadCountries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}
loadCountries();
const displayCountry=data=>{
    const divContainer=document.getElementById('countries');
    data.forEach(country=>{
        const h3=document.createElement('h3');
        const p=document.createElement('p');
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=`
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryDetails('${country.name}')">details</button>
        `
        // h3.innerText=country.name;
        // p.innerText=country.capital;
        // div.appendChild(h3);
        // div.appendChild(p);
        divContainer.appendChild(div);
    })
}

const loadCountryDetails=name=>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url).then(res=>res.json()).then(data=>displayCountryDetails(data))
}
const displayCountryDetails=data=>{
    const detailsContainer=document.getElementById('details');
   data.forEach(dataName => {
    detailsContainer.innerHTML=`
        <h1>${dataName.name}</h1>
        <img src="${dataName.flag}">
    `
   })
}