import './global.css'
import {createHeader} from './header/header.js'



export function initializePage(){
    document.getElementById('header-container').innerHTML = createHeader()
}

