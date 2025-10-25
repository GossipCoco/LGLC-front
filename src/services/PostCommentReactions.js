import http from "../http/http-common";

class PostCommentReactions {
    GetPostAllCommentReactions(id){
        return http.get(`/PostCommentReactions/GetPostAllCommentReactions/${id}`);
    }
    CreateANewPost(id, data){
        return http.post(`/PostCommentReactions/CreateANewPost/${id}`, data);
    }
}
export default new PostCommentReactions;