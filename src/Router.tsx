import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Term from './pages/Term'
import DeleteAccount from './pages/DeleteAccount'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/privacy-policy"
          element={
            <Term slug="privacy-policy" title="Política de Privacidade" />
          }
        />
        <Route
          path="/terms-of-use"
          element={<Term slug="terms-of-use" title="Termos de uso" />}
        />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
