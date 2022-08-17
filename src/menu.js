import './menu.style.css'


function createContent(){

    const test = document.createElement('h1')

    test.innerHTML = "menu page"

    return test
}



function menuItem(){
    
}

function renderMenuPage(){
   const main = document.getElementById('main') 

   main.append(createContent())
   

}


export {renderMenuPage}


