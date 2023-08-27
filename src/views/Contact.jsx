import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../themeProvider";
import Light from "../utils/ThreeCube2";
import EarthCanvas from "../canvas/EarthCanvas"
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";


const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bg = darkMode ? "#ffe0e5" : "#4a4632"
  const innerbg = darkMode ? "#e9939366" : "#8c845f"
  const cl = darkMode ? "black" : "white"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        user_name: name,
        user_email: email,
        user_message: message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        templateParams,
        process.env.REACT_APP_EMAILJS_SECRET,
      );

      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      id="contact"
      className={
        darkMode
          ? " md:h-screen"
          : " text-white md:h-screen"
      }
      style={{ backgroundColor: bg, color: cl, marginTop: "4rem", }}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4" >
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div className="flex">
          <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24" style={{ width: "50%", marginTop: "5rem" }}>
            <div className="w-full md:pr-8">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                style={{ backgroundColor: innerbg, padding: "1rem 2rem 2rem 2rem", borderRadius: "1rem", }}
              >

                <div class="my-6">
                  <label
                    for="name"
                    class={
                      darkMode
                        ? "block mb-2 text-lg font-medium text-gray-900"
                        : "block mb-2 text-lg font-medium text-white"
                    }
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                    required
                  />
                  {errors.name && (
                    <span className="errorMessage">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    for="email"
                    class={
                      darkMode
                        ? "block mb-2 text-lg font-medium text-gray-900"
                        : "block mb-2 text-lg font-medium text-white"
                    }
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    required
                  />
                  {errors.email && (
                    <span className="errorMessage">
                      Please enter a valid email address
                    </span>
                  )}
                </div>

                <div class="mb-6">
                  <label
                    for="name"
                    class={
                      darkMode
                        ? "block mb-2 text-lg font-medium text-gray-900"
                        : "block mb-2 text-lg font-medium text-white"
                    }
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter subject"
                    {...register("subject", {
                      required: {
                        value: true,
                        message: "Please enter a subject",
                      },
                      maxLength: {
                        value: 75,
                        message: "Subject cannot exceed 75 characters",
                      },
                    })}
                    required
                  />
                  {errors.subject && (
                    <span className="errorMessage">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    for="message"
                    class={
                      darkMode
                        ? "block mb-2 text-lg font-medium text-gray-900"
                        : "block mb-2 text-lg font-medium text-white"
                    }
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your message"
                    {...register("message", {
                      required: true,
                    })}
                    required
                  />
                  {errors.message && (
                    <span className="errorMessage">
                      Please enter a message
                    </span>
                  )}
                </div>

                <div className="flex justify-between ">
                  <button className="bg-indigo-500 text-white px-4 py-2 w-full rounded-md hover:bg-indigo-400" type="submit">
                    Submit
                  </button>
                </div>

              </form>
            </div>
          </div>
          <div style={{ width: "50%", marginTop: "-2rem", }}>
            <EarthCanvas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


// import React, { useContext, useEffect } from "react";
// import { ThemeContext } from "../themeProvider";
// import Light from "../utils/ThreeCube2";
// import EarthCanvas from "../canvas/EarthCanvas"

// const Contact = () => {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;

//   return (
//     <div
//       id="contact"
//       className={
//         darkMode
//           ? "bg-white pt-24 md:h-screen"
//           : "bg-black pt-24 text-white md:h-screen"
//       }
//       style={{ marginTop: "4rem",}}
//     >
//       <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4" >
//         <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
//           Contact
//         </h2>
//         <div style={{display:"flex"}}>
//           <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24" style={{ width:"50%", marginTop:"1rem"}}>
//             <div className="w-full md:pr-8">
//               <form>
//                 <div class="my-6">
//                   <label
//                     for="name"
//                     class={
//                       darkMode
//                         ? "block mb-2 text-lg font-medium text-gray-900"
//                         : "block mb-2 text-lg font-medium text-white"
//                     }
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="email"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     for="email"
//                     class={
//                       darkMode
//                         ? "block mb-2 text-lg font-medium text-gray-900"
//                         : "block mb-2 text-lg font-medium text-white"
//                     }
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     for="message"
//                     class={
//                       darkMode
//                         ? "block mb-2 text-lg font-medium text-gray-900"
//                         : "block mb-2 text-lg font-medium text-white"
//                     }
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Enter your message"
//                     required
//                   />
//                 </div>
//                 <div className="flex justify-between ">
//                   <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
//                     <a href="mailto:prajyotkhadse7@gmail.com">Submit</a>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div style={{ width:"50%", marginTop:"-2rem",}}>
//             <EarthCanvas/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
