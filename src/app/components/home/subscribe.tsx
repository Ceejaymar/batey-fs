import classes from "./subscribe.module.scss";

function Subscribe() {
  return (
    <section className={classes.subscribeSection}>
      <div className={classes.imgContainer}>
        <img
          src="https://los-project-images.s3.us-east-1.amazonaws.com/batey/batey-home-kh-shirts-display.webp"
          alt="Shirts on display"
        />
      </div>
      <div>
        <h3>Join our community</h3>
        <p>Get notified when our next collection drops.</p>
        <form className={classes.form}>
          <input type="email" placeholder="Email address" />
          <button type="submit">Join</button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
