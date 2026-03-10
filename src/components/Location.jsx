import { Connect } from './Connect';
import { EmailCard } from './EmailCard';
import { LocationCard } from './LocationCard';

export const ContactCard = () => {
  return (
    <div className="flex flex-col gap-5 w-full items-left text-left">
      <EmailCard />
      <LocationCard />
      <Connect />
    </div>
  );
};
