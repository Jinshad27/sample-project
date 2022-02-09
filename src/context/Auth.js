
import React,{useState,createContext} from 'react';
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ name: '',password:'', auth: true });

  // Login updates the user data with a name parameter
  const login = (name,password) => {
    setUser((user) => ({
      name: name,
      password:password,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      name: '',
      password:'',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSetState } from 'react-use';
// export const AuthContext = React.createContext(null);


// const initialState = {
//   isLoggedIn: false,
//   isLoginPending: false,
//   loginError: null
// }

// export const ContextProvider = props => {
//   const [state, setState] = useSetState(initialState);
  
//   const setLoginPending = (isLoginPending) => setState({isLoginPending});
//   const setLoginSuccess = (isLoggedIn) => setState({isLoggedIn});
//   const setLoginError = (loginError) => setState({loginError});

//   const login = (email, password) => {
//     setLoginPending(true);
//     setLoginSuccess(false);
//     setLoginError(null);

  //   fetchLogin( email, password, error => {
  //     setLoginPending(false);

  //     if (!error) {
  //       setLoginSuccess(true);
  //     } else {
  //       setLoginError(error);
  //     }
  //   })
  // }

//   const logout = () => {
//     setLoginPending(false);
//     setLoginSuccess(false);
//     setLoginError(null);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         state,
//         login,
//         logout,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// // fake login

// const fetchLogin = (email, password, callback) => 

//   setTimeout(() => {
//     const navigate = useNavigate()
//     if (email === 'admin' && password === 'admin') {
//       return callback(null);
//     } else {
//       // return callback(new Error('Invalid email and password'));
      
//      navigate.push('/home')
//     }
//   });