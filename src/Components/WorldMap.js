import { Geographies, Geography } from "react-simple-maps"

import projects from "../portfolio_by_country.json"
import world from "../world-110m.json"


// const geoUrl =
//     "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const WorldMap = ({ setTooltip }) =>
    <Geographies geography={world}>
        {({ geographies }) =>
            geographies.map(geo => {
                const { NAME } = geo.properties
                return (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() =>
                            projects[NAME] &&
                            setTooltip({ country: NAME, items: projects[NAME] })
                        }
                        onMouseLeave={() => setTooltip("")}
                        style={{
                            default: {
                                fill: projects[NAME]
                                    ? "hsl(13, 53%, 53%)"
                                    : "hsl(213, 13%, 43%)",
                                outline: "hsl(213, 13%, 83%)"
                            },
                            hover: {
                                fill: projects[NAME]
                                    ? "hsl(13, 53%, 58%)"
                                    : "hsl(213, 13%, 48%)",
                                outline: "white"
                            },
                            pressed: {
                                fill: "#E42",
                                outline: "none"
                            }
                        }}
                    />
                )
            })
        }

    </Geographies>

export default WorldMap