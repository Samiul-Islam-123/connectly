import Cookies from "js-cookie";
import React, { useState } from "react";

export default function EditProfileModal({ showModal, setShowModal }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstName, setFirstName] = useState("Fardeen");
  const [lastName, setLastName] = useState("Ahamed");
  const [email, setEmail] = useState("your.email@mail.com");
  const [userName, setUserName] = useState("fardeen_19");
  const [bio, setBio] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("userName", userName);
    formData.append("bio", bio);
    if (selectedImage) {
      formData.append("profilePicture", selectedImage);
    }

    try {
      const apiURL = process.env.NEXT_PUBLIC_API_URL;
      const token = Cookies.get('token')
      const response = await fetch(`${apiURL}/api/profile/`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "x-auth-token": token,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      // Handle success response
      setShowModal(false);
    } catch (error) {
      console.error("Error:", error);
      // Handle error response
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleImageDelete = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center h-[90vh] items-center flex overflow-x-hidden mt-5 overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none text-black">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[60vw] h-[80vh] bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between w-full h-[10vh] p-5">
                  <h1 className="text-xl font-bold text-primary-500">
                    Edit Profile
                  </h1>
                  <button
                    className="p-2 bg-primary-500 rounded-lg text-black font-bold"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="w-full h-full overflow-y-auto mx-auto">
                  <form onSubmit={submitHandler}>
                    <main className="w-full mx-auto">
                      <div className="p-2">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg mx-auto">
                          <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                              {selectedImage ? (
                                <img
                                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-primary-300 dark:ring-primary-500"
                                  src={URL.createObjectURL(selectedImage)}
                                  alt="Selected avatar"
                                />
                              ) : (
                                <img
                                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-primary-300 dark:ring-primary-500"
                                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                  alt="Bordered avatar"
                                />
                              )}

                              <div className="flex flex-col space-y-5 sm:ml-8">
                                <input
                                  type="file"
                                  name="profilePic"
                                  id="profilePic"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                  style={{ display: "none" }}
                                />
                                <button
                                  type="button"
                                  className="py-3.5 px-7 text-base font-medium text-primary-100 focus:outline-none bg-primary-800 rounded-lg border border-primary-200 hover:bg-primary-900 focus:z-10 focus:ring-4 focus:ring-primary-200"
                                  onClick={() =>
                                    document.getElementById("profilePic").click()
                                  }
                                >
                                  Change picture
                                </button>
                                <button
                                  type="button"
                                  className="py-3.5 px-7 text-base font-medium text-primary-900 focus:outline-none bg-white rounded-lg border border-primary-200 hover:bg-primary-100 hover:text-primary-800 focus:z-10 focus:ring-4 focus:ring-primary-200"
                                  onClick={handleImageDelete}
                                >
                                  Delete picture
                                </button>
                              </div>
                            </div>

                            <div className="items-center mt-8 sm:mt-14 text-black">
                              <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                  <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-primary-900"
                                  >
                                    Your first name
                                  </label>
                                  <input
                                    type="text"
                                    id="first_name"
                                    className="bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="Your first name"
                                    value={firstName}
                                    onChange={(e) =>
                                      setFirstName(e.target.value)
                                    }
                                    required
                                  />
                                </div>

                                <div className="w-full">
                                  <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-primary-900"
                                  >
                                    Your last name
                                  </label>
                                  <input
                                    type="text"
                                    id="last_name"
                                    className="bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="Your last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="mb-2 sm:mb-6">
                                <label
                                  htmlFor="email"
                                  className="block mb-2 text-sm font-medium text-primary-900"
                                >
                                  Your email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                  placeholder="your.email@mail.com"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="mb-2 sm:mb-6">
                                <label
                                  htmlFor="userName"
                                  className="block mb-2 text-sm font-medium text-primary-900"
                                >
                                  User name
                                </label>
                                <input
                                  type="text"
                                  id="userName"
                                  className="bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                  placeholder="fardeen_19"
                                  value={userName}
                                  onChange={(e) => setUserName(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="mb-6">
                                <label
                                  htmlFor="message"
                                  className="block mb-2 text-sm font-medium text-primary-900"
                                >
                                  Bio
                                </label>
                                <textarea
                                  id="message"
                                  rows="4"
                                  className="block p-2.5 w-full text-sm text-primary-900 bg-primary-50 rounded-lg border border-primary-300 focus:ring-primary-500 focus:border-primary-500"
                                  placeholder="Write your bio here..."
                                  value={bio}
                                  onChange={(e) => setBio(e.target.value)}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="w-full py-4 px-4 text-sm font-medium text-primary-100 focus:outline-none bg-primary-500 rounded-lg border border-primary-200 hover:bg-primary-600 focus:z-10 focus:ring-4 focus:ring-primary-200"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </main>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
