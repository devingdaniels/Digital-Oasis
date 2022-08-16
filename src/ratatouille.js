// Styling module
import './style.css'
// HTML page modules 
import { renderHomePage } from './home';
import { renderMenuPage } from './menu';
import { renderContactPage } from './contact';



function createHeader(){
    // Main header element 
    const header = document.createElement('header')
    // create an H1 for the title 
    const restaurantTitle = document.createElement('h1')
    restaurantTitle.classList.add('ratatouilleTitle')
    restaurantTitle.innerHTML = "Ratatouille"
    // Add the restaurant title to the header
    header.append(restaurantTitle)
    // After title, append the nav bar with nav buttons
    header.append(createNavbar())
    // Return object includes title h1 and nav bar with 3 buttons
    return header
}

function createNavbar(){
    const navbar = document.createElement('nav')

// Create the home button 
    const homeButton = document.createElement('button')
    homeButton.classList.add('nav-button')
    homeButton.innerHTML = "Home"
    homeButton.addEventListener('click', e=>{
        // check if page needs to be updated
        if (homeButton.classList.contains('active')) return
        updateActiveStatus(homeButton)
        renderHomePage()
    })

// Create the menu button 
    const menuButton = document.createElement('button')
    menuButton.classList.add('nav-button')
    menuButton.innerHTML = "Menu"
    menuButton.addEventListener('click', ()=>{
         // check if page needs to be updated
         if (menuButton.classList.contains('active')) return
         updateActiveStatus(menuButton)
         renderMenuPage()
    })

// Create the contact button
    const contactButton = document.createElement('button')
    contactButton.classList.add('nav-button')
    contactButton.innerHTML = "Contact"
    contactButton.addEventListener('click', ()=>{
         // check if page needs to be updated
         if (contactButton.classList.contains('active')) return
         updateActiveStatus(contactButton)
         renderContactPage()
    })


// Append the buttons to the nav bar
    navbar.append(homeButton)
    navbar.append(menuButton)
    navbar.append(contactButton)

// Return object is navbar with 3 buttons
    return navbar
}


function updateActiveStatus(theButton){
    // get all the nav buttons from the nav bar 
    const navButtons = document.querySelectorAll('.nav-button')
    // Remove active from every button except for theButton
    navButtons.forEach(button => {
        if (button !== theButton){
            button.classList.remove('active')
        }
    })
    // Update active on the theButton 
    theButton.classList.add('active')
}

function createMain(){
    const main = document.createElement('main')
    
    const image = document.createElement("img");
    image.src = './images/Remy.png'
    image.alt = "Image of Remy"

    main.append(image)

    return main
}


function renderRatatouilleWebsite(){
    const content = document.getElementById('content')

    content.append(createHeader())
    content.append(createMain())
    // content.append(createFooter())

    renderHomePage()
}

export {renderRatatouilleWebsite}