import Form from "../components/form/form";
import classes from "./page.module.scss";

export default function Contact() {
  return (
    <>
      <section className={classes.contact}>
        <div className={classes.contactInfo}>
          <h2 className={classes.heading}>Get in Touch</h2>
          <p>
            Email, call or complete the form to connect with us. We&apos;d love
            to hear from you!
          </p>

          <a href={`mailto:${process.env.CONTACT_TO_EMAIL}`}>
            {process.env.CONTACT_TO_EMAIL}
          </a>
          <a href="tel:+0015555555555">+001-555-555-5555</a>
        </div>
        <div className={classes.formContainer}>
          <h1>Contact Us</h1>
          <p>You can reach us anytime.</p>
          <Form />
        </div>
      </section>
      {/* <section>
        <h2>Our location</h2>
        <p>See us on the Island.</p>
        <p>Address: 123 Island St, Paradise City</p>
      </section> */}
    </>
  );
}
