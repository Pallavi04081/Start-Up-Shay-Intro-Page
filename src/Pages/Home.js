import QueryIndex from "../Components/QueryCard";
import Index from "../Components/Categories";
import BrandIndex from "../Components/ChooseByBrand";
import Footer from "../Components/Footer/Footer";
import BusinessCard from "../Components/BusinessCard";
import FooterCard from "../Components/Footer/Footer";
import OfferCard from "../Components/OfferCard/OfferCard"
import NavBar from "../Components/Header/NavBar";
import ShopOnline from "../Components/ShopOnline/ShopOnline"
import CompanyIndex from "../Components/CompanyValue/CompanyIndex";
import FormCom from "../Components/FormCom/Form";
import Client from "../Components/Clients/Clients";
const Home = () => {
  return (
    <>
    <div style={{boxSizing:"border-box",paddingTop:"0px"}}>
     <BusinessCard/>
      <ShopOnline/>
      <CompanyIndex/>
      <BrandIndex/>
      <Client/>
      <FormCom/>
      </div>
    </>
  );
};

export default Home;
