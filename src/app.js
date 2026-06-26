import './global.css'
import {createHeader} from './header/header.js'
import { createProject } from './project/project.js'


export function initializePage(){
    document.getElementById('header-container').innerHTML = createHeader()
    document.getElementById('project-container').innerHTML = createProject()
}

