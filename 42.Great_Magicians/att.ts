let magicians : string[] = [`Harry Potter`,`Hermione Granger`,`Ron Weasley`,`Albus Dumbledore`];

function make_great ( magiciansArray:string[]){

    for(let i=0; i<magiciansArray.length; i++){
        magicians[i] = `the Great ` + magiciansArray[i]
    }

}

function show_megicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}

make_great(magicians);
show_megicians(magicians);