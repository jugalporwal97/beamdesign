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
  const [dreq, setdreq] = useState(0);
  const [phibar, setphibar] = useState(0);
  const [doverall, setdoverall] = useState(0);
  const [edd, setedd] = useState(0);
  const [mulim, setMulim] = useState(0);
  const [hreinforcePerPT, sethreinforcePerPT] = useState(0);
  const [hastrequired, sethastrequired] = useState(0);
  const [hptlim, sethptlim] = useState(0);
  const [hastlim, sethastlim] = useState(0);
  const [hptmin, sethptmin] = useState(0);
  const [hastmin, sethastmin] = useState(0);
  const [hmu2, sethmu2] = useState(0);
  const [Qbarontop, setQbarontop] = useState(0);
  const [hddash, setddash] = useState(0);
  const [hstainESC, setstainEsc] = useState(0);
  const [hfsc, setfsc] = useState(0);
  const [hd, sethd] = useState(0);

  let varxu = 0;
  let varqlim = 0;
  let varedd = 0;
  let vardreq = 0;
  let varmulim = 0;
  var reinforcePerPT = 0;
  var astrequired = 0;
  var d = 0;
  var ptlim = 0;
  var astlim = 0;
  var ptmin = 0;
  var astmin = 0;
  var mu2 = 0;
  var ddash = 0;
  var stainESC = 0;
  var fsc = 0;

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
            varedd = Math.sqrt((mu * 1000000) / (qlim * b));
            setdreq(varedd);
          }}
        >
          Calculate
        </button>

        {dreq ? <h4>Result: {dreq}</h4> : <h4>enter all the values</h4>}
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <button
          onClick={() => {
            dreq <= 500
              ? (varedd = 1.05 * dreq)
              : dreq >= 500 && dreq <= 1000
              ? (varedd = 1.1 * dreq)
              : (varedd = dreq);

            setdreq(varedd);
          }}
        >
          set d require
        </button>
        <h3>{dreq}</h3>
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
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>D overall:</h4>
        <button
          onClick={() => {
            dreq <= 500
              ? (vardreq = dreq + bb + phibar / 2)
              : dreq >= 500 && dreq <= 1000
              ? (vardreq = dreq + bb + phibar / 2 + phibar)
              : (vardreq = dreq);

            setdoverall(vardreq);
          }}
        >
          Calculate
        </button>

        {doverall ? <h4>Result: {doverall}</h4> : <h4>enter all the values</h4>}
      </label>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Provide D overall :</h4>

        <input
          onChange={(e) => {
            setdoverall(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value: 450"
        />
        <h4>mm</h4>
      </label>

      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>effective depth d :</h4>
        <button
          onClick={() => {
            dreq <= 500
              ? (vardreq = doverall - bb - phibar / 2)
              : dreq >= 500 && dreq <= 1000
              ? (vardreq = doverall - bb - phibar / 2 - phibar)
              : (vardreq = doverall);

            setedd(vardreq);
          }}
        >
          Calculate
        </button>

        {edd ? <h4>Result: {edd}</h4> : <h4>enter all the values</h4>}
      </label>
      {edd ? edd >= dreq ? <h1>O,K</h1> : <h1>Change D Overall</h1> : null}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Mu , lim = Limiting moment of resistance:</h4>
        <button
          onClick={() => {
            varmulim = (qlim * b * (edd * edd)) / 1000000;
            setMulim(varmulim);
          }}
        >
          Calculate
        </button>

        {mulim ? <h4>Result: {mulim}</h4> : <h4>enter all the values</h4>}
      </label>
      {mulim ? (
        mu < mulim ? (
          <h1> Design as singly reinforced under-reinforced rectangular section </h1>
        ) : (
          <h1>Design as Doubly reinforced rectangular section </h1>
        )
      ) : null}

      {mu < mulim ? (
        <label style={{display: "flex", flexDirection: "column"}}>
          <h3>MU less than MU,Lim</h3>

          <button
            onClick={() => {
              console.log("clicked");
              reinforcePerPT =
                ((50 * fck) / fy) * (1 - Math.sqrt(1 - (4.6 * mu) / (fck * b * (edd * edd))));
              sethreinforcePerPT(reinforcePerPT);

              astrequired = (reinforcePerPT * b * edd) / 100;
              sethastrequired(astrequired);
              ptlim = ((50 * fck) / fy) * (1 - Math.sqrt(1 - 4.6 * (qlim / fck)));
              sethptlim(ptlim);
              astlim = (ptlim * b * edd) / 100;
              sethastlim(astlim);
              ptmin = 85 / fy;
              sethptmin(ptmin);
              astmin = (ptmin * b * edd) / 100;
              sethastmin(astmin);
            }}
          >
            calculate
          </button>
          {hreinforcePerPT ? (
            <h3>Reinforcement percentage PT required = {hreinforcePerPT}</h3>
          ) : null}
          {hastrequired ? <h3>Ast required = {hastrequired}</h3> : null}
          {hptlim ? <h3>Pt lim = {hptlim}</h3> : null}
          {hastlim ? <h3>Ast lim = {hastlim}</h3> : null}
          {hptmin ? <h3>Pt min = {hptmin}</h3> : null}
          {hastmin ? <h3>Ast min = {hastmin}</h3> : null}
        </label>
      ) : (
        <label style={{display: "flex", flexDirection: "column"}}>
          <label style={{display: "flex", flexDirection: "row"}}>
            <h3>MU greater than MU,Lim Calculate MU2</h3>

            <button
              onClick={() => {
                mu2 = mu - mulim;
                sethmu2(mu2);
              }}
            >
              calculate
            </button>
            {hmu2 ? <h3>{hmu2}</h3> : null}
          </label>
          <label style={{display: "flex", flexDirection: "row"}}>
            <h4>Use 20 Q bar on top:</h4>

            <input
              onChange={(e) => {
                setQbarontop(parseInt(e.target.value));
              }}
              placeholder="enter appropriate value: 450"
            />
          </label>

          <label style={{display: "flex", flexDirection: "row"}}>
            <h3>d' :</h3>

            <button
              onClick={() => {
                ddash = bt + Qbarontop / 2;
                setddash(ddash);
              }}
            >
              calculate
            </button>
            {hddash ? <h3>{hddash}</h3> : null}
          </label>

          <label style={{display: "flex", flexDirection: "row"}}>
            <h3>d = Doverall - d'</h3>

            <button
              onClick={() => {
                d = doverall - hddash;
                sethd(d);
              }}
            >
              calculate
            </button>
            {hd ? <h3>{hd}</h3> : null}
          </label>

          <label style={{display: "flex", flexDirection: "row"}}>
            <h3>strain ESC = </h3>

            <button
              onClick={() => {
                stainESC = 0.0035 * (1 - hddash / hd / xumaxd);
                setstainEsc(stainESC);
              }}
            >
              calculate
            </button>
            {hstainESC ? <h3>{hstainESC}</h3> : null}
          </label>
        </label>
      )}
    </div>
  );
}

export default App;
