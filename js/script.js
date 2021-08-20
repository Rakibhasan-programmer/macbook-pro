// extra memory cost section
function updateMemoryCost(memoryCost){
    document.getElementById('extra-memory-cost').innerText = memoryCost;
}
// extra memory for 16gb eventlistener
document.getElementById('extra-memory-btn-16gb').addEventListener('click', function(){
    updateMemoryCost(180);
});
// extra memory for 8gb eventlistener
document.getElementById('extra-memory-btn-8gb').addEventListener('click', function(){
    updateMemoryCost(0);
});

// extra storage Section
function updateStorageCost(storageCost){
    document.getElementById('extra-storage-cost').innerText = storageCost;
}
document.getElementById('storage-btn-256gb').addEventListener('click', function(){
    updateStorageCost(0);
});
document.getElementById('storage-btn-512gb').addEventListener('click', function(){
    updateStorageCost(100);
});
document.getElementById('storage-btn-1tb').addEventListener('click', function(){
    updateStorageCost(180);
});


// delivery cost
function updateDeliveryCost(deliveryCost){
    document.getElementById('delivery-cost').innerText = deliveryCost;
}
document.getElementById('delivery-cost-free').addEventListener('click', function(){
    updateDeliveryCost(0);
});
document.getElementById('delivery-cost-included').addEventListener('click', function(){
    updateDeliveryCost(20);
});


//apply promocode
/* document.getElementById('promo-code-btn').addEventListener('click', function(){
    const promoCode = 'stevekaku';
    const promoCodeInput = document.getElementById('promoCode-input');
    const promoCodeValue = promoCodeInput.value;

    for(const promocode of promoCodeValue){
        if(promocode.include(promoCode.toLowerCase())){
            const totalCost = document.getElementById('total-cost');
            const newTotalCost = parseFloat(totalCost.innerText)/20;
            console.log(newTotalCost);
            // totalCost.innerText = newTotalCost;
        }
    }
    promoCodeInput.value = '';
}); */