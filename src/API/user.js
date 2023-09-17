import {deleteData, getData, patchData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";

export const responseNoPermission = {
  status: 403,
  message: "You don't have permission to do this"
}

const writeData = {
  "email": "string",
  "password": "string",
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "biography": "string",
  "profilePicture": "string"
}

export function checkUserRoles(roles) {
  const token = localStorage.getItem("token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return roles.some((role) => payload.roles.includes(role));
  }
  return false
}

export async function register(data) {
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/register", data);
  if (res.status === 201 || res.status === "success") {
    return res.data;
  }
  return res;
}

export async function login(data) {
  if (!validateData({
    "username": "string",
    "password": "string"
  }, data)) return responseInvalidData;

  const res = await postData("/api/login_check", data);
  if (res.status === 200) {
    localStorage.setItem("token", res.data.token);
    return res.data;
  }
  return res;
}

export function logout() {
  localStorage.removeItem("token");

  return {
    status: 200,
    message: "Successfully logged out"
  }
}

export async function getUsers() {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await getData("/api/users");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function getUser(id) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;

  const res = await getData(`/api/users/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putUser(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await putData(`/api/users/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteUser(id) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await deleteData(`/api/users/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function patchUser(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await patchData(`/api/users/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export function checkLoggedIn() {
  const token = localStorage.getItem("token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.roles.includes("ROLE_USER");
  }
  return false
}
