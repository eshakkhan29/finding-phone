
// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}
// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}\
// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

document.getElementById('search-button').addEventListener('click', () =>{
    const searchInput = document.getElementById('search-input');
    const inputValue = searchInput.value.toLowerCase();
    // data calling 
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
    .then(res => res.json())
    .then(data => displayMobile(data.data))
    // clear input data 
    searchInput.value = '';
});

// display mobiles 
const displayMobile = (mobiles) => {
    const mobilesList = document.getElementById('mobiles-list');
    mobiles.forEach(mobile => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img onclick="showDetails('${mobile.slug}')" class="card-img-top" src="${mobile.image}">
            <div class="card-body">
                <h3 class="card-title text-center">${mobile.phone_name}</h3>
                <h4 class="card-title text-center">${mobile.brand}</h4>
            </div>
        `;
        div.classList.add('col', 'card','border-0', 'mt-5','p-4')
        mobilesList.appendChild(div)
    });
};

// get Details mobiles
const showDetails = (mobile) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${mobile}`)
    .then(res => res.json())
    .then(data => displayDitails(data.data))
};

// display ditails
const displayDitails = (mobile) => {
    const mobileDitails = document.getElementById('mobile-ditails');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card border-0"> 
        <img src="${mobile.image}" class="card-img-top"> 
        <div class="card-body">
            <h5 class="card-title">${mobile.name}</h5>
            <h6 class="card-title">Brand : ${mobile.mainFeatures.brand}</h6>
            <h6 class="card-title">Storage : ${mobile.mainFeatures.storage}</h6>
            <h6 class="card-title">DisplaySize : ${mobile.mainFeatures.displaySize}</h6>
            <h6 class="card-title">ReleaseDate : ${mobile.releaseDate}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item fw-bold">Sensors</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[0]}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[1]}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[2]}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[3]}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[4]}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[5]}</li>
            <li class="list-group-item fw-bold">Others</li>
            <li class="list-group-item">WLAN : ${mobile.others.WLAN}</li>
            <li class="list-group-item">Bluetooth : ${mobile.others.Bluetooth}</li>
            <li class="list-group-item">GPS : ${mobile.others.GPS}</li>
            <li class="list-group-item">NFC : ${mobile.others.NFC}</li>
            <li class="list-group-item">Radio : ${mobile.others.Radio}</li>
            <li class="list-group-item">USB : ${mobile.others.USB}</li>
        </ul>
    </div>
    `;
    div.classList.add('col');
    mobileDitails.appendChild(div);
};


    