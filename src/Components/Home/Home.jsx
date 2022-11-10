import React, { useState } from "react";
import "../Home/Home.css";

function Home() {
  const [count, setCount] = useState(true);
  console.log(count);
  return (
    <div className="container">
      <div id="home" style={{ position: "absolute", top: "0" }}></div>
      <div className="navBar">
        <div className="blur"></div>
        <input type="checkbox" id="checkboxToggle" />
        <label for="checkboxToggle" className="hamburger">
          <span className="hamburgerLine"></span>
        </label>
        <div className="menu">
          <a className="aTostyle" href="#home">{count ? "Home" : "Главная"}</a>
          <a href="#aboutMe">{count ? "About me" : "Обо мне"}</a>
          <a href="#skills">{count ? "Skills" : "Навыки"}</a>
          <a href="#portfolio">{count ? "Portfolio" : "Портфолио"}</a>
          <a href="#contacts">{count ? "Contacts" : "Контакты"}</a>
          <div className="languageMenu">
            <div
              onClick={() => setCount(false)}
              style={
                count
                  ? { fontWeight: "initial", cursor: "pointer" }
                  : { fontWeight: "bold", cursor: "default" }
              }
            >
              RU{" "}
            </div>
            <div
              onClick={() => setCount(true)}
              style={
                count
                  ? { fontWeight: "bold", cursor: "default" }
                  : { fontWeight: "initial", cursor: "pointer" }
              }
            >
              {" "}
              ENG
            </div>
          </div>
        </div>
      </div>
      <div className="mainInfo">
        <div className="mainInfoTitle">
          <div className="infoTitle">
            {count ? "Denis" : "Денис"} <br /> {count ? "Novik" : "Новик"}
          </div>
          <div className="infoTitleDesinger">
            {count ? "UI / UX desinger" : "UI / UX дизайнер"} <br />{" "}
            {count ? "24 years old, Minsk" : "24 года, Минск"}
          </div>
          <div>
            <div className="language">
              <div
                onClick={() => setCount(false)}
                style={
                  count
                    ? { fontWeight: "initial", cursor: "pointer" }
                    : { fontWeight: "bold", cursor: "default" }
                }
              >
                RU{" "}
              </div>
              <div style={{ margin: "0 3px", cursor: "default" }}>|</div>
              <div
                onClick={() => setCount(true)}
                style={
                  count
                    ? { fontWeight: "bold", cursor: "default" }
                    : { fontWeight: "initial", cursor: "pointer" }
                }
              >
                {" "}
                ENG
              </div>
            </div>
          </div>
        </div>
        <div className="mainInfoImage"></div>
      </div>
      <div className="block aboutMeList">
        <div id="aboutMe" className="anchor"></div>
        <div className="aboutMeText">
          <div className="headline">{count ? "About me" : "Обо мне"}</div>
          <div>
            {count
              ? "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it."
              : "Привет, я Денис — UX/UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано."}
          </div>
          <div>
            {count
              ? "I'm studying at courses «Web and mobile design interfaces» in IT-Academy."
              : "Я учусь на курсах «Веб и мобильный дизайн интерфейсов» в IT-Академии."}
          </div>
          <div>
            {count
              ? "Ready to implement excellent projects with wonderful people."
              : "Готов реализовать отличные проекты с замечательными людьми."}
          </div>
        </div>
      </div>
      <div className="block skillsList">
        <div id="skills" className="anchor"></div>
        <div className="headline">{count ? "Skills" : "Навыки"}</div>
        <div style={{ paddingBottom: "50px" }}>
          {count
            ? "I work in such programs as"
            : "Работаю в таких программах как"}
        </div>
        <div className="adobeList">
          <div className="abobe">
            <img
              className="adobeImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png"
            ></img>
            <div className="adobeName">
              Adobe <br />
              Photoshop
            </div>
            <div className="starBlock">
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
            </div>
          </div>
          <div className="abobe">
            <img
              className="adobeImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1024px-Adobe_Illustrator_CC_icon.svg.png"
            ></img>
            <div className="adobeName">
              Adobe <br />
              Illustrator
            </div>
            <div className="starBlock">
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
            </div>
          </div>
          <div className="abobe">
            <img
              className="adobeImage"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1024px-Adobe_After_Effects_CC_icon.svg.png"
            ></img>
            <div className="adobeName">
              Adobe <br />
              After Effects
            </div>
            <div className="starBlock">
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg"
              ></img>
            </div>
          </div>
          <div className="abobe">
            <img
              className="adobeImage"
              src="https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg"
            ></img>
            <div className="adobeName">
              Adobe <br />
              InDesign
            </div>
            <div className="starBlock">
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
              ></img>
              <img
                className="star"
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="block portfolioList">
        <div id="portfolio" className="anchor"></div>

        <div className="headline">{count ? "Portfolio" : "Портфолио"}</div>
        <div className="portfolio">
          <div>
            <img src="images/Слой 8.png"></img>
          </div>
          <a href="https://ru.levi.com/" target="_blank">
            {count
              ? "Online fashion store - Homepage"
              : "Интернет-магазин модной одежды - Домашняя страница"}
          </a>
        </div>
        <div className="portfolio">
          <div>
            <img src="images/reebok_web.png"></img>
          </div>
          <a href="https://www.reebok.ru/" target="_blank">
            {count ? "Reebok Store - Concept" : "Магазин Reebok - Концепция"}
          </a>
        </div>
        <div className="portfolio">
          <div>
            <img src="images/reebok_web (1).png"></img>
          </div>
          <a href="https://braun-russia.ru/" target="_blank">
            {count
              ? "Braun Landing Page - Concept"
              : "Целевая страница Braun - Концепция"}
          </a>
        </div>
        {/* <div className="portfolio">
          <div>
            <img src="images/BSPP2266.png"></img>
          </div>
          <a href="https://ru.levi.com/" target="_blank">
            {count
              ? "Online fashion store - Homepage"
              : "Интернет-магазин модной одежды - Домашняя страница"}
          </a>
        </div> */}
      </div>
      <div className="block footer">
      <div id="contacts" className="anchor"></div>

        <div className="headline" style={{ paddingTop: "50px" }}>
          {count ? "Contacts" : "Контакты"}
        </div>
        <div>
          {count
            ? "Want to know more or just chat? You are welcome!"
            : "Хотите узнать больше или просто поболтать? Пожалуйста!"}
        </div>
        <a href="https://www.google.com/intl/ru/gmail/about/" target="_blank">
          <button className="btn">
            {count ? "Send message" : "Отправить сообщение"}
          </button>
        </a>
        <div className="soc">
          <a href="https://www.linkedin.com/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://www.behance.net/" target="_blank">
            <i class="fa-brands fa-square-behance"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </div>
        <div>
          {count ? "Like me on" : "Заходи, я на"} <br />
          LinkedIn, Instagram, Behance, Dribble
        </div>
      </div>
    </div>
  );
}

export default Home;
