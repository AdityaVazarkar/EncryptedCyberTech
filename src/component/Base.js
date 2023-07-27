import NaveBar from "./NaveBar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <NaveBar />
      {children}
    </div>
  );
};

export default Base;
