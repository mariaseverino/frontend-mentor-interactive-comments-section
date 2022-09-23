import { FormEvent, useEffect, useState } from "react";
import { NewComment } from "../components/NewComment";
import { Comment } from "../components/Comment";
import { Reply } from "../components/Reply";
import { Comments, User } from "src/libs/types";

export function CommentsSection() {
    const [user, setUser] = useState<User>();
    const [comments, setComments] = useState<Comments[]>([]);
    const [newComment, setNewComment] = useState<string>();

    const [id, setId] = useState<number | null>(null);

    useEffect(() => {
        fetch("./db.json")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setComments(response.comments);
                setUser(response.currentUser);
            });
    }, []);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const newComent = {
            id: comments.length + 1,
            content: newComment,
            createdAt: new Date().toLocaleDateString("en", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }),
            score: 0,
            user: user,
            replies: [] as Comments[],
        };

        return newComent;
    }

    function handleSubmitComment(event: FormEvent) {
        const newComment = handleSubmit(event);

        setComments((comments) => [...comments, newComment]);
        setNewComment("");
    }

    function handleSubmitReply(event: FormEvent) {
        const newComment = handleSubmit(event);

        comments.filter((item) => {
            if (item.id === id) {
                item.replies.push(newComment);
            }
        });

        setComments([...comments]);

        setNewComment("");
        setId(null);
    }

    function handleRemove(id: number, comment: Comments) {
        comments.filter((item) => {
            if (item.id == comment.id) {
                item.replies = item.replies.filter((item2) => item2.id != id);
            }
        });

        setComments([...comments]);
    }

    function handleRemoveComment(id: number, comment: Comments) {
        setComments(comments.filter((item) => item.id != id));
    }

    function handleUpVoteReply(reply: Comments, comment: Comments) {
        comments.filter((item) => {
            if (item.id == comment.id) {
                item.replies.filter((item2) => {
                    if (item2.id == reply.id) {
                        item2.score = item2.score + 1;
                    }
                });
            }
        });

        setComments([...comments]);
    }

    function handleDownVoteReply(reply: Comments, comment: Comments) {
        comments.filter((item) => {
            if (item.id == comment.id) {
                item.replies.filter((item2) => {
                    if (item2.id == reply.id) {
                        item2.score = item2.score - 1;
                    }
                });
            }
        });

        setComments([...comments]);
    }

    function handleUpVote(comment: Comments) {
        comments.filter((item) => {
            if (item.id == comment.id) {
                item.score = item.score + 1;
            }
        });

        setComments([...comments]);
    }

    function handleDownVote(comment: Comments) {
        comments.filter((item) => {
            if (item.id == comment.id) {
                item.score = item.score - 1;
            }
        });

        setComments([...comments]);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <ul>
                    {comments.map((item) => (
                        <li key={item.id}>
                            <Comment
                                comment={item}
                                currentUser={user}
                                openNewComment={setId}
                                handleRemove={handleRemoveComment}
                                handleUpVote={handleUpVote}
                                handleDownVote={handleDownVote}
                            />
                            {id && id === item.id ? (
                                <NewComment
                                    user={user}
                                    addNewComment={setNewComment}
                                    handleSubmit={handleSubmitReply}
                                />
                            ) : (
                                ""
                            )}
                            <Reply
                                commentP={item}
                                originalCommentUser={item.user}
                                currentUser={user}
                                handleRemove={handleRemove}
                                handleUpVote={handleUpVoteReply}
                                handleDownVote={handleDownVoteReply}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white-500 rounded-lg w-100 h-auto flex m-3 space-x-2 p-6">
                <img src={user?.image.png} alt="" className="w-8 h-8 mr-1" />

                <form
                    onSubmit={handleSubmitComment}
                    className="w-full flex space-x-2"
                >
                    <textarea
                        className="w-full h-24 rounded-lg mr-2"
                        onChange={(event) => setNewComment(event.target.value)}
                        placeholder="Add a comment..."
                        value={newComment}
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
