import { Comments } from "../page/CommentsSection";
import { Content } from "./Content";

interface ReplyProps {
    replies: Comments[];
}
export function Reply({ replies }: ReplyProps) {
    return (
        <>
            {replies.length ? (
                <div className="flex justify-between">
                    <div className="h-auto w-[2px] bg-blue-300 opacity-20 ml-14 my-1" />
                    <ul>
                        {replies.map((item) => (
                            <div className="bg-white-500 rounded-lg w-98 h-42 flex mb-3 mr-3">
                                <Content comment={item} />
                            </div>
                        ))}
                    </ul>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
