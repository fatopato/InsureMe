import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import type { ThemeConfig } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import TrafficInsurance from './pages/products/TrafficInsurance';
import SecondHandTrafficInsurance from './pages/products/SecondHandTrafficInsurance';
import Kasko from './pages/products/Kasko';
import ElectricVehicleKasko from './pages/products/ElectricVehicleKasko';
import ShortTermTrafficInsurance from './pages/products/ShortTermTrafficInsurance';
import GreenCard from './pages/products/GreenCard';
import IMM from './pages/products/IMM';
import HealthInsurance from './pages/products/HealthInsurance';
import SupplementaryHealthInsurance from './pages/products/SupplementaryHealthInsurance';
import TravelHealthInsurance from './pages/products/TravelHealthInsurance';
import HomeInsurance from './pages/products/HomeInsurance';
import HomeSafeInsurance from './pages/products/HomeSafeInsurance';
import DASK from './pages/products/DASK';
import MobilePhoneInsurance from './pages/products/MobilePhoneInsurance';
import PetInsurance from './pages/products/PetInsurance';
import PersonalAccidentInsurance from './pages/products/PersonalAccidentInsurance';
import QuoteComparison from './pages/QuoteComparison';
import TrafficQuoteWizard from './pages/TrafficQuoteWizard';
import VehicleQuoteWizard from './pages/VehicleQuoteWizard';
import PolicyCustomize from './pages/PolicyCustomize';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import HealthQuoteWizard from './pages/HealthQuoteWizard';
import HomeQuoteWizard from './pages/HomeQuoteWizard';
import OtherQuoteWizard from './pages/OtherQuoteWizard';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#0066cc', // Trust blue - professional and reliable
    borderRadius: 6,
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Login/Dashboard now also with header/footer */}
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/anasayfa" element={<Dashboard />} />
            <Route path="/giris" element={<Login />} />
            <Route path="/uyelik" element={<Login />} />
            {/* Araç Sigortaları */}
            <Route path="/trafik-sigortasi" element={<TrafficInsurance />} />
            <Route path="/trafik/teklif" element={<TrafficQuoteWizard />} />
            <Route path="/ikinci-el-trafik/teklif" element={<VehicleQuoteWizard />} />
            <Route path="/yesil-kart/teklif" element={<VehicleQuoteWizard />} />
            <Route path="/kasko/teklif" element={<VehicleQuoteWizard />} />
            <Route path="/elektrikli-arac-kasko/teklif" element={<VehicleQuoteWizard />} />
            <Route path="/kisa-sureli-trafik/teklif" element={<VehicleQuoteWizard />} />
            <Route path="/imm/teklif" element={<VehicleQuoteWizard />} />
            <Route path="/ikinci-el-trafik" element={<SecondHandTrafficInsurance />} />
            <Route path="/kasko" element={<Kasko />} />
            <Route path="/elektrikli-arac-kasko" element={<ElectricVehicleKasko />} />
            <Route path="/kisa-sureli-trafik" element={<ShortTermTrafficInsurance />} />
            <Route path="/yesil-kart" element={<GreenCard />} />
            <Route path="/imm" element={<IMM />} />
            {/* Sağlık Sigortaları */}
            <Route path="/ozel-saglik" element={<HealthInsurance />} />
            <Route path="/tamamlayici-saglik" element={<SupplementaryHealthInsurance />} />
            <Route path="/seyahat-saglik" element={<TravelHealthInsurance />} />
            {/* Ev Sigortaları */}
            <Route path="/konut-sigortasi" element={<HomeInsurance />} />
            <Route path="/evim-guvende" element={<HomeSafeInsurance />} />
            <Route path="/dask" element={<DASK />} />
            {/* Diğer */}
            <Route path="/cep-telefonu" element={<MobilePhoneInsurance />} />
            <Route path="/evcil-hayvan" element={<PetInsurance />} />
            <Route path="/ferdi-kaza" element={<PersonalAccidentInsurance />} />
            {/* Diğer Sayfalar */}
            <Route path="/teklif-karsilastir" element={<QuoteComparison />} />
            <Route path="/satin-al" element={<PolicyCustomize />} />
            <Route path="/odeme" element={<Payment />} />
            <Route path="/odeme/basarili" element={<PaymentSuccess />} />
            <Route path="/tamamlayici-saglik/teklif" element={<HealthQuoteWizard />} />
            <Route path="/ozel-saglik/teklif" element={<HealthQuoteWizard />} />
            <Route path="/seyahat-saglik/teklif" element={<HealthQuoteWizard />} />
            <Route path="/dask/teklif" element={<HomeQuoteWizard />} />
            <Route path="/konut-sigortasi/teklif" element={<HomeQuoteWizard />} />
            <Route path="/evim-guvende/teklif" element={<HomeQuoteWizard />} />
            <Route path="/cep-telefonu/teklif" element={<OtherQuoteWizard />} />
            <Route path="/evcil-hayvan/teklif" element={<OtherQuoteWizard />} />
            <Route path="/ferdi-kaza/teklif" element={<OtherQuoteWizard />} />
            <Route path="/sss" element={<FAQ />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);
  return null;
}
