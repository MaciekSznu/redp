import React from "react";
import styles from "./LocationView.module.scss";
import { ReactComponent as HexagonLocalization } from "../../assets/helpers/hexagons-localization.svg";
import { ReactComponent as NatureIcon } from "../../assets/icons/nature-icon.svg";
import { ReactComponent as CenterIcon } from "../../assets/icons/center-icon.svg";
import { ReactComponent as NeighbourhoodIcon } from "../../assets/icons/neighbourhood-icon.svg";
import { ReactComponent as Flag } from "../../assets/helpers/flag.svg";
import { ReactComponent as TramIcon } from "../../assets/icons/tram-icon.svg";
import { ReactComponent as BusIcon } from "../../assets/icons/bus-icon.svg";
import { ReactComponent as ShopIcon } from "../../assets/icons/shop-icon.svg";
import { ReactComponent as GymIcon } from "../../assets/icons/gym-icon.svg";
import { ReactComponent as DoctorIcon } from "../../assets/icons/doctor-icon.svg";
import { ReactComponent as EducationIcon } from "../../assets/icons/education-icon.svg";

// import { ReactComponent as QuaotationMark } from "../../assets/helpers/quotation-mark.svg";

const LocationView = () => {
  return (
    <>
      <div className={styles.LocationContainer}>
        <div className={styles.ContentWrapperTop}>
          <h2 className={styles.LocationTitle}>Lokalizacja</h2>
          <p className={styles.LocationParagraph}>
            Szukasz własnego miejsca w otoczeniu natury a jednocześnie blisko miejskich udogodnień? Marzy Ci się
            funkcjonalne i ergonomiczne mieszkanie zlokalizowane w przyjaznej okolicy Krakowa? Sprawdź naszą najnowszą
            inwestycję i zatrzymaj się na lata.
          </p>
        </div>
        <div className={styles.FullWidthBannerTop}>
          <div className={styles.BannerLeftContent}></div>
          <div className={styles.TextWrapper}>
            <h3 className={styles.LeadText}>osiedle koralowa II</h3>
            <p className={styles.AdditionalText}>podgórze</p>
            <p className={styles.AdressText}>ul. Koralowa 20</p>
            <p className={styles.AdressText}>30-675 Kraków</p>
          </div>
          <HexagonLocalization className={styles.LocationHexagons} />
          <div className={styles.BannerRightContent}></div>
        </div>
        <div className={styles.FullWidthMapWrapper}>
          <h3 className={styles.LocationSubTitle}>poznaj okolicę</h3>
          <div className={styles.FullWidthMap}></div>
          <div className={styles.ButtonWrapper}>
            <button className={styles.LocationButton}>zobacz w google maps</button>
          </div>
        </div>
        <div className={styles.LocationAttributesContainer}>
          <div className={styles.LocationAttributesMain}>
            <div className={styles.IconWrapper01}>
              <Flag className={styles.Flag} />
              <div className={styles.Description}>
                <p className={styles.DescriptionText}>przystanek</p>
                <p className={styles.DescriptionText}>trmwajowy</p>
              </div>
              <TramIcon className={styles.Icon} />
            </div>
            <div className={styles.IconWrapper02}>
              <Flag className={styles.Flag} />
              <div className={styles.Description}>
                <p className={styles.DescriptionText}>przystanek</p>
                <p className={styles.DescriptionText}>autobusowy</p>
              </div>
              <BusIcon className={styles.Icon} />
            </div>
            <div className={styles.DescriptionWrapper}>
              <h3 className={styles.DescriptionHeader}>BĄDŹ W KONTAKCIE Z CENTRUM MIASTA</h3>
              <p className={styles.DescriptionText}>
                Na oddalonej 8 minut piechotą ulicy Tynieckiej zlokaliowany jest główny węzeł komunikacyjny w tej części
                Krakowa. Odjeżdżają stamtąd tramwaje <strong>lini 24 i 50</strong> oraz{" "}
                <strong>autobusy 124 i 140</strong>, które zapewniają dojazd w każdą część miasta.
              </p>
            </div>
          </div>
          <div className={styles.LocationAttributesAdditional}>
            <details className={styles.LocationAttributesDetails}>
              <summary className={styles.LocationAttributesSummary}>
                <button className={styles.LocationAttributesButton}>zobacz więcej</button>
              </summary>
              <div className={styles.LocationAttributesSecondary}>
                <div className={styles.IconWrapper01}>
                  <Flag className={styles.Flag} />
                  <div className={styles.Description}>
                    <p className={styles.DescriptionText}>sklepy</p>
                    <p className={styles.DescriptionText}>galerie handlowe</p>
                  </div>
                  <ShopIcon className={styles.Icon} />
                </div>
                <div className={styles.IconWrapper02}>
                  <Flag className={styles.Flag} />
                  <div className={styles.Description}>
                    <p className={styles.DescriptionText}>siłownie</p>
                    <p className={styles.DescriptionText}>kluby fitness</p>
                  </div>
                  <GymIcon className={styles.Icon} />
                </div>
                <div className={styles.DescriptionWrapper}>
                  <h3 className={styles.DescriptionHeader}>KORZYSTAJ Z UROKÓW MIASTA</h3>
                  <p className={styles.DescriptionText}>
                  W okolicy znajdziesz również najbardziej popularne lokale handlowo-usługowe oraz <strong>Galerię Handlową</strong>. Bez problemu znajdziesz także liczne siłownie i najbardziej popularne kluby fitness.
                  </p>
                </div>
              </div>
              <div className={styles.LocationAttributesSecondary}>
                <div className={styles.IconWrapper01}>
                  <Flag className={styles.Flag} />
                  <div className={styles.Description}>
                    <p className={styles.DescriptionText}>gabinety</p>
                    <p className={styles.DescriptionText}>lekarskie</p>
                  </div>
                  <DoctorIcon className={styles.Icon} />
                </div>
                <div className={styles.IconWrapper02}>
                  <Flag className={styles.Flag} />
                  <div className={styles.Description}>
                    <p className={styles.DescriptionText}>szkoły</p>
                    <p className={styles.DescriptionText}>przedszkola</p>
                  </div>
                  <EducationIcon className={styles.Icon} />
                </div>
                <div className={styles.DescriptionWrapper}>
                  <h3 className={styles.DescriptionHeader}>ZDROWIE I EDUKACJA w sąsiedztwie</h3>
                  <p className={styles.DescriptionText}>
                  W dzielnicy zlokalizowane są liczne prywatne i państwowe <strong>placówki służby zdrowia</strong>, w tym <strong>gabinety dentystyczne i fizjoterapeutyczne</strong>. W sąsiedztwie znajdziesz również <strong>żłobki, przedszkola</strong> oraz <strong>szkoły podstawowe i średnie</strong>.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
        <div className={styles.LocationIconsContainer}>
          <h3 className={styles.LocationSubTitle}>zamieszkaj w najpiękniejszej części krakowa</h3>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <NatureIcon className={styles.IconBackground} />
            </div>
            <p className={styles.IconTitle}>#bliskonatury</p>
          </div>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <CenterIcon className={styles.IconBackground} />
            </div>
            <p className={styles.IconTitle}>#bliskocentrum</p>
          </div>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <NeighbourhoodIcon className={styles.IconBackground} />
            </div>
            <p className={styles.IconTitle}>#posąsiedzku</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationView;
