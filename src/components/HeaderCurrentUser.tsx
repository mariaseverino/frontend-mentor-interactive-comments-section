import { formatDistanceToNow, subDays } from "date-fns";
import { Comments } from "../libs/types";
import edit from "../assets/icon-edit.svg";
import remove from "../assets/icon-delete.svg";

interface HeaderCurrentUserProps {
    comment: Comments;
    handleRemoveComment: (id: number) => void;
}
export function HeaderCurrentUser({
    comment,
    handleRemoveComment,
}: HeaderCurrentUserProps) {
    return (
        <div className="flex items-center relative m-4 ">
            <img src={comment.user?.image.png} alt="" className="w-8 h-8" />
            <p className="text-base m-2 ">{comment.user?.username}</p>
            <p className="bg-esse-100 text-white-500 px-2 rounded-sm font-bold">
                you
            </p>
            <p className="text-base m-2 text-300">
                {comment.createdAt == "2 days ago"
                    ? comment.createdAt
                    : formatDistanceToNow(new Date(comment.createdAt), {
                          addSuffix: true,
                      })}
            </p>
            <div className="absolute right-1 flex space-x-5">
                <button
                    className="flex items-center"
                    onClick={() => handleRemoveComment(comment.id)}
                >
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
