import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
  platform: "com.web247.restate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);
  
export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const redirectUri = Linking.createURL("/");
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response) throw new Error("Failed to login");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );

    if (browserResult.type !== "success")
      throw new Error("Browser result was not successful");

    const url = new URL(browserResult.url);

    const secret = url.searchParams.get("secret");

    const userId = url.searchParams.get("userId");

    if (!secret || !userId)
      throw new Error("Failed to login / user or secret are wrong");

    const session = await account.createSession(userId, secret);

    if (!session) throw new Error("Failed to create a session");

    return session;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getUser() {
  try {
    const response = await account.get();
    if (response.$id) {
      const userAvatar = avatar.getInitials(response.name);

      return {
        ...response,
        avatar: userAvatar.toString(),
      };
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
