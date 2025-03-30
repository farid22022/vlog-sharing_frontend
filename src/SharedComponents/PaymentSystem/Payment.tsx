
import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Webcam from "react-webcam";

const Payment = () => {
  const [nid, setNid] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentStep, setPaymentStep] = useState(false);
  // const [frontNidPic, setFrontNidPic] = useState(null);
  // const [backNidPic, setBackNidPic] = useState(null);
  const [frontNidPic, setFrontNidPic] = useState<string | null>(null);
  const [backNidPic, setBackNidPic] = useState<string | null>(null);

  const [uploadedFrontNidUrl, setUploadedFrontNidUrl] = useState("");
  const [uploadedBackNidUrl, setUploadedBackNidUrl] = useState("");
  const webcamRef = useRef<Webcam>(null);

  const IMAGE_BB_API_KEY = "757ec57b5f8a618a06dabaafb680a399"; // Replace with your imageBB API key

  const uploadImageToImageBB = async (imageData: string, setImageUrl: (url: string) => void) => {
    const formData = new FormData();
    formData.append("image", imageData.split(",")[1]);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMAGE_BB_API_KEY}`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setImageUrl(result.data.url);
    } catch (error) {
      alert("Error uploading image. Please try again.");
      console.error(error);
    }
  };



  const handlePaymentStep = () => {
    if (nid && frontNidPic && backNidPic && phone) {
      setPaymentStep(true);
    } else {
      alert("Please fill in all the fields before proceeding.");
    }
  };
  const captureFrontNid = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) { // Ensure imageSrc is not null
        setFrontNidPic(imageSrc);
        uploadImageToImageBB(imageSrc, setUploadedFrontNidUrl);
      }
    }
  };
  
  const captureBackNid = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) { // Ensure imageSrc is not null
        setBackNidPic(imageSrc);
        uploadImageToImageBB(imageSrc, setUploadedBackNidUrl);
      }
    }
  };
  
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5 },
    }),
  };

  return (
    <div className="flex justify-center items-start bg-yellow-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-2">
        {!paymentStep ? (
          <>
            <motion.h1
              className="text-2xl font-bold text-center mb-6 text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Buy Your Ticket
            </motion.h1>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">NID</label>
                <input
                  type="text"
                  value={nid}
                  onChange={(e) => setNid(e.target.value)}
                  placeholder="Enter your NID"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Capture NID Pictures
                </label>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="w-full mt-1 rounded-lg"
                />
                
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={captureFrontNid}
                    className="w-1/2 bg-blue-500 text-white py-2 rounded-lg"
                  >
                    Capture Front Side
                  </button>
                  <button
                    onClick={captureBackNid}
                    className="w-1/2 bg-green-500 text-white py-2 rounded-lg"
                  >
                    Capture Back Side
                  </button>
                </div>
              </div>

              {(uploadedFrontNidUrl || uploadedBackNidUrl) && (
                <h3>Your NID Card</h3>
              )}
              <div className="flex space-x-4 mt-4">
                {uploadedFrontNidUrl && (
                  <img
                    src={uploadedFrontNidUrl}
                    alt="Front NID"
                    className="w-1/2 rounded-lg"
                  />
                  

                )}
                {uploadedBackNidUrl && (
                  <img
                    src={uploadedBackNidUrl}
                    alt="Back NID"
                    className="w-1/2 rounded-lg"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <motion.button
                onClick={handlePaymentStep}
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Proceed to Payment
              </motion.button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-2xl font-bold text-center mb-6 text-red-500">
                Choose Payment Method
              </h1>
              <motion.div className="space-y-[5%]" initial="hidden" animate="visible">
                {["bKash", "Nogod", "Rocket", "Stripe"].map((method, index) => (
                  <motion.div
                    custom={index}
                    variants={buttonVariants}
                    key={method}
                    className="w-full"
                  >
                    <Link to={`/payment/${method.toLowerCase()}`}>
                      <button
                        className={`w-full py-2 rounded-lg font-semibold text-white ${
                          method === "bKash"
                            ? "bg-blue-500"
                            : method === "Nogod"
                            ? "bg-green-500"
                            : method === "Rocket"
                            ? "bg-yellow-500"
                            : "bg-gray-800"
                        }`}
                      >
                        Pay with {method}
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Payment;
