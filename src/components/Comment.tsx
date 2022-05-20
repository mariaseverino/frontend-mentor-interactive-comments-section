import plus from "../assets/plus.svg";
import minus from "../assets/icon-minus.svg";
import reply from "../assets/icon-reply.svg";
import { Comments } from "../page/CommentsSection";
import { Content } from "./Content";

interface CommentProps {
    comments: Comments;
}
export function Comment({ comments }: CommentProps) {
    return (
        <div className="bg-white-500 rounded-lg w-100 h-42 flex m-3">
            <Content comment={comments} />
        </div>
    );
}
