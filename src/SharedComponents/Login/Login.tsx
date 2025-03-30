// import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router";  // Import Link from react-router-dom
// import { useMutation } from "@tanstack/react-query";
// import { userApi } from "../../utility/api";
// import { toast } from "react-toastify";
// import { getUser, userLogin } from "../../utility/auth";

// interface LoginData {
//   phone: string,
//   password: string,
// }

// const Login = () => {
//   const nav = useNavigate();
//   const loginMutation = useMutation({
//     mutationFn: async (loginData: LoginData) => {
//       return await userApi.post("/api/token/", {
//         phone: loginData.phone,
//         password: loginData.password
//       })
//     },
//     onSuccess: async (data) => {
//       toast.success("Login successful");
//       const response_data = await data.data;
//       userLogin(response_data);
//       if(getUser()?.is_staff){
//         nav("/v2/create-lottery")
//       }else{
//         nav("/");
//       }
//     },
//     onError: (error) => {
//       toast.error("Invalid Phone Number or Password");
//       console.log(error.message);
//     }
//   })


//   function handleLogin(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const loginData: LoginData = {
//       phone: formData.get("phone") as string,
//       password: formData.get("password") as string,
//     };
//     loginMutation.mutate(loginData);
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

//   return (
//     <div className="min-h-screen bg-gray-900 flex justify-center items-center relative p-2">
//       {/* Moving background balls */}
//       <motion.div
//         className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full shadow-2xl shadow-slate-200"
//         variants={ballVariants}
//         animate="animate"
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-40 h-40 bg-red-500 rounded-full shadow-2xl shadow-slate-200"
//         variants={ballVariants}
//         animate="animate"
//       />



//       <motion.div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
//         initial={{ opacity: 0, y: 50, scale: .3 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.35, delay: 0.15 }}
//       >
//         <h1 className="text-2xl font-bold text-center mb-6 text-red-500">Login Here</h1>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: .3 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.35, delay: 0.15 }}
//           >
//             <label className="block text-sm font-medium">Phone</label>
//             <input
//               required
//               type="number"
//               placeholder="phone"
//               name="phone"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: .3 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.18 }}
//           >
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               required
//               type="password"
//               placeholder="Password"
//               name="password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </motion.div>
//           <button className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold">
//             Log In
//           </button>
//         </form>

//         {/* Link to Register Page */}
//         <div className="mt-4 text-center">
//           <p className="text-sm">
//             New user?{" "}
//             <Link to="/register" className="text-red-500 font-semibold">
//               Create an account
//             </Link>
//           </p>
//         </div>

//         <div className="flex justify-between items-center mt-6">
//           <button className="px-2 py-1 bg-gray-200 rounded-lg font-semibold text-sm sm:px-4 sm:py-2 sm:text-base flex items-center space-x-2">
//             <FaGoogle className="text-blue-500" />
//             <span>Google</span>
//           </button>

//           <button className="px-2 py-1 bg-gray-200 rounded-lg font-semibold text-sm sm:px-4 sm:py-2 sm:text-base flex items-center space-x-2">
//             <FaFacebook className="text-blue-600" />
//             <span>Facebook</span>
//           </button>

//           <button className="px-2 py-1 bg-gray-200 rounded-lg font-semibold text-sm sm:px-4 sm:py-2 sm:text-base flex items-center space-x-2">
//             <FaInstagram className="text-pink-500" />
//             <span>Instagram</span>
//           </button>
//         </div>

//       </motion.div>
//     </div>
//   );
// };

// export default Login;
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "../../utility/api";
import { toast } from "react-toastify";
import { getUser, userLogin } from "../../utility/auth";
import { useTranslate } from "../../Context/ContextProvider";

interface LoginData {
  phone: string,
  password: string,
}

