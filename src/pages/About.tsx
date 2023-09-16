import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
          About Me
        </h2>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center mb-9">
          <img
            className="text-center rounded-full w-64 h-64 md:w-80 md:h-80  object-cover border-4 border-white shadow-lg"
            //src="/images/portrait.png" // local
            src="images/portrait.png" //github pages
            alt="Profile Picture"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center">
          <div className=" md:pr-10 mb-6">
            <p className="text-gray-700 leading-relaxed text-xl md:text-2xl text-center">
              Hello! I'm{" "}
              <span className="text-indigo-600 font-semibold">
                Gowdilya Jeyakumar
              </span>
              , a passionate full-stack developer with extensive experience in
              C#, .NetCore, React, and Angular. Graduated from University of
              Toronto, with a Bachelor of Science in Computer Science and
              Mathematics. Over the course of
              <span className="font-semibold"> 7</span> years of full-time work
              experience, I've dedicated myself to building top-notch,
              user-friendly applications with a strong focus on code quality and
              exceptional user experiences.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3 text-xl md:text-2xl text-center">
              My journey in software development began with backend work using
              ASP.NET, working on sophisticated dashcam-related web applications
              for Verieye Technologies and Lytx Inc from 2016 to 2018.
              Progressing forward, I transitioned into full-stack development,
              employing React and .NetCore to build robust back office
              applications for managing call center agents at Bell Canada from
              2018 to 2021. Became a Front-End expert from my time at Rangle.IO
              where I worked as a consultant on projects for various Companies
              from 2021 - 2023 such as RBC, GreenBridge, and SurveyMonkey.
            </p>
            <h3 className="text-2xl md:text-3xl mt-6 font-semibold text-center text-gray-800 mb-6">
              My Expertise
            </h3>
            <p className="text-gray-700 leading-relaxed  text-xl md:text-2xl text-center">
              Throughout my career, I have worked on various projects leveraging
              React and its ecosystem. I have a deep understanding of React's
              core concepts, state management, and component-driven development.
              Experienced with Responsive Design, I create applications to
              design specifications based on tools like Figma. I am proficient
              in JavaScript, HTML, CSS, and have experience with modern tools
              and libraries such as ReactQuery, Redux, TypeScript, TailWind css,
              and StyledComponents.
            </p>
            <h3 className="text-2xl md:text-3xl mt-6 font-semibold text-center text-gray-800 mb-6">
              My Approach
            </h3>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              Guided by robust object-oriented programming (OOP) fundamentals
              and software design patterns, while adhering to SOLID principles,
              I take pride in developing code that is clean, scalable, and
              maintainable. Modern development practices, including version
              control with Git, isolated UI development with Storybook, and unit
              testing with Jest, are integral to my workflow.
            </p>
            <h3 className="text-2xl md:text-3xl mt-6 font-semibold text-center text-gray-800 mb-6">
              Collaboration and Beyond
            </h3>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              I thrive in a collaborative environment, enjoying the creative
              process of brainstorming and problem-solving within
              cross-functional teams. When I'm not coding, I love pursuing side
              projects, experimenting with new frameworks, and enjoying outdoor
              activities.
            </p>
            <h3 className="text-2xl md:text-3xl mt-6 font-semibold text-center text-gray-800 mb-6">
              Let's Connect!
            </h3>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              Currently, I'm actively seeking new opportunities to further
              enhance my skills and contribute to exciting projects. Feel free
              to check out my:{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                to="/projects"
              >
                Side Projects{" "}
              </Link>
              or my projects on{" "}
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/Gowdilya"
              >
                GitHub
              </a>{" "}
              for a glimpse into my work. If you'd like to collaborate or
              discuss potential opportunities, please don't hesitate to get in
              touch. I would be thrilled to connect and explore exciting
              opportunities with you!
            </p>
            <p
              className="
              text-gray-700
              leading-relaxed
              mt-6
              text-xl
              md:text-2xl
              text-center"
            >
              <b>email: </b>
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="mailto:gowdilya@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here"
              >
                gowdilya@gmail.com
              </a>
            </p>
            <p
              className="
              text-gray-700
              leading-relaxed
              mt-2
              text-xl
              md:text-2xl
              text-center"
            >
              <b>Linkedin: </b>
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://www.linkedin.com/in/gowdilya/"
              >
                https://www.linkedin.com/in/gowdilya/
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
