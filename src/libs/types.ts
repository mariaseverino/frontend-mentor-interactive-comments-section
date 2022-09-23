export interface User {
    image: {
        png: string;
        webp: string;
    };
    username: string;
}

export interface Comments {
    id: number;
    content: string | undefined;
    createdAt: string;
    score: number;
    user: User | undefined;
    replies: Comments[];
}
