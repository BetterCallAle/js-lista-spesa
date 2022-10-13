const shopItems = ["Mela", "Pera", "Banana", "Pesto", "Pane"];
console.log(shopItems);

const ulCreated = document.createElement("ul");
console.log(ulCreated);

let i = 0;
while (i < shopItems.length) {
    const thisItem = shopItems[i];
    console.log(i);
    i++
}