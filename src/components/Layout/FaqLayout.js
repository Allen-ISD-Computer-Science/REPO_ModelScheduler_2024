const FaqLayout = ({ children }) => {
    return (
      <>
        <div className="flex flex-row place-content-around items-center w-screen h-screen align-middle">
          {children}
        </div>
      </>
    );
  };
    
  export default FaqLayout;
    
  import PropTypes from "prop-types";
    
  FaqLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
    