import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";
import { Navbar, useNavStore } from "../components/Navbar";
type Props = {} & PropsWithChildren;

const Home = ({ children }: Props) => {
  const router = useRouter();
  useEffect(() => {
    console.debug("items", router.query.selected);
  });
  const { items, defaultSelection, idxSelected } = useNavStore();
  return (
    <div className="relative h-screen w-screen bg-primary">
      <Navbar />
      <>
        {idxSelected != -1 &&
        router.query.selected == items[idxSelected].query?.value
          ? items[idxSelected].Layout
          : idxSelected == -1
          ? items[defaultSelection].Layout
          : ""}
      </>
    </div>
  );
};

export default Home;
