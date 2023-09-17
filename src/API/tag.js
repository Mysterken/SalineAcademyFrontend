import {deleteData, getData, patchData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "name": "string"
}

export async function getTags() {
  const res = await getData("/api/tags");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postTag(data) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/tags", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getTag(id) {
  const res = await getData(`/api/tags/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putTag(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await putData(`/api/tags/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteTag(id) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;

  const res = await deleteData(`/api/tags/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function patchTag(id, data) {
  if (!checkUserRoles(["ROLE_ADMIN"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await patchData(`/api/tags/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
