// Styling
import './menu.style.css'
//Images
import BurgerImage from './assets/burger.jpg'
import SushiImage from './assets/sushi.jpg'
import ProteinImage from './assets/protein-bowl.jpg'
import ClamChowderImage from './assets/clam-chowder.jpg'
import BreakFastImage from './assets/breakfast.jpg'
import HealthyImage from './assets/healthy.jpg'


class MenuItem{
    constructor(image,alt, label, price){
        this.image = image
        this.alt = alt
        this.label = label
        this.price = price
    }
    createItem(){
        // create a menu item
        const menuItem = this.menuItem()
        // Add item image and alt attribute 
        menuItem.append(this.addItemImage(this.image, this.alt))
        // Add item label
        menuItem.append(this.addItemLabel(this.label))
        // Add item price
        menuItem.append(this.addItemPrice(this.price)) 
        // return finished product item 
        return menuItem
    }
    menuItem(){
        const element = document.createElement('div')
        element.classList.add('menu-item')
        return element
    }
    addItemImage(theImage, alt){
        var temp = new Image()
        temp.classList.add('menu-item-image')
        temp.src = theImage
        temp.alt = alt
        return temp
    }
    addItemLabel(string){
        const el = document.createElement('h1')
        el.classList.add('menu-item-description')
        el.innerHTML = string
        return el
    }
    addItemPrice(price){
        const el = document.createElement('h2')
        el.classList.add('menu-item-price')
        el.innerHTML = `$ ${price}`
        return el
    }
}

function createMenu(){
    const gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container')   
    // An array of menu items 
    var menuArray = []
    // Menu Item 1
    const temp1 = new MenuItem(BurgerImage,"Image of a tasty burger", "Oasis Burger", 11 )
    const burgerItem = temp1.createItem()
    menuArray.push(burgerItem)
    // Menu Item 2
    const temp2 = new MenuItem(SushiImage,"Image of a sushi plate", "Oasis Sushi", 17 )
    const sushiItem = temp2.createItem()
    menuArray.push(sushiItem)
    // Menu Item 3
    const temp3 = new MenuItem(ProteinImage,"Image of a protein bowl", "Oasis Bowl", 15 )
    const proteinItem = temp3.createItem()
    menuArray.push(proteinItem)
    // Menu Item 4
    const temp4 = new MenuItem(ClamChowderImage,"Image of a bowl of clam chowder", "Oasis Chowder", 14 )
    const chowderItem = temp4.createItem()
    menuArray.push(chowderItem)
    // // Menu Item 5
    const temp5 = new MenuItem(BreakFastImage,"Image of pancakes", "Oasis Pancakes", 12)
    const breakfastItem = temp5.createItem()
    menuArray.push(breakfastItem)
    // // Menu Item 6
    const temp6 = new MenuItem(HealthyImage,"Image of healthy plate of food", "Oasis Post Gym", 11)
    const healthyItem = temp6.createItem()
    menuArray.push(healthyItem)   
    // Add each menu item from array and add to grid container
    menuArray.forEach(element => {
        
        gridContainer.append(element)
    });   
    return gridContainer
}


function renderMenuPage(){
   const main = document.getElementById('main') 
   main.append(createMenu())
}

export {renderMenuPage}