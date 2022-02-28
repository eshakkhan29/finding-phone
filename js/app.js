
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
    console.log(mobiles);
    const mobilesList = document.getElementById('mobiles-list');
    mobiles.forEach(mobile => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img class="card-img-top" src="${mobile.image}">
            <div class="card-body">
                <h3 class="card-title">${mobile.phone_name}</h3>
                <h4 class="card-title">${mobile.brand}</h4>
            </div>
        `;
        div.classList.add('col', 'card','border-0', 'mt-5')
        mobilesList.appendChild(div)
    });
};
    