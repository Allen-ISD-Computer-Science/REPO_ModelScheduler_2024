const ClassesLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col overflow-y-auto md:flex-row items-center justify-between h-screen w-screen px-8 md:px-12 py-6">
        {children}
      </div>
    </>
  );
};

export default ClassesLayout;