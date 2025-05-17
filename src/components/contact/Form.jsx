"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (params) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  const onSubmit = (data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const templateParams = {
      to_name: "Zaiden",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);

    // Reset isSubmitting after 5 seconds
    setTimeout(() => setIsSubmitting(false), 5000);
  };

  return (
    <motion.form
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <motion.input
        variants={item}
        type="text"
        placeholder="name"
        {...register("name", {
          required: "This field is required!",
          minLength: {
            value: 3,
            message: "Name should be at least 3 characters long.",
          },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.name && (
        <span className="inline-block self-start text-accent">
          {errors.name.message}
        </span>
      )}

      <motion.input
        variants={item}
        type="email"
        placeholder="email"
        {...register("email", { required: "This field is required!" })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.email && (
        <span className="inline-block self-start text-accent">
          {errors.email.message}
        </span>
      )}

      <motion.textarea
        variants={item}
        placeholder="message"
        {...register("message", {
          required: "This field is required!",
          maxLength: {
            value: 250,
            message: "Message should be less than 250 characters.",
          },
          minLength: {
            value: 10,
            message: "Message should be at least 10 characters long.",
          },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.message && (
        <span className="inline-block self-start text-accent">
          {errors.message.message}
        </span>
      )}

      <motion.input
        variants={item}
        value={isSubmitting ? "Sending..." : "Cast your message!"}
        disabled={isSubmitting}
        className={`px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="submit"
      />
    </motion.form>
  );
}
