import Card from "./Card";
import "./index.css"

const BrandIndex = () => {
  
   const ImageAray = ["quickbooks.png","zoho.png","myob.png","xeio.png","oracle.png","sage.png","wave.png","dext.png"]

   return (
    <>
   <div style={{width:"100%",display:"flex",flexDirection:"column",marginTop:"80px",paddingLeft:"6%",paddingRight:"6%",paddingBottom:"80px"}}>
   <h1 class="heading" style={{color:"#2D3891",textAlign:"center"}}><em>Our Accounting Softwares</em></h1>
   <div class="cardgrid">
   {
      ImageAray.map((ele)=>{
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
  export default BrandIndex;