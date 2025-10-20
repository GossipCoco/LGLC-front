import http from "../http/http-common";

class PostCommentReactions {
    GetPostAllCommentReactions(id){
        return http.get(`/postcommentreactions/GetPostAllCommentReactions/${id}`);
    }
}
export default new PostCommentReactions;