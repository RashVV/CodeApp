const createPost = (title, text = 'No comment. Average Day', date = new Date().toLocaleDateString()) => {
    //date = date || new Date().toLocaleDateString()
    return {title, text, date}
}
const post = createPost('New period of my life', 'Today I have one of the best day of my life. I receive a job offer!' )
//const post = createPost('New period of my life' )

console.log('Post:', post)