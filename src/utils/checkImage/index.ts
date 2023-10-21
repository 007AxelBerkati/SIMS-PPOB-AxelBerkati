export const checkImage = (url: string) => {
  if (url?.includes('null')) {
    return false;
  } else {
    return true;
  }
};
