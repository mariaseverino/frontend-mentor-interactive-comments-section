import { Comments, User } from "../page/CommentsSection";
import { HeaderCurrentUser } from "./HeaderCurrentUser";
import { HeaderUser } from "./HeaderUser";

import plus from "../assets/plus.svg";
import minus from "../assets/icon-minus.svg";
import { useState } from "react";

interface CommentProps {
    comment: Comments;
    currentUser?: User;
    openNewComment: (id: number) => void;
}
export function Comment({
    comment,
    currentUser,
    openNewComment,
}: CommentProps) {
    // const [isOpen, setIsOpen] = useState<boolean>(false);

    // function openNewComment() {
    //     setIsOpen(!isOpen);
    // }
    return (
        <div className="bg-white-500 rounded-lg w-100 h-42 flex m-3">
            <div className=" relative w-18">
                <div className="bg-gray-200 w-10 h-26 rounded absolute left-6 top-6 flex flex-col items-center justify-between p-3 ">
                    <img src={plus} alt="" />
                    <p className="text-base text-500 font-bold">
                        {comment.score}
                    </p>

                    <img src={minus} alt="" />
                </div>
            </div>

            <div className="w-full">
                {currentUser?.username === comment.user?.username ? (
                    <HeaderCurrentUser comment={comment} />
                ) : (
                    <HeaderUser
                        comment={comment}
                        openNewComment={openNewComment}
                    />
                )}

                <p className="m-4 text-base text-300">{comment.content}</p>
            </div>
        </div>
    );
}
