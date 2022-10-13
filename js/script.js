const shopItems = ["Mela", "Pera", "Banana", "Pesto", "Pane"];
console.log(shopItems);

const container = document.querySelector(".container");
console.log(container);
const ulCreated = document.createElement("ul")
console.log(ulCreated);
container.append(ulCreated)
let i = 0;
while (i < shopItems.length) {
    const thisItem = shopItems[i];
    
    const liCreated = document.createElement("li");
    liCreated.innerHTML = thisItem
    ulCreated.append(liCreated)
    
    i++
}