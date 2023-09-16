import {deleteData, getData, patchData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "title": "string",
  "description": "string",
  "videoUrl": "string",
  "masterclassOrder": "number",
  "masterclass": "string",
  "tasks": "object",
}

const updateData = {
  "title": "string",
  "description": "string",
  "videoUrl": "string",
  "masterclassOrder": "number"
}

export async function getLessons() {
  const res = await getData("/api/lessons");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postLesson(data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/lessons", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getLesson(id) {
  const res = await getData(`/api/lessons/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putLesson(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  if (!validateData(updateData, data)) return responseInvalidData;

  const res = await putData(`/api/lessons/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteLesson(id) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;

  const res = await deleteData(`/api/lessons/${id}`);
  if (res.status === 204) {
    return res.data;
  }
  return res;
}

export async function patchLesson(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  if (!validateData(updateData, data)) return responseInvalidData;

  const res = await patchData(`/api/lessons/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
