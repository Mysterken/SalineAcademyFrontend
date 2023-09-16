export const responseNoPermission = {
  status: 403,
  message: "You don't have permission to do this"
}

export function checkUserRole(role) {
  const token = localStorage.getItem("token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.role === role) {
      return true
    }
  }
  return false
}

