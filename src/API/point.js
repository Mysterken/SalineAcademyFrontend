import {postData, responseInvalidData, validateData} from "./dataFetcher.js";
import {checkUserRoles, responseNoPermission} from "./user.js";

const writeData = {
  "amount": "number"
}

export async function addPoint(data) {
  if (!checkUserRoles(["ROLE_USER"])) return responseNoPermission;
  if (!validateData(writeData, data)) return responseInvalidData;

  const res = await postData("/api/points", data);
  if (res.status === 201) {
    return res.data;
  }
  return res;
}
