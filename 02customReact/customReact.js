// const { Children } = require("react");

function renderElement(element, container)
{

    // const domElement = document.createElement(element.type);
    // domElement.innerHTML = element.children;
    // domElement.setAttribute(href, element.props.href)
    // domElement.setAttribute(target, element.props.target)
    


    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;

    for (const prop in element.props) {
        if (prop ==='children') continue;

        domElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(domElement)
}

const root = document.getElementById('root');

const createElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'click toh kar mere bhai '
}

renderElement(createElement, root)