import CryptoJS from "crypto-js";

export const encryptAES = (
  text: string,
  key: string = process.env.NEXT_PUBLIC_ENCRYPT_KEY || ""
) => {
  return CryptoJS.AES.encrypt("" + text, key).toString();
};

export const decryptAES = (
  encryptedBase64: string,
  key: string = process.env.NEXT_PUBLIC_ENCRYPT_KEY || ""
) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
  if (decrypted) {
    try {
      const str = decrypted.toString(CryptoJS.enc.Utf8);
      if (str.length > 0) {
        return str;
      } else {
        return "error 1";
      }
    } catch (e) {
      return "error 2";
    }
  }
  return "error 3";
};
