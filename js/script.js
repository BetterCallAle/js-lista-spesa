const shopItems = ["Mela", "Pera", "Banana", "Pesto", "Pane"];
console.log(shopItems);

const ulExported = document.querySelector("ul");
console.log(ulExported);

let i = 0;
while (i < shopItems.length) {
    const thisItem = shopItems[i];
    
    const liCreated = document.createElement("li");
    liCreated.innerHTML = thisItem
    ulExported.append(liCreated)
    
    i++
}