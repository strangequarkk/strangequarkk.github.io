import PropTypes from "prop-types";
import "./ToggleBar.css";

function ToggleBar({ barIsOpen, setBarOpen }) {
  const toggleOpen = () => {
    setBarOpen(!barIsOpen);
  };
  return (
    <>
      <div className="menu-options">
        <button className="toggle-btn" onClick={toggleOpen}>
          toggle menu
        </button>
        {barIsOpen ? (
          <nav>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
            <a href="#">Example</a>
          </nav>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
ToggleBar.propTypes = {
  barIsOpen: PropTypes.bool,
  setBarOpen: PropTypes.func,
};

export default ToggleBar;
