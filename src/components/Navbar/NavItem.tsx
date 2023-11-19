import Link from "next/link";
import React from "react";
import { IItem } from "./Items.interface";

type PropNavItem = {
  item: IItem;
};
export const NavItem = ({
  icon,
  link,
  selected,
  idx,
  toggleSelection,
}: IItem & { idx: number; toggleSelection: (idx: number) => IItem }) => {
  return (
    <div className="md:border-b-[1px] flex-1 flex items-center justify-center md:border-collapse md:border-b-shadow_transparent">
      <Link href={link ?? ""}>
        <button
          onClick={() => {
            toggleSelection(idx);
          }}
          className={
            "h-12 w-12   flex items-center  justify-center rounded-3xl " +
            (selected
              ? " p-4 bg-secondary text-tertiary shadow-lg shadow-shadow_transparent"
              : " p-4  bg-tertiary text-primary_dark")
          }
        >
          {icon}
        </button>
      </Link>
    </div>
  );
};
