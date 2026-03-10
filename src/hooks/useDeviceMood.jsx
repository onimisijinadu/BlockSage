import { useEffect } from 'react';

export const useDeviceMood = () => {
  useEffect(() => {
    const DeviceMood = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMoodChange = (e) => {
      if (e.matches) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    };

    //pass the device mood to the change controller
    handleMoodChange(DeviceMood);

    //listen to when the device change mood
    DeviceMood.addEventListener("change", handleMoodChange);

    return () => {
      DeviceMood.removeEventListener("change", handleMoodChange);
    };
  }, []);
};
