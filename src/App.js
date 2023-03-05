import "./App.css";
import "./index.css"
import FeaturedReview from "./Components/FeaturedReview/FeaturedReview";
import FeaturedSpeakersCard from "./Components/FeaturedSpeakersCard/FeaturedSpeakersCard";
import Navbar from "./Components/Navbar/Navbar";
import SummaryDetail from "./Components/SummaryDetail/SummaryDetail";
// import SignIn from "./Components/SignIn/SignIn";
import Footer from "./Components/Footer/Footer";
// import "./Chart/Chart.js"

function App() {
  return (
    <div className="main-page">
      <Navbar />

      <main>
        <div className="hero-section">
          <div className="sectionBody">
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
                worrying. Spefind has got you covered. We are solely here to
                widen and expand the genius in you.{" "}
                <span className="strong"> Are you ready to be discovered?</span>
                {/* <strong>
                  <span className="strong" style={{ color: "#000000" }}>
                    {" "}
                    Are you ready to be discovered?
                  </span>
                </strong> */}
              </p>
              <a href="/SignUp-first">
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
                      strokeWidth="1.54937"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.82764 12.7009H21.2115"
                      stroke="black"
                      strokeWidth="1.54937"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </section>
            <section className="hero-img">
              {/* <img src="./assets/hero-img-1.png" alt="hero-img" /> */}

              <img
                className="image1 "
                src="./assets/hero-img-2.png"
                alt="hero-img"
              />
              <img
                className="image2"
                src="./assets/hero-img-3.png"
                alt="hero-img"
              />

              <img
                className="image3"
                src="./assets/hero-img-4.png"
                alt="hero-img"
              />
              <img
                className="image4"
                src="./assets/hero-img-5.png"
                alt="hero-img"
              />
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
              <div>
                <FeaturedSpeakersCard
                  speakerImage="./assets/ft-speaker-3.png"
                  speakerName="Olumide Salami"
                />
              </div>
              <div>
                <FeaturedSpeakersCard
                  speakerImage="./assets/ft-speaker-4.png"
                  speakerName="Augustina Mobolaji"
                />
              </div>
              <div>
                <FeaturedSpeakersCard
                  speakerImage="./assets/ft-speaker-5.png"
                  speakerName="Sekinat Ndukwu"
                />
              </div>
            </div>
            <div className="ft-speaker-card">
              <div>
                <FeaturedSpeakersCard
                  speakerImage="./assets/ft-speaker-1.png"
                  speakerName="Augustina Mobolaji"
                />
              </div>
              <div>
                <FeaturedSpeakersCard
                  speakerImage="./assets/ft-speaker-2.png"
                  speakerName="Zainab Yakub"
                />
              </div>
              <div>
                <FeaturedSpeakersCard
                  speakerImage="./assets/ft-speaker-3.png"
                  speakerName="Olumide Salami"
                />
              </div>
            </div>
          </section>
        </div>

        {/* END OF FT SPEAKER CARD SECTION */}

        <summary className="summary-summary">
          <h1>
            Why find <span style={{ color: "var(--orange)" }}>speakers</span> on
            our site?
          </h1>
          <p>
            Speakers go through rigorous process and qualifications to join our
            community, this measure is taken to ensure adequacy and quality in
            the speakers we provide. So therefore, our platform offers you the
            best, we offer authenticity. Spefind also has a very good system put
            in place whereby speakers will always be ready and available for
            events except for dire circumstances. Our goal is to make the
            “search for a speaker” process seamless, convenient, and easy for
            event organizers and the world at large.
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
              detailSummary=" By joining an event speakers platform, you can learn from other speakers and access resources that can help you improve your skills as a speaker. This can include tips on crafting engaging presentations, building your personal brand, and improving your stage presence."
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
              ftReview="I love this website so much!!!!"
            />
            <FeaturedReview
              ftImage="./assets/ft-review-4.png"
              ftName="Ojukwu Peace"
              ftPosition="Abey Event Planning"
              ftReview="This has been such an important website for me.
               Finding quality public speakers can be quite difficult. But with this website,
                I just simply browse till I find the best fit for me"
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
              ftReview="I love this website so much!!!!"
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
              strokeWidth="4.3125"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M63.1927 19.5213V31.0213C63.1927 39.4738 59.3115 44.0163 51.5777 44.6775C51.664 43.9875 51.6927 43.2688 51.6927 42.5213V31.0213C51.6927 21.85 47.0927 17.25 37.9215 17.25H19.5215C18.774 17.25 18.0552 17.2788 17.3652 17.365C18.0265 9.63127 22.5977 5.75 31.0215 5.75H49.4215C58.5927 5.75 63.1927 10.35 63.1927 19.5213Z"
              stroke="#5F5E73"
              strokeWidth="4.3125"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.7996 38.0938H38.8254"
              stroke="#5F5E73"
              strokeWidth="5.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.7371 38.0938H28.7629"
              stroke="#5F5E73"
              strokeWidth="5.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.6746 38.0938H18.7004"
              stroke="#5F5E73"
              strokeWidth="5.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <Footer />
      </main>
    </div>
  );
}

 
 
export default App;
