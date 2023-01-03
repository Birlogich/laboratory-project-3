const wrapper = document.querySelector(".slider__wrapper");
const innerWrapper = document.querySelector(".slider__inner-wrapper");
const pagination = document.querySelector(".slider-pagination");
const buttonBack = document.querySelector(".slider-button-prev");
const buttonNext = document.querySelector(".slider-button-next");
const links = document.querySelectorAll('.slider__column-links')

let infoCity = document.querySelector('.j-slider-city')
let infoTime = document.querySelector('.j-slider-time')
let infoArea = document.querySelector('.j-slider-area')
let infoCost = document.querySelector('.j-slider-cost')

let shearWidth = +getComputedStyle(wrapper).width.split("px")[0];

const imgPath1 = `./image/img-1.png`
const imgPath2 = `./image/img-2.png`
const imgPath3 = `./image/img-3.png`

const images = [imgPath1, imgPath2, imgPath3]

const dataOfProjects = [
   {
      'City': 'Rostov-on-Don LCD admiral',
      'RepairTime': '3,5 months',
      'ApartmentArea': '81 m2',
      'RepairCost': 'Upon request'
   },
   {
      'City': 'Sochi Thieves',
      'RepairTime': '4 months',
      'ApartmentArea': '105 m2',
      'RepairCost': 'Upon request'
   },
   {
      'City': 'Rostov-on-Don Patriotic',
      'RepairTime': '3 months',
      'ApartmentArea': '93 m2',
      'RepairCost': 'Upon request'
   },
]



const shiftSlides = () => {
   let activeSlide = 0;
   let indentML = +innerWrapper.style.marginLeft.split("px")[0];
   console.log(indentML)
   innerWrapper.style.transition = "margin-left .5s";

   const renderImages = (arr) => {
      let i = 0
      for (i of arr) {
         const image = document.createElement('div')
         image.classList.add('slider-slide')
         image.innerHTML = `<img src=${i} alt=""></img>`
         image.style.width = `${shearWidth}px`;
         innerWrapper.appendChild(image)
      }
   }

   const createDots = (arr) => {
      let i = 0
      for (i of arr) {
         let dot = document.createElement("button");
         dot.classList.add('slider__dot')
         pagination.appendChild(dot)
      }
   }

   const changeActivePoint = (index) => {
      const dots = document.querySelectorAll('.slider__dot')
      dots.forEach((dot) => {
         dot.classList.remove("slider__dot_active")
         if (activeSlide == 0) {
            dots[0].classList.add("slider__dot_active");
         } else {
            dots[index].classList.add("slider__dot_active");
         }
      })
   };

   buttonNext.addEventListener('click', () => {
      console.log(activeSlide)
      if (activeSlide < images.length - 1) {
         activeSlide++
         innerWrapper.style.marginLeft = `${(indentML - shearWidth)}px`;
      } else {
         activeSlide = 0
         innerWrapper.style.marginLeft = `0px`
      }
      changeinfo(activeSlide)
      changeActivePoint(activeSlide)
   })

   buttonBack.addEventListener('click', () => {
      console.log(activeSlide)
      if (activeSlide != 0) {
         activeSlide--
         innerWrapper.style.marginLeft = `${(indentML + shearWidth)}px`;
         console.log('click')
      } else {
         activeSlide = images.length - 1
         innerWrapper.style.marginLeft = `${(-shearWidth) * (images.length - 1)}px`
      }
      changeinfo(activeSlide)
      changeActivePoint(activeSlide)
   })

   const useLinks = (links) => {
      links.forEach(link => {
         link.addEventListener('click', (e) => {
            let changeSlideByLink = [...document.querySelectorAll('.j-slider-link')].indexOf(e.target)
            if (changeSlideByLink != 0) {
               innerWrapper.style.marginLeft = `${(indentML - shearWidth) * changeSlideByLink}px`;
            } else {
               innerWrapper.style.marginLeft = `0`;
            }
         })
      })
   }
   const changeinfo = (index) => {
      if (index == 0) {
         infoCity.innerText = dataOfProjects[0].City
         infoTime.innerText = dataOfProjects[0].RepairTime
         infoArea.innerText = dataOfProjects[0].ApartmentArea
         infoCost.innerText = dataOfProjects[0].RepairCost
      } else {
         infoCity.innerText = dataOfProjects[index].City
         infoTime.innerText = dataOfProjects[index].RepairTime
         infoArea.innerText = dataOfProjects[index].ApartmentArea
         infoCost.innerText = dataOfProjects[index].RepairCost
      }
   }

   renderImages(images)
   createDots(images)

   changeActivePoint(activeSlide)
   useLinks(links)
   changeinfo(activeSlide)
}


shiftSlides()


