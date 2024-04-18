const userNames : string[] = [`admin`,`rafay`,`ahmed`,`bilal`,`sana`];

for(let i=0; i<userNames.length; i++){
    if(userNames[i] === `admin`){
        console.log(`Hello Admin Would You Like To See A Status Report?`);
    }
    else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
    }
}