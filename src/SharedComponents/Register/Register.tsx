// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router";
// import { useMutation } from "@tanstack/react-query";
// import { userApi } from "../../utility/api";
// import { toast } from "react-toastify";


// interface RegisterData {
//   firstname: string,
//   lastname: string,
//   email: string,
//   phone: string,
//   password: string
// }


// const Register = () => {
//   const [profilePic, setProfilePic] = useState(null);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [location, setLocation] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const registerMutation = useMutation({
//     mutationFn: async (registerData: RegisterData) => {
//       return await userApi.post("/api/v1/signup/", {
//         name: `${registerData.firstname} ${registerData.lastname}`,
//         email: registerData.email,
//         phone: registerData.phone,
//         password: registerData.password,
//       })
//     },
//     onSuccess: (data) => {
//       toast.success("Registration successful");
//       navigate("/");
//       console.log(data);
//     },
//     onError: (error) => {
//       toast.error("Registration failed");
//       console.log(error.message);
//     },
//   })

//   async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (!firstName || !lastName || !phoneNumber || !location || !password || !email) {
//       toast.error("Please fill all the fields");
//       return;
//     }
//     const registerData: RegisterData = {
//       firstname: firstName,
//       lastname: lastName,
//       email: email,
//       phone: phoneNumber,
//       password: password
//     }
//     console.log(registerData)
//     await registerMutation.mutateAsync(registerData);
//   }

//   const ballVariants = {
//     animate: {
//       x: [0, 50, 0, -50, 0],
//       y: [0, -50, 0, 50, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };


//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append("image", file);

//       fetch("https://api.imgbb.com/1/upload?key=757ec57b5f8a618a06dabaafb680a399", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.success) {
//             setProfilePic(data.data.url);
//           }
//         })
//         .catch((error) => {
//           console.error("Error uploading image:", error);
//         });
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-900 opacity-85 flex justify-center items-center relative p-2">
//       {/* Moving background balls */}

//       <motion.div
//         className="absolute top-20 left-20 bg-blue-500 rounded-full shadow-2xl shadow-slate-200"
//         style={{
//           width: "clamp(4rem, 10vw, 8rem)",
//           height: "clamp(4rem, 10vw, 8rem)",
//         }}
//         variants={ballVariants}
//         animate="animate"
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 bg-red-500 rounded-full shadow-2xl shadow-slate-200"
//         style={{
//           width: "clamp(4rem, 10vw, 8rem)",
//           height: "clamp(4rem, 10vw, 8rem)",
//         }}
//         variants={ballVariants}
//         animate="animate"
//       />


//       <motion.div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
//         initial={{ opacity: 0, y: 50, scale: .3 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25 }}
//       >
//         <h1 className="text-2xl font-bold text-center mb-6 text-red-500">Register Here</h1>
//         <form
//           onSubmit={handleRegister}
//           className="space-y-4">
//           {/* Profile Picture Upload */}
//           <div className="flex justify-center items-center mb-4">
//             <label
//               htmlFor="profile-pic"
//               className="cursor-pointer"
//             >
//               <motion.div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center"
//                 initial={{ opacity: 0, y: 50, scale: .3 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.15 }}
//               >
//                 {profilePic ? (
//                   <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
//                 ) : (
//                   <span className="text-white">Upload</span>
//                 )}
//               </motion.div>
//               <input
//                 type="file"
//                 id="profile-pic"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </label>
//           </div>

//           <div className="flex space-x-[2%]">
//             {/* First Name */}
//             <motion.div
//               initial={{ opacity: 0, y: 50, scale: .3 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.18 }}
//             >
//               <label className="block text-sm font-medium">First Name</label>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//               />
//             </motion.div>

//             {/* Last Name */}
//             <motion.div
//               initial={{ opacity: 0, y: 50, scale: .3 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.22 }}
//             >
//               <label className="block text-sm font-medium">Last Name</label>
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//               />
//             </motion.div>
//           </div>
//           {/* Email */}
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: .3 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.22 }}
//           >
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </motion.div>
//           {/* Password */}
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: .3 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.18 }}
//           >
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </motion.div>

//           {/* Phone Number */}
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: .3 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.26 }}
//           >
//             <label className="block text-sm font-medium">Phone Number</label>
//             <input
//               type="text"
//               placeholder="Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </motion.div>

//           {/* Location */}
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: .3 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.30 }}
//           >
//             <label className="block text-sm font-medium">Location</label>
//             <input
//               type="text"
//               placeholder="Location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </motion.div>

//           {/* Submit Button */}
//           <button
//             className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold">
//             Register
//           </button>
//         </form>
//         <div className="flex justify-center items-center mt-6">
//           <h2 className="text-sm mr-2">Already have an account?</h2>
//           <Link to="/login" className="text-red-500 font-semibold">Login</Link>
//         </div>

//       </motion.div>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "../../utility/api";
import { toast } from "react-toastify";
import { useTranslate } from "../../Context/ContextProvider";

interface RegisterData {
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  password: string
}

