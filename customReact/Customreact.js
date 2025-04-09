



function customRender(reactElement,mainContainer){
//    const domElement = document.createElement(reactElement.type);
//    domElement.innerHTML =reactElement.children;
//    domElement.setAttribute('href',reactElement.prop.href);

//     mainContainer.appendChild(domElement);

    
}

const reactElement = {
    type:'a',
    prop:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me  to  vist google'

}


const mainContainer=document.querySelector("#root");
customRender(reactElement,mainContainer);



