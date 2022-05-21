import React from "react";
import Header from "../Component/Header";
import "../Styles/AboutUs.css";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <Header />
      <div class="container accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Experience
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img src={require("../Assets/image_1.jpg")} />
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <p>
                  {" "}
                  Dr Yip has clinical experience in acupuncture and Chinese
                  Medicine in both Hong Kong and Melbourne.{" "}
                </p>
                <p>AHPRA qualified - </p>
                <ul>
                  <li>Registered Chinese Medicine Practitioner </li>
                  <li>Registered Acupuncturist </li>
                  <li>Registered Chinese Medicine Dispenser</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Trust
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img src={require("../Assets/image_1.jpg")} />
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <p>
                  {" "}
                  Dr Yip has clinical experience in acupuncture and Chinese
                  Medicine in both Hong Kong and Melbourne.{" "}
                </p>
                <p>AHPRA qualified - </p>
                <ul>
                  <li>Registered Chinese Medicine Practitioner </li>
                  <li>Registered Acupuncturist </li>
                  <li>Registered Chinese Medicine Dispenser</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Best Clinic
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img src={require("../Assets/image_1.jpg")} />
              <div
                style={{ display: "flex", flexDirection: "column", flex: "1" }}
              >
                <p>
                  {" "}
                  Dr Yip has clinical experience in acupuncture and Chinese
                  Medicine in both Hong Kong and Melbourne.{" "}
                </p>
                <p>AHPRA qualified - </p>
                <ul>
                  <li>Registered Chinese Medicine Practitioner </li>
                  <li>Registered Acupuncturist </li>
                  <li>Registered Chinese Medicine Dispenser</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
