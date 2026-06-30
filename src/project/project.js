import './project.css'
import { projectList } from './projectlist'


export function createProject(){
    return `
    <div class='project-main'>
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
    </div>
    `
}

function createProjectShowcase(projectLink, githubLink, image, title, description){
    return`
        <div class='project-showcase'>
                <a 
                    href='${projectLink}'>
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
                        </div>
                    </h3>

                    <p class='project-showcase-body'>${description}</p>
                </div>                
            </div>
    `
}