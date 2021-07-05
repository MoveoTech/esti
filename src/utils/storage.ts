const KEY = "showTutorial";

export const addToStorage = () => {
  localStorage.setItem(KEY, "true");
};

export const removeFromStorage = () => {
  localStorage.removeItem(KEY);
};

export const getFromStorage = () => {
  return localStorage.getItem(KEY);
};
