import fetch from './fetch'
import { IRedditPost, NotFound } from './types'

/**
 * Get a random post from the given subreddit
 * @param subreddit
 */
export const randomPost = async (subreddit: string): Promise<IRedditPost | NotFound> => {
    const posts = await getPosts(subreddit)
    if (!Array.isArray(posts)) return { message: 'Not Found' }
    return posts[Math.floor(Math.random() * posts.length)]
}

/**
 * Get the top post from the given subreddit
 * @param subreddit
 */
export const topPost = async (subreddit: string): Promise<IRedditPost | NotFound> => {
    const posts = await getPosts(subreddit)
    if (!Array.isArray(posts)) return { message: 'Not Found' }
    return posts[0]
}

/**
 * Get the list of posts from the given subreddit
 * @param subreddit
 * @param limit
 */
export const getPosts = async (subreddit: string, limit = 100): Promise<IRedditPost[] | { message: string }> => {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=${limit}`)
    if (!res?.data?.children) return { message: 'Not Found' }
    return res.data.children
}
