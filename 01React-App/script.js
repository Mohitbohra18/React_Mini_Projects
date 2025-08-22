
// const h2 = {                                   //another way of creation elements in react

//     $$typeof: Symbol.for('react.element'),
//     type: "h2",
//     ref: null,
//     props: {
//         className: "subclass",
//         children: {
//             $$typeof: Symbol.for('react.element'),
//             type: "i",
//             ref: null,
//             props: {
//                 children: {
//                     $$typeof : Symbol.for('react.element'),
//                     type: "p",
//                     ref: null,
//                     props: {
//                         className: "para",
//                         children: "i am italic inside para"
//                     },},
//             },
//         }
//     },
// };


//inserting an array as a prop


// const h2 = {
//     $$typeof: Symbol.for('react.element'),
//     type: "h2",
//     ref: null,
//     props: {
//         className: "subclass",
//         children: [
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type:"i",
//                 ref:null,
//                 props:{
//                     id:"itallic",
//                     children: "i am itallic",
//                 },
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type:"br",
//                 ref:null,
//                 props:{
                    
//                 },
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type:"b",
//                 ref:null,
//                 props:{
//                     id:"bold",
//                     children: "i am bold",
//                 },
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type:"br",
//                 ref:null,
//                 props:{
                    
//                 },
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type:"button",
//                 ref:null,
//                 props:{
//                     children: "react Button",
//                 },
//             },
            
//         ],
        
//     },
// };

// using CreatElement function to create a new element

// const h2=React.createElement('h2', {className: 'subclass'},'hi i am react element');

// const h2=React.createElement('h2', {className: 'div',id:"div"},[
//     React.createElement('section', {},['hi i am span',
//         React.createElement('br'),
//         React.createElement('b', {id:"bold"},'i am bold'),
//     ]),
//     React.createElement('article', {id:'art'},['its article',
//         React.createElement('i',{className:'italic'},'  its itallic'),
//         React.createElement('b', {id:"bold"},'  i am bold'),
//     ]),

//     React.createElement('img', {
//         src :"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//         style: {
//             width: '250px',
//             height: '250px',
//             },
//         }),
//     React.createElement('form',{},[
//         React.createElement('label',{for:'name'},'name '),
//         React.createElement('input',{id:'name',name:'name' ,placeholder:'enter name'},),
//         React.createElement('br'),
//         React.createElement('label',{for:'numer'},'mno.'),
//         React.createElement('input',{id:'name',name:'name' ,placeholder:'enter name' ,type:'tel'},),
//         React.createElement('br'),
//         React.createElement('button',{id:'btn',name:'button'},'submit'),
    
//     ]),
// ]);



// const root = ReactDOM.createRoot(document.querySelector("#root"));


// root.render(h2);