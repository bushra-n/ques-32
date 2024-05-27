// Task 32
let current_users :string [] = ["admin","Nasir","munazzah","Ammar","Tehmina"]
let new_users : string[] = ["admin","munazzah","Noor ul ain","Hammad","Razia"]

let current_users_lower :string [] = current_users.map(user => user.toLowerCase())

for(let new_user of new_users){
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`sorry ${new_user}, this name is already taken`)
    }
    else {
        console.log(`Yes! ${new_user}, this name is available in list`)
    }
}