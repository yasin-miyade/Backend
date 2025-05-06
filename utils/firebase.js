// firebase.js (Firebase initialization)

import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Resolve path to firebaseKey.json (adjust if it's in a different folder)
const serviceAccountPath = path.resolve('firebaseKey.json');

// Load service account key manually (for local development)
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        console.log('✅ Firebase Admin SDK initialized successfully.');
    } catch (error) {
        console.error('❌ Error initializing Firebase Admin SDK:', error);
    }
}

// Get Firestore instance
const db = admin.firestore();

export default db;
