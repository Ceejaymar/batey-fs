// import shirtsOnDisplay from '../../assets/images/home/kh-shirts-display.jpg';

import classes from "./subscribe.module.scss";

function Subscribe() {
  return (
    <section className={classes.subscribeSection}>
      <div className={classes.imgContainer}>
        {/* <img src={shirtsOnDisplay} alt="Shirts on display" /> */}
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
