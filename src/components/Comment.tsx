import { User, Comments } from "../libs/types";
import { HeaderCurrentUser } from "./HeaderCurrentUser";
import { HeaderUser } from "./HeaderUser";

import plus from "../assets/plus.svg";
import minus from "../assets/icon-minus.svg";

interface CommentProps {
    comment: Comments;
    currentUser?: User;
    openNewComment: (id: number) => void;
    handleRemove: (id: number, comment: Comments) => void;
    handleUpVote: (comment: Comments) => void;
    handleDownVote: (comment: Comments) => void;
}
export function Comment({
    comment,
    currentUser,
    openNewComment,
    handleRemove,
    handleUpVote,
    handleDownVote,
}: CommentProps) {
    function handleRemoveComment(id: number) {
        console.log(id);

        handleRemove(id, comment);
    }

    return (
        <div className="bg-white-500 rounded-lg w-100 h-42 flex m-3">
            <div className=" relative w-18">
                <div className="bg-gray-200 w-10 h-26 rounded absolute left-6 top-6 flex flex-col items-center justify-between p-3 ">
                    <button onClick={() => handleUpVote(comment)}>
                        <img src={plus} alt="" />
                    </button>
                    <p className="text-base text-500 font-bold">
                        {comment.score}
                    </p>
                    <button onClick={() => handleDownVote(comment)}>
                        <img src={minus} alt="" />
                    </button>
                </div>
            </div>

            <div className="w-full">
                {currentUser?.username === comment.user?.username ? (
                    <HeaderCurrentUser
                        comment={comment}
                        handleRemoveComment={handleRemoveComment}
                    />
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
