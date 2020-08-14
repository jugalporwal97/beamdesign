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
  const [layerb, setlayerb] = useState(0);
  const [layert, setlayert] = useState(0);
  const [phibartop, setphibartop] = useState(0);

  let astmax = 0;

  const [hastmax, sethastmax] = useState(0);
  const [hascmax, sethascmax] = useState(0);

  const [hasc, sethasc] = useState(0);
  let ascmax = 0;

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

      {/* line 3 */}
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
      {/* line 4 */}
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
      {/* line 5 */}
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
      {/* line 6 */}
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

      {/* line 7 */}

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
      {/* line 8 */}
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
      {/* line 9 */}
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
      {/* line 10 */}
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
      {/* line 11 */}

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

      {/* line 12 */}
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
      {/* line13 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Enter Layer </h4>
        <input
          onChange={(e) => {
            setlayerb(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />
        <h4>diameter at bottom</h4>
        <input
          onChange={(e) => {
            setphibar(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value: 30"
        />
      </label>
      {/* line 14 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Enter Layer : </h4>
        <input
          onChange={(e) => {
            setlayert(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />
        <h4>Diameter at Top</h4>
        <input
          onChange={(e) => {
            setphibartop(parseInt(e.target.value));
          }}
          placeholder="enter appropriate value: 30"
        />
      </label>
      {/* line 15 */}
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

      {/* line 16 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>effective depth d :</h4>
        <button
          onClick={() => {
            layerb === 1
              ? (vardreq = doverall - bb - phibar / 2)
              : (vardreq = doverall - bb - phibar / 2 - phibar);

            setedd(vardreq);
          }}
        >
          Calculate
        </button>

        {edd ? <h4>Result: {edd}</h4> : <h4>enter all the values</h4>}
      </label>

      {/* line 17 */}

      {edd ? (
        edd >= dreq ? (
          <h1> Effective depth d {">"}= d req O,K</h1>
        ) : (
          <h1>Change D Overall</h1>
        )
      ) : null}

      {/* line 18 */}

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
      {/* line 19 */}

      {mu < mulim ? (
        <h1> Design as singly reinforced under-reinforced rectangular section </h1>
      ) : (
        <h1>Design as Doubly reinforced rectangular section </h1>
      )}

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
            astmax = (4 * b * edd) / 100;
            sethastmax(astmax);
            ascmax = (4 * b * edd) / 100;
            sethascmax(astmax);
          }}
        >
          calculate
        </button>
        {hreinforcePerPT ? <h3>Reinforcement percentage PT required = {hreinforcePerPT}</h3> : null}
        {hastrequired ? <h3>Ast required = {hastrequired}</h3> : null}
        {hptlim ? <h3>Pt lim = {hptlim}</h3> : null}
        {hastlim ? <h3>Ast lim = {hastlim}</h3> : null}
        {hptmin ? <h3>Pt min = {hptmin}</h3> : null}
        {hastmin ? <h3>Ast min = {hastmin}</h3> : null}
        {hastmax ? <h3>Ast max = {hastmax}</h3> : null}
        {hascmax ? <h3>Asc max = {hastmax}</h3> : null}
        <h3>Asc = {hasc}</h3>
      </label>

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

      {/* line 24 to 41 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3>calculate FSC</h3>

        <button
          onClick={() => {
            var fsc1 = (0.8 * fy) / 1.15;
            var fsc2 = (0.85 * fy) / 1.15;
            var fsc3 = (0.9 * fy) / 1.15;
            var fsc4 = (0.95 * fy) / 1.15;
            var fsc5 = (0.975 * fy) / 1.15;
            var fsc6 = (1 * fy) / 1.15;

            var esc1 = (0.8 * fy) / (1.15 * es) + 0;
            var esc2 = (0.85 * fy) / (1.15 * es) + 0.0001;
            var esc3 = (0.9 * fy) / (1.15 * es) + 0.0003;
            var esc4 = (0.95 * fy) / (1.15 * es) + 0.0007;
            var esc5 = (0.975 * fy) / (1.15 * es) + 0.001;
            var esc6 = (1 * fy) / (1.15 * es) + 0.002;

            var fsc11 = (hstainESC * es) / 1.15;
            var fsc12 = fsc1 + ((fsc2 - fsc1) * (hstainESC - esc1)) / (esc2 - esc1);
            var fsc13 = fsc2 + ((fsc3 - fsc2) * (hstainESC - esc2)) / (esc3 - esc2);
            var fsc14 = fsc3 + ((fsc4 - fsc3) * (hstainESC - esc3)) / (esc4 - esc3);
            var fsc15 = fsc4 + ((fsc5 - fsc4) * (hstainESC - esc4)) / (esc5 - esc4);
            var fsc16 = fsc5 + ((fsc6 - fsc5) * (hstainESC - esc5)) / (esc6 - esc5);
            var fsc17 = fsc6;

            var fsctemp =
              hstainESC < esc1
                ? fsc11
                : hstainESC >= esc1 && hstainESC <= esc2
                ? fsc12
                : hstainESC >= esc2 && hstainESC <= esc3
                ? fsc13
                : hstainESC >= esc3 && hstainESC <= esc4
                ? fsc14
                : hstainESC >= esc4 && hstainESC <= esc5
                ? fsc15
                : hstainESC >= esc5 && hstainESC <= esc6
                ? fsc16
                : fsc17;

            setfsc(fsctemp);
          }}
        >
          calculate
        </button>
        {hfsc ? <h3>{hfsc}</h3> : null}
      </label>

      {/* line44 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3>calculate Final FSC: </h3>

        <button
          onClick={() => {
            var finalfsc = fy === 250 ? fy / 1.15 : hfsc;
            setfsc(finalfsc);
          }}
        >
          calculate
        </button>
        {hstainESC ? <h3>{hstainESC}</h3> : null}
      </label>
    </div>
  );
}

export default App;
