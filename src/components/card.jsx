export const Card = ({ children, padding, gaps }) => {
  return (
    <>
      <div
        className={`flex flex-col ${gaps ? "" : "gap-7 "}${padding ? "" : "py-9 px-7 "} bg-primarydark hover:border-2 hover:border-brown cursor-pointer`}
      >
        {children}
      </div>
    </>
  );
};
