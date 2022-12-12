import { FC } from "react";
import ListUsers from "../Components/ListUsers";
import Navigation from "../Components/Navbar";

type HomeProps = { navigate: any };

const Home: FC<HomeProps> = ({ navigate }) => {
  return (
    <>
      <Navigation />
      <ListUsers navigate={navigate} />
    </>
  );
};

export default Home;
