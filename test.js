// Include CryptoJS library (downloaded or via CDN)
// For example, if you're using the CDN:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>

// Encryption function
const CryptoJS = require("crypto-js");

function encryptData(data, secretKey) {
    // Encrypt data using AES encryption
    var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    return encryptedData;
}

// Decryption function
function decryptData(encryptedData, secretKey) {
    // Decrypt data using AES decryption
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    var decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}

// Example usage
var secretKey = "supersecretkey"; // Secret key for encryption/decryption

// Encrypt data
var phoneNumber = "1234567890";
var email = "example@example.com";
var domainName = "example.com";

var dataToEncrypt = { phoneNumber: phoneNumber, email: email, domainName: domainName };
var encryptedInfo = encryptData(dataToEncrypt, secretKey);
console.log("Encrypted Info:", encryptedInfo);

// Decrypt data
var decryptedInfo = decryptData(encryptedInfo, secretKey);
console.log("Decrypted Info:", decryptedInfo);
