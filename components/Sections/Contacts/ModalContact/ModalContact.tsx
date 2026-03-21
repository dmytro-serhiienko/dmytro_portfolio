"use client";

import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; // Імпортуємо Yup
import { toast } from "sonner"; // Імпортуємо toast
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

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name is too short")
    .required("Please enter your name"),
  usermail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  usertext: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Please write your message"),
});

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
    <motion.div
      className={style.modalFullPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-lenis-prevent
    >
      <motion.button
        className={style.closeBtn}
        onClick={onClose}
        type="button"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ rotate: 90, color: "#e8380d" }}
        transition={{ delay: 0.1 }}
      >
        <IoIosClose size={60} />
      </motion.button>

      <motion.div
        className={style.modalContent}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
      >
        <h2 className={style.contactTitle}>Contact</h2>

        <Formik
          initialValues={InitialFormik}
          validationSchema={ContactSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            toast.success("Message sent successfully!");
            resetForm();
            onClose();
          }}
        >
          {({ errors, handleSubmit }) => (
            <Form
              className={style.formElement}
              onSubmit={(e) => {
                e.preventDefault();
                const errorArray = Object.values(errors);
                if (errorArray.length > 0) {
                  toast.error(errorArray[0]);
                }
                handleSubmit(e);
              }}
            >
              <label className={style.formLabel} htmlFor={`${customId}-name`}>
                <div className={style.labelTitle}>
                  Name <span className={style.starRequired}>*</span>
                </div>
                <Field
                  className={style.inUsername}
                  name="username"
                  id={`${customId}-name`}
                  placeholder="Dmytro"
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
                />
              </label>

              <button className={style.contactBtn} type="submit">
                Get in touch
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </motion.div>
  );
}
