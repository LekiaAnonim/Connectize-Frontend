export const getLocalData = (value = "") => localStorage.getItem(value);

export const setLocalData = (key = "", value = "") =>
  localStorage.setItem(key, value);
