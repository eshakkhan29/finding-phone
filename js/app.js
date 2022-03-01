

document.getElementById('search-button').addEventListener('click', () =>{
    document.getElementById('spinner').classList.remove('d-none')
    const searchInput = document.getElementById('search-input');
    const inputValue = searchInput.value.toLowerCase();
    if (inputValue === '') {
        document.getElementById('error-mesege').classList.remove('d-none');
        document.getElementById('spinner').classList.add('d-none')
    }
    else{
        // data calling 
        const url =(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`);
        fetch(url)
        .then(res => res.json())
        .then(data => displayMobile(data.data))
        // clear input data 
        searchInput.value = '';
    }
});

// display mobiles 
const displayMobile = (mobiles) => {
    if (mobiles !== 'object') {
        document.getElementById('error-mesege').classList.remove('d-none');
        document.getElementById('spinner').classList.add('d-none')
    }
    const mobilesList = document.getElementById('mobiles-list');
    const mobileDitails = document.getElementById('mobile-ditails');
    mobileDitails.innerHTML = '';
    mobilesList.innerHTML = '';
    const mobile = mobiles.slice(0, 20);
    mobile.forEach(mobile => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img class="card-img-top" src="${mobile.image}">
            <div class="card-body text-center">
                <h3 class="card-title text-center">${mobile.phone_name}</h3>
                <h4 class="card-title text-center">${mobile.brand}</h4>
                <button onclick="showDetails('${mobile.slug}')" class="btn btn-outline-success p-2">Show Details</button>
            </div>
        `;
        div.classList.add('col', 'card','border-0', 'mt-5','p-5')
        mobilesList.appendChild(div)
        document.getElementById('error-mesege').classList.add('d-none');
        document.getElementById('spinner').classList.add('d-none');
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
    mobileDitails.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card border-0"> 
        <img class="p-4" src="${mobile.image}" class="card-img-top"> 
        <div class="card-body">
            <h5 class="card-title">${mobile.name}</h5>
            <h6 class="card-title"><span class="fw-bold">ReleaseDate :</span> ${mobile.releaseDate ? mobile.releaseDate: 'ReleaseDate no Found'}</h6>
            <h6 class="card-title"><span class="fw-bold">Brand :</span> ${mobile.brand}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item fw-bold">MainFeatures</li>
            <li class="list-group-item">Storage : ${mobile.mainFeatures.storage}</li>
            <li class="list-group-item">DisplaySize : ${mobile.mainFeatures.displaySize ? mobile.mainFeatures.displaySize: 'none'}</li>
            <li class="list-group-item">ChipSet : ${mobile.mainFeatures.chipSet ? mobile.mainFeatures.chipSet: 'none'}</li>
            <li class="list-group-item">Memory : ${mobile.mainFeatures.memory ? mobile.mainFeatures.memory: 'none'}</li>
            <li class="list-group-item fw-bold">Sensors</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[0] ? mobile.mainFeatures.sensors[0]: 'none'}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[1] ? mobile.mainFeatures.sensors[1]: 'none'}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[2] ? mobile.mainFeatures.sensors[2]: 'none'}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[3] ? mobile.mainFeatures.sensors[3]: 'none'}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[4] ? mobile.mainFeatures.sensors[4]: 'none'}</li>
            <li class="list-group-item">${mobile.mainFeatures.sensors[5] ? mobile.mainFeatures.sensors[5]: 'none'}</li>
            <li class="list-group-item fw-bold">Others</li>
            <li class="list-group-item">WLAN : ${mobile.others?.WLAN ? mobile.others.WLAN: 'none'}</li>
            <li class="list-group-item">Bluetooth : ${mobile.others?.Bluetooth ? mobile.others.Bluetooth: 'none'}</li>
            <li class="list-group-item">GPS : ${mobile.others?.GPS ? mobile.others.GPS: 'none'}</li>
            <li class="list-group-item">NFC : ${mobile.others?.NFC ? mobile.others.NFC: 'none'}</li>
            <li class="list-group-item">Radio : ${mobile.others?.Radio ? mobile.others.Radio: 'none'}</li>
            <li class="list-group-item">USB : ${mobile.others?.USB ? mobile.others.USB: 'none'}</li>
        </ul>
    </div>
    `;
    div.classList.add('col');
    mobileDitails.appendChild(div);
};


    