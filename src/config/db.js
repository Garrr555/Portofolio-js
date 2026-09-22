import axios from "axios";
import Cookies from "js-cookie";

const ApiURI = process.env.NEXT_PUBLIC_API_URI;
const Email = process.env.NEXT_PUBLIC_EMAIL_URI;
const Password = process.env.NEXT_PUBLIC_PASSWORD_URI;

const CustomFetch = axios.create({
  baseURL: ApiURI + "/api",
});

CustomFetch.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const autoLogin = async () => {
  try {
    const response = await CustomFetch.post("/auth/login", {
      email: Email,
      password: Password,
    });

    const token = response.data.token;

    Cookies.set("token", token);

    return token;
  } catch (error) {
    console.error("Auto login gagal:", error);
  }
};

export default CustomFetch;
