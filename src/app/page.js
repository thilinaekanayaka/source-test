import Image from "next/image";
import styles from "./page.module.css";
import JobCard from "./shared/JobCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.links}>
          <p className={styles.siteTitle}>Software Recruitement co.</p>
          <p className={styles.itemLink}>For jobseekers <FontAwesomeIcon icon={faCaretDown} style={{ height: 10, width: 10 }} /></p>
          <p className={styles.itemLink}>For clients <FontAwesomeIcon icon={faCaretDown} style={{ height: 10, width: 10 }} /></p>
          <p className={styles.itemLink}>Sectors <FontAwesomeIcon icon={faCaretDown} style={{ height: 10, width: 10 }} /></p>
          <p className={styles.itemLink}>Resources <FontAwesomeIcon icon={faCaretDown} style={{ height: 10, width: 10 }} /></p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btnUpload}>Upload CV</button>
          <button className={styles.btnContact}>Contact us</button>
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.description}>
          <p className={styles.subtitle}>Software Recruitement Specialists</p>
          <p className={styles.maintitle}>Elevate your career</p>
          <div className={styles.searchJobs}>
            <input placeholder="E.g.networking" />
            <button>Search Jobs</button>
          </div>
        </div>
        <div>
          <Image
            src="/image.jpeg"
            alt=""
            className={styles.recruiterImg}
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      <div className={styles.companies}>
        <div className={styles.companiesText}>
          <p>Who we work with</p>
        </div>
        <div className={styles.companyLogos}>
          <Image
            src="/companies/microsoft.png"
            alt=""
            className={styles.recruiterImg}
            width={150}
            height={30}
            priority
          />
          <Image
            src="/companies/oracle.png"
            alt=""
            className={styles.recruiterImg}
            width={150}
            height={30}
            priority
          />
          <Image
            src="/companies/atlassian.png"
            alt=""
            className={styles.recruiterImg}
            width={150}
            height={30}
            priority
          />
          <Image
            src="/companies/cloudfare.png"
            alt=""
            className={styles.recruiterImg}
            width={150}
            height={30}
            priority
          />
          <Image
            src="/companies/vmware.png"
            alt=""
            className={styles.recruiterImg}
            width={150}
            height={30}
            priority
          />
        </div>
      </div>

      <div className={styles.latestJobs}>
        <div className={styles.jobsText}>
          <p>Latest Jobs</p>
        </div>
        <div className={styles.sections}>
          <JobCard textColor='#084ea3' backgroundColor='#fcdf69' />
          <JobCard textColor='#ffffff' backgroundColor='#084ea3' />
          <JobCard textColor='#084ea3' backgroundColor='#f99e76' />
        </div>
        <div className={styles.navigation}>
          <div>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ height: 25, width: 25, cursor: 'pointer' }} />
            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ height: 25, width: 25, paddingLeft: 15, cursor: 'pointer' }} />
          </div>
          <div>
            <p className={styles.moreLink}>View more jobs</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerSection}>
          <p className={styles.sitetitle}>Software Recruitement co.</p>
          <div>
            <FontAwesomeIcon icon={faLinkedinIn} style={{ height: 20, width: 20, paddingRight: 20 }} />
            <FontAwesomeIcon icon={faFacebook} style={{ height: 20, width: 20, paddingRight: 20 }} />
            <FontAwesomeIcon icon={faInstagram} style={{ height: 20, width: 20, paddingRight: 20 }} />
            <FontAwesomeIcon icon={faTwitter} style={{ height: 20, width: 20 }} />
          </div>
        </div>
        <div className={styles.footerSection}>
          <p className={styles.subtitle}>Explore</p>
          <p>Homepage</p>
          <p>For jobseekers</p>
          <p>For clients</p>
          <p>Our Sectors</p>
          <p>Resources</p>
          <p>Contact us</p>
        </div>
        <div className={styles.footerSection}>
          <p className={styles.subtitle}>Sectors</p>
          <p>Software engineering</p>
          <p>DevOps</p>
          <p>Cloud</p>
          <p>Infrastructure</p>
          <p>Testing</p>
          <p>Security</p>
        </div>
        <div className={styles.footerSection}>
          <p className={styles.subtitle}>Services</p>
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
        </div>
      </div>
    </main>
  );
}
