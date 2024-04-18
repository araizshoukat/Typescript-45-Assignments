function makeSandwich (item: string[]) {
    console.log(`\nMaking Your Sandwich With:`);

    item.forEach(element => console.log("- " + element));

    console.log(`Enjoy Your Sandwich !\n`);
}

makeSandwich([`Ham`,`cheese`,`Lettuce`]);

makeSandwich([`Turkey`, `Bacon`]);

makeSandwich([`Peanut Butter`,`Jelly`]);