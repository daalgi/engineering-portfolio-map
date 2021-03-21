import { useState } from 'react'
import {
    ComposableMap, Graticule, ZoomableGroup
} from "react-simple-maps"

import './App.css'
import Header from './Components/Header'
import WorldMap from './Components/WorldMap'
import Tooltip from "./Components/Tooltip"
// import { 
//     geoCylindricalEqualAreaRaw, geoPolyhedralWaterman, 
//     geoBerghaus, geoBertin1953, geoChamberlinAfrica
// } from "d3-geo-projection"


const App = () => {
    const [tooltip, setTooltip] = useState({ country: "", items: [] })
    // console.log(tooltip)
    return (
        <div className="container">
            <Header />
            <ComposableMap data-tip=""
                // projection={geoChamberlinAfrica()}
                projection="geoMercator"
                projectionConfig={{
                    scale: 120,
                    rotation: [-11, 0, 0],
                    center: [0, -35]
                }}
            >
                <ZoomableGroup
                    // translateExtent={[[-100, -100], [100, 100]]}
                    minZoom={1}
                    maxZoom={2}
                    center={[0, 0]}
                >
                    <Graticule stroke="hsl(0, 0%, 22%)" />
                    <WorldMap setTooltip={setTooltip} />
                </ZoomableGroup>
            </ComposableMap>
            <Tooltip data={tooltip} />
        </div>
    )
}

export default App
