import { Comments, User } from "../page/CommentsSection";
import { HeaderCurrentUser } from "./HeaderCurrentUser";
import { HeaderUser } from "./HeaderUser";

import plus from "../assets/plus.svg";
import minus from "../assets/icon-minus.svg";
import { useState } from "react";

interface ReplyProps {
    replies: Comments[];
    originalCommentUser?: User;
    currentUser?: User;
}
export function Reply({
    replies,
    originalCommentUser,
    currentUser,
}: ReplyProps) {
    const [id, setId] = useState<number | null>(null);

    return (
        <>
            {replies.length ? (
                <div className="flex justify-between">
                    <div className="h-auto w-[2px] bg-blue-300 opacity-20 ml-14 my-1" />
                    <ul>
                        {replies.map((item) => (
                            <li key={item.id}>
                                <div className="bg-white-500 rounded-lg w-98 h-42 flex mb-3 mr-3">
                                    <div className=" relative w-18">
                                        <div className="bg-gray-200 w-10 h-26 rounded absolute left-6 top-6 flex flex-col items-center justify-between p-3 ">
                                            <img src={plus} alt="" />
                                            <p className="text-base text-500 font-bold">
                                                {item.score}
                                            </p>

                                            <img src={minus} alt="" />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        {currentUser?.username ===
                                        item.user?.username ? (
                                            <HeaderCurrentUser comment={item} />
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
