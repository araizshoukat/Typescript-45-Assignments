let guest_list :string[] = ['Aadiyan','Faris','Aryan'];
// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr.' + guest_list[i] + ',\n\nIt Is Our Pleasue To Invite You In Our Party.\n\nThank You!\n\n')
// }
let absent_guest :string = 'Aadiyan' ;
let new_guest :string = 'Faraz' ;
guest_list[0] = new_guest ;
// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr.' + guest_list[i] + ',\n\nIt Is Our Pleasue To Invite You In Our Party.\n\nThank You!\n\n')
// }
// console.log(`Mr. ${absent_guest} Is Not Coming To The Party.`)
// console.log('Good News! We Found Big Table So We Are Inviting 3 More Guests.')

guest_list.unshift('Boss Arayz');
guest_list.splice(2 , 0 , 'Miss Rabia');
guest_list.push('Bilawal Somoro');
// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr.' + guest_list[i] + ',\n\nIt Is Our Pleasue To Invite You In Our Party.\n\nThank You!\n\n')
// }

// console.log('\nSorry We Can Not Arrange Big Tables, Onky Two Peoples Will Be Invited.');
while(guest_list.length > 2){
    let remove_guest = guest_list.pop();
    // console.log(`Sorry Mr. ${remove_guest}, You Are Not Invited For Dinner.`);
}

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr.' + guest_list[i] + ',\n\nYou Are Still Invited.\n\nThank You!\n\n')
// }

guest_list.splice(0, 2);
console.log(guest_list);

//Exercise 19

console.log(`Total Number Of Guest Are: ${guest_list.length}`);

