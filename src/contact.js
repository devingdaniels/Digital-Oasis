// Styles
import './contact.style.css'

function createMap(){
    const wrapper = document.createElement('div')
    wrapper.classList.add('map-wrapper')
    const el = document.createElement('iframe')
    el.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15576.907722978938!2d-81.70872476697993!3d12.567282876967726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f05a57a2812317f%3A0x39d7645f866b54c6!2sSan%20Andr%C3%A9s!5e0!3m2!1sen!2sco!4v1660779229736!5m2!1sen!2sco" 
    el.width = "400"
    el.height = "400"
    el.style.border = "0"
    el.loading = "lazy"
    wrapper.appendChild(el)
    return wrapper
}

function createContactInfo(){
    const rightSection = document.createElement('div')
    rightSection.classList.add('contact-right-section')

    // First child
    const childOne = createChild()
    childOne.textContent = "Address: 2500 Oasis Way, San Andrés, Colombia"

    // Second child
    const childTwo = createChild() // return an h3 element
    childTwo.textContent = "Phone number 123-456-789"

    // Third child
    const childThree = createChild()
    childThree.textContent = "Facebook | Instagram | Twitter"

    rightSection.append(childOne)
    rightSection.append(childTwo)
    rightSection.append(childThree)

    return rightSection
}

function createChild(){
    const el = document.createElement('h3')
    el.classList.add('contact-child')
    return el
}


function createContactPage(){
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')
    contactContainer.append(createMap())
    contactContainer.append(createContactInfo())
    return contactContainer
}

function renderContactPage(){    
    const main = document.getElementById('main') 
    main.append(createContactPage())
}

export {renderContactPage}