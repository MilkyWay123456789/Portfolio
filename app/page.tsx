"use client";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLaptopCode, FaClipboardList } from "react-icons/fa";
const projects = [
  {
    title: "API Quản Lý Bệnh Nhân",
    description: "API hỗ trợ đăng ký, nhập viện, xuất viện bệnh nhân.",
    tech: "ASP.NET Core, Oracle, JWT, Swagger",
  },
  {
    title: "Ứng Dụng Quản Lý Kho",
    description: "Winform App hỗ trợ nhập xuất kho, kiểm kê hàng hóa.",
    tech: "C#, VB.NET, SQL Server, Export PDF/Excel",
  },
  {
    title: "API Quản Lý Voucher & Thẻ Thành Viên",
    description: "API giúp tạo & quản lý voucher giảm giá, nâng cấp thẻ thành viên.",
    tech: "ASP.NET Core, Entity Framework, RESTful API",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col flex-1 pl-16">
      <div className="flex flex-col justify-center min-h-screen pl-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg"
        >
          Phạm Huỳnh <span className="block text-white">Hữu Tiến</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg text-gray-200 mt-3 px-4 py-2 border-l-4 border-blue-400 bg-gray-800/50 rounded-md shadow-md"
        >
          🚀 Backend Developer with over 2 years of experience
        </motion.p>
      </div>

      {/* About Me */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        transition={{ duration: 0.8 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.2 }}
        className="text-white p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-700"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl font-extrabold text-blue-400 border-b-4 border-blue-500 pb-2 mb-4"
          id="about"
        >
          About Me
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.3 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="mt-4 text-lg text-gray-300 leading-relaxed"
        >
          I am a backend developer with over two years of experience in software development, specializing in building and optimizing web applications. With strong communication skills and a quick learning ability, I am always eager to adapt to new technologies and improve my expertise.
        </motion.p>
      
        {/* Skills & Expertise */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl font-bold text-green-400 mt-8"
        >
          Skills & Expertise
        </motion.h2>
      
        <motion.ul 
          initial={{ opacity: 0, y: 10 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="mt-4 space-y-3 text-gray-300"
        >
          <li className="flex items-center gap-2"><FaLaptopCode className="text-blue-400" /> Backend Development: High-performance and scalable systems.</li>
          <li className="flex items-center gap-2"><FaClipboardList className="text-yellow-400" /> RESTful APIs: Secure and efficient API integration.</li>
          <li className="flex items-center gap-2"><FaCode className="text-red-400" /> ASP.NET Core, Swagger, JSON, and API development.</li>
          <li className="flex items-center gap-2"><FaDatabase className="text-purple-400" /> Oracle Database: Query optimization & management.</li>
        </motion.ul>
        {/* Work Experience */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.8, delay: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl font-bold text-yellow-400 mt-8"
        >
          Work Experience
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          transition={{ duration: 0.8, delay: 0.8 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          className="mt-4 space-y-6"
        >
          <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold text-blue-300">Backend Developer - 315 Medical</h3>
            <p className="text-gray-400">📌 (04/2024 – Present)</p>
            <ul className="mt-2 text-gray-300 list-disc pl-6">
              <li>Developed user authentication & authorization systems.</li>
              <li>Created and managed promotional vouchers.</li>
              <li>Designed a membership card system for tracking benefits.</li>
            </ul>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold text-green-300">Winform Developer - FUJINET SYSTEM.,JSC</h3>
            <p className="text-gray-400">📌 (02/2023 – 04/2024)</p>
            <ul className="mt-2 text-gray-300 list-disc pl-6">
              <li>Designed WinForm interfaces for warehouse management.</li>
              <li>Developed inventory tracking & stock control features.</li>
              <li>Implemented report generation & export to PDF/Excel.</li>
            </ul>
          </div>
        </motion.div>

        {/* Key Skills */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.8, delay: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl font-bold text-red-400 mt-8"
        >
          Key Skills
        </motion.h2>
        
        <motion.ul 
          initial={{ opacity: 0, y: 10 }} 
          transition={{ duration: 0.8, delay: 1 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="mt-4 grid grid-cols-2 gap-4 text-gray-300"
        >
          <li className="p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700">✔ ASP.NET Core, Entity Framework, LINQ</li>
          <li className="p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700">✔ Oracle, SQL Server, MySQL</li>
          <li className="p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700">✔ RESTful API, JWT, SwaggerUI</li>
          <li className="p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700">✔ C#, VB.NET</li>
        </motion.ul>
      </motion.div>

      {/* Projects */}
      <div className="text-white p-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <div className="mt-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 rounded-md mb-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              <p className="text-blue-400 mt-1">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

