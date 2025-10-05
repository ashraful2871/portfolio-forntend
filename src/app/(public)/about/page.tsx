import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-[#C0A276]">About Me</h1>
        <p className=" text-lg">
          Full stack developer passionate about building user-friendly
          interfaces and continuous learning.
        </p>
      </div>

      {/* Career Objective */}
      <section className="border border-[#C0A276] shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-[#C0A276]">
          Career Objective
        </h2>
        <p className="">
          As a full stack developer, I am passionate about creating simple and
          user-friendly interfaces. My goal is to continuously improve my skills
          and challenge myself. I have a strong interest in learning and
          adopting new technologies, and I believe in achieving success through
          teamwork.
        </p>
      </section>
      {/* Experience */}
      <section className="border border-[#C0A276] shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-[#C0A276]">
          Experience
        </h2>
        <div className="space-y-2">
          <h3 className="font-bold ">Junior Web Developer</h3>
          <p className="">SM Technology | Dhaka, Bangladesh</p>
          <p className="">Jun 2025 – Present</p>
          <ul className="list-disc ml-5  mt-2">
            <li>
              Developed and customized responsive web components using HTML,
              CSS, and JavaScript.
            </li>
            <li>
              Participated in regular sprint meetings, contributing to planning,
              feature breakdowns, and timely delivery.
            </li>
          </ul>
        </div>
      </section>
      {/* Skills */}
      <section className="border border-[#C0A276] shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-[#C0A276]">
          Technical Skills
        </h2>
        <ul className="space-y-1 ">
          <li>
            <strong>Proficient:</strong> HTML, CSS, JavaScript, TypeScript,
            React, MongoDB, Mongoose, Express.js, Node.js, Redux
          </li>
          <li>
            <strong>Familiar with:</strong> Git, REST APIs, DaisyUI, Responsive
            Design
          </li>
          <li>
            <strong>Tools:</strong> VS Code, Chrome DevTools
          </li>
        </ul>
      </section>
      {/* Projects */}
      <section className="border border-[#C0A276] shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-3 text-[#C0A276]">Projects</h2>

        {/* Project 1 */}
        <div>
          <h3 className="font-bold ">Agro Mart (Team Project)</h3>
          <p className=" mb-1">
            E-commerce platform connecting farmers directly with consumers,
            featuring AI-powered crop disease detection.
          </p>
          <ul className="list-disc ml-5 ">
            <li>
              Farmer register, product management, category filtering, and
              sorting.
            </li>
            <li>Customers can manage orders, carts, and pay securely.</li>
            <li>
              Admin dashboard with analytics, role management, and reports.
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div>
          <h3 className="font-bold ">Collaborative Study</h3>
          <p className=" mb-1">
            Platform connecting students, tutors, and admins for scheduling and
            resource management.
          </p>
          <ul className="list-disc ml-5 ">
            <li>JWT-based authentication with Google and GitHub login.</li>
            <li>Role-based access control and session management.</li>
            <li>Admin moderation for study materials and session approvals.</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div>
          <h3 className="font-bold ">Car Rent</h3>
          <p className=" mb-1">
            User-friendly car rental platform with secure booking and real-time
            updates.
          </p>
          <ul className="list-disc ml-5 ">
            <li>Manage cars and bookings; users see only their own data.</li>
            <li>Real-time booking, cancellation, and updates.</li>
          </ul>
        </div>
      </section>
      {/* Education */}
      <section className="border border-[#C0A276] shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-[#C0A276]">
          Education
        </h2>
        <p className=" font-semibold">Bachelor of Arts in Sociology</p>
        <p className="">Dhaka College | Session: 2021-2022</p>
      </section>
    </div>
  );
};

export default AboutPage;
