import { ILngItem, lngList } from "../../../../entities/lang/lib";

import { LngEnum, useLng } from "../../../../entities/lang/model";

import "./index.module.scss";

export const ChangeSelect = () => {
  const { changeLng, i18n } = useLng();

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLng(e.target.value as LngEnum)}
    >
      {lngList()?.map((item: ILngItem) => (
        <option key={item?.lng} value={item?.lng}>
          {item?.name}
        </option>
      ))}
    </select>
  );
};
