import plus from "../assets/plus.svg";
import minus from "../assets/icon-minus.svg";

import { Comments, User } from "../page/CommentsSection";
import { HeaderCurrentUser } from "./HeaderCurrentUser";
import { HeaderUser } from "./HeaderUser";

interface ContentProps {
    comment: Comments;
    originalCommentUser?: User;
    currentUser?: User;
}
export function Content({
    comment,
    originalCommentUser,
    currentUser,
}: ContentProps) {
    return (
        <>
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
                    <HeaderUser comment={comment} />
                )}

                {originalCommentUser ? (
                    <>
                        <p className="m-4 text-base text-300">
                            <span className="text-500 font-bold">
                                @{originalCommentUser.username}{" "}
                            </span>
                            {comment.content}
                        </p>
                    </>
                ) : (
                    <p className="m-4 text-base text-300">{comment.content}</p>
                )}
            </div>
        </>
    );
}
