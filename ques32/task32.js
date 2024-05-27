"use strict";
// Task 32
let current_users = ["admin", "Nasir", "munazzah", "Ammar", "Tehmina"];
let new_users = ["admin", "munazzah", "Noor ul ain", "Hammad", "Razia"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, this name is already taken`);
    }
    else {
        console.log(`Yes! ${new_user}, this name is available in list`);
    }
}
