// header start 
let elSiteHeader = document.querySelector(".site-header")
let navbarList = ["FAQ", "Docs", "Integrations", "Pricing"]
let BtnList = ["Login", "Sign up"]


const elContainer = document.createElement("div")
const elHeader = document.createElement("div")
const elLogoImgLink = document.createElement("a")
const elLogoImg = document.createElement("img")
const elHeaderList = document.createElement("ul")
const elBtnWrapper = document.createElement("div")

elContainer.classList.add("container")
elHeader.className = "header flex items-center justify-between gap-2 py-5 sm:py-[36px] px-2 sm:px-[36px] rounded-b-[16px] shadow-[0px_48px_96px_0px_#423E790F] "

elLogoImgLink.className = "header__logo-link inline-block"
elLogoImgLink.href = "/"
elLogoImg.className = "header__logo-img w-[100px] sm:w-[157px]"
elLogoImg.src = "./images/logo.svg"
elLogoImg.alt = "logo-img"
elLogoImg.width = "157"
elLogoImg.height = "24"

elHeaderList.className = "header__list md:flex hidden items-center lg:gap-[44px] md:gap-[22px]"
navbarList.forEach(item => {
    let elHeaderItem = document.createElement("li")
    let elHeaderItemLink = document.createElement("a")

    elHeaderItem.className ="header__item"
    elHeaderItemLink.className ="header__item-link font-normal text-[14px] text-[#535479] leading-[24px] hover:text-[#1463FF] duration-300"
    elHeaderItemLink.href = "/"
    elHeaderItemLink.textContent = item

    elHeaderList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderItemLink)
})

elBtnWrapper.className = "header__btn-wrapper  flex items-center gap-1 md:gap-[20px]"
BtnList.forEach(item => {
    let elHeaderBtn = document.createElement("button")

    elHeaderBtn.className = "header__btn px-[16px] sm:px-[24px] py-[7px] rounded-[40px] bg-[#0E0B3D] font-normal text-[12px] sm:text-[14px] text-[#FFFFFF] leading-[24px] cursor-pointer hover:bg-transparent hover:text-[#0E0B3D] border hover:border hover:border-[#0E0B3D] hover:border-solid duration-300 "
    elHeaderBtn.textContent = item
    elBtnWrapper.appendChild(elHeaderBtn)
})

elSiteHeader.appendChild(elContainer)
elContainer.appendChild(elHeader)
elHeader.append(elLogoImgLink, elHeaderList, elBtnWrapper)
elLogoImgLink.appendChild(elLogoImg)
// header end 


// main start 
let elMain = document.querySelector(".site-main")

let elHeroSection = document.createElement("section")
let elHeroContainer = document.createElement("div")
let elHero = document.createElement("div")
let elHeroStrong = document.createElement("strong")
let elHeroTitle = document.createElement("h1")
let elHeroText = document.createElement("p")
let elHeroBtn = document.createElement("button")


elHeroSection.className = "hero-section sm:mt-[106px] mt-[50px] md:mb-[400px] mb-[130px]"
elHeroContainer.classList.add("container")
elHero.className = "hero max-w-[655px] w-full mx-auto text-center"

elHeroStrong.className = "hero__strong mb-[12px] block font-bold text-[12px] sm:text-[14px] text-[#1463FF] leading-[24px] uppercase"
elHeroStrong.textContent = "COLLECT FORM SUBMISSIONS"
elHeroTitle.className = "hero__title mb-[14px] font-normal md:text-[56px] sm:text-[46px] text-[30px] text-[#0E0B3D] md:leading-[72px]  sm:leading-[60px] leading-[35px]"
elHeroTitle.textContent = "Get emails and messages from your HTML form"
elHeroText.className = "hero__text sm:mb-[68px] mb-[40px] font-normal sm:text-[17px] text-[14px] text-[#0E0B3D] sm:leading-[30px] leading-[20px]"
elHeroText.textContent = "Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps."

elHeroBtn.className = "hero__btn py-[12px] px-[32px] bg-[#030122] font-normal text-[13px] text-[#FFFFFF] leading-[24px] rounded-[50px] border hover:border hover:border-solid hover:border-[#030122] hover:bg-transparent hover:text-[#030122] hover:cursor-pointer duration-300"
elHeroBtn.textContent = "Get Started"

elMain.appendChild(elHeroSection)
elHeroSection.appendChild(elHeroContainer)
elHeroContainer.appendChild(elHero)
elHero.append(elHeroStrong, elHeroTitle, elHeroText, elHeroBtn)
// main end


// footer start 
let elSiteFooter = document.querySelector(".site-footer")
let footerTextList = ["Terms of Service", "Privacy Policy"]
let footerIconList = ["./images/tw.svg", "./images/fs.svg", "./images/github.svg"]

let elFooterContainer = document.createElement("div")
let elFooter = document.createElement("div")
let elFooterSpan = document.createElement("span")
let elFooterTextWrapper = document.createElement("div")
let elFooterIconWrapper = document.createElement("div")


elFooterContainer.classList.add("container")
elFooter.className = "footer md:mb-[30px] mb-[15px] bg-[#F7F9FC] rounded-[12px] flex flex-col sm:flex-row items-center justify-between sm:p-[24px] p-[10px] gap-3 sm:gap-0"

elFooterSpan.className = "footer__span font-normal sm:text-[14px] text-[12px] text-[#535479] leading-[24px]"
elFooterSpan.textContent = "formcarry. all rights reserved"

elFooterTextWrapper.className = "footer__text-wrapper flex items-center  md:gap-[30px] sm:gap-[20px] gap-[15px]"
footerTextList.forEach(item => {
    let elFooterText = document.createElement("p")

    elFooterText.className = "footer__text font-normal text-[13px] text-[#535479] leading-[24px]"
    elFooterText.textContent = item

    elFooterTextWrapper.appendChild(elFooterText)
})

elFooterIconWrapper.className = "footer__icon-wrapper flex items-center gap-[24px]"
footerIconList.forEach(item => {
    let elFooterIcon = document.createElement("img")

    elFooterIcon.className = "footer__icon cursor-pointer"
    elFooterIcon.src = item
    elFooterIcon.alt = "icons"
    elFooterIcon.width = "32"
    elFooterIcon.height = "32"

    elFooterIconWrapper.appendChild(elFooterIcon)
})


elSiteFooter.appendChild(elFooterContainer)
elFooterContainer.appendChild(elFooter)
elFooter.append(elFooterSpan, elFooterTextWrapper, elFooterIconWrapper)