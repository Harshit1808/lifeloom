// import API from "./api";

// const AuthService = {
//   login: (payload) => {
//     console.log("payload", payload);
//     return API.post("/auth/login", payload);
//   },
//   register: (payload) => {
//     console.log("payload", payload);
//     return API.post("/user/register-agent", payload);
//   },
//   logout: (accessToken) => {
//     return API.delete("/auth/logout", {
//       headers: { Authorization: `JWT ${accessToken}` },
//     });
//   },
//   refreshToken: (refreshToken) => {
//     return API.post("/auth/refresh-token", { token: refreshToken });
//   },
// };

// export default AuthService;

import API from "./api";

const AuthService = {
  login: async (payload) => {
    console.log("payload", payload);
    try {
      const response = await API.post("/auth/login", payload);
      console.log("AuthService login response:", response);
      return response;
    } catch (error) {
      console.error("AuthService login error:", error);
      throw error;
    }
  },
  register: async (payload) => {
    console.log("payload", payload);
    try {
      const response = await API.post("/user/register", payload);
      console.log("AuthService register response:", response);
      return response;
    } catch (error) {
      console.error("AuthService register error:", error);
      throw error;
    }
  },
  logout: async (accessToken) => {
    try {
      const response = await API.delete("/auth/logout", {
        headers: { Authorization: `JWT ${accessToken}` },
      });
      console.log("AuthService logout response:", response);
      return response;
    } catch (error) {
      console.error("AuthService logout error:", error);
      throw error;
    }
  },
  refreshToken: async (refreshToken) => {
    try {
      const response = await API.post("/auth/refresh-token", { token: refreshToken });
      console.log("AuthService refreshToken response:", response);
      return response;
    } catch (error) {
      console.error("AuthService refreshToken error:", error);
      throw error;
    }
  },
};

export default AuthService;

