import './menu.style.css'
import BurgerImage from './assets/burger.jpg'
import SushiImage from './assets/sushi.jpg'
import ProteinImage from './assets/protein-bowl.jpg'
import ClamChowderImage from './assets/clam-chowder.jpg'
import BreakFastImage from './assets/breakfast.jpg'
import HealthyImage from './assets/healthy.jpg'


function createMenu(){
    const gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container')
   
    // An array of menu items 
    var menuArray = []

    // Menu Item 1
    // Create a new div with the class name of menuItem
    const burgerItem = menuItem()
    // Add an image, pass in the image to add and the alt string
    burgerItem.append(addItemImage(BurgerImage, "Image of a tasty burger"))
    burgerItem.append(addItemDescription("Oasis Burger"))
    burgerItem.append(addItemPrice(11))
    menuArray.push(burgerItem)

    // Menu Item 2
    const sushiItem = menuItem()
    // Add an image, pass in the image to add and the alt string
    sushiItem.append(addItemImage(SushiImage, "Image of fresh Sushi"))
    sushiItem.append(addItemDescription("Oasis Sushi"))
    sushiItem.append(addItemPrice(13))
    menuArray.push(sushiItem)

    // Menu Item 3
    const proteinBowl = menuItem()
    // Add an image, pass in the image to add and the alt string
    proteinBowl.append(addItemImage(ProteinImage, "Image of protein bowl"))
    proteinBowl.append(addItemDescription("Oasis Bowl"))
    proteinBowl.append(addItemPrice(9))
    menuArray.push(proteinBowl)


    // Menu Item 4
    const clamChowder = menuItem()
    // Add an image, pass in the image to add and the alt string
    clamChowder.append(addItemImage(ClamChowderImage, "Image of bowl of clam chowder"))
    clamChowder.append(addItemDescription("Oasis Clam Chowder"))
    clamChowder.append(addItemPrice(11))
    menuArray.push(clamChowder)


    // Menu Item 5
    const breakfast = menuItem()
    // Add an image, pass in the image to add and the alt string
    breakfast.append(addItemImage(BreakFastImage, "Image of pancakes"))
    breakfast.append(addItemDescription("Oasis Breakfast"))
    breakfast.append(addItemPrice(14))
    menuArray.push(breakfast)


    // Menu Item 6
    const healthy = menuItem()
    // Add an image, pass in the image to add and the alt string
    healthy.append(addItemImage(HealthyImage, "Image of healthy plate of food"))
    healthy.append(addItemDescription("Oasis Post-Gym"))
    healthy.append(addItemPrice(8))
    menuArray.push(healthy)



    // Add each menu item from array and add to grid container
    menuArray.forEach(element => {
        gridContainer.append(element)
    });
   
    return gridContainer
   
}

function addItemPrice(price){
    const el = document.createElement('h3')
    el.classList.add('menu-item-price')
    el.innerHTML = `$ ${price}`
    return el
}

function addItemDescription(string){
    const el = document.createElement('h1')
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


