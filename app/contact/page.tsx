"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className={styles.Contact}>
      {/* Hero Section */}
      <section className={`${styles.contactHeroSection}`}>
        {/* background image */}
        <div className={styles.contactText}>
          <div className={styles.contactHeading}>
            Get in <span>Touch</span>
          </div>
          <div className={styles.contactSubheading}>
            Reach out, and let's create a universe of possibilities together!
          </div>
        </div>
        <div className={styles.ContactWrapper}>
          <div className={styles.contactContent}>
            <div className={styles.contactDescription}>
              <p>
                Have questions or want to collaborate? Reach out to us at the
                given email address below, and we’ll be happy to assist you.
              </p>
            </div>
            <div className={styles.contactMail}>
              <div className={styles.mailIcon}>
                <img src="Mailicon.png" alt="Mailicon" />
              </div>
              <div className={styles.mailText}>
                {" "}
                <a href="info@invicttus.com"></a>info@invicttus.com
              </div>
            </div>
          </div>
          <div className={styles.ContactImage}>
            <img src="Mailiframe.png" alt="Mailframe" />
          </div>
        </div>
      </section>
    </div>
  );
}
