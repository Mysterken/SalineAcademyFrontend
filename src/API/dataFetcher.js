import axios from "axios";

const server = "https://localhost"; // todo: use env variable

export async function getData(url) {
  return axios.get(server + url, {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return {
        status: err.response.status,
        message: err.response?.data?.detail ?? err.response?.data["hydra:description"]
      };
    });
}

export async function postData(url, data) {
  return axios.post(server + url, data, {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return {
        status: err.response.status,
        message: err.response?.data?.detail ?? err.response?.data["hydra:description"]
      };
    });
}

export async function putData(url, data) {
  return axios.put(server + url, data, {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return {
        status: err.response.status,
        message: err.response?.data?.detail ?? err.response?.data["hydra:description"]
      };
    });
}

export async function deleteData(url) {
  return axios.delete(server + url, {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return {
        status: err.response.status,
        message: err.response?.data?.detail ?? err.response?.data["hydra:description"]
      };
    });
}

export async function patchData(url, data) {
  return axios.patch(server + url, data, {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return {
        status: err.response.status,
        message: err.response?.data?.detail ?? err.response?.data["hydra:description"]
      };
    });
}

export const responseInvalidData = {
  status: 400,
  message: "Invalid data type"
}

export function validateData(dataSchema, data) {
  if (typeof data !== "object") {
    return false;
  }
  for (const [key, value] of Object.entries(dataSchema)) {
    if (typeof data[key] !== value) {
      return false;
    }
  }
  return true;
}
