"use client";
import { motion } from "framer-motion";
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
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-5xl font-bold text-neonBlue"
        >
          Phạm Huỳnh <span className="block">Hữu Tiến</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-lg text-gray-300 mt-3"
        >
          Backend Developer with over 2 years of experience
        </motion.p>
      </div>

      {/* About */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        transition={{ duration: 0.8 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.2 }}
        className="text-white p-8"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl font-bold"
          id = "about"
        >
          About Me
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.3 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="mt-4"
        >
          I am a backend developer with over two years of experience in software development, specializing in building and optimizing web applications. With strong communication skills and a quick learning ability, I am always eager to adapt to new technologies and improve my expertise.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl mt-6"
        >
          Skills & Expertise
        </motion.h2>

        <motion.ul 
          initial={{ opacity: 0, y: 10 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="mt-2 list-disc pl-6 list-none"
        >
          <li>🔹 Backend Development: I specialize in designing and developing backend systems for web applications, ensuring high performance, security, and scalability.</li>
          <li>🔹 RESTful APIs: Experienced in building and integrating RESTful APIs to facilitate seamless communication between client and server applications.</li>
          <li>🔹 Programming Languages & Technologies: 
            <ul className="list-[circle] pl-6 mt-1 list-none">
              <li>🔸 Strong experience with ASP.NET Core, Swagger, JSON, and API development.</li>
              <li>🔸 Extensive knowledge of Oracle Database, including query optimization and database management.</li>
            </ul>
          </li>
          <li>🔹 Version Control & Collaboration: Experience with Git, GitHub, and Agile development methodologies.</li>
          <li>🔹 Continuous Learning & Adaptability: Always eager to explore and adopt new technologies to enhance productivity and software quality.</li>
        </motion.ul>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.8, delay: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl mt-6"
        >
          Work Experience
        </motion.h2>

        <motion.ul 
          initial={{ opacity: 0, y: 10 }} 
          transition={{ duration: 0.8, delay: 0.8 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="mt-2 list-disc pl-6"
        >
          <li>🔹 Backend Developer at 315 Medical (2024 - Present)</li>
          <li>🔹 Winform Developer at FUJINET SYSTEM (2023 - 2024)</li>
        </motion.ul>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.8, delay: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl mt-6"
        >
          Skills
        </motion.h2>

        <motion.ul 
          initial={{ opacity: 0, y: 10 }} 
          transition={{ duration: 0.8, delay: 1 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="mt-2 list-disc pl-6"
        >
          <li>✔ ASP.NET Core, Entity Framework</li>
          <li>✔ Oracle, SQL Server, MySQL</li>
          <li>✔ RESTful API, JWT, SwaggerUI</li>
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

