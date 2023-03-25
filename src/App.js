import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useStateValue } from "./StateProvider"
import { useEffect } from 'react';
import { auth } from './firebase';
import HeaderTwo from './components/header/HeaderTwo';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/orders/Orders';

const promise = loadStripe('pk_test_51MeCwjBBeJFJZe7YZ3jKmaZiRJSRPT6EPxa5CNifAEombhQQUDn1oimViZJKEoasrScOaGgo7Oka3RO8UcSdOhzi00pDg8W8Be')
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<><Header />  <Home /></>} />
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/orders' element={<><Header /><Orders /></>} />
          <Route path='/payment' element={
            <>
              <Header />

              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
