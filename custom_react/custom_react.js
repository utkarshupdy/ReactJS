

function customRender(reactEle , container){
    /* requires various iterations ......... 
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactEle.children
    domEle.setAttribute('href' , reactEle.props.href)
    domEle.setAttribute('target' , reactEle.props.target)
    container.appendChild(domEle)  */

    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop == 'children') continue
        domEle.setAttribute(prop , reactElement.props[prop])
    }
    container.appendChild(domEle)


}

const reactElement = {
    type: 'a' ,
    props:{
        href : 'https://google.com' ,
        target:'_blank'
    },
    children:'Click me to visit google'

}
const mainContainer = document.querySelector("#root")
customRender(reactElement , mainContainer)

