import "./index.css"
import Card from "./Card1";

const Index = () => {
 const ImageArray=[{image:"fig.png",para:"Art and Craft"},{image:"beauty.png",para:"Beauty"},{image:"beauty1.png",para:"Fashion"},{image:"food.png",para:"Food & Beverages"},{image:"beauty.png",para:"Beauty"},{image:"glosary.png",para:"Grocery"},{image:"repair.png",para:"Maintenance"}]
 
   return (
    <>
   <div style={{display:"flex",flexDirection:"column",height:"30%",width:"100%",marginTop:"120px",paddingLeft:"6%",paddingRight:"6%"}}>
   <h1 class="heading1">Shop Our Top Categories</h1>
   <div class="Card1">
   {
    ImageArray.map((ele)=>{
      return(
        <>
        <Card ele={ele}/>
        </>
      )
    })
   }
   </div>
   </div>
    </>
   )
   };
  export default Index;