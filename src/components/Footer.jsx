import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
 
export default function Footer() {
  return (
    <footer className="flex flex-col items-center px-4 py-10 text-center sm:py-14">
      <p className="font-itim text-gray-600">
        © 2026 React App. All rights reserved.
      </p>
 
      <p className="font-itim text-gray-600">
        Created by 6952D10009 Tanapoom Srirabay.
      </p>
 
      <div className="flex justify-center gap-5 mt-5" aria-hidden="true">
        <FaFacebook className="text-blue-500" />
        <FaGoogle className="text-red-500" />
        <FaXTwitter className="text-black" />
      </div>
    </footer>
  )
}
