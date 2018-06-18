import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length)
}

const Chart = ({height=150, width=250, data, color, unit}) => {
  return (
    <div>
      <Sparklines width={width} height={height} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {
          `${average(data)} ${unit}`
        }
      </div>
    </div>
  )
}


export default Chart;