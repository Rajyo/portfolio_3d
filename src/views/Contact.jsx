import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import EarthCanvas from "../canvas/EarthCanvas"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { slideIn } from "../utils/motion.js";

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
    <div id="contact" className="w-full xl:px-[6rem]" style={{ backgroundColor: bg, color: cl, margin:"2rem 1rem 0rem 0rem"}}>
      <h3 className="text-4xl sm:text-5xl font-bold px-4 mb-10 md:px-0 text-center z-0">Contact</h3>
      <div
        className={`xl:mt-6 flex xl:flex-row flex-col-reverse overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
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
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] lg:h-[750px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useContext, useEffect } from "react";
// import { ThemeContext } from "../themeProvider";
// import Light from "../utils/ThreeCube2";
// import EarthCanvas from "../canvas/EarthCanvas"
// import { useForm } from "react-hook-form";
// import emailjs from "emailjs-com";


// const Contact = () => {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;
//   const bg = darkMode ? "#ffe0e5" : "#4a4632"
//   const innerbg = darkMode ? "#e9939366" : "#8c845f"
//   const cl = darkMode ? "black" : "white"

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const { name, email, message } = data;
//     try {
//       const templateParams = {
//         user_name: name,
//         user_email: email,
//         user_message: message,
//       };

//       await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE,
//         process.env.REACT_APP_EMAILJS_TEMPLATE,
//         templateParams,
//         process.env.REACT_APP_EMAILJS_SECRET,
//       );

//       reset();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div
//       id="contact"
//       className={
//         darkMode
//           ? " md:h-screen"
//           : " text-white md:h-screen"
//       }
//       style={{ backgroundColor: bg, color: cl, marginTop: "4rem", }}
//     >
//       <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4" >
//         <h2 className="text-5xl font-bold px-4 mb-10 md:px-0 text-center z-0">
//           Contact
//         </h2>

//         <div className="flex flex-col lg:flex lg:flex-row-reverse">
//           <div className="w-full">
//             <EarthCanvas />
//           </div>
//           <div className="w-full flex justify-between flex-col flex-wrap md:flex-row">
//             <div className="w-full md:mx-0">
//               <form
//                 id="contact-form"
//                 onSubmit={handleSubmit(onSubmit)}
//                 noValidate
//                 style={{ backgroundColor: innerbg, padding: "1rem 2rem 2rem 2rem", borderRadius: "1rem", }}
//               >

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
//                     type="text"
//                     name="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Enter your name"
//                     {...register("name", {
//                       required: {
//                         value: true,
//                         message: "Please enter your name",
//                       },
//                       maxLength: {
//                         value: 30,
//                         message: "Please use 30 characters or less",
//                       },
//                     })}
//                     required
//                   />
//                   {errors.name && (
//                     <span className="errorMessage">
//                       {errors.name.message}
//                     </span>
//                   )}
//                 </div>

//                 <div className="mb-6">
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
//                     {...register("email", {
//                       required: true,
//                       pattern:
//                         /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//                     })}
//                     required
//                   />
//                   {errors.email && (
//                     <span className="errorMessage">
//                       Please enter a valid email address
//                     </span>
//                   )}
//                 </div>

//                 <div class="mb-6">
//                   <label
//                     for="name"
//                     class={
//                       darkMode
//                         ? "block mb-2 text-lg font-medium text-gray-900"
//                         : "block mb-2 text-lg font-medium text-white"
//                     }
//                   >
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Enter subject"
//                     {...register("subject", {
//                       required: {
//                         value: true,
//                         message: "Please enter a subject",
//                       },
//                       maxLength: {
//                         value: 75,
//                         message: "Subject cannot exceed 75 characters",
//                       },
//                     })}
//                     required
//                   />
//                   {errors.subject && (
//                     <span className="errorMessage">
//                       {errors.subject.message}
//                     </span>
//                   )}
//                 </div>

//                 <div className="mb-6">
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
//                     name="message"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Enter your message"
//                     {...register("message", {
//                       required: true,
//                     })}
//                     required
//                   />
//                   {errors.message && (
//                     <span className="errorMessage">
//                       Please enter a message
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex justify-between ">
//                   <button className="bg-indigo-500 text-white px-4 py-2 w-full rounded-md hover:bg-indigo-400" type="submit">
//                     Submit
//                   </button>
//                 </div>

//               </form>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;
