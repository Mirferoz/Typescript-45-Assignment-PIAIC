// they think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
    
    let tShirt = { 
        name: "Polo", 
        color: "red",
        price: 2000,

    }
    let tShirts: Array<typeof tShirt> = [];

    tShirts.push(tShirt);
    tShirts.push({
        name: "polo",
        color: "black",
        price: 2500,
    })
       console.log(tShirts);