import {deleteData, getData, postData, putData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRole, responseNoPermission} from "./user.js";

const writeData = {
  name: "string",
  description: "string",
  points: "number",
  image: "string",
}

export async function getAchievements() {
  if (!checkUserRole("ROLE_USER")) return responseNoPermission;

  const res = await getData("/api/lessons");
  if (res.status === 200) {
    return res.data["hydra:member"];
  }
  return res;
}

export async function postAchievement(data) {
  if (!checkUserRole("ROLE_ADMIN")) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/achievements", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}

export async function getAchievement(id) {
  if (!checkUserRole("ROLE_USER")) return responseNoPermission;

  const res = await getData(`/api/achievements/${id}`);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function putAchievement(id, data) {
  if (!checkUserRole("ROLE_ADMIN")) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await putData(`/api/achievements/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}

export async function deleteAchievement(id) {
  if (!checkUserRole("ROLE_ADMIN")) return responseNoPermission;

  const res = await deleteData(`/api/achievements/${id}`);
  if (res.status === 204) {
    return res.data;
  }
  return res;
}

export async function patchAchievement(id, data) {
  if (!checkUserRole("ROLE_ADMIN")) return responseNoPermission;
  if (validateData(writeData, data)) return responseInvalidData;

  const res = await putData(`/api/achievements/${id}`, data);
  if (res.status === 200) {
    return res.data;
  }
  return res;
}
