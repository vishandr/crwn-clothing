import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component'
import Shop from  './routes/shop/Shop'
import Navigation from './routes/navigation/Navigation.component';
import Authentication from './routes/authentication/authentication.component'


const App = () => {
   return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index='home' element={<Home />} /> 
        <Route path='shop' element={<Shop />} /> 
        <Route path='auth' element={<Authentication />} /> 
      </Route>
    </Routes>
   );
};

export default App;
