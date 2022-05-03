import normalizeUrl from "normalize-url";

const reg =
  /[(http(s)?)://(www.)?a-zA-Z0-9@:%.+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#?&//=]*)/gi;

export const normalizeURL = (url) => {
  try {
    url = normalizeUrl(url);
    return reg.test(url) ? url : null;
  } catch (error) {
    return null;
  }
};

export const validateURL = (url) => {
  try {
    console.log("start");
    url = normalizeUrl(url);
    console.log("pass", reg.test(url));
    return reg.test(url);
  } catch (error) {
    console.log("fail");
    return false;
  }
};
