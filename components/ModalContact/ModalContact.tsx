import { Formik, Form, Field } from "formik";
import style from "./ModalContact.module.css";
import { useId, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

interface FormikType {
  username: string;
  usermail: string;
  usertext: string;
}

interface ModalProps {
  onClose: () => void;
}

export function ModalContact({ onClose }: ModalProps) {
  const customId = useId();

  const InitialFormik: FormikType = {
    username: "",
    usermail: "",
    usertext: "",
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={style.modalFullPage}>
      <button className={style.closeBtn} onClick={onClose} type="button">
        <IoIosClose size={60} />
      </button>

      <div className={style.modalContent}>
        <h2 className={style.contactTitle}>Contact</h2>

        <Formik
          initialValues={InitialFormik}
          onSubmit={(values) => {
            console.log(values);
            onClose();
          }}
        >
          <Form className={style.formElement}>
            <label className={style.formLabel} htmlFor={`${customId}-name`}>
              <div className={style.labelTitle}>
                Name <span className={style.starRequired}>*</span>
              </div>
              <Field
                className={style.inUsername}
                name="username"
                id={`${customId}-name`}
                placeholder="Dmytro"
                required
              />
            </label>

            <label className={style.formLabel} htmlFor={`${customId}-mail`}>
              <div className={style.labelTitle}>
                Email Address <span className={style.starRequired}>*</span>
              </div>
              <Field
                className={style.inUsername}
                type="email"
                name="usermail"
                id={`${customId}-mail`}
                placeholder="dmytro@example.com"
                required
              />
            </label>

            <label className={style.formLabel} htmlFor={`${customId}-text`}>
              <div className={style.labelTitle}>
                Message <span className={style.starRequired}>*</span>
              </div>
              <Field
                className={style.inUsertext}
                as="textarea"
                name="usertext"
                id={`${customId}-text`}
                placeholder="Hello Dmytro..."
                required
              />
            </label>

            <button className={style.contactBtn} type="submit">
              Get in touch
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
