import Link from "next/link";
import styles from "./Contacts.module.css";
import { useState } from "react";
import { ModalContact } from "../../ModalContact/ModalContact";

export function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        {/* 1. ВЕРХ */}
        <h2 className={styles.contactTitle}>WORK WITH ME</h2>

        {/* 2. ЦЕНТР */}
        <div className={styles.contactContent}>
          <p className={styles.contactPar}>
            Ready to build <br /> what matters?
          </p>
          <button
            className={styles.contactBtn}
            onClick={() => setIsModalOpen(true)}
            type="button"
          >
            HELL YES
          </button>
        </div>

        {/* 3. НИЗ */}
        <Link
          href="mailto:conneciones@gmail.com"
          className={styles.contactEmail}
        >
          conneciones@gmail.com
        </Link>
      </div>

      {isModalOpen && <ModalContact onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
