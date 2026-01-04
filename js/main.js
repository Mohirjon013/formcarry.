// header start 
let elSiteHeader = document.querySelector(".site-header")
let navbarList = ["FAQ", "Docs", "Integrations", "Pricing"]
let BtnList = ["Login", "Sign up"]


let elContainer = document.createElement("div")
let elHeader = document.createElement("div")
let elLogoImgLink = document.createElement("a")
let elLogoImg = document.createElement("img")
let elHeaderList = document.createElement("ul")
let elBtnWrapper = document.createElement("div")

elContainer.classList.add("container")
elHeader.className = "header flex items-center justify-between py-[36px] px-[35px] rounded-b-[16px] shadow-[0px_48px_96px_0px_#423E790F]"


elLogoImgLink.className = "header__logo-link inline-block"
elLogoImgLink.href = "/"
elLogoImg.classList.add("header__logo-img")
elLogoImg.src = "./images/logo.svg"
elLogoImg.alt = "logo-img"
elLogoImg.width = "157"
elLogoImg.height = "24"

elHeaderList.className = "header__list flex items-center gap-[44px]"
navbarList.forEach(item => {
    let elHeaderItem = document.createElement("li")
    let elHeaderItemLink = document.createElement("a")

    elHeaderItem.className ="header__item"
    elHeaderItemLink.className ="header__item-link font-normal text-[14px] text-[#535479] leading-[24px]"
    elHeaderItemLink.href = "/"
    elHeaderItemLink.textContent = item

    elHeaderList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderItemLink)
})

elBtnWrapper.className = "header__btn-wrapper flex items-center gap-[20px]"
BtnList.forEach(item => {
    let elHeaderBtn = document.createElement("button")

    elHeaderBtn.className = "header__btn py-[7px] px-[24px] rounded-[40px] bg-[#0E0B3D] font-normal text-[14px] text-[#FFFFFF] leading-[24px] cursor-pointer hover:bg-transparent hover:text-[#0E0B3D] border hover:border hover:border-[#0E0B3D] hover:border-solid duration-300"
    elHeaderBtn.textContent = item
    elBtnWrapper.appendChild(elHeaderBtn)
})

elSiteHeader.appendChild(elContainer)
elContainer.appendChild(elHeader)
elHeader.append(elLogoImgLink, elHeaderList, elBtnWrapper)
elLogoImgLink.appendChild(elLogoImg)