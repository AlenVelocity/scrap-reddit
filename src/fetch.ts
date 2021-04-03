import axios from 'axios'
import RedditFetcherError from './Error'

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (url: string): Promise<any> => {
    try {
        return (await axios.get(url)).data
    } catch (err) {
        throw new RedditFetcherError(err.message, 'FetchError')
    }
}
