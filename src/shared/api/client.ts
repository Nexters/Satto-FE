const getBaseUrl = () => {
  if (import.meta.env.DEV) {
    return "/api";
  }

  return "https://www.satto.io.kr/api";
};

const BASE_URL = getBaseUrl();

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const queryString = params
      ? "?" +
        new URLSearchParams(
          Object.entries(params)
            .filter(([_, value]) => value !== undefined && value !== null)
            .map(([key, value]) => [key, String(value)])
        ).toString()
      : "";

    const fullUrl = `${this.baseUrl}${endpoint}${queryString}`;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: import.meta.env.DEV
          ? "http://localhost:5173"
          : "https://clever-kataifi-dcedaf.netlify.app",
      },

      mode: "cors",
      credentials: "omit",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient();
