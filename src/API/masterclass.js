import {deleteData, getData, patchData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "title": "string",
  "description": "string",
  "thumbnailUrl": "string",
  "price": "string",
  "categories": "object",
  "tags": "object",
  "difficultyLevel": "number",
}

export async function getMasterclasses() {
  const res = await getData("/api/masterclasses");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postMasterclass(data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/masterclasses", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getMasterclass(id) {
  const res = await getData(`/api/masterclasses/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putMasterclass(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await putData(`/api/masterclasses/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteMasterclass(id) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  const res = await deleteData(`/api/masterclasses/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function patchMasterclass(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_TEACHER"])) return responseNoPermission;
  const res = await patchData(`/api/masterclasses/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
