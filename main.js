const { generateKeyPairSync } = require('crypto')
const { publicKey, privateKey } = generateKeyPairSync('rsa',
{   modulusLength: 2048,  // the length of your key in bits
    publicKeyEncoding: {
      type: 'spki',       // recommended to be 'spki' by the Node.js docs
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs1',      // recommended to be 'pkcs8' by the Node.js docs
      format: 'pem',
      //cipher: 'aes-256-cbc',   // *optional*
      //passphrase: 'top secret' // *optional*
  }
})

console.log(privateKey)
console.log(publicKey)