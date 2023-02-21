import BrandIndex from "../Components/ChooseByBrand";
import BusinessCard from "../Components/IntroCard";
import ShopOnline from "../Components/Capability/Capability"
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
