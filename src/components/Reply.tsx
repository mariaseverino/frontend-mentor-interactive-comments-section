import { User, Comments } from "../libs/types";
import { HeaderCurrentUser } from "./HeaderCurrentUser";
import { HeaderUser } from "./HeaderUser";

import plus from "../assets/plus.svg";
import minus from "../assets/icon-minus.svg";
import { FormEvent, useState } from "react";
import { NewComment } from "./NewComment";

interface ReplyProps {
    commentP: Comments;
    originalCommentUser?: User;
    currentUser?: User;
    handleRemove: (id: number, comment: Comments) => void;
    handleUpVote: (reply: Comments, comment: Comments) => void;
    handleDownVote: (reply: Comments, comment: Comments) => void;
}
export function Reply({
    commentP,
    originalCommentUser,
    currentUser,
    handleRemove,
    handleUpVote,
    handleDownVote,
}: ReplyProps) {
    const [id, setId] = useState<number | null>(null);
    const [comment, setComment] = useState<string>();

    function handleSubmitReply(event: FormEvent) {
        event.preventDefault();

        const newComment = {
            id: commentP.replies.length + 1,
            content: comment,
            createdAt: new Date().toString(),
            score: 0,
            user: currentUser,
            replies: [] as Comments[],
        };

        commentP.replies.filter((item) => {
            if (item.id === id) {
                item.replies.pop();
            }
        });

        setComment("");
        setId(null);
    }

    function handleRemoveReply(id: number) {
        handleRemove(id, commentP);
    }

    return (
        <>
            {commentP.replies.length ? (
                <div className="flex justify-between">
                    <div className="h-auto w-[2px] bg-blue-300 opacity-20 ml-14 my-1" />
                    <ul>
                        {commentP.replies.map((item) => (
                            <li key={item.id}>
                                <div className="bg-white-500 rounded-lg w-98 h-42 flex mb-3 mr-3">
                                    <div className=" relative w-18">
                                        <div className="bg-gray-200 w-10 h-26 rounded absolute left-6 top-6 flex flex-col items-center justify-between p-3 ">
                                            <button
                                                onClick={() =>
                                                    handleUpVote(item, commentP)
                                                }
                                            >
                                                <img src={plus} alt="" />
                                            </button>
                                            <p className="text-base text-500 font-bold">
                                                {item.score}
                                            </p>

                                            <button
                                                onClick={() =>
                                                    handleDownVote(
                                                        item,
                                                        commentP
                                                    )
                                                }
                                            >
                                                <img src={minus} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        {currentUser?.username ===
                                        item.user?.username ? (
                                            <HeaderCurrentUser
                                                comment={item}
                                                handleRemoveComment={
                                                    handleRemoveReply
                                                }
                                            />
                                        ) : (
                                            <HeaderUser
                                                comment={item}
                                                openNewComment={setId}
                                            />
                                        )}

                                        {originalCommentUser ? (
                                            <>
                                                <p className="m-4 text-base text-300">
                                                    <span className="text-500 font-bold">
                                                        @
                                                        {
                                                            originalCommentUser.username
                                                        }{" "}
                                                    </span>
                                                    {item.content}
                                                </p>
                                            </>
                                        ) : (
                                            <p className="m-4 text-base text-300">
                                                {item.content}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {id && id === item.id ? (
                                    <NewComment
                                        user={currentUser}
                                        addNewComment={setComment}
                                        handleSubmit={handleSubmitReply}
                                    />
                                ) : (
                                    ""
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
