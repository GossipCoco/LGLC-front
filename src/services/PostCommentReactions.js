import http from "../http/http-common";

class PostCommentReactions {
    GetPostAllCommentReactions(id){
        return http.get(`/PostCommentReactions/GetPostAllCommentReactions/${id}`);
    }
}
export default new PostCommentReactions;