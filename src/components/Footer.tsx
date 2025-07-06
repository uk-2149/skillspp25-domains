import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-600 py-4 px-2">
      <div className="container mx-auto px-2 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo & Title */}
        <div className="flex items-start justify-start gap-3 mb-4 md:mb-0 flex-1">
          <div className="text-white text-sm leading-relaxed flex flex-col justify-left align-left">
            <img
              src="https://skills.zairza.co.in/assets/zairzalogo-B7icHQ_O.png"
              alt="Logo"
              className="h-8 w-8 mt-1"
            />
            <p className="mb-2 text-left">
              An event organised by Zairza for the welfare of budding talented
              software engineers, hardware engineers and designers
            </p>
            <div>
              <p className="font-medium mb-1 text-left">
                For Queries Reach Out To -
                <br className="block md:hidden" />
                <b>
                  Shashank: 7377633785 | Arbin: 8298865794 | Bivraj: 7751873289
                </b>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.youtube.com/@zairzarobosofdescluboutrb1825"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="w-7 h-7 text-white hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/zairza.outr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-7 h-7 text-white hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://in.linkedin.com/company/zairza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-7 h-7 text-white hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
