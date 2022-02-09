import React, { useContext, useState } from 'react';
import { UserContext } from '../context/Auth';

function Login() {
  const { login } = useContext(UserContext);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  localStorage.setItem('userName', name);
  

  return (
    <div className="ui placeholder teal segment" >
      <h1 style={{textAlign:"center"}}>Please, log in!</h1>
     < form className="ui form" >
     <div className="inline field">
      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      </div>
      <div className="inline field">
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      </div>
      <button className="ui blue button" onClick={() => login(name,password)}>Log in</button>
      </form>
    </div>
  );
}

export default Login;

// import React, {useContext }from 'react';
// import { useSetState } from 'react-use';
// import { AuthContext } from '../context/Auth';

// const initialState = {
//   email: '',
//   password: ''
// }

// const Login = () => {
//   const { state: ContextState, login } = useContext(AuthContext);
//   const {
//     isLoginPending,
//     isLoggedIn,
//     loginError
//   } = ContextState;
//   const [state, setState] = useSetState(initialState);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = state;
//     login(email, password);
//     setState({
//       email: '',
//       password: ''
//     });
//   }
    
//   return (

//     <div className="ui placeholder segment">
     
//     <form className="ui form" onSubmit={onSubmit}>
    
//        <h1 style={{textAlign:"center"}}>LOGIN</h1>
     
//       <div className="ui center aligned">

//         <div className="inline field">
//           <label type='text' placeholder='Username'>Username</label>
        
//           <input 
//             type="text" 
//             name="email" 
//             onChange={e => setState({email: e.target.value})} 
//             value={state.email} 
//             placeholder="admin" 
//           />
//         </div>

//         <div className="inline field">
//           <label htmlFor="password">Password</label>
       
//             <input 
//               type="password" 
//               name="password" 
//               onChange={e => setState({password: e.target.value})} 
//               value={state.password} 
//               placeholder="admin" 
//             />
//         </div>
//           <button className="ui blue button" type="submit" value="Login" >Login</button>
              
//       </div>

//       { isLoginPending && <div>Please wait...</div> }
//       { isLoggedIn && <div>Success.</div> }
//       { loginError && <div>{loginError.message}</div> }
//     </form>
    
//     </div>
//   )
// }


// export default Login;