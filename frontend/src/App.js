import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

const App = () => (
  <BrowserRouter>
   <Header />
   <main>
   <Routes>
      <Route  path="/" element={<LandingPage/>}/>
      <Route  path="/login" element={<LoginScreen/>}/>
      <Route  path="/register" element={<RegisterScreen/>}/>
      <Route  path="/mynotes" element={<MyNotes/>}/>
    </Routes>
   </main>
   <Footer />
  </BrowserRouter>
)

export default App;
