import React from 'react';
import { render } from 'react-dom';
import SuperReactImage from '../../src';
const App = () => (
  <div>
    <div>
      <SuperReactImage
        width="1024"
        height="683.5"
        placeholder="https://farm6.staticflickr.com/5595/31240533935_c50a33f67a_m_d.jpg"
        src="https://farm6.staticflickr.com/5595/31240533935_d66b31677a_k_d.jpg"
      />
    </div>
    <br/>
    <div>
      <SuperReactImage
        width="1024"
        height="683.5"
        placeholder="https://farm6.staticflickr.com/5497/31240523425_c111901f19_m_d.jpg"
        src="https://farm6.staticflickr.com/5497/31240523425_01a0a744a2_k_d.jpg"
      />
    </div>
    <br/>
    <div>
      <SuperReactImage
        width="1024"
        height="683.5"
        placeholder="https://farm6.staticflickr.com/5735/30432634943_45f2aae6d7_m_d.jpg"
        src="https://farm6.staticflickr.com/5735/30432634943_463f41fdec_k_d.jpg"
      />
    </div>
  </div>
);
render(<App />, document.getElementById("root"));
