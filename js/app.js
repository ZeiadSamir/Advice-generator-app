const ad = document.getElementById('advice');
const adId = document.getElementById('adId');
const btn = document.getElementById('btn');



btn.addEventListener('click', ()=> {
    getAdvice();
});

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
    return response.json().then(adviceData => {
        const adObj = adviceData.slip;
        ad.innerHTML= `&#8220 ${adObj.advice} &#8221`;
        adId.innerHTML= `${adObj.id}`;
    })
}).catch(error =>{
    console.log(error)
})
}