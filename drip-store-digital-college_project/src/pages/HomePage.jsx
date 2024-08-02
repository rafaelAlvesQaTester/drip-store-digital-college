import Gallery from "../components/Gallery";
import SliderImage from "../components/imgs/nikeRed.svg"

const HomePage = () => {
  return ( 
    <>
      <Gallery images={[
        {
          src:SliderImage
        }, 
        {
          src:SliderImage
        },
        {
          src:SliderImage
        },
        {
          src:SliderImage
        },
        {
          src:SliderImage
        }
      ]} />
    </>
  );
}

export default HomePage;
