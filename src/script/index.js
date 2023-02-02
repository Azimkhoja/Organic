"use strict"


const modelWindow = document.querySelector('.model-window'),
closeBtn = document.querySelector('.close-btn'),
signUpBtn = document.querySelector('.register-btn'),
modelContent = document.querySelector('.model-content'),
introProduct = document.querySelector('.intro__product--info')


signUpBtn.addEventListener('click', () => {
    modelWindow.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
    modelWindow.classList.add('hidden')
})

modelWindow.addEventListener('click', (e) => {
    console.log(e.target.classList.contains('model-window'));{
        if(e.target.classList.contains('model-window')){
            modelContent.classList.toggle('shaker')
        }
    }
})

 


// ---------------  dynamic elements  --------------------------------//

let cards = [
    {
        id: 1,
        img: "./images/user 1 (1).svg",
        title: "30K",
        description: "User Order"
    },
    {
        id: 1,
        img: "./images/star 7.svg",
        title: "20K",
        description: "Reviews(4.8)"
    },
    {
        id: 1,
        img: "./images/harvest 1.svg",
        title: "300",
        description: "Items"
    },
]


const createElemnt = (tagName, className, content) => {
    const element = document.createElement(tagName)

    if(className){
        element.setAttribute('class', className)
    }

    if(content){
        element.innerHTML = content
    }

    return element
}





cards.forEach(items => {
    const newElemnt = createElemnt('div', "card hover:shadow-lg shadow hover:scale-105 duration-200 bg-white flex justify-between items-center py-5 pr-11 px-8 rounded-sm mb-[30px]",
        `<span class="bg-green-100 p-4 rounded-full"><img src="${items.img}" alt="user"></span>

        <div class="flex flex-col items-center justify-center ml-3">
          <h2 class="text-5xl font-normal">${items.title}</h2>
          <p>${items.description}</p>
        </div>
      `
    )

    introProduct.append(newElemnt)
})


let icon = document.querySelector('.icon')

icon.onclick = function(e) {
    console.log(object);
}
