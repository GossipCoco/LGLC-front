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
  uploadAvatar(file, user, onUploadProgress) {
    let formData = new FormData();
    console.log(user)
    formData.append("file", file);
    formData.append("user", user)
    console.log("upload user service : ", file)
    console.log(http+`/image/uploadAvatar/${user}`)
    return http.put(`/image/uploadAvatar/${user}`, formData, {
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
