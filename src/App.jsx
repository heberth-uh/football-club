import './App.css'
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Agenda from "./components/schedulle/Schedulle";
import Achievements from "./components/achievements/Achievements";
import Squad from './components/squad/Squad'; 
import NewsSection from './components/news/NewsSection'; 
import Footer from './components/footer/Footer'; 

export default function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Agenda/>
      <Achievements/>
      <Squad/>
      <NewsSection/>
      <Footer/>
    </>
  )
}
