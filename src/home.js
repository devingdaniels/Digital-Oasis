import './style.css';


export default class HomePage{
    
createMenuTab(){
        const el = document.createElement('button')
        el.innerHTML = "menu"
        el.backgroundColor = "blue";
        return el
    }
    
}


function renderHomePage(){
    
    alert('This will append the home page layout to the main container')

}


export {renderHomePage}


