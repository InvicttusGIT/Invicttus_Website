"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./product.module.css";
import React, { useState } from "react";
import { link } from "fs";

const apps = [
  {
    name: "Fireplace Ambiance",
    image: "/fireplace.png",
    featured: false,
    tag: "Utility",
    platform: ["FireTV", "Roku"],
    device: ["Website"],
    link: "https://channelstore.roku.com/en-gb/details/519864a69c8bb82bafba4a6f5971f4f4:3b82cf6bc5bb38d94bd001a19dfb2584/fireplace-ambience-virtual-fire-place-for-tv",
  },
  {
    name: "Aquarium Free",
    image: "/Aquariumfree.jpg",
    featured: false,
    tag: "Featured",
    platform: ["Roku", "FireTV"],
    device: ["Website"],
    link: "https://channelstore.roku.com/en-gb/details/c06aad6c62b7733825e71df47fcda2e3:cf08af00367f617bb8f5e0ea30e2f014/aquarium-free-relaxing-fish-and-coral-reef-videos-with-music-4k-tv",
  },
  {
    name: "USB Media Player",
    image: "/Usbplayer.png",
    featured: false,
    tag: "Utility",
    platform: ["Roku"],
    device: ["Website"],
    link: "https://channelstore.roku.com/details/03e098489e45dc46200f70133df25863/usb-player-photos-and-videos",
  },
  {
    name: "Guess The Word",
    image: "/guess-the-word.png",
    featured: false,
    tag: "Game",
    platform: ["FireTV", "Roku"],
    device: ["Website"],
    link: "https://channelstore.roku.com/en-gb/details/2bd0b6ea73cb6d081aadc017c50f6d61:eed6f78387ae9b4e3241f0e07bd285f5/guess-the-word-word-search-by-pics-a-puzzle-and-brain-trivia-game-for-kids",
  },
  {
    name: "WordScrapes",
    image: "/wordscrapes.png",
    featured: false,
    tag: "Utility",
    platform: ["FireTV", "Roku"],
    device: ["Website"],
    link: "https://channelstore.roku.com/en-gb/details/16742c526649c011964e4d4705c8c994/wordscapes-discover-crossword-brain-trivia-challenges-to-elevate-vocabulary-connect-and-match-letters-to-boost-your-iq-level-word-scapes",
  },
  {
    name: "Word Search",
    image: "/word-search-puzzle.png",
    featured: false,
    tag: "Game",
    platform: ["FireTV", "Roku"],
    device: ["Website"],
    link: "https://channelstore.roku.com/en-ot/details/7ccb39d2b4485aef36e3fe60d6c52a59/word-search-game-find-words-adventure-trivia-to-enhance-your-vocabulary-skills-match-puzzle-and-elevate-your-brain-and-iq-level-for-kids-free",
  },
  {
    name: "Alarm App",
    image: "/alarm-app.png",
    featured: false,
    tag: "Utility",
    platform: ["FireTV"],
    device: ["Website"],
    link: "https://www.amazon.com/Alarm-Fire-TV-Tablets-Wallpapers/dp/B0CCRWTM9J/ref=sr_1_2?dib=eyJ2IjoiMSJ9.Ptv5GPB4yEBypwVUB6d8TzXglam379NBZ7DgwyaOU3c2fyN4TCi_WIGP1VXKZ_bmPZqEGn0xBn9i_SAIHK6jSg.-im9ZV9iAqz-F6q9XYKcRd1gjE00CNdfuol3F7qoDTA&dib_tag=se&qid=1737629880&refinements=p_4%3AApp+Oven&sr=8-2",
  },
  {
    name: "Clockfaces",
    image: "/Clockfaces.png",
    featured: false,
    tag: "Utility",
    platform: ["FireTV"],
    device: ["Website"],
    link: "https://www.amazon.com/Clock-Faces-Fire-Tablets-featuring/dp/B0CPPWX8R2/ref=sr_1_4?dib=eyJ2IjoiMSJ9.Ptv5GPB4yEBypwVUB6d8TzXglam379NBZ7DgwyaOU3c2fyN4TCi_WIGP1VXKZ_bmPZqEGn0xBn9i_SAIHK6jSg.-im9ZV9iAqz-F6q9XYKcRd1gjE00CNdfuol3F7qoDTA&dib_tag=se&qid=1737629880&refinements=p_4%3AApp+Oven&sr=8-4",
  },
];
const platformIcons: Record<string, string> = {
  LGTV: "/7a5d366f552fa89268ad31d4dd492c8905557359.png",
  Roku: "/24a3ecae62b20e1e34d699d3530f0fae45e74927.jpg",
  FireTV: "/ff213f0660c12d6c8fc25c2cd96dc875cebd2f79.png",
  Meta: "3ea30ddbd3c24854d46f1c9bd26285e77bed7fe6.png",
  PlayStore: "e46ce093f4c3a285ee5bca933588d6cefa59a398.png",
};
export default function ProductsPage() {
  const [isDevicesOpen, setIsDevicesOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const toggleDevicesDropdown = () => {
    setIsDevicesOpen(!isDevicesOpen);
    setIsPlatformsOpen(false);
  };

  const togglePlatformsDropdown = () => {
    setIsPlatformsOpen(!isPlatformsOpen);
    setIsDevicesOpen(false);
  };

  const filteredApps = apps.filter((app) => {
    const tagMatch = !selectedTag || app.tag === selectedTag;
    const deviceMatch = !selectedDevice || app.device?.includes(selectedDevice);
    const platformMatch =
      !selectedPlatform || app.platform?.includes(selectedPlatform);
    return tagMatch && deviceMatch && platformMatch && !app.featured;
  });

  return (
    <div className={styles.ProductPage}>
      <div className={styles.ContentWrapper}>
        <div className={styles.ProductHero}>
          <div className={styles.ProductHerobg} />
          <div className={styles.ProductHeroContent}>
            <h2 className={styles.ProductHeroHeading}>
              Become A Part of Our{" "}
              <span className={styles.Highlight}>Team</span>
            </h2>
            <p className={styles.ProductHeroSubheading}>
              Join Us in Shaping the Future with Innovation.
            </p>
            <Link href="/products">
              <button className={styles.OurProductButton}>Our Products</button>
            </Link>
          </div>
        </div>

        <div>
          <div className={styles.ProductSection}>
            <section className={styles.ProductsSection}>
              <div className={styles.topApp}>
                <div className={styles.ProductsSectionLeft}>
                  <h2 className={styles.LeftHeading}>
                    Top Rated <span className={styles.Highlight2}>App</span>
                  </h2>
                  <p className={styles.LeftSubHeading}>
                    We create seamless, high-performance solutions — from
                    immersive apps and interactive TV to premium content,
                    high-octane games, and next-gen VR/MR experiences.
                  </p>
                </div>
                <div className={styles.productSectionRight}>
                  <div className={styles.ProductSectionLeft}>
                    <h4 className={styles.ProductSectionAppName}>
                      Guess The Word
                    </h4>
                    <Image
                      src="/9ad56e4d22b398af9bd855825f4c44222d3b7971.png"
                      alt="Guess The Word"
                      width={357}
                      height={293}
                      className={styles.ProductSectionImage}
                    />
                  </div>
                  <div className={styles.ProductSectionRightContent}>
                    <div className={styles.ProductSectionStats}>
                      <span className={styles.ProductSectionStatBox}>
                        <p>
                          <strong>4.9 </strong> Ratings
                        </p>
                      </span>
                      <span className={styles.ProductSectionStatBox}>
                        <p>
                          <strong> 1M </strong> Userbase
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.PrductsSectionFilter}>
                <button
                  className={styles.FilterButton}
                  onClick={() => {
                    setSelectedTag(null);
                    setSelectedPlatform(null);
                    setSelectedDevice(null);
                  }}
                >
                  Apps
                </button>
                <button
                  className={styles.FilterButton}
                  onClick={() => {
                    setSelectedTag("Game");
                    setSelectedPlatform(null);
                    setSelectedDevice(null);
                  }}
                >
                  Games
                </button>

                <div
                  className={styles.DevicesDropdown}
                  onMouseEnter={() => setIsDevicesOpen(true)}
                  onMouseLeave={() => setIsDevicesOpen(false)}
                >
                  <button
                    className={`${styles.FilterButton} ${styles.PlatformButtonWithIcon}`}
                  >
                    Devices
                    <span
                      className={`${styles.PlatformDropdownIcon} ${
                        isDevicesOpen ? styles.iconRotated : ""
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6 8L10 12L14 8"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {isDevicesOpen && (
                    <div className={styles.PlatformOptions}>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedDevice("Mobile")}
                      >
                        Mobile
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedDevice("Website")}
                      >
                        Website
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedDevice("Tablets")}
                      >
                        Tablets
                      </button>
                    </div>
                  )}
                </div>

                <div
                  className={styles.DevicesDropdown}
                  onMouseEnter={() => setIsPlatformsOpen(true)}
                  onMouseLeave={() => setIsPlatformsOpen(false)}
                >
                  <button
                    className={`${styles.FilterButton} ${styles.PlatformButtonWithIcon}`}
                  >
                    Platforms
                    <span
                      className={`${styles.PlatformDropdownIcon} ${
                        isPlatformsOpen ? styles.iconRotated : ""
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6 8L10 12L14 8"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {isPlatformsOpen && (
                    <div className={styles.PlatformOptions}>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("Roku")}
                      >
                        Roku TV
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("FireTV")}
                      >
                        Fire TV
                      </button>
                      {/* <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("LGTV")}
                      >
                        LGTV
                      </button> */}
                      {/* <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("Apple TV")}
                      >
                        Apple TV
                      </button> */}
                      {/* <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("Play Store")}
                      >
                        Play Store
                      </button> */}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.productsgridSection}>
                {filteredApps.map((app) => (
                  <Link
                    key={app.name}
                    href={app.link ?? ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.AppsgridContainer}>
                      <div className={styles.AppsGridLeft}>
                        <h4 className={styles.AppsName}>{app.name}</h4>
                        <div className={styles.platformIcons}>
                          {app.platform.map((platform, index) => (
                            <img
                              key={index}
                              src={platformIcons[platform]}
                              alt={platform}
                              className={styles.platformIcon}
                            />
                          ))}
                        </div>
                        <div className={styles.Appsgridimages}>
                          <Image
                            src={app.image}
                            alt={app.name}
                            fill
                            className={styles.AppsImages}
                          />
                        </div>
                      </div>
                      <div className={styles.AppsGridRight}>
                        <div className={styles.AppsStats}>
                          <span className={styles.AppsStatBox}>
                            <p>
                              <strong>4.9</strong> Ratings
                            </p>
                          </span>
                          <span className={styles.AppsStatBox}>
                            <p>
                              <strong>1M</strong> Userbase
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className={styles.AppGridLoadmore}>
                <button className={styles.LoadMoreButton}>
                  <a href="#">Load More</a>
                </button>
              </div>
              <div className={styles.ProductsBottomSection}>
                <h2 className={styles.ProductBottomheading}>
                  <span className={styles.Block}>ACTION.</span>
                  <span className={styles.Block}>VISION.</span>
                  <span className={styles.Block}>SPIRIT.</span>
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
