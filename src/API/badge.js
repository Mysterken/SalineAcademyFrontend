import {deleteData, getData, patchData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "name": "string",
  "description": "string",
  "imageUrl": "string"
}

export async function getBadges() {
  if (!checkUserRoles(["ROLE_USER"])) return responseNoPermission;

  const res = await getData("/api/badges");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postBadge(data) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/badges", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getBadge(id) {
  if (!checkUserRoles(["ROLE_USER"])) return responseNoPermission;

  const res = await getData(`/api/badges/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putBadge(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await putData(`/api/badges/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteBadge(id) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await deleteData(`/api/badges/${id}`);
  if (res.status === 204) {
    return res.data;
  }
  return res;
}

export async function patchBadge(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await patchData(`/api/badges/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
