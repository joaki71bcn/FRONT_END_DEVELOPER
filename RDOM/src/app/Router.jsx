import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../page/Home';
import Page2 from '../page/Page2';
import Layout from '../components/Layout';
const Router = () => (
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/page2" element={<Page2/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </Layout>
</BrowserRouter>
);

export default Router;
