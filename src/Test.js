import React from "react";
import { ORFrame } from 'semiotic'
const answers = [
  {"question":"Question 1", "type":"disagree", "color":"#d38779", "value":-100, "percent":-16.66},
  {"question":"Question 2", "type":"stronglydisagree", "color":"#b3331d", "value":-200, "percent":-33.33},
  {"question":"Question 3", "type":"agree", "color":"#00a2ce", "value":300, "percent":50}
]
export default class DivergingStackedBar extends React.Component {
  render() {
    return (<div className="test-container">
      <h1>A diverging Bar Chart With Negative Values</h1>
      <ORFrame
        size={[ 700,500 ]}
        data={answers}
        type="bar"
        projection="horizontal"
        oAccessor={"question"}
        rAccessor={"percent"}
        style={d => ({ fill: d.color })}
        margin={{ top: 30, bottom: 0, left: 80, right: 50 }}
        oPadding={20}
        oLabel={true}
        axis={{ orient: "top", tickValues: [ -33.33, -16.66, 0, 50]}}
      />
    </div>)
  } // End of the render function
} // End of the component