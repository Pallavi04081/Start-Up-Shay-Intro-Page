
const Card = ({ele}) => {
 
   return (
    <>
    <div class="CategoriesCard" style={{backgroundImage:`url(${ele.image})`}}> 
    <div class="innerRectangle">
       <p>{ele.para}</p>
    </div>
    </div>
    </>
   )

   };
  export default Card;