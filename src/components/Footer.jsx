function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Left Div */}
          <div className="mb-6">
            <div className="flex flex-col items-start">
              {/* Logo */}
              <div className="mb-4 text-2xl font-bold">YourLogo</div>
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="hover:text-blue-500">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-blue-700">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Right Div */}
          <div className="flex space-x-16">
            {/* First Column */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Our Team</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Partners</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Second Column */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Web Design</a></li>
                <li><a href="#" className="hover:underline">Development</a></li>
                <li><a href="#" className="hover:underline">Marketing</a></li>
                <li><a href="#" className="hover:underline">SEO</a></li>
                <li><a href="#" className="hover:underline">Consulting</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  