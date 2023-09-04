import React from 'react'
import { Link } from 'react-router-dom';

const handleLinkClick = async () => {
    // Perform API call or other operations
    await makeApiCall();

    // Reload the browser without canceling other operations
    window.location.reload();
  };

  const makeApiCall = async () => {
    // Make API call to Node.js backend
    // Example:
    try {
      const response = await fetch("localhost:5000/api/users/profile", {
        method: "GET"
      });
      const data = await response.json();
      console.log(data);
      // Process the data
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

const Testing = () => {
 
    return (
        <div className='mt-20'>
          <Link to="/other-page" onClick={handleLinkClick} className='p-7'>
            Go to Other Page
          </Link>
        </div>
      );
}

export default Testing