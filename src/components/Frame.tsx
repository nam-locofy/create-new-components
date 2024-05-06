import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

export type FrameType = {
  specialisations?: string;
  madisonFroning?: string;
};

const Frame: FunctionComponent<FrameType> = ({
  specialisations,
  madisonFroning,
}) => {
  return (
    <div className={styles.parent}>
      <section className={styles.section}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <div className={styles.details}>
          <div className={styles.content}>
            <div className={styles.name}>
              <div className={styles.madisonFroning}>{madisonFroning}</div>
              <div className={styles.starWrapper}>
                <div className={styles.star}>
                  <div className={styles.starSymbolWrapper}>
                    <img
                      className={styles.starSymbolIcon}
                      loading="lazy"
                      alt=""
                      src="/star.svg"
                    />
                  </div>
                  <div className={styles.div}>/5</div>
                </div>
              </div>
            </div>
            <div className={styles.contentBox} />
            <div className={styles.content1}>
              <div className={styles.specilitis}>
                <b className={styles.specialisations}>{specialisations}</b>
                <div
                  className={styles.crossfitExpoortNutrition}
                >{`Crossfit Expoort, Nutrition & Rehab`}</div>
              </div>
              <div className={styles.socialIcon}>
                <img
                  className={styles.instaIcon}
                  loading="lazy"
                  alt=""
                  src="/insta.svg"
                />
                <img
                  className={styles.fbIcon}
                  loading="lazy"
                  alt=""
                  src="/fb.svg"
                />
                <div className={styles.secondarySocialIcon}>
                  <img
                    className={styles.twiterIcon}
                    loading="lazy"
                    alt=""
                    src="/twiter.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame;
