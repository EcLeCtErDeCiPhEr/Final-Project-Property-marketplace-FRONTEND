import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch} from "react-icons/fa"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[rgb(19,27,38)]">
      
      <div className="flex justify-between items-center  mx-auto p-4 px-10">
        
        <Link to="/">
          <span className="font-bold text-lg md:text-4xl text-[#ffffff]">La</span>
          <span className="font-bold text-lg md:text-2xl text-[#3BAE9E]"> Renta</span>
        </Link>
 

         <form className="p-3 rounded-lg bg-slate-50 flex items-center"  >
          <input type="text" placeholder="Search..."className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className="text-slate-600"/>
         </form> 



        {/* Navigation Menu for Large Screens */}
        <ul className="hidden md:flex gap-10 lg:gap-15 text-white px-10">
          <Link to="/">
            <li className="hover:text-[#3BAE9E]">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-[#3BAE9E]">About</li>
          </Link>
          
          <Link to="/selling">
            <li className="hover:text-[#3BAE9E]">Selling</li>
          </Link>
          <Link to="/renting">
            <li className="hover:text-[#3BAE9E]">Renting</li>
          </Link>
          <Link to="/contact-us">
            <li className="hover:text-[#3BAE9E]">Contact Us</li>
          </Link>
          <Link to="/sign-in">
           <button className="bg-emerald-800 p-2 rounded-lg"> <li>Sign In</li></button>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-xl font-bold text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[rgb(19,27,38)]">
          <ul className="flex flex-col gap-4 p-4 text-white">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-[#3BAE9E]">Home</li>
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-[#3BAE9E]">About</li>
            </Link>
            
            <Link to="/selling" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-[#3BAE9E]">Selling</li>
            </Link>
            <Link to="/renting" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-[#3BAE9E]">Renting</li>
            </Link>
            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-[#3BAE9E]">Contact Us</li>
            </Link>
            <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-teal-800 p-2 rounded-lg"> <li>Sign In</li></button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
