import React from "react";
import "./FeaturedReview.css";

const FeaturedReview = ({ ftImage, ftName, ftPosition, ftReview }) => {
  return (
    <div className="ft-review">
      <img src={ftImage} alt="ftImage" />
      <div className="ft-review-profile">
        <h3>{ftName}</h3>
        <p>{ftPosition}</p>

        <div className="ft-star">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.35573L14.9887 7.41144L15.1283 7.6943L15.4404 7.73966L22.1233 8.71074L17.2875 13.4244L17.0617 13.6446L17.115 13.9555L18.2565 20.6114L12.2792 17.4689L12 17.3221L11.7208 17.4689L5.74346 20.6114L6.88503 13.9555L6.93835 13.6446L6.71247 13.4244L1.8767 8.71074L8.55957 7.73966L8.87173 7.6943L9.01133 7.41144L12 1.35573Z"
              fill="#FEB703"
              stroke="#967C4E"
              stroke-width="1.2"
            />
          </svg>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.35573L14.9887 7.41144L15.1283 7.6943L15.4404 7.73966L22.1233 8.71074L17.2875 13.4244L17.0617 13.6446L17.115 13.9555L18.2565 20.6114L12.2792 17.4689L12 17.3221L11.7208 17.4689L5.74346 20.6114L6.88503 13.9555L6.93835 13.6446L6.71247 13.4244L1.8767 8.71074L8.55957 7.73966L8.87173 7.6943L9.01133 7.41144L12 1.35573Z"
              fill="#FEB703"
              stroke="#967C4E"
              stroke-width="1.2"
            />
          </svg>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.35573L14.9887 7.41144L15.1283 7.6943L15.4404 7.73966L22.1233 8.71074L17.2875 13.4244L17.0617 13.6446L17.115 13.9555L18.2565 20.6114L12.2792 17.4689L12 17.3221L11.7208 17.4689L5.74346 20.6114L6.88503 13.9555L6.93835 13.6446L6.71247 13.4244L1.8767 8.71074L8.55957 7.73966L8.87173 7.6943L9.01133 7.41144L12 1.35573Z"
              fill="#FEB703"
              stroke="#967C4E"
              stroke-width="1.2"
            />
          </svg>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.35573L14.9887 7.41144L15.1283 7.6943L15.4404 7.73966L22.1233 8.71074L17.2875 13.4244L17.0617 13.6446L17.115 13.9555L18.2565 20.6114L12.2792 17.4689L12 17.3221L11.7208 17.4689L5.74346 20.6114L6.88503 13.9555L6.93835 13.6446L6.71247 13.4244L1.8767 8.71074L8.55957 7.73966L8.87173 7.6943L9.01133 7.41144L12 1.35573Z"
              fill="#FEB703"
              stroke="#967C4E"
              stroke-width="1.2"
            />
          </svg>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.35573L14.9887 7.41144L15.1283 7.6943L15.4404 7.73966L22.1233 8.71074L17.2875 13.4244L17.0617 13.6446L17.115 13.9555L18.2565 20.6114L12.2792 17.4689L12 17.3221L11.7208 17.4689L5.74346 20.6114L6.88503 13.9555L6.93835 13.6446L6.71247 13.4244L1.8767 8.71074L8.55957 7.73966L8.87173 7.6943L9.01133 7.41144L12 1.35573Z"
              fill="#FEB703"
              stroke="#967C4E"
              stroke-width="1.2"
            />
          </svg>
        </div>
        <p className="ft-review-sum">{ftReview}</p>
      </div>
    </div>
  );
};

export default FeaturedReview;
