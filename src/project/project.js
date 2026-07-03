import './project.css'
import { projectList } from './projectlist'


export function createProject(){
    return `
    <main class='project-main'>
        <h1 class='project-title'>My Projects</h1>

        <div class='project-content'>
            ${projectList.map(project=>
                createProjectShowcase(
                    project.projectLink,
                    project.githubLink,
                    project.image,
                    project.title,
                    project.description
                )
            ).join('')}
        </div>
    </main>
    `
}

function createProjectShowcase(projectLink, githubLink, image, title, description){
    return`
        <div class='project-showcase'>
                <a href='${projectLink}'>
                    <img class='project-showcase-image'
                        src='${image}'
                        alt='Project image'
                    >
                </a>

                <div class='project-showcase-description'>
                    <h3 class='project-showcase-title'>

                        ${title}

                        <div class='socials'>
                            <a href='${githubLink}'>
                                <img class='icon' 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                                    alt='Github'/>
                            </a>
                            <a href='${projectLink}'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
                            </a>
                        </div>
                    </h3>

                    <p class='project-showcase-body'>${description}</p>
                </div>                
        </div>
    `
}