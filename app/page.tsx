"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Home.module.css"; // Import the CSS module

export default function Home() {
  // State for the active slide in the carousel
  const [activeSlide, setActiveSlide] = useState(2);
  const [activeTeamImage, setActiveTeamImage] = useState(0); // This state is not used in the provided code, can be removed if not needed elsewhere.

  // App data for the carousel
  const appSlides = [
    { id: 0, name: "Word Search Puzzle", image: "/word-search-puzzle.png" },
    { id: 1, name: "Alarm App", image: "/alarm-app.png" },
    { id: 2, name: "Jellyfish Aquarium", image: "/jellyfish-aquarium.png" },
    { id: 3, name: "Guess The Word", image: "/guess-the-word.png" },
    { id: 4, name: "Fireplace Ambiance", image: "/fireplace-ambiance.png" },
  ];

  const teamImages = [
    "/team-mountain-group.png",
    "/WebsiteImage1.jpg",
    "/WebsiteImage2.jpg",
    "/WhatsappImage6.jpg",
    "/WebsiteImage4.jpg",
  ]; // This array is not used in the provided code, can be removed if not needed elsewhere.

  // Function to handle slide change
  const changeSlide = (index: number) => {
    setActiveSlide(index);
  };

  // Function to go to next slide
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === appSlides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? appSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // auto-slide every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [appSlides.length]); // dependency to ensure it updates if slides change

  return (
    <div className={styles.hero}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Background Image */}
        <div className={styles.heroBackground}>
          <div className={styles.heroContentContainer}>
            <div className={styles.heroTextContainer}>
              <h1 className={styles.heroHeading}>
                Where <span className={styles.heroHeadingBlue}>Vision</span>{" "}
                Meets <span className={styles.heroHeadingBlue}>Innovation</span>
              </h1>

              <p className={styles.heroDescription}>
                At Invicttus, We Push The Boundaries Of Innovation, Delivering
                Cutting-Edge Products <wbr />
                That Redefine How Tech Consumers Engage With The Digital World.
              </p>

              {/* Stat Cards */}
              <div className={styles.statCardsContainer}>
                {[
                  { value: "40+", label: "Total Apps &  Games" },
                  { value: "2M+", label: "User Base", highlighted: true },
                  { value: "300", suffix: "hrs", label: "Streaming Time" },
                  { value: "1M", label: "Apps Downloads" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={styles.statCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(127deg, #000000 17.06%, #00152C 38.41%, #002958 59.76%, #002958 60.36%, #001329 84.94%)";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(0, 144, 255, 0.5)";
                      e.currentTarget.style.transform = "translateY(-50px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "black";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <p className={styles.statValue}>
                      {item.value}
                      {item.suffix && (
                        <span className={styles.statSuffix}>{item.suffix}</span>
                      )}
                    </p>
                    <p className={styles.statLabel}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className={styles.transformSection}>
        {/* Background Image */}
        <div className={styles.transformBackground}>
          {" "}
          <div className={styles.transformContentContainer}>
            {/* Transform Content */}
            <div className={styles.transformFlexContainer}>
              {/* Main Heading */}
              <div className={styles.transformHeadingWrapper}>
                <h2 className={styles.transformHeading}>
                  <span>Transform</span>
                  <span>Ideas</span>
                  <span>Into</span>
                  <span>Reality</span>
                  <span>Together</span>
                </h2>

                {/* Users Worldwide Text */}
                <div className={styles.usersWorldwide}>
                  <Image
                    src="usersicon.svg" // ✅ your custom image path
                    alt="Users Icon"
                    width={24} // ✅ Adjust size as needed
                    height={24}
                    className={styles.usersIcon}
                  />
                  <p className={styles.usersText}>
                    Millions of Users Worldwide
                  </p>
                </div>
              </div>

              {/* Network Visualization */}
              <div className={styles.networkVisualization}>
                <div className={styles.networkGlobe}>
                  <Image
                    src="/network-people.png"
                    alt="Network of People"
                    width={690}
                    height={690}
                    className={styles.networkPeopleImage}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.topRatedBackgroundWrapper}>
        {/* Premium Quality Solutions */}
        <section className={styles.premiumSection}>
          <div className={styles.premiumContentWrapper}>
            <div className={styles.premiumHeadingContainer}>
              <h2 className={styles.premiumHeading}>
                Premium-Quality Solutions
              </h2>
              <p className={styles.premiumDescription}>
                We Create Seamless, High-Performance Solutions – From Immersive
                Apps And Interactive TV To Premium Content, High-Octane Games,
                And Next-Gen VR/MR Experiences.
              </p>

              {/* Interactive Product Carousel with Overlapping Effect */}
            </div>
            <div className={styles.carouselContainer}>
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                aria-label="Previous slide"
              >
                <ChevronLeft className={styles.carouselButtonIcon} />
              </button>

              <button
                onClick={nextSlide}
                className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                aria-label="Next slide"
              >
                <ChevronRight className={styles.carouselButtonIcon} />
              </button>

              {/* Carousel Container */}
              <div className={styles.carouselContentWrapper}>
                {appSlides.map((app, index) => {
                  // Calculate position relative to active slide
                  const position =
                    (index - activeSlide + appSlides.length) % appSlides.length;

                  // Determine if this app is the featured one (center position)
                  const isFeatured = position === 0;

                  // Determine class based on position relative to active
                  let slideClassName = styles.carouselSlide;
                  if (isFeatured) {
                    slideClassName += ` ${styles.carouselSlideFeatured}`;
                  } else if (position === 1 || position === -4) {
                    slideClassName += ` ${styles.carouselSlideRight1}`;
                  } else if (position === 2 || position === -3) {
                    slideClassName += ` ${styles.carouselSlideRight2}`;
                  } else if (position === -1 || position === 4) {
                    slideClassName += ` ${styles.carouselSlideLeft1}`;
                  } else if (position === -2 || position === 3) {
                    slideClassName += ` ${styles.carouselSlideLeft2}`;
                  }

                  // Only show 5 items (2 on each side of featured)
                  const isVisible =
                    Math.abs(position) <= 2 ||
                    Math.abs(position) >= appSlides.length - 2;

                  if (!isVisible) return null;

                  return (
                    <div
                      key={app.id}
                      className={slideClassName}
                      onClick={() => {
                        if (!isFeatured) {
                          changeSlide(index);
                        }
                      }}
                    >
                      <div className={styles.carouselSlideImageWrapper}>
                        <Image
                          src={app.image || "/placeholder.svg"}
                          alt={app.name}
                          fill
                          className={styles.carouselSlideImage}
                        />
                        {/* App name label - this div was empty, so it's kept as-is if it has purpose */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-center"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Pagination Dots */}
              <div className={styles.paginationDots}>
                {appSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`${styles.paginationDot} ${
                      activeSlide === index
                        ? styles.paginationDotActive
                        : styles.paginationDotInactive
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className={styles.ctaButtonContainer}>
              <Link
                href="/products"
                className={styles.ctaButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(223deg, #000 -1.77%, #002958 32.19%, #002958 49.63%, #001F42 68.91%, #00152C 88.18%, #001329 137.44%)";
                  e.currentTarget.style.border = "2px solid #0090FF";
                  const arrow = e.currentTarget.querySelector("svg");
                  if (arrow) {
                    (arrow as unknown as HTMLElement).style.transform =
                      "rotate(-45deg)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.border = "2px solid #FFF";
                  const arrow = e.currentTarget.querySelector("svg");
                  if (arrow) {
                    (arrow as unknown as HTMLElement).style.transform = "";
                  }
                }}
              >
                <span className={styles.ctaButtonText}>Our Apps</span>
                <ArrowRight className={styles.ctaButtonArrow} />
              </Link>
            </div>
          </div>
        </section>

        {/* Top Rated Apps / Platform Experience Section */}
        <section className={styles.topRatedSection}>
          <div className={styles.topRatedContentContainer}>
            <div className={styles.topRatedFlexContainer}>
              <div className={styles.textSideWrapper}>
                <h2 className={styles.SeamlessHeading}>
                  Powering
                  <span className={styles.SeamlessSpan}>
                    Seamless Experiences
                  </span>
                  <br />
                  Across Every Platform
                </h2>
                <p className={styles.seamlessPara}>
                  – From Smart TVs and Streaming Platforms to <br /> Tablets,
                  Mobile Phones, VR and Beyond.
                </p>

                {/* <Link
                  href="/about"
                  className={styles.learnMoreButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(223deg, #000 -1.77%, #002958 32.19%, #002958 49.63%, #001F42 68.91%, #00152C 88.18%, #001329 137.44%)";
                    e.currentTarget.style.border = "2px solid #0090FF";
                    const arrow = e.currentTarget.querySelector("svg");
                    if (arrow) {
                      (arrow as unknown as HTMLElement).style.transform =
                        "rotate(-45deg)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.border = "2px solid #FFF";
                    const arrow = e.currentTarget.querySelector("svg");
                    if (arrow) {
                      (arrow as unknown as HTMLElement).style.transform = "";
                    }
                  }}
                >
                  <span className={styles.learnMoreText}>Learn More</span>
                  <ArrowRight className={styles.learnMoreArrow} />
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Three Containers Section */}
      <section className={styles.threeContainersSection}>
        {/* Background Image */}
        <div className={styles.threeContainerBackground}>
          <div className={styles.threeContainersInner}>
            <div className={styles.flexContainer}>
              {/* Top row containers */}
              <div className={styles.topRowContainers}>
                {/* Left Container - Unbeatable in Vision */}
                <div className={styles.singleContainer}>
                  <h3 className={styles.containerTitle}>
                    Unbeatable in
                    <br />
                    <span className={styles.containerTitleHighlight}>
                      Vision
                    </span>
                  </h3>
                </div>
                {/* Right Container - Unmatched In Innovation */}
                <div className={styles.singleContainer}>
                  <h3 className={styles.containerTitle}>
                    Unstoppable&nbsp;in
                    <br />
                    <span className={styles.containerTitleHighlight}>
                      Action.
                    </span>
                  </h3>
                </div>
              </div>
              {/* Bottom Container - Unrivaled In Impact */}
              <div
                className={`${styles.singleContainer} ${styles.bottomContainer}`}
              >
                <h3 className={styles.containerTitle}>
                  Unconquerable&nbsp;in
                  <br />
                  <span className={styles.containerTitleHighlight}>Spirit</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.lifeAtSection}>
        {/* Background Image with Gradient Overlay */}
        <div
          key={activeTeamImage} // <--- Force React to re-render this element
          className={`${styles.backgroundOverlay}`}
          style={{
            backgroundImage: `
      linear-gradient(0deg, rgba(0,0,0,0.28), rgba(0,0,0,0.28)),
      linear-gradient(180deg, #000 3.2%, rgba(0,0,0,0) 50.5%, #000 98.35%),
      url(${teamImages[activeTeamImage]})
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className={`${styles.contentContainer} container mx-auto px-4`}>
          <div
            className={`${styles.mainHeadingContainer} flex items-center justify-center`}
          >
            <div className={styles.mainHeadingRow}>
              <Image
                src="/INVtext.png"
                alt="Invicttus Logo"
                width={500}
                height={250}
                className={styles.mainHeadingLogo}
              />
            </div>
          </div>
        </div>

        {/* Add the image carousel here */}
        <div className={styles.carouselWrapper}>
          {/* Main Image Display */}
          <div
            className={`${styles.mainImageDisplay} mx-auto overflow-hidden rounded-lg border border-gray-800`}
          >
            <Image
              src={teamImages[activeTeamImage] || "/placeholder.svg"}
              alt="Team at Invicttus"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div
            className={`${styles.thumbnailContainer} flex justify-center mt-4 space-x-2`}
          >
            {teamImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveTeamImage(index)}
                className={`${styles.thumbnailButton}
                  ${
                    activeTeamImage === index
                      ? styles.active
                      : "border-gray-700"
                  }
                  hover:scale-110 hover:z-30 hover:shadow-xl
                `}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Team thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Company Values Section */}
      <div className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          {/* Value 1: Collaborative (right) */}
          <div className={`${styles.valueBlock1}`}>
            <div className={`${styles.valueTitleWrapper} ${styles.one}`}>
              <span className={`${styles.valueNumber} ${styles.one}`}>01</span>
              <span className={`${styles.valueTitle} ${styles.one}`}>
                Collaborative
              </span>
              <p className={`${styles.valueDescription} ${styles.one}`}>
                Innovation Thrives When People Work Together, Sharing Ideas And
                Skills To Achieve Greater Success. A Collaborative Mindset
                Fosters Trust, Creativity, And Groundbreaking Solutions.
                {""}
                <span className={styles.highlightedText1}>
                  "Teamwork Drives Innovation"
                </span>
              </p>
              <div className={styles.barline}></div>
            </div>
          </div>

          {/* Value 2: Creative (left) */}
          <div className={`${styles.valueBlock}`}>
            <div className={`${styles.valueTitleWrapper} ${styles.two}`}>
              <span className={`${styles.valueNumber} ${styles.two}`}>02</span>
              <span className={`${styles.valueTitle} ${styles.two}`}>
                Creative
              </span>
              <p className={`${styles.valueDescription} ${styles.two}`}>
                Creativity Fuels Innovation By Encouraging New Ideas And Fresh
                Perspectives. It Pushes Boundaries, Transforming Imagination
                Into Impactful Experiences.{" "}
                <span className={styles.highlightedText2}>
                  "Ideas Thrive Here"
                </span>
              </p>
              <div className={styles.barline}></div>
            </div>
          </div>

          {/* Value 3: Team-Oriented (right) */}
          <div className={`${styles.valueBlock}`}>
            <div className={`${styles.valueTitleWrapper} ${styles.three}`}>
              <span className={`${styles.valueNumber} ${styles.three}`}>
                03
              </span>
              <span className={`${styles.valueTitle} ${styles.three}`}>
                Team-Oriented
              </span>
              <p className={styles.valueDescription3}>
                A Strong Team Culture Values Collective Effort And Shared
                Success. When People Collaborate, They Achieve More, Innovate
                Faster, And Build A Supportive Work Environment.{" "}
                <span className={styles.highlightedText3}>
                  "Together We Build The Future"
                </span>
              </p>
              <div className={styles.barline3}></div>
            </div>
          </div>

          {/* VR Experience Section - Added right after Team-Oriented */}
        </div>
      </div>
      <section className={styles.vrExperienceSection}>
        <div className={styles.vrExperienceWrapper}>
          {/* Background VR Image */}
          <div className={styles.vrBackgroundImage}>
            {/* Overlay gradients */}
            <div className={styles.gradientOverlayHorizontal}></div>
            <div className={styles.gradientOverlayBottom}></div>

            {/* Content container */}
            <div className={styles.vrContentContainer}>
              <div className={styles.vrGrid}>
                {/* Right side - App Mockups */}
                <div className={styles.appMockupContainer}>
                  {" "}
                  <img
                    src="/Vrmockup.svg"
                    alt="Your App Preview"
                    className={styles.vrOverlayImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
