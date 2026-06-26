import './project.css'
import project1 from '.././assets/photos/project1.jpg'

export function createProject(){
    return `
    <div class='project-main'>
        <h1 class='project-title'>My Projects</h1>

        <div class='project-content'>
            <div class='project-showcase'>
                <a 
                    href='https://youtube.com'>
                    <img class='project-showcase-image'
                        src='${project1}'
                        alt='Project image'
                    >
                </a>

                <div class='project-showcase-description'>
                    <h3 class='project-showcase-title'>

                        Elaina photo 1

                        <div class='socials'>
                            <a href='https://github.com/ivanchor'>
                                <img class='icon' 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                                    alt='Github'/>
                            </a>
                        </div>
                    </h3>

                    <p class='project-showcase-body'>A photo of Elaina basking under a tree on her way towards her next adventure!</p>
                </div>                
            </div>




            <div class='project-showcase'>
                <a class='project-showcase-image'
                    href='https://youtube.com'>
                    <img
                        src=''
                        alt='Project image'
                    >
                </a>

                <div class='project-showcase-description'>
                    <h3 class='project-showcase-title'>

                        Project name

                        <div class='socials'>
                            <a href='https://github.com/ivanchor'>
                                <img class='icon' 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                                    alt='Github'/>
                            </a>
                
                            <a href='https://www.linkedin.com/in/ivan-chor/'>
                                <img class='icon'
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
                                    alt='Linkedin'/>
                            </a>
                        </div>
                    </h3>

                    <p class='project-showcase-body'>Some small description about project</p>
                </div>                
            </div>




            <div class='project-showcase'>
                <a class='project-showcase-image'
                    href='https://youtube.com'>
                    <img
                        src=''
                        alt='Project image'
                    >
                </a>

                <div class='project-showcase-description'>
                    <h3 class='project-showcase-title'>

                        Project name

                        <div class='socials'>
                            <a href='https://github.com/ivanchor'>
                                <img class='icon' 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                                    alt='Github'/>
                            </a>
                
                            <a href='https://www.linkedin.com/in/ivan-chor/'>
                                <img class='icon'
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
                                    alt='Linkedin'/>
                            </a>
                        </div>
                    </h3>

                    <p class='project-showcase-body'>Some small description about project</p>
                </div>                
            </div>




            <div class='project-showcase'>
                <a class='project-showcase-image'
                    href='https://youtube.com'>
                    <img
                        src=''
                        alt='Project image'
                    >
                </a>

                <div class='project-showcase-description'>
                    <h3 class='project-showcase-title'>

                        Project name

                        <div class='socials'>
                            <a href='https://github.com/ivanchor'>
                                <img class='icon' 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                                    alt='Github'/>
                            </a>
                
                            <a href='https://www.linkedin.com/in/ivan-chor/'>
                                <img class='icon'
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
                                    alt='Linkedin'/>
                            </a>
                        </div>
                    </h3>

                    <p class='project-showcase-body'>Some small description about project</p>
                </div>                
            </div>
            


        </div>
    

    </div>
    `
}