const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


let data =[
   {
      icons :  '<i class="fab fa-html5"></i>' ,
      span :  'HTML5'
    },
       {
      icons :  '<i class="fab fa-css3"></i>' ,
      span :  'CSS3'
    },
       {
      icons :  ' <i class="fab fa-js"></i>' ,
      span :  'JavaScript'
    },
        {
      icons :  ' <i class="fab fa-react"></i>' ,
      span :  'React (Basic)'
    },
      {
      icons :  ' <i class="fab fa-bootstrap"></i>' ,
      span :  'Bootstrap'
    },
      {
      icons :  ' <i class="fas fa-mobile-alt"></i>' ,
      span :  'Responsive Design',
    },
    
      {
      icons :  '<i class="fas fa-code-branch"></i>' ,
      span :  'Git & GitHub'
    },
      {
      icons :  ' <i class="fas fa-paint-brush"></i>' ,
      span :  'UI/UX Basics'
    },
]

const skills = document.getElementById('skills');
skills.setAttribute('class','skills')
skills.setAttribute('id','skills')
const container = document.createElement('div')
container.setAttribute('class','container')
const sectionTitle=document.createElement('h2')
sectionTitle.innerText=('My Skills')
sectionTitle.setAttribute('class','section-title')
const skillsGrid=document.createElement('div')
skillsGrid.setAttribute('class','skills-grid')

skills.appendChild(container)
container.appendChild(sectionTitle)
container.appendChild(skillsGrid)




for (let i=0;i< data.length;i++){

 const skillsItems=document.createElement('div')
const imgdiv=document.createElement('div')
const spandiv=document.createElement('span')

 skillsGrid.appendChild(skillsItems)
 skillsItems.setAttribute('class','skill-item')
skillsItems.appendChild(imgdiv)
imgdiv.setAttribute('class','img')

skillsItems.appendChild(spandiv)
spandiv.setAttribute('class','span')
imgdiv.innerHTML=data[i].icons;
spandiv.innerHTML=data[i].span

}