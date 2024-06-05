import React from "react";

export default function EditProfileModal({ showModal, setShowModal }) {
  const submitHandler = () => {};
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center h-[90vh] items-center flex overflow-x-hidden mt-5 overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none text-black">
            <div className="relative  w-auto my-6 mx-auto max-w-3xl">
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
                    {" "}
                    <main className="w-full mx-auto">
                      <div className="p-2">
                        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg mx-auto">
                          <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                              <img
                                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-primary-300 dark:ring-primary-500"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Bordered avatar"
                              />

                              <div className="flex flex-col space-y-5 sm:ml-8">
                                <input
                                  type="file"
                                  name="profilePic"
                                  id="profilePic"
                                />
                                <button
                                  type="button"
                                  className="py-3.5 px-7 text-base font-medium text-primary-100 focus:outline-none bg-primary-800 rounded-lg border border-primary-200 hover:bg-primary-900 focus:z-10 focus:ring-4 focus:ring-primary-200 "
                                >
                                  Change picture
                                </button>
                                <button
                                  type="button"
                                  className="py-3.5 px-7 text-base font-medium text-primary-900 focus:outline-none bg-white rounded-lg border border-primary-200 hover:bg-primary-100 hover:text-primary-800 focus:z-10 focus:ring-4 focus:ring-primary-200 "
                                >
                                  Delete picture
                                </button>
                              </div>
                            </div>

                            <div className="items-center mt-8 sm:mt-14 text-black">
                              <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                  <label
                                    for="first_name"
                                    className="block mb-2 text-sm font-medium text-primary-900 "
                                  >
                                    Your first name
                                  </label>
                                  <input
                                    type="text"
                                    id="first_name"
                                    className="bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    placeholder="Your first name"
                                    value="Fardeen"
                                    required
                                  />
                                </div>

                                <div className="w-full">
                                  <label
                                    for="last_name"
                                    className="block mb-2 text-sm font-medium text-primary-900 "
                                  >
                                    Your last name
                                  </label>
                                  <input
                                    type="text"
                                    id="last_name"
                                    className="bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    placeholder="Your last name"
                                    value="Ahamed"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="mb-2 sm:mb-6">
                                <label
                                  for="email"
                                  className="block mb-2 text-sm font-medium text-primary-900 "
                                >
                                  Your email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                  placeholder="your.email@mail.com"
                                  required
                                />
                              </div>

                              <div className="mb-2 sm:mb-6">
                                <label
                                  for="profession"
                                  className="block mb-2 text-sm font-medium text-primary-900 "
                                >
                                  User name
                                </label>
                                <input
                                  type="text"
                                  id="userName"
                                  className="bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                  placeholder="fardeen_19"
                                  required
                                />
                              </div>

                              <div className="mb-6">
                                <label
                                  for="message"
                                  className="block mb-2 text-sm font-medium text-primary-900 "
                                >
                                  Bio
                                </label>
                                <textarea
                                  id="message"
                                  rows="4"
                                  className="block p-2.5 w-full text-sm text-primary-900 bg-primary-50 rounded-lg border border-primary-300 focus:ring-primary-500 focus:border-primary-500 "
                                  placeholder="Write your bio here..."
                                ></textarea>
                              </div>

                              <div className="flex justify-end gap-2">
                                <button
                                  type="reset"
                                  className="text-white bg-primary-500  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-500"
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
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