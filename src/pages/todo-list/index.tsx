import { useTranslation } from "react-i18next";
import { ChangeSelect } from "../../features/change-lang/ui";
import { NavMenu } from "../../features/nav-menu";

import "./index.module.scss";

const TodoListPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Todo list page</h1>
      <p>{t("hello_world")}</p>

      <ChangeSelect />
      <NavMenu />
    </div>
  );
};

export default TodoListPage;
