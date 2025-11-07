import http from "../http/http-common";

class PostCommentReactions {
    GetPostAllCommentReactions(id){
        return http.get(`/PostCommentReactions/GetPostAllCommentReactions/${id}`);
    }
    GetAPostAllCommentReactionsById(id){
        return http.get(`/PostCommentReactions/GetAPostAllCommentReactionsById/${id}`);
    }
    GetAllPostsByGroupId(id){
        return http.get(`/PostCommentReactions/GetAllPostsByGroupId/${id}`);
    }
    CreateANewPost(id, data){
        return http.post(`/PostCommentReactions/CreateANewPost/${id}`, data);
    }
}
export default new PostCommentReactions;