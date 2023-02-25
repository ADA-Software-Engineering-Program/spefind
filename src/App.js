import "./App.css";
import FeaturedReview from "./Components/FeaturedReview/FeaturedReview";
import FeaturedSpeakersCard from "./Components/FeaturedSpeakersCard/FeaturedSpeakersCard";
import Navbar from "./Components/Navbar/Navbar";
import SummaryDetail from "./Components/SummaryDetail/SummaryDetail";

function App() {
  return (
    <div className="main-page">
      <Navbar />
      <main>
        <div className="hero-section">
          <section className="hero-main">
            <h3 className="hero-h3">
              <span style={{ fontSize: "1.5rem" }}>
                Speakers and event organizers:
                <br />
              </span>
              genius comes <br /> in all{" "}
              <span style={{ color: "#E3502F" }}>colors</span>
            </h3>
            <p className="hero-summary">
              If your’e tired of being unnoticed.. if you lack confidence in
              your work.. if you’re seeking for job opportunities.. stop
              worrying. Spefind has got you covered. We are solely here to widen
              and expand the genius in you.
              <strong>
                <span style={{ color: "#359E4C" }}>
                  {" "}
                  Are you ready to be discovered?
                </span>
              </strong>
            </p>
            <button className="hero-button">
              Get Started
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1172 6.43091L21.387 12.7007L15.1172 18.9704"
                  stroke="black"
                  stroke-width="1.54937"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.82764 12.7009H21.2115"
                  stroke="black"
                  stroke-width="1.54937"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </section>
          <section className="hero-img">
            <img src="./assets/hero-img-3.png" alt="hero-img" />
            <div>
              <img src="./assets/hero-img-2.png" alt="hero-img" />
              {/* <img src="./assets/hero-img-5.png" alt="hero-img" /> */}
            </div>
            <img src="./assets/hero-img-4.png" alt="hero-img" />
          </section>
        </div>

        {/* END OF HERO SECTION */}

        <section className="ft-speaker-section">
          <input type="text" placeholder="search for speaker" />
          <h1 className="ft-speaker-head">
            Top Overall featured{" "}
            <span style={{ color: "var(--orange)" }}>Speakers</span>
          </h1>
          <div className="ft-speaker-card">
            <FeaturedSpeakersCard
              speakerImage="./assets/ft-speaker-1.png"
              speakerName="Augustina Mobolaji"
            />
            <FeaturedSpeakersCard
              speakerImage="./assets/ft-speaker-2.png"
              speakerName="Zainab Yakub"
            />
            <FeaturedSpeakersCard
              speakerImage="./assets/ft-speaker-3.png"
              speakerName="Olumide Salami"
            />
            <FeaturedSpeakersCard
              speakerImage="./assets/ft-speaker-4.png"
              speakerName="Augustina Mobolaji"
            />
            <FeaturedSpeakersCard
              speakerImage="./assets/ft-speaker-5.png"
              speakerName="Sekinat Ndukwu"
            />
          </div>
        </section>

        {/* END OF FT SPEAKER CARD SECTION */}

        <summary className="summary-summary">
          <h1>
            Why find <span style={{ color: "var(--orange)" }}>speakers</span> on
            our site?
          </h1>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
        </summary>

        <summary className="summary-detail">
          <h1>
            Why join our site as a{" "}
            <span style={{ color: "var(--orange)" }}>speaker?</span>
          </h1>
          <div className="details">
            <SummaryDetail
              detailHead="Increased Visibility"
              detailSummary="Joining an event speakers platform can increase your visibility and help you reach a broader audience. Platforms typically have a large user base of event planners, conference organizers, and businesses looking for speakers for their events. By joining, you can increase your chances of getting discovered and booked for speaking engagements."
            />

            <SummaryDetail
              detailHead="Networking Opportunities"
              detailSummary="Joining an event speakers platform can increase your visibility and help you reach a broader audience. Platforms typically have a large user base of event planners, conference organizers, and businesses looking for speakers for their events. By joining, you can increase your chances of getting discovered and booked for speaking engagements."
            />

            <SummaryDetail
              detailHead="Better Access To Events"
              detailSummary="By joining an event speakers platform, you can gain access to a range of speaking opportunities that you may not have been able to find otherwise. These platforms often provide access to events that are not publicly advertised or are exclusive to members. "
            />

            <SummaryDetail
              detailHead="Marketing and Promotion"
              detailSummary="Many event speakers platforms offer marketing and promotional support to their members. This can include social media promotion, email campaigns, and other promotional activities that can help you reach a wider audience."
            />

            <SummaryDetail
              detailHead="Profesional Development"
              detailSummary="By joining an event speakers platform, you can learn from other speakers and access resources that can help you improve your skills as a speaker. This can include tips on crafting engaging presentations, building your personal brand, and improving your stage presence."
            />
          </div>
        </summary>

        {/* END OF SUMMARY DETAIL SECTION */}

        <section className="ft-reviews">
          <h1>Feature Reviews</h1>
          <div className="reviews">
            <FeaturedReview
              ftImage="./assets/ft-review-1.png"
              ftName="Omarinwale Gold"
              ftPosition="Abbey Event Planning"
              ftReview="This has been such an important website for me. Finding quality public speakers can be quite difficult. But with this website, I just simply browse till I find the best fit for me"
            />
            <FeaturedReview
              ftImage="./assets/ft-review-2.png"
              ftName="Ola Silver"
              ftPosition="Lerd Events"
              ftReview="I love how you can browse through different categories on on website. Super time efficient!"
            />
            <FeaturedReview
              ftImage="./assets/ft-review-3.png"
              ftName="Chike Tife"
              ftPosition="Lerd Events"
              ftReview="I love this website so much!!!"
            />
            <FeaturedReview
              ftImage="./assets/ft-review-4.png"
              ftName="Ojukwu Peace"
              ftPosition="Abey Event Planning"
              ftReview="This has been such an important website for me. Finding quality public speakers can be quite difficult. But with this website, I just simply browse till I find the best fit for me"
            />
            <FeaturedReview
              ftImage="./assets/ft-review-5.png"
              ftName="Tobi Tobe"
              ftPosition="Lerd Events"
              ftReview="I love how you can browse through different categories on on website. Super time efficient!"
            />
            <FeaturedReview
              ftImage="./assets/ft-review-6.png"
              ftName="Adeshina Sola"
              ftPosition="Lerd Events"
              ftReview="I love website so much!"
            />
          </div>
        </section>
        <div className="message-container">
          <svg
            width="69"
            height="69"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.6925 31.0213V42.5213C51.6925 43.2688 51.6638 43.9875 51.5775 44.6775C50.9163 52.44 46.345 56.2925 37.9213 56.2925H36.7713C36.0525 56.2925 35.3625 56.6375 34.9312 57.2125L31.4813 61.8125C29.9575 63.8537 27.485 63.8537 25.9612 61.8125L22.5112 57.2125C22.1375 56.7237 21.3038 56.2925 20.6713 56.2925H19.5213C10.35 56.2925 5.75 54.0213 5.75 42.5213V31.0213C5.75 22.5975 9.63127 18.0263 17.365 17.365C18.055 17.2788 18.7738 17.25 19.5213 17.25H37.9213C47.0925 17.25 51.6925 21.85 51.6925 31.0213Z"
              stroke="#5F5E73"
              stroke-width="4.3125"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M63.1927 19.5213V31.0213C63.1927 39.4738 59.3115 44.0163 51.5777 44.6775C51.664 43.9875 51.6927 43.2688 51.6927 42.5213V31.0213C51.6927 21.85 47.0927 17.25 37.9215 17.25H19.5215C18.774 17.25 18.0552 17.2788 17.3652 17.365C18.0265 9.63127 22.5977 5.75 31.0215 5.75H49.4215C58.5927 5.75 63.1927 10.35 63.1927 19.5213Z"
              stroke="#5F5E73"
              stroke-width="4.3125"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.7996 38.0938H38.8254"
              stroke="#5F5E73"
              stroke-width="5.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.7371 38.0938H28.7629"
              stroke="#5F5E73"
              stroke-width="5.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.6746 38.0938H18.7004"
              stroke="#5F5E73"
              stroke-width="5.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <footer className="footer-main">
          <div className="event-button">
            <button
              className="event-btn"
              style={{
                backgroundColor: "inherit",
                color: "var(--white)",
              }}
            >
              Event Organizer
            </button>
            <button
              className="event-btn"
              style={{
                backgroundColor: "var(--white)",
                color: "var(--orange)",
              }}
            >
              Speaker
            </button>
          </div>
          <form>
            <div className="sub-form">
              <label>
                Subscribe to our <br /> newsletter
              </label>
              <input type="text" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </div>
          </form>

          <nav className="footer-links">
            <section className="footer-nav">
              <h2>NAVIGATION</h2>
              <div>
                <li>
                  <a href="#" alt="nav">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Login
                  </a>
                </li>
              </div>
            </section>
            <section className="footer-legal">
              <h2>LEGAL</h2>
              <div>
                <li>
                  <a href="#" alt="nav">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Terms of Service
                  </a>
                </li>
              </div>
            </section>
            <section className="footer-contact">
              <h2>TALK TO US</h2>
              <div>
                <li>
                  <a href="#" alt="nav">
                    support@spefind.com
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    +234 121345454
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="#" alt="nav">
                    Twitter
                  </a>
                </li>
              </div>
            </section>
          </nav>
          <section className="footer-summary">
            <div className="logo-container">
              <h1 style={{ letterSpacing: "1rem" }}>SPEFIND</h1>
              <h6>Connecting Speakers to the world</h6>
            </div>
            <div className="copyright">
              © 2023 Spefind . All Rights Reserved.
            </div>
            <div className="socials">
              <svg
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.25"
                  x="0.606445"
                  y="1.28857"
                  width="40.9099"
                  height="39.9992"
                  rx="19"
                  stroke="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.9662 29.1727V21.2877H17.2998V18.5703H18.9662V16.9388C18.9662 14.722 19.9072 13.4038 22.5806 13.4038H24.8063V16.1215H23.4151C22.3744 16.1215 22.3056 16.5012 22.3056 17.2099L22.3018 18.57H24.8221L24.5272 21.2874H22.3018V29.1727H18.9662Z"
                  fill="white"
                />
              </svg>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.25"
                  x="0.5625"
                  y="1.28857"
                  width="40.9099"
                  height="39.9992"
                  rx="19"
                  stroke="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.2561 28.121H14.0322V18.6597H17.2561V28.121Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.6346 16.5571H15.6162C14.6542 16.5571 14.0322 15.8559 14.0322 14.9797C14.0322 14.0849 14.6731 13.4033 15.6534 13.4033C16.6338 13.4033 17.2375 14.0849 17.2561 14.9797C17.2561 15.8559 16.6338 16.5571 15.6346 16.5571Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.0767 28.1208H25.9088V23.1752C25.9088 21.933 25.4503 21.0853 24.3035 21.0853C23.4283 21.0853 22.907 21.6568 22.678 22.2087C22.5942 22.4065 22.5737 22.6821 22.5737 22.9584V28.121H19.4053C19.4053 28.121 19.447 19.7444 19.4053 18.877H22.5737V20.1863C22.9941 19.5569 23.7472 18.6597 25.4292 18.6597C27.5139 18.6597 29.0768 19.9812 29.0768 22.8205L29.0767 28.1208Z"
                  fill="white"
                />
              </svg>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.25"
                  x="0.516602"
                  y="1.28857"
                  width="40.9099"
                  height="39.9992"
                  rx="19"
                  stroke="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.7695 18.5821L20.7998 19.0823L20.2951 19.021C18.458 18.7863 16.853 17.9901 15.4903 16.6529L14.8241 15.9894L14.6525 16.4794C14.2892 17.5716 14.5213 18.725 15.2784 19.5008C15.6821 19.9295 15.5913 19.9908 14.8948 19.7356C14.6525 19.6539 14.4406 19.5927 14.4204 19.6233C14.3497 19.6947 14.592 20.6236 14.7838 20.9911C15.0462 21.5015 15.5812 22.0016 16.1666 22.2977L16.6613 22.5324L16.0758 22.5426C15.5105 22.5426 15.4903 22.5529 15.5509 22.7672C15.7528 23.4307 16.5502 24.135 17.4385 24.4413L18.0643 24.6556L17.5193 24.9823C16.7117 25.4518 15.7629 25.7172 14.814 25.7376C14.3598 25.7478 13.9863 25.7887 13.9863 25.8193C13.9863 25.9214 15.2178 26.493 15.9345 26.7175C18.0845 27.381 20.6383 27.0952 22.5562 25.9622C23.9189 25.1558 25.2816 23.5532 25.9175 22.0016C26.2607 21.1748 26.6039 19.6641 26.6039 18.9394C26.6039 18.4698 26.6342 18.4086 27.1995 17.8472C27.5326 17.5205 27.8455 17.1633 27.9061 17.0612C28.007 16.8672 27.9969 16.8672 27.4821 17.0408C26.6241 17.347 26.503 17.3062 26.9269 16.8468C27.2399 16.5202 27.6133 15.9281 27.6133 15.7546C27.6133 15.724 27.4619 15.775 27.2903 15.8669C27.1086 15.969 26.7049 16.1221 26.402 16.214L25.857 16.3875L25.3624 16.0506C25.0898 15.8669 24.7062 15.6627 24.5044 15.6015C23.9896 15.4586 23.2022 15.479 22.7379 15.6423C21.4761 16.1017 20.6787 17.2857 20.7695 18.5821Z"
                  fill="white"
                />
              </svg>
            </div>
          </section>
        </footer>
      </main>
    </div>
  );
}

export default App;
