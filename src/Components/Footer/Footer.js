import React from 'react'

function Footer() {
  return (
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
              <a href="#Home" alt="nav">
                Home
              </a>
            </li>
            <li>
              <a href="#About" alt="nav">
                About
              </a>
            </li>
            <li>
              <a href="#Explore" alt="nav">
                Explore
              </a>
            </li>
            <li>
              <a href="#Blog" alt="nav">
                Blog
              </a>
            </li>
            <li>
              <a href="#Contact" alt="nav">
                Contact
              </a>
            </li>
            <li>
              <a href="#Login" alt="nav">
                Login
              </a>
            </li>
          </div>
        </section>
        <section className="footer-legal">
          <h2>LEGAL</h2>
          <div>
            <li>
              <a href="#Privacy Policy" alt="nav">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="# Terms of Service" alt="nav">
                Terms of Service
              </a>
            </li>
          </div>
        </section>
        <section className="footer-contact">
          <h2>TALK TO US</h2>
          <div>
            <li>
              <a href="#support" alt="nav">
                support@spefind.com
              </a>
            </li>
            <li>
              <a href="#Phone" alt="nav">
                +234 121345454
              </a>
            </li>
            <li>
              <a href="#Contact Us" alt="nav">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#Facebook" alt="nav">
                Facebook
              </a>
            </li>
            <li>
              <a href="#Linkedin" alt="nav">
                Linkedin
              </a>
            </li>
            <li>
              <a href="# Twitter" alt="nav">
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
        <div className="copyright">© 2023 Spefind . All Rights Reserved.</div>
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
              fillRule="evenodd"
              clipRule="evenodd"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.2561 28.121H14.0322V18.6597H17.2561V28.121Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6346 16.5571H15.6162C14.6542 16.5571 14.0322 15.8559 14.0322 14.9797C14.0322 14.0849 14.6731 13.4033 15.6534 13.4033C16.6338 13.4033 17.2375 14.0849 17.2561 14.9797C17.2561 15.8559 16.6338 16.5571 15.6346 16.5571Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.7695 18.5821L20.7998 19.0823L20.2951 19.021C18.458 18.7863 16.853 17.9901 15.4903 16.6529L14.8241 15.9894L14.6525 16.4794C14.2892 17.5716 14.5213 18.725 15.2784 19.5008C15.6821 19.9295 15.5913 19.9908 14.8948 19.7356C14.6525 19.6539 14.4406 19.5927 14.4204 19.6233C14.3497 19.6947 14.592 20.6236 14.7838 20.9911C15.0462 21.5015 15.5812 22.0016 16.1666 22.2977L16.6613 22.5324L16.0758 22.5426C15.5105 22.5426 15.4903 22.5529 15.5509 22.7672C15.7528 23.4307 16.5502 24.135 17.4385 24.4413L18.0643 24.6556L17.5193 24.9823C16.7117 25.4518 15.7629 25.7172 14.814 25.7376C14.3598 25.7478 13.9863 25.7887 13.9863 25.8193C13.9863 25.9214 15.2178 26.493 15.9345 26.7175C18.0845 27.381 20.6383 27.0952 22.5562 25.9622C23.9189 25.1558 25.2816 23.5532 25.9175 22.0016C26.2607 21.1748 26.6039 19.6641 26.6039 18.9394C26.6039 18.4698 26.6342 18.4086 27.1995 17.8472C27.5326 17.5205 27.8455 17.1633 27.9061 17.0612C28.007 16.8672 27.9969 16.8672 27.4821 17.0408C26.6241 17.347 26.503 17.3062 26.9269 16.8468C27.2399 16.5202 27.6133 15.9281 27.6133 15.7546C27.6133 15.724 27.4619 15.775 27.2903 15.8669C27.1086 15.969 26.7049 16.1221 26.402 16.214L25.857 16.3875L25.3624 16.0506C25.0898 15.8669 24.7062 15.6627 24.5044 15.6015C23.9896 15.4586 23.2022 15.479 22.7379 15.6423C21.4761 16.1017 20.6787 17.2857 20.7695 18.5821Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </footer>
  );
}

export default Footer
