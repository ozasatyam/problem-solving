// Last updated: 9/16/2025, 3:11:17 PM
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const stack = [];
    const directories = path.split("/");
    for (let directory of directories) {
            if (directory == "" || directory == ".")
                continue
            else if (directory == "..") {
                stack.pop()
            }
            else {
                stack.push(directory)
            }
    }

    return "/" + stack.join("/")
};