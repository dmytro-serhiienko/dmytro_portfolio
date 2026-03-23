import style from "./SecretProject.module.css";

import { PropagateLoader } from "react-spinners";

export default function SecretProject() {
  return (
    <div className={style.secretDiv}>
      <h1 className={style.title}>COMING SOON</h1>
      <PropagateLoader size={35} color="red" />
    </div>
  );
}
