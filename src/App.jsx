import MyCarousel from "./components/Carousel";
import InstructorCard from "./components/InstructorCard";
import MyFooter from "./Layouts/Footer";
import TopHeader from "./Layouts/Header/TopHeader";
import UpperTopHeader from "./Layouts/Header/UpperTopHeader";

function App() {
  return (
    <>
      {/* <UpperTopHeader /> */}
      <TopHeader />
      <MyCarousel />
      <InstructorCard />
      <MyFooter />
    </>
  );
}

export default App;
