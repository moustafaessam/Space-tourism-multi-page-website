import styles from "../styles/Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <div className={styles.parg1}>So you want to travel to</div>
            <div className={styles.parg2}>Space</div>
            <div className={styles.parg3}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>Explore</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
