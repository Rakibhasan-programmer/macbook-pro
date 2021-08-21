// cost calculation
function costCalculation(id, price){
    document.getElementById(id).innerText = price;
    //function call
    calculateTotalPrice();
};
// calculate total
function calculateTotalPrice(){
    // best price
    const bestPrice = document.getElementById('best-price');
    const bestPriceAmount = parseInt(bestPrice.innerText);
    // memory cost
    const memoryCost = document.getElementById('extra-memory-cost');
    const memoryCostAmount = parseInt(memoryCost.innerText);
    // storage cost
    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostAmount = parseInt(storageCost.innerText);
    // deliver cost
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostAmount = parseInt(deliveryCost.innerText);
    // total calculation
    const totalPrice = bestPriceAmount+memoryCostAmount+storageCostAmount +deliveryCostAmount;
    // displaying total price and total
    document.getElementById('total-cost').innerText = totalPrice;
    document.getElementById('grand-total').innerText = totalPrice;
};
// apply promocode
function promoCode(){
    const promoCode = 'stevekaku';
    // taking input value
    const promoCodeInput = document.getElementById('promoCode-input');
    const promoCodeValue = promoCodeInput.value;
    //taking total price
    const totalPrice = document.getElementById('total-cost');
    const newTotalCost = parseFloat(totalPrice.innerText);
    // checking promocode
    if(promoCodeValue.includes(promoCode)){  
        //total calculation after applying promocode    
        const total = (newTotalCost*80)/100;
        document.getElementById('grand-total').innerText = total;
    }
    //empty input
    promoCodeInput.value = '';
};

// memory 16gb btn eventlistener
document.getElementById('extra-memory-btn-16gb').addEventListener('click', function(){
    costCalculation('extra-memory-cost', 180);
});
// memory 8gb btn eventlistener
document.getElementById('extra-memory-btn-8gb').addEventListener('click', function(){
    costCalculation('extra-memory-cost', 0);
});
// storage 256 btn eventlistener
document.getElementById('storage-btn-256gb').addEventListener('click', function(){
    costCalculation('extra-storage-cost', 0);
});
// storage 512gb btn eventlistener
document.getElementById('storage-btn-512gb').addEventListener('click', function(){
    costCalculation('extra-storage-cost', 100);
});
// storage 1Tb btn eventlistener
document.getElementById('storage-btn-1tb').addEventListener('click', function(){
    costCalculation('extra-storage-cost', 180);
});
// delivery cost free btn eventlistener
document.getElementById('delivery-cost-free').addEventListener('click', function(){
    costCalculation('delivery-cost', 0);
});
// delivery cost included btn eventlistener
document.getElementById('delivery-cost-included').addEventListener('click', function(){
    costCalculation('delivery-cost', 20);
});
//promocode btn eventlistener
document.getElementById('promo-code-btn').addEventListener('click', function(){
    promoCode();
});