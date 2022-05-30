import plus from "../assets/plus.svg";
import minus from "../assets/icon-minus.svg";
import reply from "../assets/icon-reply.svg";
import { Comments } from "../page/CommentsSection";

import edit from "../assets/icon-edit.svg";
import remove from "../assets/icon-delete.svg";

interface HeaderCurrentUserProps {
    comment: Comments;
}
export function HeaderCurrentUser({ comment }: HeaderCurrentUserProps) {
    return (
        <div className="flex items-center relative m-4 ">
            <img src={comment.user?.image.png} alt="" className="w-8 h-8" />
            <p className="text-base m-2 ">{comment.user?.username}</p>
            <p className="bg-esse-100 text-white-500 px-2 rounded-sm font-bold">
                you
            </p>
            <p className="text-base m-2 text-300">{comment.createdAt}</p>
            <div className="absolute right-1 flex space-x-5">
                <button className="flex items-center">
                    <img src={remove} alt="" className="w-3 h-3 " />
                    <p className="text-base m-2 text-600 font-bold">Delete</p>
                </button>

                <button className="flex items-center">
                    <img src={edit} alt="" className="w-3 h-3 " />
                    <p className="text-base m-2 text-500 font-bold">Edit</p>
                </button>
            </div>
        </div>
    );
}
