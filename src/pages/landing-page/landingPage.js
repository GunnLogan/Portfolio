import React from "react"
import "./landingPage.css"
import AboutMe from "../../components/About-Me/aboutMe"
import Header from "../../components/header/header"
import Tech from "../../components/Tech/tech"
import Skills from "../../components/Skills/skills"
import Studies from "../../components/Studies/studies"
import Footer from "../../components/footer/footer"

class LandingPage extends React.Component {

  render() {
    return (
      <div>
      <div className="landingPageBox">
        <AboutMe />
        <Tech />
        <Skills />
        <Studies />
      </div>
      <Footer />
      </div>

    )
  }

}

export default LandingPage
