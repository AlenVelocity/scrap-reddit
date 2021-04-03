const { randomPost, topPost } = require('../dist')

const subreddit = 'animewallpaper'
const posts = Promise.all([randomPost(subreddit)], topPost(subreddit))
posts.then((data) => console.log(data.map((post) => post.data.title)))