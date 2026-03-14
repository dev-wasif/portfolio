const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


//dynamic skill

let data = [
  {
    icons: '<i class="fab fa-html5"></i>',
    span: 'HTML5'
  },
  {
    icons: '<i class="fab fa-css3"></i>',
    span: 'CSS3'
  },
  {
    icons: ' <i class="fab fa-js"></i>',
    span: 'JavaScript'
  },
  {
    icons: ' <i class="fab fa-react"></i>',
    span: 'React (Basic)'
  },
  {
    icons: ' <i class="fab fa-bootstrap"></i>',
    span: 'Bootstrap'
  },
  {
    icons: ' <i class="fas fa-mobile-alt"></i>',
    span: 'Responsive Design',
  },

  {
    icons: '<i class="fas fa-code-branch"></i>',
    span: 'Git & GitHub'
  },
  {
    icons: ' <i class="fas fa-paint-brush"></i>',
    span: 'UI/UX Basics'
  },
]

const skills = document.getElementById('skills');
skills.setAttribute('class', 'skills')
skills.setAttribute('id', 'skills')
const container = document.createElement('div')
container.setAttribute('class', 'container')
const sectionTitle = document.createElement('h2')
sectionTitle.innerText = ('My Skills')
sectionTitle.setAttribute('class', 'section-title')
const skillsGrid = document.createElement('div')
skillsGrid.setAttribute('class', 'skills-grid')

skills.appendChild(container)
container.appendChild(sectionTitle)
container.appendChild(skillsGrid)




for (let i = 0; i < data.length; i++) {

  const skillsItems = document.createElement('div')
  const imgdiv = document.createElement('div')
  const spandiv = document.createElement('span')

  skillsGrid.appendChild(skillsItems)
  skillsItems.setAttribute('class', 'skill-item')
  skillsItems.appendChild(imgdiv)
  imgdiv.setAttribute('class', 'img')

  skillsItems.appendChild(spandiv)
  spandiv.setAttribute('class', 'span')
  imgdiv.innerHTML = data[i].icons;
  spandiv.innerHTML = data[i].span

}

//dynamic card design

let data2 = [
  {
    pImg: '<i class="fas fa-shopping-cart"></i>',
    h3: 'E-Commerce Website',
    p: 'A fully responsive e-commerce UI with product grid, cart, and checkout page. Built with HTML, CSS, and JavaScript.',

    techtag1: 'HTML5',
    techtag2: 'CSS3',
    techtag3: 'JavaScript',
    link1: '<a href="https://dev-wasif.github.io/">',
    link2: '  <a href="https://dev-wasif.github.io/e-store/">',
     Ainner: '<i class="fab fa-github"></i></a>',
    Aouter:'<i class="fas fa-external-link-alt"></i></a>',

  },

   {
    pImg: ' <i class="fas fa-solid fa-arrow-right-to-bracket"></i>',
    h3: 'Login Form',
    p: 'A clean and responsive login form design built with HTML, CSS, and JavaScript. A fully fuctional login form',
    techtag1: 'HTML5',
    techtag2: 'CSS3',
    techtag3: 'JavaScript',
    link1: '<a href="https://github.com/dev-wasif/">',
    link2:'<a href="https://dev-wasif.github.io/login-form/">',
    Ainner: '<i class="fab fa-github"></i></a>',
    Aouter:'<i class="fas fa-external-link-alt"></i></a>',
    
  },

   {
    pImg: ' <i class="fas fa-tasks"></i>',
    h3: 'Todo App',
    p: 'A simple yet stylish to-do list app with local storage support. Add, delete, and mark tasks as complete.',

    techtag1: 'HTML5',
    techtag2: 'CSS3',
    techtag3: 'JavaScript',
    link1: '  <a href="https://github.com/dev-wasif/">',
    link2: '  <a href="https://dev-wasif.github.io/To.do/" target="_blank"> ',
    Ainner: '<i class="fab fa-github"></i></a>',
    Aouter:'<i class="fas fa-external-link-alt"></i></a>',
  }
]



const projects = document.getElementById('projects')
projects.setAttribute('class', 'projects')

const container2 = document.createElement('div')
container2.setAttribute('class', 'container')

const sectionTitle2 = document.createElement('div')
sectionTitle2.innerText = 'Projects'
sectionTitle2.setAttribute('class', 'section-title')
const projectsGrid = document.createElement('div')
projectsGrid.setAttribute('class', 'projects-grid')


projects.appendChild(container2)
container2.appendChild(sectionTitle2)
container2.appendChild(projectsGrid)




for (let x = 0; x < data2.length; x++) {

  const projectCard = document.createElement('div')
  const pImg = document.createElement('div')
  const pContent = document.createElement('div')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  const tag = document.createElement('div')

  const tagChild1 = document.createElement('span')
  const tagChild2 = document.createElement('span')
  const tagChild3 = document.createElement('span')

  tag.appendChild(tagChild1)
  tag.appendChild(tagChild2)
  tag.appendChild(tagChild3)


  tagChild1.setAttribute('class', 'tech-tag')
  tagChild2.setAttribute('class', 'tech-tag')
  tagChild3.setAttribute('class', 'tech-tag')


  tag.setAttribute('class', 'project-tech')

  const pLink = document.createElement('div')

  const a1 = document.createElement('a')
  const a2 = document.createElement('a')

  projectsGrid.append(projectCard)
  projectCard.appendChild(pImg)
  projectCard.appendChild(pContent)
  pContent.appendChild(h3)
  pContent.appendChild(p)
  pContent.appendChild(tag)
  pContent.appendChild(pLink)
  pLink.appendChild(a1)
  pLink.appendChild(a2)

  // setAttribute

  projectCard.setAttribute('class', 'project-card')
  pImg.setAttribute('class', 'project-img')
  pContent.setAttribute('class', 'project-content')
  tag.setAttribute('class', 'project-tech')
  pLink.classList.add('project-links')
  


  //set value

  pImg.innerHTML = data2[x].pImg
  h3.innerText = data2[x].h3
  p.innerText = data2[x].p
  tagChild1.innerText = data2[x].techtag1
  tagChild2.innerText = data2[x].techtag2
  tagChild3.innerText = data2[x].techtag3
  a1.href = data2[x].link1 || '#'
a2.href = data2[x].link2 || '#'
a1.innerHTML = data2[x].Ainner
a2.innerHTML = data2[x].Aouter
a1.target = "_blank"
a2.target = "_blank"


}