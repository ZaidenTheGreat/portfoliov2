import React from "react"; 
import Link from "next/link";
import Image from "next/image";

// AboutDetails Component
const AboutDetails = () => {
  const skills = [
    { name: "Python", level: "Expert", percentage: 100, color: "bg-blue-500" },
    { name: "HTML/CSS", level: "Intermediate", percentage: 100, color: "bg-red-500" },
    { name: "JavaScript", level: "Intermediate", percentage: 75, color: "bg-yellow-500" },
    { name: "C#", level: "Intermediate", percentage: 75, color: "bg-green-500" },
    { name: "Node.js", level: "Beginner", percentage: 50, color: "bg-teal-500" },
    { name: "Three.js", level: "Beginner", percentage: 50, color: "bg-purple-500" },
  ];

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 lg:gap-y-16 w-full">
        {/* Experience Section */}
        <div className="col-span-full lg:col-span-5 row-span-2 flex flex-col items-start text-left">
          <h2 className="text-xl md:text-2xl w-full capitalize">Experience</h2>
          <div className="font-light text-xs sm:text-sm md:text-base mt-4">
            {/* Summer Intern Experience */}
            <p className="font-semibold">Summer Intern IT Help Desk</p>
            <p className="font-light">May 2024 – August 2024</p>
            <p className="font-light">APIA Insurance, Unpaid Decatur, GA</p>
            <ul className="list-disc list-inside mt-2">
              <li>Assisted with troubleshooting hardware and software issues across company devices.</li>
              <li>Installed antivirus software on company devices to enhance endpoint protection.</li>
              <li>Utilized ticketing systems to track and document technical issues and resolutions.</li>
            </ul>
            {/* Game Developer Experience */}
            <p className="font-semibold mt-6">Game Developer</p>
            <p className="font-light">August 2024 – December 2025</p>
            <p className="font-light">Aspen Studio, Unpaid REMOTE, USA</p>
            <ul className="list-disc list-inside mt-2">
              <li>Contributed to a 65-person team in creating a video game, specializing in the programming team.</li>
              <li>Developed and optimized the combat stacking system and movement mechanics using C#, enhancing gameplay fluidity and responsiveness.</li>
              <li>Collaborated with designers and other programmers to ensure cohesive integration of core game mechanics and alignment with project objectives.</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="col-span-full lg:col-span-7 row-span-1 flex flex-col items-start text-left mt-1">
          <h2 className="text-xl md:text-2xl w-full capitalize">Skills</h2>
          {skills.map((skill) => (
            <div key={skill.name} className="font-light text-xs sm:text-sm md:text-base mt-4 w-full">
              <p className="font-semibold">{skill.name}</p>
              <div className="relative w-full h-6 bg-gray-300 rounded-full overflow-hidden mt-1">
                <div
                  className={`absolute top-0 left-0 h-full ${skill.color} rounded-full flex items-center justify-center`}
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className="text-white font-semibold text-sm">{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons Section */}
        <div className="col-span-full">
          <Image
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn"
            alt="Tech Stack Icons"
            width={1200}
            height={400}
            priority={true}
          />
        </div>

        {/* Education, Organizations, and About Me Section */}
        <div className="col-span-full lg:col-span-12 row-span-1 flex flex-col lg:flex-row gap-8 text-left mt-8">
          {/* Education */}
          <div className="flex-1 mb-8">
            <h2 className="text-xl md:text-2xl w-full capitalize">Education</h2>
            <div className="font-light text-xs sm:text-sm md:text-base mt-4">
              <p className="font-semibold">Georgia State University</p>
              <p className="font-light">2023 - 2027</p>
              <p className="font-semibold mt-1">Bachelor&apos;s Degree in Computer Science</p>
              <p className="font-semibold mt-1">Relevant Coursework</p>
              <p className="font-light">CSC 1301</p>
            </div>
          </div>

          {/* Organizations */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl w-full capitalize">Certifactions</h2>
            <div className="font-light text-xs sm:text-sm md:text-base mt-4">
              <p className="font-semibold">CompTIA Security+ (SY0-701)</p>
              <p className="font-light">May 2025 – May 2028</p>
              <p className="font-light mt-2">
              </p>
            </div>
          </div>

          {/* About Me */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl w-full capitalize">About Me</h2>
            <div className="font-light text-xs sm:text-sm md:text-base mt-4">
              I'm a laid-back yet driven individual who dreams big and puts in the work to back it up. Currently, I'm pursuing a bachelor's degree in computer science at Georgia State University, with my sights set on transferring to my dream school—Georgia Tech. Every credit I earn brings me closer to making that a reality.

As you can see from my background images, I’ve always had a fascination with space—but my favorite kind of space is cyberspace. I’m passionate about cybersecurity and aim to become a professional who protects systems, data, and people from digital threats. I want to use my skills to make a real impact—safeguarding the digital world and helping shape a more secure future.

Outside of tech, I’m a fan of Dragon Ball Z. If you’ve enabled background music, you're probably hearing Tapion’s theme playing right now.

Thanks for stopping by and getting to know me.
I'd appreciate it if you would check out my contact page and shoot me a review of my portfolio. Thanks!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
