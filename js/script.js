const blockDivMain=document.querySelectorAll(".books")
const blockDiv=document.querySelectorAll(".book")

blockDiv[0].before(blockDiv[1])
blockDivMain[0].append(blockDiv[2])
blockDiv[3].before(blockDiv[4])

document.querySelector("body").style.backgroundImage="url('./image/you-dont-know-js.jpg')"

document.querySelector(".adv").remove()
const head3=blockDiv[4].querySelector('a')
head3.textContent="Книга 3. this и Прототипы Объектов"
const blocksLi=blockDiv[0].querySelectorAll("li")

blocksLi[4].before(blocksLi[6])
blocksLi[4].before(blocksLi[8])

const blocksLi5=blockDiv[5].querySelectorAll("li")

blocksLi5[2].before(blocksLi5[9])
blocksLi5[2].before(blocksLi5[3])
blocksLi5[2].before(blocksLi5[4])
blocksLi5[5].before(blocksLi5[6])
blocksLi5[5].before(blocksLi5[7])

const newElem=document.createElement("li")
newElem.textContent="Глава 8: За пределами ES6"


blockDiv[2].append(newElem)
const blocksLi2=blockDiv[2].querySelectorAll("li")

blocksLi2[9].before(blocksLi2[10])

