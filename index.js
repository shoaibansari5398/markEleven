const dateOfBirth=document.querySelector('#date-of-birth')
const luckyNumber=document.querySelector('#lucky-number')
const checkNumberButton=document.querySelector('#check-number')


function compareValues(sum,number) {
    if(sum%number===0)
    {
        console.log("Your Birthday is Lucky");
    }
    else
    {
        console.log("Your Birthday is not Lucky");
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
    const number = luckyNumber.value;;
    const sum = calculateSum(dob)
    compareValues(sum,number)
})