import React from "react";
import Image from "next/image";
import styles from "./flagshipapp.module.css";

export default function FlagshipApp() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeading}>Guess The Word</h1>
          <p className={styles.heroDescription}>
            Guess the Word is a puzzle game where you match two images to
            <span className={styles.lineBreak}>
              {" "}
              complete a clue, offering multiple themes like Riddle Buster and
            </span>
            <span className={styles.lineBreak}>
              {" "}
              Movie Maniac. It challenges your brain with fun, educational
            </span>
            <span className={styles.lineBreak}>
              {" "}
              puzzles and free hints, perfect for all age groups.
            </span>
          </p>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/Flashshipheromockup.png"
            alt="App Mockup"
            width={1172}
            height={671}
            className={styles.mockupImage}
            priority
          />
        </div>
      </div>
      {/* Add your image here */}
      <Image
        src="/Mind.png" // <-- replace with your image path
        alt="Star"
        width={80}
        height={80}
        className={styles.statCardIcon}
      />
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>1M+</div>
          <div className={styles.statLabel}>Userbase</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>150k</div>
          <div className={styles.statLabel}>Downloads</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statValue}>4.9</div>
          <div className={styles.statLabel}>Ratings</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>24</div>
          <div className={styles.statLabel}>Ranking</div>
        </div>
      </div>
      <h2 className={styles.flagshipHeadline}>
        “a puzzle game where you match two images to complete a clue”
      </h2>
      <div className={styles.flagshipImageWrapper}>
        <Image
          src="/Guessthewordimage2.png"
          alt="Guess The Word Game"
          width={1522}
          height={852}
          className={styles.flagshipImage}
          priority
        />
      </div>
      <div className={styles.flagshipImagebottom}></div>
      <p className={styles.flagshipdescription2}>
        Guess the Word is a puzzle game where you match two images to complete a
        clue, offering multiple themes like Riddle Buster and Movie Maniac. It
        challenges your brain with fun, educational puzzles and free hints,
        perfect for all age groups.
      </p>
      <div className={styles.flagshipFeatureSection}>
        <div className={styles.featureImageWrapper}>
          <Image
            src="/Homescreen1.png"
            alt="Home Screen"
            width={888}
            height={497}
            className={styles.featureImage}
            priority
          />
        </div>
        <div className={styles.featureContent}>
          <h3 className={styles.featureHeading}>2 Pictures 1 Word</h3>
          <p className={styles.featurePara}>
            users see two images that have something in common and must guess
            the word.
            <br /> <span> “sharpen your brain”</span>
          </p>
        </div>
        <div className={styles.featureBarLine}></div>
      </div>
      <div className={styles.flagshipFeatureSection}>
        <div className={styles.featureContent}>
          <h3 className={styles.featureHeading}>Hints & clues</h3>
          <p className={styles.featurePara}>
            users see two images that have something in common and must guess
            the word.
            <br /> <span> “sharpen your brain”</span>
          </p>
        </div>
        <div className={styles.featureImageWrapper}>
          <Image
            src="/HomeScreen2.png" // <-- Change this to your new image
            alt="Home Screen 2"
            width={888}
            height={497}
            className={styles.featureImage}
            priority
          />
        </div>
        <div className={styles.featureBarLine}></div>
      </div>
      <div className={styles.flagshipFeatureSection}>
        <div className={styles.featureImageWrapper}>
          <Image
            src="/HomeScreen3.png"
            alt="Home Screen"
            width={888}
            height={497}
            className={styles.featureImage}
            priority
          />
        </div>
        <div className={styles.featureContent}>
          <h3 className={styles.featureHeading}>More Word Riddles </h3>
          <p className={styles.featurePara}>
            users see two images that have something in common and must guess
            the word.
            <br /> <span> “sharpen your brain”</span>
          </p>
        </div>
        <div className={styles.featureBarLine}></div>
      </div>
      <div className={styles.availabilitySection}>
        <div className={styles.availableOn}>
          <h4 className={styles.availabilityHeading}>Available on</h4>
          <div className={styles.platformLogos}>
            <Image
              src="/Rokulogo2.jpg"
              alt="Roku"
              width={80}
              height={40}
              className={styles.platformLogo}
            />
            <Image
              src="/FireTvlogo.png"
              alt="Fire TV"
              width={80}
              height={40}
              className={styles.platformLogo}
            />
          </div>
        </div>
        <div className={styles.compatibleDevices}>
          <h4 className={styles.availabilityHeading}>Compatible devices</h4>
          <div className={styles.deviceIcons}>
            <Image
              src="/Layer_1.svg"
              alt="Tablet"
              width={97.412}
              height={127.643}
              className={styles.TabletIcon}
            />
            <Image
              src="/Tvicon.png"
              alt="TV"
              width={220.017}
              height={123.165}
              className={styles.TvIcon}
            />
            <Image
              src="/Group.svg"
              alt="Tablet"
              width={60}
              height={124}
              className={styles.mobileIcon}
            />
          </div>
        </div>
      </div>

      <div className={styles.flagshipBottomImageWrapper}>
        <Image
          src="/8257507 2.png"
          alt="Flagship Page Bottom"
          width={1921}
          height={743}
          className={styles.flagshipBottomImage}
          priority
        />
      </div>
    </div>
  );
}
