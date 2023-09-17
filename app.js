// Declaring Variables

const Grid1 = document.querySelector('.grid1')
const Grid2 = document.querySelector('.grid2')
const Grid3 = document.querySelector('.grid3')
const Grid4 = document.querySelector('.grid4')
const GridParent = document.querySelector('.gridParent')


const Arrow1 = document.querySelector('.arrow1')
const Arrow2 = document.querySelector('.arrow2')
const Arrow3 = document.querySelector('.arrow3')
const Arrow4 = document.querySelector('.arrow4')

const Path1 = document.querySelector('.path1')
const Path2 = document.querySelector('.path2')
const Path3 = document.querySelector('.path3')
const Path4 = document.querySelector('.path4')

const Buzzy1 = document.querySelector('.buzzy1')
const Buzzy2 = document.querySelector('.buzzy2')
const Buzzy3 = document.querySelector('.buzzy3')
const Buzzy4 = document.querySelector('.buzzy4')

const Label1 = document.querySelector('.label1')
const Label2= document.querySelector('.label2')
const Label3 = document.querySelector('.label3')
const Label4 = document.querySelector('.label4')

// Functions

const handleHover = (arrow) => {
  arrow.style.transform = 'translateX(2.5rem)'
}

const handleHoverOff = (arrow) => {
  arrow.style.transform = 'translateX(0)'
}



const handleClick = (e) => {
  console.log(e.target.nextElementSibling);
  if(e.target === Grid1 || e.target === Path1 || e.target === Label1 || e.target === Arrow1) {
    Grid1.style.backgroundColor = '#1F2830'
    Grid1.style.color = 'white'
    Path1.setAttribute('style','fill:white')
    Buzzy1.style.transform = 'translateY(0)'

    Grid2.style.backgroundColor = 'transparent'
    Grid2.style.color = 'black'
    Path2.setAttribute('style','fill:black')
    Buzzy2.style.transform = 'translateY(12rem)'

    Grid3.style.backgroundColor = 'transparent'
    Grid3.style.color = 'black'
    Path3.setAttribute('style','fill:black')
    Buzzy3.style.transform = 'translateY(12rem)'

    Grid4.style.backgroundColor = 'transparent'
    Grid4.style.color = 'black'
    Path4.setAttribute('style','fill:black')
    Buzzy4.style.transform = 'translateY(12rem)'

  }
  else if(e.target === Grid2 || e.target === Path2 || e.target === Label2 || e.target === Arrow2) {
    Grid2.style.backgroundColor = '#1F2830'
    Grid2.style.color = 'white'
    Path2.setAttribute('style','fill:white')
    Buzzy2.style.transform = 'translateY(0)'

    Grid1.style.backgroundColor = 'transparent'
    Grid1.style.color = 'black'
    Path1.setAttribute('style','fill:black')
    Buzzy1.style.transform = 'translateY(12rem)'

    Grid3.style.backgroundColor = 'transparent'
    Grid3.style.color = 'black'
    Path3.setAttribute('style','fill:black')
    Buzzy3.style.transform = 'translateY(12rem)'

    Grid4.style.backgroundColor = 'transparent'
    Grid4.style.color = 'black'
    Path4.setAttribute('style','fill:black')
    Buzzy4.style.transform = 'translateY(12rem)'
  }

  else if(e.target === Grid3 || e.target === Path3 || e.target === Label3 || e.target === Arrow3) {
    Grid3.style.backgroundColor = '#1F2830'
    Grid3.style.color = 'white'
    Path3.setAttribute('style','fill:white')
    Buzzy3.style.transform = 'translateY(0)'

    Grid1.style.backgroundColor = 'transparent'
    Grid1.style.color = 'black'
    Path1.setAttribute('style','fill:black')
    Buzzy1.style.transform = 'translateY(12rem)'

    Grid2.style.backgroundColor = 'transparent'
    Grid2.style.color = 'black'
    Path2.setAttribute('style','fill:black')
    Buzzy2.style.transform = 'translateY(12rem)'

    Grid4.style.backgroundColor = 'transparent'
    Grid4.style.color = 'black'
    Path4.setAttribute('style','fill:black')
    Buzzy4.style.transform = 'translateY(12rem)'
  }
  else if(e.target === Grid4 || e.target === Path4 || e.target === Label4 || e.target === Arrow4) {
    Grid4.style.backgroundColor = '#1F2830'
    Grid4.style.color = 'white'
    Path4.setAttribute('style','fill:white')
    Buzzy4.style.transform = 'translateY(0)'

    Grid1.style.backgroundColor = 'transparent'
    Grid1.style.color = 'black'
    Path1.setAttribute('style','fill:black')
    Buzzy1.style.transform = 'translateY(12rem)'

    Grid2.style.backgroundColor = 'transparent'
    Grid2.style.color = 'black'
    Path2.setAttribute('style','fill:black')
    Buzzy2.style.transform = 'translateY(12rem)'

    Grid3.style.backgroundColor = 'transparent'
    Grid3.style.color = 'black'
    Path3.setAttribute('style','fill:black')
    Buzzy3.style.transform = 'translateY(12rem)'
  }
}



// Event Listeners

  // Mouse Overs

Grid1.addEventListener('mouseover', () => {
  handleHover(Arrow1)
})

Grid1.addEventListener('mouseout', () => {
  handleHoverOff(Arrow1)
})

Grid2.addEventListener('mouseover', () => {
  handleHover(Arrow2)
})

Grid2.addEventListener('mouseout', () => {
  handleHoverOff(Arrow2)
})

Grid3.addEventListener('mouseover', () => {
  handleHover(Arrow3)
})

Grid3.addEventListener('mouseout', () => {
  handleHoverOff(Arrow3)
})

Grid4.addEventListener('mouseover', () => {
  handleHover(Arrow4)
})

Grid4.addEventListener('mouseout', () => {
  handleHoverOff(Arrow4)
})

  // Click Event

  GridParent.addEventListener('click', handleClick)


