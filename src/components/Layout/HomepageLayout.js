const HomepageLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row place-content-around items-center w-screen h-screen align-middle">
        {children}
      </div>
    </>
  );
};
  
export default HomepageLayout;
  
import PropTypes from "prop-types";
  
HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
  