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