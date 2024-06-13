const UserAPI = {}
UserAPI.ActionArray = []
UserAPI.PermissionArray = []
UserAPI.Action = (user) => {
    return user
}
UserAPI.GetRole = (user) => {
    let userArray = []
    user.forEach((element) => {
        userArray.push(element.RoleId)
    })
    return userArray
}
UserAPI.Permission = (user) => {
    return user
}
// console.log(UserAPI.GetMenu)
module.exports = UserAPI