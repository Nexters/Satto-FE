import { Preferences } from "@capacitor/preferences";
import { Capacitor } from "@capacitor/core";

export const getUserId = async (): Promise<string | null> => {
  try {
    if (Capacitor.isNativePlatform()) {
      const { value } = await Preferences.get({ key: "user_id" });
      return value;
    }

    const userId = localStorage.getItem("user_id");
    return userId;
  } catch (error) {
    console.error("Failed to get user_id:", error);
    return null;
  }
};
