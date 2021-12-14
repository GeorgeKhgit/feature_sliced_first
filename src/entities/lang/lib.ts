import { langFullName, LngEnum } from "./model";

export interface ILngItem {
  lng: string;
  name: string;
}

export const getLngFullName = (lng: LngEnum) => {
  return langFullName[lng];
};

export const lngList = () => {
  const lngArray: ILngItem[] = [];
  for (let lng in langFullName) {
    lngArray.push({ lng, name: langFullName[lng] });
  }
  return lngArray;
};
