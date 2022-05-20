import plus from "../assets/plus.svg";
import minus from "../assets/icon-minus.svg";
import reply from "../assets/icon-reply.svg";
import { Comments } from "../page/CommentsSection";

interface ContentProps {
    comment: Comments;
}
export function Content({ comment }: ContentProps) {
    return (
        <>
            <div className=" relative w-18">
                <div className="bg-gray-200 w-10 h-26 rounded absolute left-6 top-6 flex flex-col items-center justify-between p-3 ">
                    <img src={plus} alt="" />
                    <p className="text-base">{comment.score}</p>

                    <img src={minus} alt="" />
                </div>
            </div>

            <div className="w-full">
                <div className="flex items-center relative m-4 ">
                    <img
                        src={comment.user?.image.png}
                        alt=""
                        className="w-8 h-8"
                    />
                    <p className="text-base m-2 ">{comment.user?.username}</p>
                    <p className="text-base m-2 text-300">
                        {comment.createdAt}
                    </p>
                    <button className="flex items-center absolute right-1">
                        <img src={reply} alt="" className="w-3 h-3 " />
                        <p className="text-base m-2 text-500">Reply</p>
                    </button>
                </div>
                <p className="m-4 text-base text-300">{comment.content}</p>
            </div>
        </>
    );
}