const translations = {
  en: {
    loginTitle: "Login Here",
    phoneLabel: "Phone",
    phonePlaceholder: "Enter your phone number",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    loginButton: "Log In",
    newUser: "New user?",
    createAccount: "Create an account",
    loginSuccess: "Login successful",
    loginError: "Invalid Phone Number or Password",
    googleLogin: "Google",
    facebookLogin: "Facebook",
    instagramLogin: "Instagram",
    adminRedirect: "Redirecting to admin panel...",
    userRedirect: "Redirecting to homepage..."
  },
  bn: {
    loginTitle: "লগইন করুন",
    phoneLabel: "ফোন নম্বর",
    phonePlaceholder: "আপনার ফোন নম্বর লিখুন",
    passwordLabel: "পাসওয়ার্ড",
    passwordPlaceholder: "আপনার পাসওয়ার্ড লিখুন",
    loginButton: "লগইন করুন",
    newUser: "নতুন ব্যবহারকারী?",
    createAccount: "একাউন্ট তৈরি করুন",
    loginSuccess: "লগইন সফল হয়েছে",
    loginError: "ভুল ফোন নম্বর বা পাসওয়ার্ড",
    googleLogin: "গুগল",
    facebookLogin: "ফেসবুক",
    instagramLogin: "ইনস্টাগ্রাম",
    adminRedirect: "অ্যাডমিন প্যানেলে রিডাইরেক্ট করা হচ্ছে...",
    userRedirect: "হোমপেজে রিডাইরেক্ট করা হচ্ছে..."
  }
};

const Login = () => {
  const { currentLanguage } = useTranslate();
  const t = translations[currentLanguage];
  const nav = useNavigate();
  
  const loginMutation = useMutation({
    mutationFn: async (loginData: LoginData) => {
      return await userApi.post("/api/token/", {
        phone: loginData.phone,
        password: loginData.password
      })
    },
    onSuccess: async (data) => {
      toast.success(t.loginSuccess);
      const response_data = await data.data;
      userLogin(response_data);
      if(getUser()?.is_staff){
        toast.info(t.adminRedirect);
        nav("/v2/create-lottery");
      }else{
        toast.info(t.userRedirect);
        nav("/");
      }
    },
    onError: (error) => {
      toast.error(t.loginError);
      console.log(error.message);
    }
  });

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData: LoginData = {
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
    };
    loginMutation.mutate(loginData);
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

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center relative p-2">
      {/* Moving background balls */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full shadow-2xl shadow-slate-200"
        variants={ballVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-red-500 rounded-full shadow-2xl shadow-slate-200"
        variants={ballVariants}
        animate="animate"
      />

      <motion.div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 50, scale: .3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.35, delay: 0.15 }}
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-red-500">{t.loginTitle}</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: .3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.35, delay: 0.15 }}
          >
            <label className="block text-sm font-medium">{t.phoneLabel}</label>
            <input
              required
              type="number"
              placeholder={t.phonePlaceholder}
              name="phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: .3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, stiffness: 100, type: "spring", bounce: 0.25, delay: 0.18 }}
          >
            <label className="block text-sm font-medium">{t.passwordLabel}</label>
            <input
              required
              type="password"
              placeholder={t.passwordPlaceholder}
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </motion.div>
          <button 
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? 
              (currentLanguage === 'en' ? 'Logging in...' : 'লগইন হচ্ছে...') : 
              t.loginButton}
          </button>
        </form>

        {/* Link to Register Page */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            {t.newUser}{" "}
            <Link to="/register" className="text-red-500 font-semibold hover:underline">
              {t.createAccount}
            </Link>
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button className="px-2 py-1 bg-gray-200 rounded-lg font-semibold text-sm sm:px-4 sm:py-2 sm:text-base flex items-center space-x-2 hover:bg-gray-300 transition-colors">
            <FaGoogle className="text-blue-500" />
            <span>{t.googleLogin}</span>
          </button>

          <button className="px-2 py-1 bg-gray-200 rounded-lg font-semibold text-sm sm:px-4 sm:py-2 sm:text-base flex items-center space-x-2 hover:bg-gray-300 transition-colors">
            <FaFacebook className="text-blue-600" />
            <span>{t.facebookLogin}</span>
          </button>

          <button className="px-2 py-1 bg-gray-200 rounded-lg font-semibold text-sm sm:px-4 sm:py-2 sm:text-base flex items-center space-x-2 hover:bg-gray-300 transition-colors">
            <FaInstagram className="text-pink-500" />
            <span>{t.instagramLogin}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;