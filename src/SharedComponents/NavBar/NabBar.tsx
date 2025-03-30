

// import { useState } from "react";
// import { motion } from "framer-motion";
// import logo from "./../../../public/Logo/lottery.svg";
// import { Link } from "react-router";
// import { isUserAuthenticated } from "../../utility/auth";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [language, setLanguage] = useState("en"); // Default language is English
  
//   // Function to toggle language
//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === "en" ? "bn" : "en"));
//   };

//   return (
//     <div
//       className={`navbar font-bold px-4 opacity-75 fixed top-0 w-full z-50 transition-all ease-in-out duration-300 bg-slate-300 h-12 lg:h-20`}
//     >
//       <div className="items-center justify-between grid grid-cols-2 m-4 w-full">
//         {/* Logo Section */}
//         <div className="flex items-center lg:hidden" >

//           <img
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="cursor-pointer w-10"
//             src={logo}
//             alt="Lottery Logo"
//           />

//         </div>

//         <div className="hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 text-xl font-bold flex items-center">
//             <li>
//               <img
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className={`cursor-pointer`}
//                 src={logo}
//                 alt="Lottery Logo"
//               />
//             </li>
//             <li>
//               <a className=" text-[90%]" href="/draws">
//                 {language === "en" ? "Draws" : "ড্র"}
//               </a>
//             </li>
//             <li>
//               <a className=" text-[90%]" href="/faqs">
//                 {language === "en" ? "FAQs" : "প্রশ্নোত্তর"}
//               </a>
//             </li>
//             <li>
//               <a
//                 className=" text-[90%]"
//                 href="/play-responsibly"
//               >
//                 {language === "en" ? "Play Responsibly" : "দায়িত্বের সাথে খেলুন"}
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className=" navbar-end sm:text-end sm:ml-[55%] text-sm lg:ml-auto hidden lg:flex justify-end">
//           <ul className="menu menu-horizontal grid grid-cols-4 items-center sm:space-x-3 lg:gap-2">
//             {/* Language Toggle Button */}
//             <li>
//               <label className="flex items-center cursor-pointer">
//                 <span className="mr-2 text-sm">
//                   {language === "en" ? "EN" : "BN"}
//                 </span>
//                 <input
//                   type="checkbox"
//                   className="toggle toggle-sm"
//                   checked={language === "bn"} // Toggle checked if language is Bengali
//                   onChange={toggleLanguage} // Toggle language on change
//                 />
//               </label>
//             </li>
//             {
//               isUserAuthenticated() ? (
//                 <>
//                   <li className="md:mr-4">
//                     <Link to="/profile">Profile</Link>
//                   </li>
//                   <li>
//                     <Link className="text-nowrap" to="/my-lotteries">My Lotteries</Link>
//                   </li>
//                 </>

//               ) : (
//                 <>
//                   <li className="md:mr-4">
//                     <a className="hover:text-[#4a00ff] text-[90%] sm:text-xs md:text-sm sm:pl-2" href="/login">
//                       {language === "en" ? "Login" : "লগইন"}
//                     </a>
//                   </li>
//                   <Link to='/register'>
//                     <li className="md:mr-4">
//                       <a className="hover:text-[#4a00ff] text-[90%] sm:text-xs md:text-sm sm:pl-2" >
//                         {language === "en" ? "Register" : "নিবন্ধন"}
//                       </a>
//                     </li>
//                   </Link>
//                 </>
//               )
//             }
//           </ul>
//         </div>
//       </div>

