export const responseNoPermission = {
  status: 403,
  message: "You don't have permission to do this"
}

export function checkUserRoles(roles) {
  const token = localStorage.getItem("token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return roles.some((role) => payload.roles.includes(role));
  }
  return false
}

