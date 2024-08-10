// import { createContext, useState } from "react";

// // Define the user roles (you can adjust this according to your actual enums)
// const UserRoles = {
//   ADMIN: "admin",
//   USER: "user",
//   // Add other roles as needed
// };

// const defaultValues = {
//   isAuthenticated: false,
//   setIsAuthenticated: () => {},
//   email: null,
//   setEmail: () => {},
//   userId: null,
//   setUserId: () => {},
//   phoneNumber: null,
//   setPhoneNumber: () => {},
//   loading: false,
//   setLoading: () => {},
//   authLoading: true,
//   setAuthLoading: () => {},
//   accessToken: null,
//   setAccessToken: () => {},
//   roles: [],
//   setRoles: () => [],
//   errors: [],
//   setErrors: () => {},
//   fullName: null,
//   setFullName: () => {},
//   age: null,
//   setAge: () => {},
//   gender: null,
//   setGender: () => {},
// };

// export const AuthContext = createContext(defaultValues);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     defaultValues.isAuthenticated
//   );
//   const [email, setEmail] = useState(defaultValues.email);
//   const [userId, setUserId] = useState(defaultValues.userId);
//   const [phoneNumber, setPhoneNumber] = useState(defaultValues.phoneNumber);
//   const [loading, setLoading] = useState(defaultValues.loading);
//   const [authLoading, setAuthLoading] = useState(defaultValues.authLoading);
//   const [accessToken, setAccessToken] = useState(defaultValues.accessToken);
//   const [roles, setRoles] = useState(defaultValues.roles);
//   const [errors, setErrors] = useState(defaultValues.errors);
//   const [fullName, setFullName] = useState(defaultValues.fullName);
//   const [age, setAge] = useState(defaultValues.age);
//   const [gender, setGender] = useState(defaultValues.gender);

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         setIsAuthenticated,
//         email,
//         setEmail,
//         userId,
//         setUserId,
//         phoneNumber,
//         setPhoneNumber,
//         loading,
//         setLoading,
//         authLoading,
//         setAuthLoading,
//         accessToken,
//         setAccessToken,
//         roles,
//         setRoles,
//         errors,
//         setErrors,
//         fullName,
//         setFullName,
//         age,
//         setAge,
//         gender,
//         setGender,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useState } from "react";

// Define the user roles (adjust this according to your actual enums)
const UserRoles = {
  ADMIN: "admin",
  USER: "user",
  // Add other roles as needed
};

const defaultValues = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  email: null,
  setEmail: () => {},
  userId: null,
  setUserId: () => {},
  phoneNumber: null,
  setPhoneNumber: () => {},
  loading: false,
  setLoading: () => {},
  authLoading: true,
  setAuthLoading: () => {},
  accessToken: null,
  setAccessToken: () => {},
  roles: [],
  setRoles: () => [],
  errors: [],
  setErrors: () => {},
  fullName: null,
  setFullName: () => {},
  age: null,
  setAge: () => {},
  gender: null,
  setGender: () => {},
};

export const AuthContext = createContext(defaultValues);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(defaultValues.isAuthenticated);
  const [email, setEmail] = useState(defaultValues.email);
  const [userId, setUserId] = useState(defaultValues.userId);
  const [phoneNumber, setPhoneNumber] = useState(defaultValues.phoneNumber);
  const [loading, setLoading] = useState(defaultValues.loading);
  const [authLoading, setAuthLoading] = useState(defaultValues.authLoading);
  const [accessToken, setAccessToken] = useState(defaultValues.accessToken);
  const [roles, setRoles] = useState(defaultValues.roles);
  const [errors, setErrors] = useState(defaultValues.errors);
  const [fullName, setFullName] = useState(defaultValues.fullName);
  const [age, setAge] = useState(defaultValues.age);
  const [gender, setGender] = useState(defaultValues.gender);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        email,
        setEmail,
        userId,
        setUserId,
        phoneNumber,
        setPhoneNumber,
        loading,
        setLoading,
        authLoading,
        setAuthLoading,
        accessToken,
        setAccessToken,
        roles,
        setRoles,
        errors,
        setErrors,
        fullName,
        setFullName,
        age,
        setAge,
        gender,
        setGender,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
