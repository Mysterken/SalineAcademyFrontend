import {deleteData, getData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "title": "string",
  "description": "string",
  "lesson": "string"
}

const updateData = {
  "title": "string",
  "description": "string",
}

export async function getTasks() {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await getData("/api/tasks");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postTask(data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/tasks", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getTask(id) {
  const res = await getData(`/api/tasks/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putTask(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  if (!validateData(updateData, data)) return responseInvalidData;

  const res = await putData(`/api/tasks/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteTask(id) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;

  const res = await deleteData(`/api/tasks/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function patchTask(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  if (!validateData(updateData, data)) return responseInvalidData;

  const res = await putData(`/api/tasks/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
