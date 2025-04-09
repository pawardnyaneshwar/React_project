import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const reactElement = {
  type:'a',
  prop:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me  to  vist google'

}
const anotheruser ="chai aur react";
const anotherElement = (
  <a href="https://google.com" >google</a>
)

const react3 =React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  "click here",
 anotheruser

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <App/>
 
);


reportWebVitals();
