import CryptoJS from 'crypto-js';

export function encryptMessage(message) {
    return CryptoJS.AES.encrypt(message, "key").toString();
}

export function decryptMessage(message) {
    let decryptedMessage = CryptoJS.AES.decrypt(message.toString(), "key").toString(
        CryptoJS.enc.Utf8,
    );

    return decryptedMessage;
}