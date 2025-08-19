import { Preferences } from "@capacitor/preferences";

export const getUserId = async (): Promise<string | null> => {
  try {
    const { value } = await Preferences.get({ key: "user_id" });
    return value;
  } catch (error) {
    console.error("Failed to get user_id from preferences:", error);
    return null;
  }
};
