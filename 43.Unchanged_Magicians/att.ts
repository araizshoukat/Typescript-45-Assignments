let magicians : string[] = [`Harry Potter`,`Hermione Granger`,`Ron Weasley`,`Albus Dumbledore`];

function copyArray(arr:string[]){
    return [...arr]
}

function make_great ( magiciansArray:string[]){

    for(let i=0; i<magiciansArray.length; i++){
        magiciansArray[i] = `The Great ` + magiciansArray[i]
    }

}

function show_megicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}

const copyMagicianArray = copyArray(magicians)

make_great(copyMagicianArray);

console.log(`\nThis Is My Original Array:`);
show_megicians(magicians);

console.log(`\n\nThis Is My Modified Copy Of Array:`);
show_megicians(copyMagicianArray);