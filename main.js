function converter(event){ 
     event.preventDefault();  
    var money;
    var val = document.getElementById("moneyC").value;
    // Naira to Dollar
    if(val == "dollar"){
        money = 0.00267022697;
        sign = "$";
    }
     
    // Dollar to naira
    if(val == "naira"){
        money = 374.5;
        sign = "₦";
    } 

    console.log(money);
    var getCurrency = document.getElementById("text").value;
    console.log(getCurrency);
    var calculate = getCurrency * money;
    console.log(calculate);
    var calculate1 = calculate.toLocaleString("en");

    document.getElementById("text1").innerHTML = sign + " " + calculate1 ;
   
}
 document.getElementById("currency").addEventListener("submit", converter, false);

// converter(event);