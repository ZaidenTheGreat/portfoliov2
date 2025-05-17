import Image from "next/image";

import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <Image
          src="/background/contact-background.png" // Access file directly from public folder
          alt="Background image for the contact page of a Next.js portfolio website"
          fill // Enables responsive layout without specifying width and height
          className="object-cover object-center opacity-50"
          priority
        />
      </div>
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact Me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Drop your name and email below to let me know you stopped by or share your feedback! 
            You can also text me at <a href="tel:404-716-5592" className="text-accent underline">404-716-5592</a>.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
