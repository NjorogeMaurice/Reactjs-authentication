import React, { useState, useEffect} from 'react';
export function Navigation() {
   const [isAuth, setIsAuth] = useState(false);
   useEffect(() => {
     if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true); 
      }
    }, [isAuth]);
     return ( 
      <div className="bg-gray-800">
  <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">JWT Authentication</span>
    </div>
    <div class="sm:mb-0 self-center">
    {isAuth ?<a href="/" class="text-md no-underline text-white hover:text-blue-dark ml-2 px-1">Home</a> : null}
    {isAuth ? (<a href="/logout" class="text-md no-underline text-white hover:text-blue-dark ml-2 px-1">Logout</a>)
    :(<a href="/login" class="text-md no-underline text-white hover:text-blue-dark ml-2 px-1">Log In</a>
)}

    
  </div>
  </nav>
<link
    rel="stylesheet"
    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/>
  <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
</div>

     );
}