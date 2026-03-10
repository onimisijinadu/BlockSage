export const Footer = () => {
  return (
    <>
      <div className="bg-dark pt-10 pb-20 px-6 sm:px-15 text-fadedText flex flex-col-reverse sm:flex-row gap-10 items-center justify-between">
        <p>&copy; 2026 Developer Portfolio. Crafted with precision</p>
        <div className={`gap-5 font-semibold flex flex-wrap justify-between`}>
          <a href="#about" className="links hover:text-slate-400 ">
            About
          </a>
          <a href="#skill" className="links hover:text-slate-400 ">
            Skills
          </a>
          <a href="#project" className="links hover:text-slate-400 ">
            Projects
          </a>
          <a href="#experience" className="links hover:text-slate-400 ">
            Experience
          </a>
          <a href="#contact" className="links hover:text-slate-400 ">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
