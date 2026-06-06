import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
// import Home from './pages/Home';

// Layouts
import MainLayout from "./layouts/MainLayout";

// Lazy loading pages
const Home = lazy(() => import("./components/Home/Home"));

// Bank
const CashApp = lazy(() => import("./pages/Bank/CashApp"));
const PayPal = lazy(() => import("./pages/Bank/PayPal"));
const Go2Bank = lazy(() => import("./pages/Bank/Go2Bank"));
const Coinbase = lazy(() => import("./pages/Bank/Coinbase"));
const Payoneer = lazy(() => import("./pages/Bank/Payoneer"));
const Wise = lazy(() => import("./pages/Bank/Wise"));
const Stripe = lazy(() => import("./pages/Bank/Stripe"));
const Chime = lazy(() => import("./pages/Bank/Chime"));
const USBank = lazy(() => import("./pages/Bank/USBank"));
const Alipay = lazy(() => import("./pages/Bank/Alipay"));
const Payeer = lazy(() => import("./pages/Bank/Payeer"));
const Skrill = lazy(() => import("./pages/Bank/Skrill"));
const WebMoney = lazy(() => import("./pages/Bank/WebMoney"));
const Venmo = lazy(() => import("./pages/Bank/Venmo"));
const Bluebird = lazy(() => import("./pages/Bank/Bluebird"));
const Neteller = lazy(() => import("./pages/Bank/Neteller"));
const Zelle = lazy(() => import("./pages/Bank/Zelle"));
const NeverPay = lazy(() => import("./pages/Bank/NeverPay"));
const PerfectMoney = lazy(() => import("./pages/Bank/PerfectMoney"));

// Crypto
const SoFi = lazy(() => import("./pages/Crypto/SoFi"));
const Binance = lazy(() => import("./pages/Crypto/Binance"));
const Paxful = lazy(() => import("./pages/Crypto/Paxful"));
const CryptoCom = lazy(() => import("./pages/Crypto/CryptoCom"));
const RedotPay = lazy(() => import("./pages/Crypto/RedotPay"));
const Mexc = lazy(() => import("./pages/Crypto/Mexc"));

// Social
const Facebook = lazy(() => import("./pages/Social/Facebook"));
const Airbnb = lazy(() => import("./pages/Social/Airbnb"));
const Instagram = lazy(() => import("./pages/Social/Instagram"));
const GoogleVoice = lazy(() => import("./pages/Social/GoogleVoice"));
const FacebookAds = lazy(() => import("./pages/Social/FacebookAds"));
const LinkedIn = lazy(() => import("./pages/Social/LinkedIn"));
const TextNow = lazy(() => import("./pages/Social/TextNow"));
const Telegram = lazy(() => import("./pages/Social/Telegram"));

// Mail
const Gmail = lazy(() => import("./pages/Mail/Gmail"));
const EduMail = lazy(() => import("./pages/Mail/EduMail"));
const Yahoo = lazy(() => import("./pages/Mail/Yahoo"));

// Quick Links
const About = lazy(() => import("./pages/Quick Links/About"));
const CookiePolicy = lazy(() => import("./pages/Quick Links/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./pages/Quick Links/PrivacyPolicy"));
const ShippingReturns = lazy(
  () => import("./pages/Quick Links/ShippingReturns"),
);
const TermsConditions = lazy(
  () => import("./pages/Quick Links/TermsConditions"),
);
const ContactUs = lazy(() => import("./pages/Quick Links/ContactUs"));

// Payment
const Pay = lazy(() => import("./pages/Payment/Pay"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {/* Bank */}
          <Route
            path="/product/verified-cash-app-accounts"
            element={<CashApp />}
          />
          <Route
            path="/product/verified-paypal-accounts"
            element={<PayPal />}
          />
          <Route
            path="/product/verified-go2bank-accounts"
            element={<Go2Bank />}
          />
          <Route
            path="/product/verified-coinbase-accounts"
            element={<Coinbase />}
          />
          <Route
            path="/product/verified-payoneer-accounts"
            element={<Payoneer />}
          />
          <Route path="/product/verified-wise-accounts" element={<Wise />} />
          <Route
            path="/product/verified-stripe-accounts"
            element={<Stripe />}
          />
          <Route path="/product/verified-chime-accounts" element={<Chime />} />
          <Route
            path="/product/verified-us-bank-accounts"
            element={<USBank />}
          />
          <Route
            path="/product/verified-alipay-accounts"
            element={<Alipay />}
          />
          <Route
            path="/product/verified-payeer-accounts"
            element={<Payeer />}
          />
          <Route
            path="/product/verified-skrill-accounts"
            element={<Skrill />}
          />
          <Route
            path="/product/verified-webmoney-accounts"
            element={<WebMoney />}
          />
          <Route path="/product/verified-venmo-accounts" element={<Venmo />} />
          <Route
            path="/product/verified-bluebird-accounts"
            element={<Bluebird />}
          />
          <Route
            path="/product/verified-neteller-accounts"
            element={<Neteller />}
          />
          <Route path="/product/verified-zelle-accounts" element={<Zelle />} />
          <Route
            path="/product/verified-never-pay-accounts"
            element={<NeverPay />}
          />
          <Route
            path="/product/verified-perfect-money-accounts"
            element={<PerfectMoney />}
          />

          {/* Crypto */}
          <Route path="/product/verified-sofi-accounts" element={<SoFi />} />
          <Route
            path="/product/verified-binance-accounts"
            element={<Binance />}
          />
          <Route
            path="/product/verified-paxful-accounts"
            element={<Paxful />}
          />
          <Route
            path="/product/verified-cripto-com-accounts"
            element={<CryptoCom />}
          />
          <Route
            path="/product/verified-redotpay-accounts"
            element={<RedotPay />}
          />
          <Route path="/product/verified-mexc-accounts" element={<Mexc />} />

          {/* Social */}
          <Route
            path="/product/verified-facebook-accounts"
            element={<Facebook />}
          />
          <Route
            path="/product/verified-airbnb-accounts"
            element={<Airbnb />}
          />
          <Route
            path="/product/verified-instagram-accounts"
            element={<Instagram />}
          />
          <Route
            path="/product/verified-google-voice-accounts"
            element={<GoogleVoice />}
          />
          <Route
            path="/product/verified-facebook-ads-accounts"
            element={<FacebookAds />}
          />
          <Route
            path="/product/verified-linkedin-accounts"
            element={<LinkedIn />}
          />
          <Route
            path="/product/verified-textnow-accounts"
            element={<TextNow />}
          />
          <Route
            path="/product/verified-telegram-accounts"
            element={<Telegram />}
          />

          {/* Mail */}
          <Route
            path="/product/buy-verified-gmail-accounts"
            element={<Gmail />}
          />
          <Route
            path="/product/verified-edu-mail-accounts"
            element={<EduMail />}
          />
          <Route path="/product/verified-yahoo-accounts" element={<Yahoo />} />

          {/* Quick Links */}
          <Route path="/about" element={<About />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Payment */}
          <Route path="/payment" element={<Pay />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
