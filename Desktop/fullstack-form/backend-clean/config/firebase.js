const admin = require("firebase-admin");
const serviceAccount = require("../firebase-key.json"); // ✅ yeh file ab backend ke andar hai

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