//       {/* Dropdown Menu for Small Screens */}
//       {menuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -25 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.3 }}
//           className="lg:hidden absolute top-[100%] left-0 m-4 z-10 rounded-xl shadow-xl shadow-black"
//           style={{
//             background: "linear-gradient(135deg, #f8f9fa, #e9ecef)", // Gradient background
//             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
//           }}
//         >
//           <ul className="menu flex flex-col px-4 py-2 text-black">
//             <li>
//               <a className="hover:text-[#4a00ff]" href="/play">
//                 {language === "en" ? "Play" : "খেলা"}
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-[#4a00ff]" href="/draws">
//                 {language === "en" ? "Draws" : "ড্র"}
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-[#4a00ff]" href="/faqs">
//                 {language === "en" ? "FAQs" : "প্রশ্নোত্তর"}
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-[#4a00ff]" href="/play-responsibly">
//                 {language === "en" ? "Play Responsibly" : "দায়িত্বের সাথে খেলুন"}
//               </a>
//             </li>
//           </ul>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "./../../../public/Logo/lottery.svg";
import { Link} from "react-router";
import { isUserAuthenticated } from "../../utility/auth";
import { useTranslate } from "../../Context/ContextProvider"; // Update with your actual path

// Translation dictionary
const translations = {
  en: {
    draws: "Draws",
    faqs: "FAQs",
    playResponsibly: "Play Responsibly",
    login: "Login",
    register: "Register",
    profile: "Profile",
    myLotteries: "My Lotteries",
    play: "Play",
    PrivacyNotice: "Privacy Notice",
    bnText: "বাংলা",
    enText: "EN",
  },
  bn: {
    draws: "ড্র",
    faqs: "প্রশ্নোত্তর",
    playResponsibly: "দায়িত্বের সাথে খেলুন",
    login: "লগইন",
    register: "নিবন্ধন",
    profile: "প্রোফাইল",
    myLotteries: "আমার লটারি",
    play: "খেলা",
    PrivacyNotice: "গোপনীয়তা বিজ্ঞপ্তি",
    bnText: "BN",
    enText: "ইংরেজি",
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentLanguage, toggleLanguage } = useTranslate();
  const t = translations[currentLanguage];
  // const navigate = useNavigate()

  return (
    <div className="navbar font-bold px-4 opacity-75 fixed top-0 w-full z-50 transition-all ease-in-out duration-300 bg-slate-300 h-12 lg:h-20">
      <div className="items-center justify-between grid grid-cols-2 m-4 w-full">
        {/* Logo Section */}
        <div className="flex items-center lg:hidden">
          <img
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer w-10"
            src={logo}
            alt="Lottery Logo"
          />
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-bold flex items-center">
            <li>
              <img
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer"
                src={logo}
                alt="Lottery Logo"
              />
            </li>
            <li>
              <Link className="text-[90%]" to="/draws">
                {t.draws}
              </Link>
            </li>
            <li>
              <Link className="text-[90%]" to="/faq">
                {t.faqs}
              </Link>
            </li>
            <li>
              <Link className="text-[90%]" to="/play-responsibly">
                {t.playResponsibly}
              </Link>
            </li>
            <li>
              <Link className="text-[90%]" to="/notice">
                {t.PrivacyNotice}
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end sm:text-end sm:ml-[55%] text-sm lg:ml-auto hidden lg:flex justify-end">
          <ul className="menu menu-horizontal grid grid-cols-4 items-center sm:space-x-3 lg:gap-2">
            {/* Language Toggle Button */}
            <li>
              <label className="flex items-center cursor-pointer">
                <span className="mr-2 text-sm">
                  {currentLanguage === "en" ? t.enText : t.bnText}
                </span>
                <input
                  type="checkbox"
                  className="toggle toggle-sm"
                  checked={currentLanguage === "bn"}
                  onChange={toggleLanguage}
                />
              </label>
            </li>
            {isUserAuthenticated() ? (
              <>
                <li className="md:mr-4">
                  <Link to="/profile">{t.profile}</Link>
                </li>
                <li>
                  <Link className="text-nowrap" to="/my-lotteries">
                    {t.myLotteries}
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="md:mr-4">
                  <Link className="hover:text-[#4a00ff] text-[90%] sm:text-xs md:text-sm sm:pl-2" to="/login">
                    {t.login}
                  </Link>
                </li>
                <li className="md:mr-4">
                  <Link className="hover:text-[#4a00ff] text-[90%] sm:text-xs md:text-sm sm:pl-2" to="/register">
                    {t.register}
                  </Link>
                </li>
                <li className="md:mr-4">
                  <Link className="hover:text-[#4a00ff] text-[90%] sm:text-xs md:text-sm sm:pl-2" to="/notice">
                    {t.PrivacyNotice}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden absolute top-[100%] left-0 m-4 z-10 rounded-xl shadow-xl shadow-black"
          style={{
            background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ul className="menu flex flex-col px-4 py-2 text-black">
            <li>
              <Link className="hover:text-[#4a00ff]" to="/play">
                {t.play}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#4a00ff]" to="/draws">
                {t.draws}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#4a00ff]" to="/faq">
                {t.faqs}
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#4a00ff]" to="/play-responsibly">
                {t.playResponsibly}
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;