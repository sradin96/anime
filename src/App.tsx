import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from "./routes/routes";
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { useState } from 'react';
import SearchModal from './components/containers/SearchModal/SearchModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Router>
        <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <SearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Routes>
          {
              routes?.map((route) => {
                return <Route key={route.index} path={route?.path} element={<route.component />}/>
              })
            }
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
