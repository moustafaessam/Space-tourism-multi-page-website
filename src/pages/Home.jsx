import styles from "../styles/Home.module.css";

function Home() {
  return (
    <main className={`main ${styles.mainHome}`}>
      <section className={styles.sectionBox}>
        <div className={styles.homeText}>
          <div className={styles.parg1}>So, You want to travel to</div>
          <div className={styles.parg2}>Space</div>
          <div className={styles.parg3}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className={styles.homeButtonContainer}>
          <div className={styles.homeButtonMain}>
            <div className={styles.homeButton}>Explore</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
