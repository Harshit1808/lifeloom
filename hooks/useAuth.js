// import { useContext, useEffect } from "react";
// import jwtDecode from "jwt-decode";

// import { AuthContext } from "../contexts/authContext";
// import AuthService from "../services/authService";
// import useLocalStorage from "./useLocalStorage";

// const useAuth = () => {
//   const {
//     accessToken,
//     setAccessToken,
//     loading,
//     setLoading,
//     authLoading,
//     setAuthLoading,
//     email,
//     setEmail,
//     errors,
//     setErrors,
//     isAuthenticated,
//     setIsAuthenticated,
//     phoneNumber,
//     setPhoneNumber,
//     roles,
//     setRoles,
//     userId,
//     setUserId,
//     fullName,
//     setFullName,
//     age,
//     gender,
//     setAge,
//     setGender,
//   } = useContext(AuthContext);

//   const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", null);

//   const login = (accessToken, refreshToken) => {
//     const { exp, email, id, phoneNumber, roles, age, fullName, gender } = jwtDecode(accessToken);
//     silentRefresh(exp);
//     setAccessToken(accessToken);
//     setRefreshToken(refreshToken);
//     setEmail(email);
//     setUserId(id);
//     setPhoneNumber(phoneNumber);
//     setRoles(roles);
//     setFullName(fullName);
//     setAge(age);
//     setGender(gender);
//     setIsAuthenticated(true);
//   };

//   const refreshAccessToken = async () => {
//     if (!refreshToken) {
//       setAuthLoading(false);
//       return;
//     }
//     try {
//       const response = await AuthService.refreshToken(refreshToken);
//       const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
//       login(newAccessToken, newRefreshToken);
//     } catch (error) {
//       console.error("Failed to refresh token:", error);
//       destroyAuth();
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   const logout = async (accessToken) => {
//     if (!accessToken) {
//       return;
//     }

//     try {
//       await AuthService.logout(accessToken);
//     } catch {
//     } finally {
//       destroyAuth();
//     }
//   };

//   const silentRefresh = (exp) => {
//     const msExpiry = Math.abs(new Date().getTime() - new Date(exp * 1000).getTime());

//     setTimeout(() => {
//       refreshAccessToken();
//     }, msExpiry);
//   };

//   const destroyAuth = () => {
//     setRefreshToken(null);
//     setAccessToken(null);
//     setEmail(null);
//     setPhoneNumber(null);
//     setRoles([]);
//     setUserId(null);
//     setIsAuthenticated(false);
//   };

//   return {
//     accessToken,
//     isAuthenticated,
//     loading,
//     authLoading,
//     errors,
//     userId,
//     email,
//     phoneNumber,
//     fullName,
//     roles,
//     age,
//     gender,
//     login,
//     logout,
//     refreshAccessToken,
//   };
// };

// export default useAuth;

import { useContext, useEffect } from "react";
//import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode"; // Adjusted import

import { AuthContext } from "../contexts/authContext";
import AuthService from "../services/authService";
import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  console.log("useAuth11");
  const {
    accessToken,
    setAccessToken,
    loading,
    setLoading,
    authLoading,
    setAuthLoading,
    email,
    setEmail,
    errors,
    setErrors,
    isAuthenticated,
    setIsAuthenticated,
    phoneNumber,
    setPhoneNumber,
    roles,
    setRoles,
    userId,
    setUserId,
    fullName,
    setFullName,
    age,
    gender,
    setAge,
    setGender,
  } = useContext(AuthContext);

  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", null);

  // const login = (accessToken, refreshToken) => {
  //   console.log("login11");
  //   console.log("accessauth", accessToken, refreshToken)
  //   const { exp, email, id, phoneNumber, roles, age, fullName, gender } = jwtDecode(accessToken);
  //   console.log("login13", exp, email, id, phoneNumber, roles, age, fullName)
  //   silentRefresh(exp);
  //   setAccessToken(accessToken);
  //   setRefreshToken(refreshToken);
  //   setEmail(email);
  //   setUserId(id);
  //   setPhoneNumber(phoneNumber);
  //   setRoles(roles);
  //   setFullName(fullName);
  //   setAge(age);
  //   setGender(gender);
  //   setIsAuthenticated(true);
  // };
  const login = (accessToken, refreshToken, user) => {
    try {
      console.log("login11", user);
      console.log("accessauth", accessToken, refreshToken, user);
      //const { exp, email, id, phoneNumber, roles, age, fullName, gender } = jwt_decode(accessToken);
      const exp = "123"
      const age = 18
      const gender = "Male"
      console.log("login13", exp, user.email, user.id, user.phoneNumber, user.roles[0], age, user.fullName);
      silentRefresh(exp);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setEmail(user.email);
      setUserId(user.id);
      setPhoneNumber(user.phoneNumber);
      setRoles(user.roles);
      setFullName(user.fullName);
      setAge(age);
      setGender(gender);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error decoding JWT:", error);
      destroyAuth();
    }
  };

  const refreshAccessToken = async () => {
    if (!refreshToken) {
      setAuthLoading(false);
      return;
    }
    try {
      const response = await AuthService.refreshToken(refreshToken);
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
      login(newAccessToken, newRefreshToken);
    } catch (error) {
      console.error("Failed to refresh token:", error);
      destroyAuth();
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async (accessToken) => {
    if (!accessToken) {
      return;
    }

    try {
      await AuthService.logout(accessToken);
    } catch (error) {
      console.error("Failed to logout:", error);
    } finally {
      destroyAuth();
    }
  };

  const silentRefresh = (exp) => {
    const msExpiry = Math.abs(new Date().getTime() - new Date(exp * 1000).getTime());

    setTimeout(() => {
      refreshAccessToken();
    }, msExpiry);
  };

  const destroyAuth = () => {
    setRefreshToken(null);
    setAccessToken(null);
    setEmail(null);
    setPhoneNumber(null);
    setRoles([]);
    setUserId(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (refreshToken) {
      refreshAccessToken();
    }
  }, [refreshToken]);

  return {
    accessToken,
    isAuthenticated,
    loading,
    authLoading,
    errors,
    userId,
    email,
    phoneNumber,
    fullName,
    roles,
    age,
    gender,
    login,
    logout,
    refreshAccessToken,
  };
};

export default useAuth;

