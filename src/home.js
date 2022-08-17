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
    rightSection.classList.add('rightSection')

    // First child
    const childOne = document.createElement('p')
    childOne.classList.add('child')
    childOne.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, similique accusamus! Praesentium, sed delectus doloremque a non beatae possimus esse iure quisquam repellendus deleniti? Voluptatibus."

    // Second child
    const childTwo = document.createElement('p')
    childTwo.classList.add('child')
    childTwo.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, similique accusamus! Praesentium, sed delectus doloremque a non beatae possimus esse iure quisquam repellendus deleniti? Voluptatibus."

    // Third child
    const childThree = document.createElement('p')
    childThree.classList.add('child')
    childThree.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, similique accusamus! Praesentium, sed delectus doloremque a non beatae possimus esse iure quisquam repellendus deleniti? Voluptatibus."

    rightSection.append(childOne)
    rightSection.append(childTwo)
    rightSection.append(childThree)

    return rightSection
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


