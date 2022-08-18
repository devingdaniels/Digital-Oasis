import './home.style.css'

import CafeImage from './assets/homepage-cafe.jpg'

function createLeftSideHome(){
    const leftSection = document.createElement('div')
    leftSection.classList.add('leftSection')
    var cafeImage = new Image()
    cafeImage.src = CafeImage
    cafeImage.alt = "Image of a cool cafe"
    cafeImage.classList.add('mainCafeImage')
    leftSection.append(cafeImage)
    return leftSection
}

function createRightSideHome(){
    const rightSection = document.createElement('div')
    rightSection.classList.add('home-right-section')

    // First child
    const childOne = createChild()
    childOne.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, similique accusamus! Praesentium, sed delectus doloremque a non beatae possimus esse iure quisquam repellendus deleniti? Voluptatibus."

    // Second child
    const childTwo = createChild() // return an h3 element
    childTwo.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, similique accusamus! Praesentium, sed delectus doloremque a non beatae possimus esse iure quisquam repellendus deleniti? Voluptatibus."

    // Third child
    const childThree = createChild()
    childThree.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, similique accusamus! Praesentium, sed delectus doloremque a non beatae possimus esse iure quisquam repellendus deleniti? Voluptatibus."

    rightSection.append(childOne)
    rightSection.append(childTwo)
    rightSection.append(childThree)

    return rightSection
}

function createChild(){
    const el = document.createElement('h3')
    el.classList.add('child')
    return el
}

function createHomePage(){
    const homePageSection = document.createElement('div')
    homePageSection.classList.add('homePageSection')
    homePageSection.append(createLeftSideHome())
    homePageSection.append(createRightSideHome())
    return homePageSection
}

function renderHomePage(){
    const main = document.querySelector('main')
    main.append(createHomePage())
}

export {renderHomePage}