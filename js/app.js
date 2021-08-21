/* ---------------- memoryUpdate ---------------------*/
function memoryUpdate(amount){
    const totalMemoryAmount = updateCatchCost('memory', amount);
    const totalStorageAmount = catchCost('storage');
    deliveryCodeUpdate(totalMemoryAmount, totalStorageAmount);
}

/*----------------- storageUpdate ---------------------*/
function storageUpdate(amount){
    const totalStorageAmount =  updateCatchCost('storage', amount);
    const totalMemoryAmount = catchCost('memory');
    deliveryCodeUpdate(totalStorageAmount, totalMemoryAmount);
}

/*---------------- deliveryUpdate ---------------------*/
function deliveryUpdate(amount){
    const totalDeliveryAmount = updateCatchCost('delivery', amount);
    memoryStorageUpdate(totalDeliveryAmount);
}

/*---------------- promo code ---------------------------*/
function promoCode(){
    const totalDeliveryAmount = catchCost('delivery');
    memoryStorageUpdate(totalDeliveryAmount);
    const promoCode = document.getElementById('promo-code');
    const promoCodeValue = promoCode.value;
    if(promoCodeValue.toLowerCase() == 'stevekaku'){
        const getPromo = totalPrice.innerText * 0.2;
        const total = totalPrice.innerText - getPromo;
        document.getElementById('total').innerText = total;
    }
    else if(promoCode.value == ''){
        alert('Plese provide promo code!');
    }
    else{
        alert('Promo code not matched!');
    }
    promoCode.value = '';
}

/*---------------- Single Id Update ---------------------------*/
function updateCatchCost(id, amount){
    const cost = document.getElementById(id + '-amount');
    const totalCost = cost.innerText = amount;
    return totalCost;
}

/*---------------- Single Id Update ---------------------------*/
function catchCost(id){
    const cost = document.getElementById(id + '-amount').innerText;
    const totalCost = parseInt(cost);
    return totalCost;
}

/* ---------------- totalPrice ---------------------*/
const totalPrice = document.getElementById('total-price');
const pomoTotalPrice = document.getElementById('total');

/*---------------- deliveryCodeUpdate ---------------------------*/
function deliveryCodeUpdate(totalStorageAmount, totalMemoryAmount){
    const totalDeliveryAmount = catchCost('delivery');
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    pomoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}

/*---------------- memoryStorageUpdate ---------------------------*/
function memoryStorageUpdate(totalDeliveryAmount){
    const totalMemoryAmount = catchCost('memory');
    const totalStorageAmount = catchCost('storage');
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    pomoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}
