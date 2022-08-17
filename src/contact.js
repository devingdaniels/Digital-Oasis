





function createContent(){

    const test = document.createElement('h1')

    test.innerHTML = "contact page"

    return test
}




function renderContactPage(){
    
    const main = document.getElementById('main') 

    main.append(createContent())

}


export {renderContactPage}
