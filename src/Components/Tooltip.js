import ReactTooltip from "react-tooltip"


const Tooltip = ({ data }) =>
    <ReactTooltip >
        {data && (
            <>
                <p>{data?.country}</p>
                <ul>
                    {data.items.map((item, i) => {
                        let s = item.field
                        if (item.subfield)
                            s += ' - ' + item.subfield
                        if (item.type)
                            s += ' - ' + item.type
                        if (item.number)
                            s += ` (${item.number})`
                        return <li key={i}>{s}</li>
                    })}
                </ul>
            </>
        )}
    </ReactTooltip>

export default Tooltip