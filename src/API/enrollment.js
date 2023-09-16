import {deleteData, getData, patchData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "masterclass": "string"
}

export async function getEnrollments() {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await getData("/api/enrollments");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postEnrollment(data) {
  if (checkUserRoles(["ROLE_USER"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/enrollments", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getEnrollment(id) {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await getData(`/api/enrollments/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putEnrollment(id, data) {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await putData(`/api/enrollments/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteEnrollment(id) {
  if (checkUserRoles(["ROLE_ADMIN", "ROLE_USER"])) return responseNoPermission;

  const res = await deleteData(`/api/enrollments/${id}`);
  if (res.status === 204) {
    return res.data;
  }
  return res;
}

export async function patchEnrollment(id, data) {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await patchData(`/api/enrollments/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
