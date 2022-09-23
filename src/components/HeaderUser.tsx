import { Comments } from "../libs/types";
import reply from "../assets/icon-reply.svg";

interface HeaderUserProps {
    comment: Comments;
    openNewComment: (id: number) => void;
}
export function HeaderUser({ comment, openNewComment }: HeaderUserProps) {
    return (
        <div className="flex items-center relative m-4 ">
            <img src={comment.user?.image.png} alt="" className="w-8 h-8" />

            <p className="text-base m-2 ">{comment.user?.username}</p>
            <p className="text-base m-2 text-300">{comment.createdAt}</p>

            <button
                onClick={() => openNewComment(comment.id)}
                className="flex items-center absolute right-1"
            >
                <img src={reply} alt="" className="w-3 h-3 " />
                <p className="text-base m-2 text-500 font-bold">Reply</p>
            </button>
        </div>
    );
}
