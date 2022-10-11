import { FormEvent } from "react";
import { User } from "../libs/types";

interface NewCommentProps {
    user?: User;
    addNewComment: (comment: string) => void;
    handleSubmit: (event: FormEvent) => void;
}

export function NewComment({
    user,
    addNewComment,
    handleSubmit,
}: NewCommentProps) {
    return (
        <div className="bg-white-500 rounded-lg w-auto h-auto flex m-3 space-x-2 p-6">
            <img src={user?.image.png} alt="" className="w-8 h-8 mr-1" />

            <form onSubmit={handleSubmit} className="w-full flex space-x-2">
                <textarea
                    className="w-full h-24 rounded-lg mr-2"
                    onChange={(event) => addNewComment(event.target.value)}
                    placeholder="Add a comment..."
                />
                <button
                    type="submit"
                    className="px-8 h-12 bg-esse-100 text-white-500 rounded-lg"
                >
                    SEND
                </button>
            </form>
        </div>
    );
}
