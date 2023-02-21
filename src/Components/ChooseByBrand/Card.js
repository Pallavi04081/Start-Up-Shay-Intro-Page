import "./index.css"

const Card = ({ele}) => {
   console.log(ele)
   return (
    <>
    <div class="BrandCard">
      <img src={`${ele}`} class="BrandCardImage"/>
    </div>
   
    </>
   )

   };
  export default Card;