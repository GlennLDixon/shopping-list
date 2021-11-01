const shoppingList = [
    {
        id: 1,
        food: "Apple",
        allergic: false,
        price: 1.30
    },
    {
        id: 2,
        food: "Pair",
        allergic: false,
        price: 1.15
    },
    {
        id: 3,
        food: "Pineapple",
        allergic: false,
        price: 2.10
    }
]

for (const list of shoppingList) {
    console.log(`this is my my list ${list.food}`)
}
