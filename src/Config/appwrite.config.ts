import { Appwrite } from 'appwrite';

const appwrite = new Appwrite();

const ENDPOINT: string = process.env.REACT_APP_APPWRITE_ENDPOINT!; // the exclamation mark tell ts that this variable
const PROJECT_ID: string = process.env.REACT_APP_PROJECT_ID!;      // cannot be null/undefined

appwrite
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID);

export default appwrite;