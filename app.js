let authentication = document.querySelector('#authentication');
let bill = document.querySelector('#bill');
let people = document.querySelector('#people');
let service = document.querySelector('#service');
//end of authentication
let input_bill = document.querySelector('#input-bill');
let input_people = document.querySelector('#input-people');

let input_dropdown = document.querySelector('#input-dropdown');
//end of input items
let calculate = document.querySelector('#calculate');//calculate button
let displayResult = document.querySelector('#displayResult');

//end of all buttons

calculate.addEventListener('click', function(){
    if(input_bill.value === ""){
         
        bill.innerText = "Bill amount cannot be empty";
        authentication.classList.add('display-top');
        setTimeout(function(){
            bill.innerText="";
            input_bill.value ="";
            authentication.classList.remove('display-top');
            
        },5000);
        

    }
    if(input_people.value === "" || input_people.value <= 0){
        
        people.innerText = "Number of users must be greater than 0";
        authentication.classList.add('display-top');
        setTimeout(function(){
            people.innerText="";
            input_people.value="";
            authentication.classList.remove('display-top');
        },5000);
    }
    if(input_dropdown.value === "" || input_dropdown.value === "Choose.."){
    
        service.innerText = "You must enter a service";
        authentication.classList.add('display-top');
        setTimeout(function(){
            service.innerText="";
            input_dropdown.value ="";
            authentication.classList.remove('display-top');
        },5000);

    }else{
         
        displayResult.classList.add('show')
        setTimeout(function(){
        displayResult.classList.remove('show');
        getResult();
        }, 3000);
       
    }
});

function getResult(){
    
    //below to display the result
let result = document.querySelector('#result');
let amount = document.querySelector('#tip-amount');
let total = document.querySelector('#total-amount');
let owes = document.querySelector('#each-person-owes');
    
    var tipAmount;
    if(input_dropdown.value === "Great-20%"){
        tipAmount = (input_bill.value * 20)/100;
    }else if(input_dropdown.value ==="Good-10%"){
        tipAmount = (input_bill.value * 10)/100;
    }else if(input_dropdown.value ==="Bad-2%"){
        tipAmount = (input_bill.value * 2)/100;
    }
    
    let totalAmout = Number(input_bill.value) + tipAmount;
    
    let eachPerson = totalAmout/input_people.value;
    result.classList.add('result');
    total.innerText = `Total amount $${totalAmout.toFixed(2)}`;
    amount.innerText = `Tip amount $${tipAmount.toFixed(2)}`;
    owes.innerText = `Each person owes $${eachPerson.toFixed(2)}`;

    setTimeout(function(){
 result.classList.remove('result');
 total.innerText = "";
 amount.innerText ="";
 owes.innerText ="";
 input_dropdown.value ="";
 input_bill.value ="";
 input_people.value ="";
    }, 5000)
}

    

