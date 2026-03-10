import { ContactForm } from '../components/Form';
import { ContactCard } from '../components/Location';

export const ContactMe = () => {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col gap-3 items-center py-15 px-5 lg:px-15 text-center w-full"
      >
        <p className="text-brown text-shadow-2xs">GET IN TOUCH</p>
        <p className="text-headercolor font-semibold text-xl sm:text-2xl md:text-4xl lg:text-5xl">
          Let's Work Together
        </p>
        <p className="text-fadedText max-w-3xl text-center text-lg ">
          Have a project in mind or want to discuss opportunities? i'm always
          open to new challenges and collaborations.
        </p>
        <div className="flex flex-col lg:flex-row gap-5 w-full py-15 px-2 lg:px-15">
          <ContactCard />
          <ContactForm />
        </div>
      </div>
    </>
  );
};
