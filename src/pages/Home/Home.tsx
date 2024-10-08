import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import webpHeroImageWide from '../../assets/images/Hero-wide.webp';
import webpHeroImageNarrow from '../../assets/images/Hero-narrow.webp';
import jpegHeroImageWide from '../../assets/images/Hero-wide.jpeg';
import jpegHeroImageNarrow from '../../assets/images/Hero-narrow.jpeg';
import trendingGif from '../../assets/images/trending.mp4';
import findGif from '../../assets/images/find.mp4';
import freeGif from '../../assets/images/free.mp4';

import FeatureItem from './components/FeatureItem/FeatureItem';
import CustomCursor from './components/CustomCursor/CustomCursor';
import AnimatedPath from './components/AnimatedPath/AnimatedPath';

import styles from './Home.module.css';

const cx = classNames.bind(styles);

const Home = () => {
  const wrapperRef = useRef<HTMLElement>(null);

  return (
    <>
      <section className={styles.heroSection}>
        <picture>
          <source
            srcSet={`${webpHeroImageNarrow} 480w, ${webpHeroImageWide} 1200w`}
            sizes="100vw"
            type="image/webp"
          />
          <img
            className={styles.heroImage}
            src={jpegHeroImageWide}
            alt="hero image"
            srcSet={`${jpegHeroImageNarrow} 480w, ${jpegHeroImageWide} 1200w`}
            sizes="100vw"
          />
        </picture>

        <div className={styles.projectTitle}>
          <h1 className={styles.title}>Memegle</h1>
          <h3 className={styles.subtitle}>gif search engine for you</h3>
        </div>
        <Link to="/search">
          <button className={cx('cta', 'linkButton')}>start search</button>
        </Link>
      </section>
      <section ref={wrapperRef} className={styles.featureSection}>
        <AnimatedPath wrapperRef={wrapperRef} />
        <div className={styles.featureSectionWrapper}>
          <h2 className={styles.featureTitle}>Features</h2>
          <div className={styles.featureItemContainer}>
            <FeatureItem title="See trending gif" videoSrc={trendingGif} />
            <FeatureItem title="Find gif for free" videoSrc={findGif} />
            <FeatureItem title="Free for everyone" videoSrc={freeGif} />
          </div>
          <Link to="/search">
            <button className={styles.linkButton}>start search</button>
          </Link>
        </div>
      </section>
      <CustomCursor text="memegle" />
    </>
  );
};

export default Home;
