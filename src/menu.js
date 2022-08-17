import './menu.style.css'

import BurgerImage from './assets/burger.jpg'


function createMenu(){
    const gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container')
   
    // An array of menu items 
    var menuItems = ""

    // Menu Item 1
    // Create a new div with the class name of menuItem
    const burgerItem = menuItem()
    // Add an image, pass in the image to add and the alt string
    burgerItem.append(addItemImage(BurgerImage, "Image of a tasty burger"))
    burgerItem.append(addItemDescription("Oasis Burger"))
    burgerItem.append(addItemPrice(4))

    gridContainer.append(burgerItem)

    // Menu Item 1

    // Menu Item 1

    // Menu Item 1
   
    return gridContainer
   
}

function addItemPrice(price){
    const el = document.createElement('p')
    el.classList.add('menu-item-price')
    el.innerHTML = `$: ${price}`
    return el
}

function addItemDescription(string){
    const el = document.createElement('p')
    el.classList.add('menu-item-description')
    el.innerHTML = string
    return el
}

function addItemImage(theImage, alt){
    var temp = new Image()
    temp.classList.add('menu-item-image')
    temp.src = theImage
    temp.alt = alt
    return temp
}

function menuItem(){
    const element = document.createElement('div')
    element.classList.add('menu-item')
    return element
}


function renderMenuPage(){
   const main = document.getElementById('main') 

   main.append(createMenu())
   

}


export {renderMenuPage}


