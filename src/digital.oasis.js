// Styling module
import './main.style.css'
// HTML page modules 
import { renderHomePage } from './home';
import { renderMenuPage } from './menu';
import { renderContactPage } from './contact';


function createHeader(){
    // Main header element 
    const header = document.createElement('header')
    // create an H1 for the title 
    const restaurantTitle = document.createElement('h1')
    restaurantTitle.classList.add('restaurantTitle')
    restaurantTitle.innerHTML = "Digital Oasis"
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
        clearMainContent()
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
         clearMainContent()
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
         clearMainContent()
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

    console.log(theButton)

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
    main.id = 'main'
    return main
}

function clearMainContent(){
    const main = document.getElementById('main')
    main.innerHTML = ''
}

function createFooter(){
    const footer = document.createElement('footer')
    const container = document.createElement('p')
    container.classList.add('footer-container') 
    container.innerHTML = " Copyright ©"
    var date = new Date().getFullYear()
    container.innerHTML += " " + date + " "
    const link = document.createElement('a')
    link.href = "https://github.com/devingdaniels"
    link.target = "_blank"
    link.classList.add('gitLink')
    link.innerHTML = "devingdaniels"
    container.append(link)
    footer.append(container)
    return footer
}


function renderWebsite(){
    const content = document.getElementById('content')
    
    content.append(createHeader())
    content.append(createMain())
    content.append(createFooter())

    
    updateActiveStatus(document.querySelector(".nav-button"))
    renderHomePage()
}

export {renderWebsite}