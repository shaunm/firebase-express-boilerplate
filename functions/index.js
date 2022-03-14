/* eslint-disable eqeqeq */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();
const cors = require('cors')({ origin: true });

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "<db>.firebaseio.com"
});

//const { getDatabase } = require('firebase-admin/database');

app.use(cors);
app.use(express.json());

app.get('*', function(req, res){
    console.log('404ing');
    res.render('404');
  });

exports.app = functions.https.onRequest(app);


