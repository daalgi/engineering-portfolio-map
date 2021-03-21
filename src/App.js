import { useState } from 'react'
import {
    ComposableMap, Graticule, ZoomableGroup
} from "react-simple-maps"

import './App.css'
import Header from './Components/Header'
import WorldMap from './Components/WorldMap'
import Tooltip from "./Components/Tooltip"



const App = () => {
    const [tooltip, setTooltip] = useState({ country: "", items: [] })
    // console.log(tooltip)
    return (
        <div className="container">
            <Header />
            <ComposableMap data-tip="">
                <ZoomableGroup
                    // translateExtent={[[-100, -100], [100, 100]]}
                    minZoom={1}
                    maxZoom={2}
                    center={[0, -20]}
                >
                    <Graticule stroke="hsl(0, 0%, 43%)" />
                    <WorldMap setTooltip={setTooltip} />
                </ZoomableGroup>
            </ComposableMap>
            <Tooltip data={tooltip} />
        </div>
    )
}

export default App
