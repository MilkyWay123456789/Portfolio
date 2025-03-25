import { Phone, Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
      <footer id="contact" className="bg-darkGray text-softGray py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Số điện thoại */}
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6 text-white" />
          <span className="text-lg font-semibold">Phone:</span>
          <a 
            href="tel:+84582564529" 
            className="hover:text-neonBlue transition duration-300"
          >
            (+84) 582564529
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6 text-white" />
          <span className="text-lg font-semibold">Email:</span>
          <a 
            href="mailto:tienhuu28122001@gmail.com" 
            className="hover:text-neonBlue transition duration-300"
          >
            tienhuu28122001@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-2">
          <Github className="w-6 h-6 text-white" />
          <span className="text-lg font-semibold">GitHub:</span>
          <a 
            href="https://github.com/MilkyWay123456789/" 
            className="hover:text-neonBlue transition duration-300"
            target="_blank"
          >
            https://github.com/MilkyWay123456789/
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-2">
          <Linkedin className="w-6 h-6 text-white" />
          <span className="text-lg font-semibold">LinkedIn:</span>
          <a 
            href="https://www.linkedin.com/in/ph%E1%BA%A1m-hu%E1%BB%B3nh-h%E1%BB%AFu-ti%E1%BA%BFn-431421291/" 
            className="hover:text-neonBlue transition duration-300"
            target="_blank"
          >
            https://www.linkedin.com/in/pham-huynh-huu-tien/
          </a>
        </div>

      </div>
    </footer>
    );
}
