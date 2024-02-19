//Import necessary functions
import axios from "axios";
import {useState} from "react";
// Define the Login function.
export const Login = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [error,setError] = useState(false);
     // Create the submit method.
     const submit = async e => {
          e.preventDefault();
          const user = {
                email: username,
                password: password
               };
          // Create the POST requuest
          const {data} = await                                                                            
                         axios.post('http://localhost:8000/login/',
                         user ,{headers: 
                        {'Content-Type': 'application/json'},withCredentials: true},{'mode':'cors'});

         // Initialize the access & refresh token in localstorage.      
         try {
          localStorage.clear();
       localStorage.setItem('access_token', data.access);
       localStorage.setItem('refresh_token', data.refresh);
       axios.defaults.headers.common['Authorization'] = 
                                       `Bearer ${data['access']}`;
                                       window.location.href = '/'
          
       } catch (error) {
            setError(true);
       }
    }
    return(
      
      <div className="flex justify-center items-center h-screen">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
    <h3 className="text-lg font-bold mb-6">Welcome Back!</h3>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter E-mail" name='email' value={username} required onChange={e => setUsername(e.target.value)} />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" name='password' value={password} required onChange={e => setPassword(e.target.value)} />
    </div>
    {error? <p className="text-red-500 mb-4">Incorrect credentials</p>:<p></p>}
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
        Sign in
      </button>
    </div>
    <p>Have no account? <a className="text-blue-500" href="/register/">Click here</a></p>
  </form>

  <link
    rel="stylesheet"
    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
  />
  <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
</div>





     )
}