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
              Hi, I'm{" "}
              <span className="text-indigo-600 font-semibold">
                Gowdilya Jeyakumar
              </span>
              , a passionate full-stack developer with c# and .NetCore
              experience and expertise in React and Angular front-end web
              development. I have <span className="font-semibold">7</span> years
              of experience in building robust and user-friendly applications,
              focusing on delivering high-quality code and exceptional user
              experiences.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              Throughout my career, I have worked on various projects leveraging
              React and its ecosystem. I have a deep understanding of React's
              core concepts, state management, and component-driven development.
              I am proficient in JavaScript, HTML, CSS, and have experience with
              modern tools and libraries such as ReactQuery, Redux, TypeScript,
              TailWind css, and StyledComponents.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              I also have Backend Experience, as thats how I started my career
              as a developer with ASP.NET, and working on Sophisticated Dashcam
              related web applications for Verieye Technologies and Lytx Inc
              From 2016-2018. Then using those same skills to build Full-Stack
              Back Office applications for Bell Canada from 2018 - 2021 using
              React and .NetCore.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              I take pride in creating clean, scalable, and maintainable code.
              With strong OOP fundementals, foundational theory such as SOLID
              principles. I am well-versed in modern development practices,
              including version control with Git, isolated ui development with
              Storybook and unit testing with Jest. I am constantly exploring
              new technologies and staying up to date with the latest trends in
              front-end development.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              In addition to my technical skills, I am a strong collaborator and
              an excellent problem solver. I enjoy working in cross-functional
              teams, brainstorming ideas, and turning them into practical
              solutions. I thrive in an agile and dynamic environment, where I
              can contribute my expertise and learn from fellow developers.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              When I'm not coding, you can find me pursuing my side projects,
              experimenting with new frameworks, or enjoying outdoor activities.
              I am also passionate about knowledge sharing and actively engage
              in the developer community through blogging and attending tech
              meetups.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6 text-xl md:text-2xl text-center">
              I am currently seeking new opportunities to further enhance my
              skills and contribute to exciting projects. If you'd like to
              collaborate or discuss potential opportunities, feel free to reach
              out to me. I would be thrilled to connect! Also checkout my
              projects on Github:{" "}
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/Gowdilya"
              >
                https://github.com/Gowdilya
              </a>
            </p>
          </div>
          {/* <div className="flex md:w-1/2 md:pl-10 flex justify-center"> */}

          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
