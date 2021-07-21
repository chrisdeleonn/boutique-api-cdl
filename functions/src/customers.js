const admin = require('firebase-admin')
const fbcreds = require('../credentials.json')

function connectDB() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(fbcreds),
    })
  }
  return admin.firestore()
}

exports.getCustomers = (req, res) => {
  const db = connectDB()
  db.collection('customers')
    .get()
    .then((customerCollection) => {
      const customerArray = customerCollection.docs.map((doc) => {
        let customer = doc.data()
      })
    })
    .catch((err) => res.status(500).send(err))
}

exports.createCustopmer = (req, res) => {}