const translations = {
  en: {
    registerTitle: "Register Here",
    upload: "Upload",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    password: "Password",
    phoneNumber: "Phone Number",
    location: "Location",
    registerButton: "Register",
    alreadyHaveAccount: "Already have an account?",
    loginLink: "Login",
    registrationSuccess: "Registration successful",
    registrationFailed: "Registration failed",
    fillAllFields: "Please fill all the fields",
    imageUploadError: "Error uploading image"
  },
  bn: {
    registerTitle: "নিবন্ধন করুন",
    upload: "আপলোড করুন",
    firstName: "নামের প্রথম অংশ",
    lastName: "নামের শেষাংশ",
    email: "ইমেইল",
    password: "পাসওয়ার্ড",
    phoneNumber: "ফোন নম্বর",
    location: "অবস্থান",
    registerButton: "নিবন্ধন করুন",
    alreadyHaveAccount: "ইতিমধ্যে একটি অ্যাকাউন্ট আছে?",
    loginLink: "লগইন",
    registrationSuccess: "নিবন্ধন সফল হয়েছে",
    registrationFailed: "নিবন্ধন ব্যর্থ হয়েছে",
    fillAllFields: "সমস্ত তথ্য প্রদান করুন",
    imageUploadError: "ছবি আপলোডে সমস্যা হয়েছে"
  }
};

const Register = () => {
  const { currentLanguage } = useTranslate();
  const t = translations[currentLanguage];
  
  const [profilePic, setProfilePic] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async (registerData: RegisterData) => {
      return await userApi.post("/api/v1/signup/", {
        name: `${registerData.firstname} ${registerData.lastname}`,
        email: registerData.email,
        phone: registerData.phone,
        password: registerData.password,
      })
    },
    onSuccess: (data) => {
      toast.success(t.registrationSuccess);
      navigate("/");
      console.log(data);
    },
    onError: (error) => {
      toast.error(t.registrationFailed);
      console.log(error.message);
    },
  });

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!firstName || !lastName || !phoneNumber || !location || !password || !email) {
      toast.error(t.fillAllFields);
      return;
    }
    const registerData: RegisterData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phoneNumber,
      password: password
    }
    console.log(registerData)
    await registerMutation.mutateAsync(registerData);
  }

  const ballVariants = {
    animate: {
      x: [0, 50, 0, -50, 0],
      y: [0, -50, 0, 50, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      fetch("https://api.imgbb.com/1/upload?key=757ec57b5f8a618a06dabaafb680a399", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setProfilePic(data.data.url);
          }
        })
        .catch((error) => {
          console.error(t.imageUploadError, error);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 opacity-85 flex justify-center items-center relative p-2">
      {/* Moving background balls */}
      <motion.div
        className="absolute top-20 left-20 bg-blue-500 rounded-full shadow-2xl shadow-slate-200"
        style={{
          width: "clamp(4rem, 10vw, 8rem)",
          height: "clamp(4rem, 10vw, 8rem)",
        }}
        variants={ballVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 bg-red-500 rounded-full shadow-2xl shadow-slate-200"
        style={{
          width: "clamp(4rem, 10vw, 8rem)",
          height: "clamp(4rem, 10vw, 8rem)",
        }}
        variants={ballVariants}
        animate="animate"
      />

      <motion.div 
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 50, scale: .3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25 }}
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-red-500">{t.registerTitle}</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Profile Picture Upload */}
          <div className="flex justify-center items-center mb-4">
            <label htmlFor="profile-pic" className="cursor-pointer">
              <motion.div 
                className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center"
                initial={{ opacity: 0, y: 50, scale: .3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.15 }}
              >
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                ) : (
                  <span className="text-gray-600">{t.upload}</span>
                )}
              </motion.div>
              <input
                type="file"
                id="profile-pic"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="flex space-x-[2%]">
            {/* First Name */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: .3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.18 }}
            >
              <label className="block text-sm font-medium">{t.firstName}</label>
              <input
                type="text"
                placeholder={t.firstName}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </motion.div>

            {/* Last Name */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: .3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.22 }}
            >
              <label className="block text-sm font-medium">{t.lastName}</label>
              <input
                type="text"
                placeholder={t.lastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </motion.div>
          </div>
          
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: .3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.22 }}
          >
            <label className="block text-sm font-medium">{t.email}</label>
            <input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </motion.div>
          
          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: .3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.18 }}
          >
            <label className="block text-sm font-medium">{t.password}</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder={t.password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: .3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.26 }}
          >
            <label className="block text-sm font-medium">{t.phoneNumber}</label>
            <input
              type="text"
              placeholder={t.phoneNumber}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: .3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.30 }}
          >
            <label className="block text-sm font-medium">{t.location}</label>
            <input
              type="text"
              placeholder={t.location}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </motion.div>

          {/* Submit Button */}
          <button
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? 
              (currentLanguage === 'en' ? 'Registering...' : 'নিবন্ধন করা হচ্ছে...') : 
              t.registerButton}
          </button>
        </form>
        
        <div className="flex justify-center items-center mt-6">
          <h2 className="text-sm mr-2">{t.alreadyHaveAccount}</h2>
          <Link to="/login" className="text-red-500 font-semibold hover:underline">
            {t.loginLink}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;