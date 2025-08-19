import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

type FirebaseBundle = {
  db: ReturnType<typeof getDatabase>;
};

export function getFirebase(): FirebaseBundle | null {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY as string | undefined;
  const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined;
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined;
  const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined;
  const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined;
  const appId = import.meta.env.VITE_FIREBASE_APP_ID as string | undefined;
  const databaseURL = import.meta.env.VITE_FIREBASE_DATABASE_URL as string | undefined;

  if (!apiKey || !appId || !databaseURL) {
    return null;
  }

  const config = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    databaseURL,
  } as const;

  const app = getApps().length ? getApp() : initializeApp(config);
  const db = getDatabase(app);
  return { db };
}




