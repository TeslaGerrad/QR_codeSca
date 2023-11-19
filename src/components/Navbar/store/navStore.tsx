import create from "zustand";
import { IItem } from "../Items.interface";
import {
  LinkIcon,
  CalendarIcon,
  FolderIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  LockOpenIcon,
  LockClosedIcon,
  PencilIcon,
  QrCodeIcon,
} from "@heroicons/react/24/solid";
import QrURLLayout from "../Layouts/QrURLLayout";
import QRReadLayout from "../Layouts/QRReadLayout";

export const useNavStore = create<{
  items: IItem[];
  selected: boolean;
  idxSelected: number;
  defaultSelection: number;
  addNavItem: (item: IItem) => void;
  getNavItems: () => IItem[];
  init: (item: IItem[]) => void;
  toggleSelection: (idx: number) => IItem;
}>((set, get) => ({
  idxSelected: -1,
  defaultSelection: 0,
  selected: false,
  items: [
    // {
    //   link: "/?selected=url",
    //   selected: false,
    //   icon: <LinkIcon title="Qr Link" />,
    //   query: { parameter: "selected", value: "url" },
    //   Layout: <QrURLLayout />,
    // },
    // {
    //   link: "/?selected=event",
    //   selected: false,
    //   icon: <CalendarIcon title="Qr Event" />,
    //   query: { parameter: "selected", value: "event" },
    //   Layout: <QrURLLayout />,
    // },
    // {
    //   link: "/?selected=email",
    //   selected: false,
    //   icon: <EnvelopeOpenIcon title="Qr Email" />,
    //   query: { parameter: "selected", value: "email" },
    //   Layout: <QrURLLayout />,
    // },
    {
      link: "/?selected=text",
      selected: true,
      icon: <QrCodeIcon title="Qr Text" />,
      query: { parameter: "selected", value: "text" },
      Layout: <QrURLLayout />,
    },
    // {
    //   icon: <LockClosedIcon title="Encrypted Message" />,
    //   selected: false,
    //   link: "/?selected=encryptedMessage",
    //   query: { parameter: "selected", value: "encryptedMessage" },
    //   Layout: <QrURLLayout />,
    // },
    {
      icon: <FolderIcon title="Qr File" />,
      selected: false,
      link: "/?selected=files",
      query: { parameter: "selected", value: "files" },
      Layout: <QRReadLayout />,
    },
    // {
    //   icon: <LockOpenIcon title="Decrypt Message" />,
    //   selected: false,
    //   link: "/?selected=decryptedMsg",
    //   query: { parameter: "selected", value: "decryptedMsg" },
    //   Layout: <QrURLLayout />,
    // },
  ],

  addNavItem: (item: IItem) =>
    set((state) => {
      return {
        items: [...state.items, item],
      };
    }),
  init: (item: IItem[]) =>
    set(() => {
      return {
        items: [...item],
      };
    }),
  getNavItems: () => get().items,
  toggleSelection: (idx: number) => {
    set((state) => {
      // console.log("info state before", state.selected);
      // console.log("info state item before", state.items[idx].selected);

      if (state.idxSelected == -1) {
        state.items[state.defaultSelection].selected = false;
        state.idxSelected = idx;
        state.items[idx].selected = true;
      } else {
        state.items[state.idxSelected].selected = false;
        state.items[idx].selected = true;
        state.idxSelected = idx;
      }
      // console.log("info state after", state.selected);
      // console.log("info state item after", state.items[idx].selected);

      return {
        items: [...state.items],
        selected: state.selected,
        idxSelected: idx,
      };
    });
    return get().items[idx];
  },
}));

export default useNavStore;