import Cookies from "js-cookie";
import React from "react";
import { FaClock } from "react-icons/fa";

const SentRequest = (props) => {

  async function getProfileDetails() {
    const token = Cookies.get('token'); // Replace with the actual token
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/profileDetails', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const profileDetails = await response.json();
      console.log('Profile Details:', profileDetails);
    } catch (error) {
      console.error('Error fetching profile details:', error);
    }
  }
  
  // Call the function to fetch profile details
  getProfileDetails();
  

  return (
    <>
      {
        props.sentRequestData && (<>

          {
            props.sentRequestData.map(item => {
              return (<>
                <div className="flex items-center justify-between p-5 text-black">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      className="object-cover h-16 w-16 rounded-full"
                      alt=""
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-lg font-bold">Ayaush</h1>
                        <h2>@ayaush</h2>
                      </div>

                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit, veritatis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-xl" />
                      <span>{"3days"}</span>
                    </div>
                    <button className="bg-primary-300 p-2 rounded-lg">Ignore</button>
                  </div>
                </div>
              </>)
            })
          }

        </>)
      }

    </>
  );
};

export default SentRequest;
