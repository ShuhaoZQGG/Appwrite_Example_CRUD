import appwrite from "../Config/appwrite.config";

const USERS_COLLECTION_ID: string = process.env.REACT_APP_USERS_COLLECTION_ID!;

const getUserData = async() => {
  try {
    return await appwrite.account.get();
  } catch (e) {
    console.error(e);
  };
};

const login = async(email: string, password: string) => {
  try {
    return await appwrite.account.createSession(email, password);
  } catch(e) {
    console.error(e);
  };
};

const logout = async(history: [string]) => {
  try {
    await appwrite.account.deleteSession('current');
    return history.push('/login');
  } catch (e) {
    console.error(e);
  };
};

const createUserDocument = async(userData: {}) => {
  try {
    return appwrite.database.createDocument(
      USERS_COLLECTION_ID,
      'unique()',
      userData,
      ["*"]
    );
  } catch(e) {
    console.error(e);
  };
};

const getUserDocuments = async() => {
  try {
    return appwrite.database.listDocuments(USERS_COLLECTION_ID);
  } catch(e) {
    console.error(e);
  };
};

const getUserDocument = async (documentId: string) => {
  try {
    return appwrite.database.getDocument(USERS_COLLECTION_ID, documentId);
  } catch(e) {
    console.error(e);
  };
};

const updateUserDocument = async(documentId: string, name: string, email: string) => {
  try {
    return appwrite.database.updateDocument(USERS_COLLECTION_ID,documentId, {name, email}, ['*'], ['*']);
  } catch(e) {
    console.error(e)
  };
}
  
  const deleteUserDocument = async (documentID: string) => {
    try {
      return await appwrite.database.deleteDocument(USERS_COLLECTION_ID, documentID);
    } catch (e: any) {
      console.error(e.message);
    }
  };
  
  export {
    getUserData,
    login,
    logout,
    createUserDocument,
    getUserDocuments,
    getUserDocument,
    updateUserDocument,
    deleteUserDocument
  }