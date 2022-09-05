import { Comment } from '../typings'

export const fetchComments = async (tweetId: string) => {
  const res = await fetch(`/api/getcomments?tweetId=${tweetId}`)

  const comments: Comment[] = await res.json()

  return comments 
}