import http from "../http/http-common";
class UploadFilesService {
  upload(file, user, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("user", user)
    console.log("upload user service : ", user, file)
    return http.put(`/image/upload/${user}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  uploadAvatar(user, file, onUploadProgress) {
    let formData = new FormData();
    formData.append("image", file); // doit matcher avec .single('image') dans le back
    console.log(user, file, onUploadProgress, `/image/UploadAvatar/${user}`)
    return http.post(`/image/UploadAvatar/${user}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  getFiles() {
    console.log('test upload')
    return http.get("/image");
  }
}
export default new UploadFilesService();
