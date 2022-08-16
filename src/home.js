import './style.css';


function test(){
    const test = document.createElement('h1')
    
    return test
}


function renderHomePage(){
    const main = document.querySelector('main')
    
    main.append(test())

}


export {renderHomePage}


