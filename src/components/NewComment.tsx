import { FormEvent, useState } from "react";

import { User } from "src/page/CommentsSection";

interface NewCommentProps {
    user?: User;
    // openNewComment: (id: number | null) => void;
    addNewComment: (comment: string) => void;
    handleSubmit: (event: FormEvent) => void;
    // handleSubmit2: (newComment: string) => void;
}

export function NewComemment({
    user,
    addNewComment,
    handleSubmit,
}: NewCommentProps) {
    const [newComment, setNewComment] = useState<string>("");

    return (
        <div className="bg-white-500 rounded-lg w-100 h-auto flex m-3 space-x-2 p-6">
            <img src={user?.image.png} alt="" className="w-8 h-8 mr-1" />

            <form onSubmit={handleSubmit} className="w-full flex space-x-2">
                <textarea
                    className="w-full h-24 rounded-lg mr-2"
                    onChange={(event) => addNewComment(event.target.value)}
                    placeholder="Add a comment..."
                />
                <button
                    // onClick={() => openNewComment(null)}
                    type="submit"
                    className="px-8 h-12 bg-esse-100 text-white-500 rounded-lg"
                >
                    SEND
                </button>
            </form>
        </div>
    );
}
