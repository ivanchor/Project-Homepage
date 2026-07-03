import './header.css'
import headerImage from '.././assets/photos/headerImage.PNG'

export function createHeader(){
    return `
    <header class='header-main'>
        <div class='header-background'></div>

        <div class='header-maincontainer'>
            <img class="header-image"
                src='${headerImage}'                
                alt='Header-Image'
            >

            <div class="header-content">
                <h1 class="header-title">About Me</h1>

                <p class="header-body">Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since 1966, when designers at Letraset and James Mosley,
                    the librarian at St Bride Printing Library in London, took a 1914 Cicero
                    translation and scrambled it to make dummy text for Letraset's Body Type
                    sheets. It has survived not only many decades, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised thanks to these sheets and more recently with desktop
                    publishing software including versions of Lorem Ipsum.</p>
            
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
            </div>
        </div>

    </header>
    `
}
