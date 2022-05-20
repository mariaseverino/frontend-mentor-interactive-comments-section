import { FormEvent, useEffect, useState } from "react";
import { Comment } from "../components/Comment";
import { Reply } from "../components/Reply";

export type User = {
    image: {
        png: string;
        webp: string;
    };
    username: string;
};

export type Comments = {
    id: number;
    content: string | undefined;
    createdAt: string;
    score: number;
    user: User | undefined;
    replies: Comments[];
};

export function CommentsSection() {
    const url = "http://localhost:3300/currentUser";
    const url2 = "http://localhost:3300/comments";
    const [user, setUser] = useState<User>();
    const [comments, setComments] = useState<Comments[]>([]);
    const [comment, setComment] = useState<string>();

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((item) => {
                setUser(item);
                console.log(url);
            });
    }, []);

    useEffect(() => {
        fetch(url2)
            .then((response) => response.json())
            .then((item) => {
                setComments(item);
                console.log(item);
                console.log(url2);
            });
    }, []);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(comment);

        const newComent = {
            id: comments.length + 1,
            content: comment,
            createdAt: new Date().toString(),
            score: 0,
            user: user,
            replies: [] as Comments[],
        };

        setComments((comments) => [...comments, newComent]);

        console.log(comments);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <ul>
                    {comments.map((item) => (
                        <li key={item.id}>
                            <Comment comments={item} />
                            <Reply replies={item.replies} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white-500 rounded-lg w-100 h-auto flex m-3 space-x-2 p-6">
                <img src={user?.image.png} alt="" className="w-8 h-8 mr-1" />

                <form onSubmit={handleSubmit} className="w-full flex space-x-2">
                    <textarea
                        className="w-full h-24 rounded-lg mr-2"
                        onChange={(event) => setComment(event.target.value)}
                        placeholder="Add a comment..."
                    />
                    <button
                        type="submit"
                        className="px-8 h-12 bg-esse-100 text-white-500 rounded-lg"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
}
