const dateOfBirth=document.querySelector('#date-of-birth')
const luckyNumber=document.querySelector('#lucky-number')
const checkNumberButton=document.querySelector('#check-number')
const outputBox=document.querySelector('#output-box')


function compareValues(sum,number) {
    if (number>0) {
        if(sum%number===0)
    {
        outputBox.innerText  = "Your Birthday is Lucky";
    }
    else
    {
        outputBox.innerText= "Your Birthday is not Lucky";
    }
    }
    else{
        outputBox.innerText = "Invalid Input"
    }
    
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","")
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click',function getValues() {
    const dob = dateOfBirth.value;
    const number = luckyNumber.value;
    const sum = calculateSum(dob)
    if(dob&&number)
    {
        compareValues(sum,number)
    }
    else{
        outputBox.innerText  = "Please enter both the fields";
    }
})