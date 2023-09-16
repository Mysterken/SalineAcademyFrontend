import {deleteData, getData, patchData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  name: "string",
}

export async function getCategories() {
  const res = await getData("/api/categories");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postCategory(data) {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/categories", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getCategory(id) {
  const res = await getData(`/api/categories/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putCategory(id, data) {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await putData(`/api/categories/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteCategory(id) {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await deleteData(`/api/categories/${id}`);
  if (res.status === 204) {
    return res.data;
  }
  return res;
}

export async function patchCategory(id, data) {
  if (checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await patchData(`/api/categories/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
