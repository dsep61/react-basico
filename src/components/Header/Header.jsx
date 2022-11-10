import './Header.css';

const Header = ({title, color}) => {
    return (
        <div className={color}>
            <h1>{title}</h1>
        </div>
    );
  };
  
export default Header;
  