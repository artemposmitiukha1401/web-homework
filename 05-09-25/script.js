const CURRENT_YEAR = 2025
let choice = true
let name = ""
let yaerOfBirth = 0
let squareSide = 0
let radius = 0
let t = 0
let s = 0

do{
    name = prompt("Enter your name: ")
    alert(`Hello, ${name}`)
    while(true){
       yaerOfBirth = parseInt(prompt("Enter year of birth: "))
       if (yaerOfBirth > 1900 &&! isNaN(yaerOfBirth))
        {
           alert(`You are ${CURRENT_YEAR - yaerOfBirth}`)
           break
        }
       else
           alert('Invalid yaer of birth, try again')
   }
   while(true){
       squareSide = parseInt(prompt("Enter square side: "))
       if (squareSide > 0 && !isNaN(squareSide)) {
           alert(`Area of the square is ${Math.pow(squareSide, 2)}`)
           break
       }
       else
            alert("Invalid value, try again")
   }
    while (true) {
        radius = parseInt(prompt("Enter radius: "))
        if (radius > 0 && !isNaN(radius)) {
            alert(`Area of the circle is ${Math.round(Math.PI * Math.pow(radius, 2) * 10) / 10}`)
            break
        }
        else
            alert("Invalid value, try again")
    }
    while(true){
        t = parseInt(prompt("Enter target time (hours): "))
        s = parseInt(prompt("Enter target distance (km): "))
        if (s > 0 && !isNaN(s) && t > 0 && !isNaN(t))
        {
            alert(`Needed speed is ${Math.round(s / t * 10) / 10} km/h`)
            break
        }
        else
            alert("Invalid value, try again")
        
    }
    if (!confirm("Try again?"))
        break
}
while(true)    


const EXCHANGE_RATE = 0.85
let exchangeAmount = 0

do{
    while(true){
        exchangeAmount = parseInt(prompt(("Enter amount to convert (dollars -> euro)")))
        if (exchangeAmount > 0 && !isNaN(exchangeAmount)) {
            alert(`${exchangeAmount} $ --> ${Math.round(exchangeAmount * EXCHANGE_RATE * 10) / 10} €`)
            break
        }
        else
            alert("Invalid amount to convert")
    }
    if (!confirm("Try again?"))
        break
}

while(true)

const FILE_SIZE = 820;
let flashdriveSize = 0;
let files_amount = 0;

do {
    while(true){
        flashdriveSize = parseInt(prompt("Enter flashdrive size (GB): "));
        if (flashdriveSize > 0 && !isNaN(flashdriveSize)) {
            let flashdriveSizeMB = flashdriveSize * 1000;
            files_amount = Math.floor(flashdriveSizeMB / FILE_SIZE)
            alert(`You can store ${files_amount} files on the flashdrive`)
            break
        } else 
            alert("Please enter a valid positive number for flash drive size.");
        
    }
    if (!confirm("Try again?"))
        break

} while (true);