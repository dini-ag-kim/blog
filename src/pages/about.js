import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <p>
        Die Curricula-Gruppe der
        {` `}
        <a href="https://dini.de/ag/kim/">DINI-AG-KIM</a>
        {` `}
        befasst sich mit der Beschreibung von Curricula im Bildungsbereich und
        entsprechenden Metadatenstandards. Sie bietet eine Austauschplattform
        für interessierte Personen sowie Fachleute, die gemeinsam Standards und
        Beispiele sammeln wollen, um Curricula maschinenlesbar darzustellen.
      </p>
      <p>
        Die Curricula-Gruppe hat sich aus der
        {` `}
        <a href="https://wiki.dnb.de/display/DINIAGKIM/OER-Metadatengruppe">
          OER-Metadatenguppe
        </a>
        {` `}
        heraus gegründet. Beide Themen sind eng miteinander verwandt, da sie
        sich mit Metadaten im Bildungsbereich befassen, haben jedoch
        unterschiedliche Schwerpunkte. Um ihrer jeweiligen Komplexität dauerhaft
        gerecht zu werden, wurde sich dafür entschieden unter dem Dach der
        DINI-AG-KIM eine eigenständige Gruppe zu gründen, die sich hiermit
        befasst.
      </p>

      <div>
        Themen der Gruppe sind:
        <ul>
          <li>
            Informationszusammenstellungen zum Thema "Metadatenstandards für
            Curricula im Bildungsbereich" (national / international)
          </li>
          <li>
            Adaption / Entwicklung von Standards sowie Wertelisten für die
            deutschsprachige Bildungslandschaft (Schule / Hochschule /
            Berufliche Bildung / Erwachsenenbildung / ...)
          </li>
          <li>
            Formulierung von Whitepapers, die in Projekt-Anträge übernommen
            werden können
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
