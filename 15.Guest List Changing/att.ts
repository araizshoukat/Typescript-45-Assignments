let guest_list :string[] = ['Aadiyan','Faris','Aryan'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt Is Our Pleasue To Invite You In Our Party.\n\nThank You!\n\n')
}

let absent_guest :string = 'Aadiyan' ;
let new_guest :string = 'Faraz' ;
guest_list[0] = new_guest ;
for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt Is Our Pleasue To Invite You In Our Party.\n\nThank You!\n\n')
}
console.log(`Mr. ${absent_guest} Is Not Coming To The Party.`)
