import { useLoaderData } from "react-router-dom";
import CrudFrom from "../Form/CrudFrom";
import RouterBanner from "./RouterBanner";

const Cheakout = () => {
  const loadedService = useLoaderData();
  return (
    <div>
      <RouterBanner></RouterBanner>
      <CrudFrom targetData={loadedService}></CrudFrom>
    </div>
  );
};

export default Cheakout;
