function calcTip(){
/* --------------------------------Step 1: grab the input values------------------------------------------------------ */
    let tip = document.getElementById('tipForm').value;
    let bill = document.getElementById('billInput').value;
    let people = document.getElementById('numForm').value;                                                    //sets a variable for the tip Amount selector to the VALUE of the #tipForm selector
                                                          //sets a variable for the bill amount selector using the VALUE of the #billInput selector


/* ---------------------------------------Step 2: turn strings into numbers, use parseFloat() method to do this.-----------  IE: let vairable = parseFloat(stringVariable)----------------------------- */
    tip = parseFloat(tip);
    bill = parseFloat(bill);
    people = parseFloat(people);
                                                          // sets a variable for the Tip Amount that is a number
                                                          // sets a variable for the Bill Amount that is a number

/* --------------------------------Step 3: grab the elements---------------------------------------------------------- */
    let b = document.getElementById('bill-p');
    let c = document.getElementById('tip-p');
    let d = document.getElementById('total-p');
    let e = document.getElementById('people-p');
                                                          // sets a var to the ID of 'bill-p'
                                                          // sets a var to the ID of 'tip-p'
                                                          // sets a var to the ID of 'total-p'

/* --------------------------------Step 4: Place your calculations here----------------------------------------------- */
    let totalTip = tip * bill;
    totalTip = Math.round(totalTip*100)/100;
    let totalBill = bill + totalTip;
    totalBill = Math.round(totalBill*100)/100;
    let peoplePrice = totalBill/people;
    peoplePrice = Math.round(peoplePrice*100)/100;
                                                         // calulate total tip (tip % * bill) and store it in the a new variable
                                                          // calcualte total bill (totalTip + billAmount) and store it in a new variable


/* --------------------------------Step 5: Append your HTML content with the new information-----**use .fixed(2) to display the value with 2 decimal places.-------------------- */
                                                          // change the innerHTML of the tip var from step 3 to the total tip from step 4
    b.innerHTML = bill;
    c.innerHTML = totalTip;
    d.innerHTML = totalBill;
    e.innerHTML = peoplePrice                                                      // change the innterHTML of the bill var from step 3 to the total bill var from step 2
                                                          // change the innerHTML of the total var from step 3 to the total bill var from step 4

}
