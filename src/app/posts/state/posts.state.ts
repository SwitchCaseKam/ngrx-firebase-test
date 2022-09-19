export interface Post {
    id: number;
    author: string;
    title: string,
    content: string
}

export interface PostState {
    postsList: Post[]
}