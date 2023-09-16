import {deleteData, getData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "value": "number",
  "masterclass": "string"
}

const updateData = {
  "value": "number",
}

export async function getRatings() {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await getData("/api/rating");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postRating(data) {
  if (checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/rating", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getRating(id) {
  if (checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;

  const res = await getData(`/api/rating/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putRating(id, data) {
  if (checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;
  if (validateData(updateData, data)) return responseInvalidData;

  const res = await putData(`/api/rating/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteRating(id) {
  if (checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;

  const res = await deleteData(`/api/rating/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function patchRating(id, data) {
  if (checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;
  if (validateData(updateData, data)) return responseInvalidData;

  const res = await putData(`/api/rating/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
