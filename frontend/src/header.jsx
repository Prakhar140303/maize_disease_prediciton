// src/Header.jsx
import { Link ,useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
  return (
    <header className="bg-green-700 text-white p-4 shadow-md flex justify-between items-center fixed left-0 top-0 w-full">
      <h1 className="text-2xl font-bold" onClick={() => navigate('/')}>🌾 Maize Disease Predictor</h1>
      <nav className="space-x-4 text-xl">
        <Link to="/" className="hover:underline shadow-xl">Home</Link>
        <Link to="/predict" className="hover:underline">Predict</Link>
        <Link to="/AboutUs" className="hover:underline">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
