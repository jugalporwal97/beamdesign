import React, {useState} from "react";

import "./App.css";

function App() {
  //hooks
  const [fy, setFy] = useState(0);
  const [fck, setfck] = useState(0);
  const [es, setes] = useState(0);
  const [b, setb] = useState(0);
  const [mu, setmu] = useState(0);
  const [bb, setbb] = useState(0);
  const [bt, setbt] = useState(0);
  const [xumaxd, setxumaxd] = useState(0);
  const [qlim, setqlim] = useState(0);
  const [edd, setedd] = useState(0);
  const [phibar, setphibar] = useState(0);

  let varxu = 0;
  let varqlim = 0;
  let varedd = 0;

  return (
    <div className="App">
      <h1>Beam Design Application</h1>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>fy = characteristic strength of steel : </h4>
        <select
          onChange={(e) => {
            setFy(parseInt(e.target.value));
          }}
        >
          <option value="">Select</option>

          <option value="250">250</option>
          <option value="415">415</option>
          <option value="500">500</option>
          <option value="550">550</option>
        </select>
        <h4>N/mm2</h4>
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Fck = characteristic compressive strength of concrete :</h4>
        <select
          onChange={(e) => {
            setfck(parseInt(e.target.value));
          }}
        >
           <option value="">Select</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
        <h4>N/mm2</h4>
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Es = modulus of elasticity of steel :</h4>

        <input
          onChange={(e) => {
            setes(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value: 200000"
        />
        <h4>N/mm2</h4>
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>b= width of section :</h4>

        <input
          onChange={(e) => {
            setb(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value: 230"
        />
        <h4>mm</h4>
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Mu = factored ( ultimate ) Bending Moment :</h4>

        <input
          onChange={(e) => {
            setmu(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value: 100"
        />
        <h4>KNm</h4>
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Beam Bottom Clear cover :</h4>

        <input
          onChange={(e) => {
            setbb(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value: 30"
        />
        <h4>mm</h4>
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Beam Top Clear cover :</h4>

        <input
          onChange={(e) => {
            setbt(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value: 30"
        />
        <h4>mm</h4>
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4> Xu,max / d :</h4>
        <button
          onClick={() => {
            varxu = 0.0035 / (0.0055 + (0.87 * fy) / es);
            setxumaxd(varxu);
          }}
        >
          Calculate
        </button>

        {xumaxd ? <h4>Result: {xumaxd}</h4> : <h4>enter all the values</h4>}
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Qlim = Limiting moment of resistance factor :</h4>
        <button
          onClick={() => {
            varqlim = 0.36 * xumaxd * [1 - 0.42 * xumaxd] * fck;
            setqlim(varqlim);
          }}
        >
          Calculate
        </button>

        {qlim ? <h4>Result: {qlim}</h4> : <h4>enter all the values</h4>}
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Effective depth d required :</h4>
        <button
          onClick={() => {
            varedd = Math.sqrt(mu / (qlim * b));
            setedd(varedd);
          }}
        >
          Calculate
        </button>

        {edd ? <h4>Result: {edd}</h4> : <h4>enter all the values</h4>}
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <button
          onClick={() => {
            edd <= 500
              ? (varedd = 1.05 * edd)
              : edd >= 500 && edd <= 1000
              ? (varedd = 1.1 * edd)
              : (varedd = edd);

            setedd(varedd);
          }}
        >
          set d require
        </button>
        <h3>{edd}</h3>
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Use, 20 O bar :</h4>
        <select
          onChange={(e) => {
            setphibar(parseInt(e.target.value));
          }}
        >
           <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="12">14</option>
          <option value="12">16</option>
          <option value="12">18</option>
          <option value="12">20</option>
          <option value="12">22</option>
          <option value="12">25</option>
          <option value="12">28</option>
          <option value="12">32</option>
          <option value="12">36</option>
          <option value="12">40</option>
        </select>
      </label>
    </div>
  );
}

export default App;
