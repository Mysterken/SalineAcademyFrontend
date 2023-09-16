import {deleteData, getData, patchData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "lesson": "string",
  "completionStatus": "number",
}

const updateData = {
  "completionStatus": "number",
}

export async function getProgresses() {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  const res = await getData("/api/progress");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postProgress(data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/progress", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getProgress(id) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;

  const res = await getData(`/api/progress/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putProgress(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;
  if (!validateData(updateData, data)) return responseInvalidData;

  const res = await putData(`/api/progress/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteProgress(id) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;

  const res = await deleteData(`/api/progress/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function patchProgress(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;
  if (!validateData(updateData, data)) return responseInvalidData;

  const res = await patchData(`/api/progress/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
