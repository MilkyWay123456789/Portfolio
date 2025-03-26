"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaProjectDiagram, FaCode, FaShieldAlt, FaClipboardList, FaUsers, FaServer ,FaBuilding , FaTasks } from "react-icons/fa";
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
          className="text-lg text-gray-200 mt-3 inline-flex w-fit px-2 py-1 border-2 border-blue-400 rounded-md shadow-md bg-gray-800/50"
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
          I am a backend developer with over two years of experience in software development, specializing in building and optimizing web applications. With strong communication skills and a fast learning ability, I thrive in dynamic environments and continuously seek to expand my technical expertise by adapting to new technologies.
          My career goal is to become a highly skilled backend architect, focusing on designing scalable, high-performance systems. I am eager to contribute to innovative projects, enhance my expertise in cloud computing and distributed systems, and take on leadership roles in software development teams.
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
          <li className="p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700">✔ ASP.NET Core, Entity Framework, LINQ, T-SQL</li>
          <li className="p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700">✔ Oracle, SQL Server, MySQL</li>
          <li className="p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700">✔ RESTful API, JWT, SwaggerUI</li>
          <li className="p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700">✔ C#, VB.NET</li>
        </motion.ul>
      </motion.div>
      <motion.h1 
              initial={{ opacity: 0, x: -20 }} 
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.2 }}
              className="text-4xl font-extrabold pb-2 mb-4"
            >
      </motion.h1>
      {/* Projects */}
          <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-10 rounded-xl shadow-lg">
              <motion.h1 
              initial={{ opacity: 0, x: -20 }} 
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.2 }}
              className="text-4xl font-extrabold text-blue-400 border-b-4 border-blue-500 pb-2 mb-4"
              id="projects"
            >
              Projects
            </motion.h1>

            {/* Tiêu đề project 315HealthCare*/}
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 flex items-center gap-3"
                >
                  <FaLaptopCode className="text-6xl text-blue-500" />
                  Back End Developer
                </motion.h2>

                {/* Thông tin chi tiết */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg text-gray-300 mt-4 border-l-4 border-blue-500 pl-4 bg-gray-800 p-3 rounded-md shadow-md"
                >
                  <FaUsers className="text-yellow-400 text-xl" />
                  Nhi Dong 315 | 2024 - Present | Ho Chi Minh City, Vietnam
                </motion.p>

                {/* Mô tả hệ thống */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-4 text-gray-400 text-lg leading-relaxed"
                > 
                  The 315 Healthcare System provides medical services across various specialties, including Pediatrics, Obstetrics, Geriatrics, and Ophthalmology.
                </motion.p>

                {/* Tên dự án */}
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-2xl font-bold text-yellow-400 mt-6"
                > <FaServer className="text-green-400" />
                  Project: 315Healthcare
                </motion.h3>

                <p className="text-gray-300 text-md mb-4">
                  <span className="font-semibold">Team Size:</span> 13
                </p>

                {/* Danh sách tính năng */}
                {[
                  {
                    title: "System Architecture & Development",
                    icon: <FaProjectDiagram className="text-yellow-400" />,
                    items: [
                      "Designed and developed the entire system architecture for healthcare management, warehouse operations, and HRM.",
                      "Implemented a scalable and modular architecture for future expansion."
                    ]
                  },
                  {
                    title: "Database Design & Optimization",
                    icon: <FaDatabase className="text-red-400" />,
                    items: [
                      "Structured and optimized Oracle databases, ensuring efficient data storage and retrieval.",
                      "Developed complex PL/SQL stored procedures, functions, and triggers.",
                      "Improved query performance and indexing strategies."
                    ]
                  },
                  {
                    title: "Feature Development",
                    icon: <FaCode className="text-green-400" />,
                    items: [
                      "Built patient registration and appointment scheduling systems with real-time status tracking.",
                      "Developed medical examination and diagnosis modules.",
                      "Designed inventory and warehouse management systems.",
                      "Implemented payroll processing and salary calculation.",
                      "Created billing and invoicing functionalities with integrated insurance."
                    ]
                  },
                  {
                    title: "Security & Compliance",
                    icon: <FaShieldAlt className="text-purple-400" />,
                    items: [
                      "Implemented authentication and authorization mechanisms using JWT and RBAC.",
                      "Enforced data encryption to protect sensitive patient records.",
                      "Designed audit logging to track system usage."
                    ]
                  }
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="mt-6"
                  >
                    <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                      {section.icon} {section.title}:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-md">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                {/* Công nghệ sử dụng */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-xl font-bold text-blue-400 mt-6"
                >
                  Technologies Used:
                </motion.h3>

                {[
                  {
                    title: "Programming Languages & Frameworks",
                    content: "C#, .NET Framework/.NET Core – Developed backend APIs and business logic.",
                    icon: <FaLaptopCode className="text-blue-400 text-xl" />
                  },
                  {
                    title: "Database & Data Management",
                    content: "Oracle Database, PL/SQL – Designed schema, stored procedures, triggers, and optimized queries.",
                    icon: <FaDatabase className="text-blue-400 text-xl" />
                  },
                  {
                    title: "API & Integration",
                    content: "RESTful APIs, JSON – Developed secure and scalable API endpoints.",
                    icon: <FaCode className="text-blue-400 text-xl" />,
                  },
                  {
                    title: "Security & Performance",
                    content: "JWT Authentication, Role-Based Access Control (RBAC), Data Encryption.",
                    icon: <FaShieldAlt className="text-blue-400 text-xl" />
                  },
                  {
                    title: "Real-time Communication",
                    content: "WebSocket – Implemented real-time data synchronization and event-driven updates.",
                    icon: <FaServer className="text-blue-400 text-xl" />
                  }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    className="mt-4 flex items-center gap-2"
                  >
                    {tech.icon}
                    <div>
                      <h4 className="text-md font-semibold text-gray-200">{tech.title}:</h4>
                      <p className="text-gray-300 text-sm">{tech.content}</p>
                    </div>
                  </motion.div>
                ))}

              {/* Khoảng cách giữa 2 project*/}
              <motion.h1 
              initial={{ opacity: 0, x: -20 }} 
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.2 }}
              className="text-4xl font-extrabold text-blue-400 border-b-4 border-blue-500 pb-2 mb-4"
            >
            </motion.h1>

            {/* Tiêu đề project RSE */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center gap-3"
            >
              <FaLaptopCode className="text-5xl text-neonBlue" />
              Developer
            </motion.h2>

            {/* Thông tin công ty */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 mt-3 border-l-4 border-blue-500 pl-4 bg-white/5 p-2 rounded-md shadow-md backdrop-blur-md inline-block"
            >
              <FaBuilding className="inline-block mr-2 text-blue-500" />
              Fujinet JSC | 02/2023 - 04/2025 | Ho Chi Minh City, Vietnam
            </motion.p>

            {/* Mô tả dự án */}
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl font-bold text-yellow-400 mt-6"
            >
              <FaProjectDiagram className="inline-block mr-2 text-yellow-400" />
              Project: RSE
            </motion.h3>

            <p className="text-gray-300 text-sm mb-3">
              Team Size: <span className="font-semibold">8</span>
            </p>

            {/* Danh sách công việc */}
            <div className="space-y-6">
              {[ 
                {
                  title: "Designed and Developed WinForm Interfaces",
                  tasks: [
                    "Created intuitive user interfaces for warehouse management software.",
                    "Implemented key features such as inventory entry, outbound processing, and reporting.",
                  ],
                },
                {
                  title: "Coding, Testing, and Reviewing",
                  tasks: [
                    "Developed core warehouse management features, ensuring system reliability.",
                    "Conducted thorough code reviews to optimize performance.",
                    "Performed UAT and created test cases for functionality validation.",
                  ],
                },
                {
                  title: "Report Design and Export",
                  tasks: [
                    "Designed visually intuitive report templates.",
                    "Implemented PDF & Excel export functionality.",
                    "Integrated direct printing support for warehouse operations.",
                  ],
                },
              ].map(({ title, tasks }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <h3 className="text-lg font-bold text-blue-300">
                    <FaTasks className="inline-block mr-2" />
                    {title}:
                  </h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    {tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Công nghệ sử dụng */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-lg font-bold text-blue-300">
                  Technologies Used:
                </h3>

                <div className="mt-2 space-y-2">
                  <div>
                    <h4 className="text-md font-semibold text-gray-200">
                      <FaCode className="inline-block mr-2 text-gray-200" />
                      Programming Languages & Frameworks:
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Visual Basic, .NET Framework/.NET Core – Developed WinForm and business logic.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-200">
                      <FaDatabase className="inline-block mr-2 text-gray-200" />
                      Database & Data Management:
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Oracle Database, PL/SQL – Designed schema, stored procedures, and optimized queries.
                    </p>
                  </div>
                </div>
              </motion.div>
              </div>
          </div>
      </div>
  );
}

