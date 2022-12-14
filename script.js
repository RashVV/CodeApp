const createPost = (title, text = 'No comment. Average Day', date = new Date().toLocaleDateString()) => {
    //date = date || new Date().toLocaleDateString()
    return {title, text, date}
}
const post = createPost('New period of my life', 'Today I have one of the best day of my life. I receive a job offer!' )
//const post = createPost('New period of my life' )

console.log('Post:', post)

const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const name = form.name.value
    const role = form.role.value
    const email = form.email.value

    saveLid (name, role, email)
})

//Spread operator
// function saveLid(data) {
//     const formData = {
//         date : new Date().toLocaleDateString(),
//         ...data
//     }
// console.log('Lid', formData)
// }
//Rest operator
function saveLid(...args) {
    //console.log('Args-IS:', args)
    const [name, role, email] = args
    const formData = {
        date : new Date().toLocaleDateString(),
        name, role, email//...data
    }
    console.log('Lid', formData)
}

const createMenuLinks = ({path, menuName}) => `<a target="_blank" href="${path}">${menuName}</a>`
const menu = document.querySelector('ul')
const about = `<li>${createMenuLinks({path: 'https://apasltd.com', menuName: 'Main Site'})}</li>`
const shop = `<li>${createMenuLinks({path: 'https://hungry-wozniak-a047a1.netlify.app/', menuName: 'E-commerce example'})}</li>`
const game = `<li>${createMenuLinks({path: 'https://zesty-hummingbird-6ea8d6.netlify.app/', menuName: 'React App Squire piker'})}</li>`
const amp = `<li>${createMenuLinks({path: 'https://agitated-ramanujan-94204b.netlify.app/', menuName: 'AMP Supper Fast WebSite'})}</li>`

menu.insertAdjacentHTML('afterbegin', about)
menu.insertAdjacentHTML('afterbegin', shop)
menu.insertAdjacentHTML('afterbegin', amp)
menu.insertAdjacentHTML('afterbegin', game)


//Class RootElement <= Box <= Instance

class RootElement {
    constructor(tagName = 'div') {
        this.$el = document.createElement(tagName)
        this.$el.style.marginBottom = '13px'
        this.$el.style.display = 'flex'
    }
    hide() {
        this.$el.style.opacity = '0'
    }
    show() {
        this.$el.style.opacity = '1'
    }
    apend() {
        document.querySelector('.app').insertAdjacentElement('beforeend', this.$el)
    }
}

class Box extends RootElement {
    constructor(color, size = 150, tagName) {
        super(tagName)
        this.color = color
        this.size = size
    }
    create() {
        //console.log(this.$el)
        this.$el.style.backgroundColor = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px`

        this.apend()
        return this
    }
}

class Circle extends RootElement {
    constructor(color) {
        super();
        this.color = color
    }
    create() {
        this.$el.style.borderRadius = '50%'
        this.$el.style.width = this.$el.style.height = '120px'
        this.$el.style.background = this.color

        this.apend()

        return this

    }
}

const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue', 100, 'div').create()

const circle = new Circle('green').create()

circle.$el.addEventListener('mouseenter', () => {
    circle.hide()
})

circle.$el.addEventListener('mouseleave', () => {
    circle.show()
})

blueBox.$el.addEventListener('mouseenter', () => {
    blueBox.hide()
})

blueBox.$el.addEventListener('mouseleave', () => {
    blueBox.show()
})

redBox.$el.addEventListener('mouseenter', () => {
    redBox.hide()
})

redBox.$el.addEventListener('mouseleave', () => {
    redBox.show()
})

//DpopDownList

class Dropdown {
    constructor(selector, options) {
        this.$choose = document.querySelector(selector)
        this.items = options.items
        this.$choose.querySelector('.dropdown__label').textContent = this.items[0].label
        this.$choose.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.$choose.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            } else if(event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id)
            }
        })
        this.items.shift()
        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`
        }).join(' ')
        this.$choose.querySelector('.dropdown__variants').insertAdjacentHTML('afterbegin', itemsHTML)
        console.log(this.$choose)
    }
    select(id) {
        const item = this.items.find(i => i.id === id)
        this.$choose.querySelector('.dropdown__label').textContent = item.label
        this.close()
        console.log(item)
    }
    open() {
        this.$choose.classList.add('open')
    }
    close() {
        this.$choose.classList.remove('open')
    }
}

const chooseService = new Dropdown ('#choose', {
    items: [
        {label: 'Take your Variant', id: 'lable'},
        {label: 'Landing Page', id: 'lp'},
        {label: 'WebGame', id: 'wg'},
        {label: 'WebApp', id: 'wa'},
        {label: 'Accelerated Mobil Page', id: 'amp'}
    ]
})