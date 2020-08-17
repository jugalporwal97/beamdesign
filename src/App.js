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
  const [hfcc, sethfcc] = useState(0);
  const [hast2, sethast2] = useState(0);
  const [Xu, setXu] = useState(0);
  const [fXu, setfXu] = useState(0);
  const [mr, setmr] = useState(0);

  const [hast, sethast] = useState(0);
  const [hfast, sethfast] = useState(0);
  const [hascreq, sethascreq] = useState(0);
  const [diabar1, setdiabar1] = useState(0);
  const [noOfbar1, setnoOfbar1] = useState(0);
  const [ascprov, setascprov] = useState(0);

  const [diabar2, setdiabar2] = useState(0);
  const [noOfbar2, setnoOfbar2] = useState(0);
  const [provtop2, setprovtop2] = useState(0);

  const [diabar3, setdiabar3] = useState(0);
  const [noOfbar3, setnoOfbar3] = useState(0);
  const [provtop3, setprovtop3] = useState(0);

  const [diabar4, setdiabar4] = useState(0);
  const [noOfbar4, setnoOfbar4] = useState(0);
  const [provtop4, setprovtop4] = useState(0);

  const [diabar5, setdiabar5] = useState(0);
  const [noOfbar5, setnoOfbar5] = useState(0);
  const [provtop5, setprovtop5] = useState(0);

  const [diabar6, setdiabar6] = useState(0);
  const [noOfbar6, setnoOfbar6] = useState(0);
  const [provtop6, setprovtop6] = useState(0);
  const [astprov, setastprov] = useState(0);

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
            setFy(parseFloat(e.target.value));
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
            setfck(parseFloat(e.target.value));
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
            setes(parseFloat(e.target.value));
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
            setb(parseFloat(e.target.value));
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
            setmu(parseFloat(e.target.value));
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
            setbb(parseFloat(e.target.value));
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
            setbt(parseFloat(e.target.value));
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

            setxumaxd(parseFloat(varxu));
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
            setqlim(parseFloat(varqlim));
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
            setdreq(parseFloat(varedd));
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
            setlayerb(parseFloat(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />
        <h4>diameter at bottom</h4>

        <select
          onChange={(e) => {
            setphibar(parseFloat(e.target.value));
          }}
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="25">25</option>
          <option value="28">28</option>
          <option value="32">32</option>
          <option value="36">36</option>
          <option value="40">40</option>
        </select>
      </label>
      {/* line 14 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Enter Layer : </h4>
        <input
          onChange={(e) => {
            setlayert(parseFloat(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />
        <h4>Diameter at Top</h4>

        <select
          onChange={(e) => {
            setphibartop(parseFloat(e.target.value));
          }}
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="25">25</option>
          <option value="28">28</option>
          <option value="32">32</option>
          <option value="36">36</option>
          <option value="40">40</option>
        </select>
      </label>
      {/* line 15 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Provide D overall :</h4>

        <input
          onChange={(e) => {
            setdoverall(parseFloat(e.target.value));
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

            setedd(parseFloat(vardreq));
          }}
        >
          Calculate
        </button>
        {edd ? <h4>Result: {edd}</h4> : <h4>enter all the values</h4>}
      </label>

      {/* line 17 */}

      {edd ? edd >= dreq ? <h1> O.K</h1> : <h1>Change D Overall</h1> : null}

      {/* line 18 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Mu , lim = Limiting moment of resistance:</h4>
        <button
          onClick={() => {
            varmulim = (qlim * b * (edd * edd)) / 1000000;
            setMulim(parseFloat(varmulim));
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

      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>Reinforcement % PT Required</h4>
        <button
          onClick={() => {
            console.log("clicked");
            reinforcePerPT =
              ((50 * fck) / fy) *
              (1 - Math.sqrt(1 - (4.6 * mu * 1000000) / (fck * b * (edd * edd))));
            sethreinforcePerPT(parseFloat(reinforcePerPT.toFixed(2)));

            astrequired = (reinforcePerPT * b * edd) / 100;
            sethastrequired(parseFloat(astrequired.toFixed(2)));
            ptlim = ((50 * fck) / fy) * (1 - Math.sqrt(1 - 4.6 * (qlim / fck)));
            sethptlim(parseFloat(ptlim.toFixed(2)));
            astlim = (ptlim * b * edd) / 100;
            sethastlim(parseFloat(astlim.toFixed(2)));
            ptmin = 85 / fy;
            sethptmin(parseFloat(ptmin.toFixed(2)));
            astmin = (ptmin * b * edd) / 100;
            sethastmin(parseFloat(astmin.toFixed(2)));
            astmax = (4 * b * edd) / 100;
            sethastmax(parseFloat(astmax.toFixed(2)));
            ascmax = (4 * b * edd) / 100;
            sethascmax(parseFloat(astmax.toFixed(2)));
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
          <h3>Calculate MU2</h3>

          <button
            onClick={() => {
              mu2 = mu - mulim;
              sethmu2(parseFloat(mu2));
            }}
          >
            calculate
          </button>
          {hmu2 ? <h4>Result: {hmu2}</h4> : <h4>enter all the values</h4>}
        </label>

        <label style={{display: "flex", flexDirection: "row"}}>
          <h3>d' :</h3>

          <button
            onClick={() => {
              ddash = layert === 1 ? bt + phibartop / 2 : bt + phibartop + phibartop / 2;
              setddash(parseFloat(ddash));
            }}
          >
            calculate
          </button>
          {hddash ? <h4>Result: {hddash}</h4> : <h4>enter all the values</h4>}
        </label>

        <label style={{display: "flex", flexDirection: "row"}}>
          <h3>strain ESC = </h3>

          <button
            onClick={() => {
              stainESC = 0.0035 * (1 - hddash / edd / xumaxd);
              console.log("stainESC", stainESC);
              setstainEsc(stainESC);
            }}
          >
            calculate
          </button>
          {hstainESC ? <h4>Result: {hstainESC}</h4> : <h4>enter all the values</h4>}
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

            setfsc(parseFloat(fsctemp));
          }}
        >
          calculate
        </button>
        {hfsc ? <h4>Result: {hfsc}</h4> : <h4>enter all the values</h4>}
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
        {hfsc ? <h4>Result: {hfsc}</h4> : <h4>enter all the values</h4>}
      </label>

      {/* {line 45 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3>calculate FCC: </h3>

        <button
          onClick={() => {
            var fcc = hddash < (3 * xumaxd * edd) / 7 ? 0.446 * fck : 0;
            sethfcc(parseFloat(fcc));
          }}
        >
          calculate
        </button>
        {hfcc ? <h4>Result: {hfcc}</h4> : <h4>enter all the values</h4>}
      </label>
      {/* line 46 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3>calculate Asc: </h3>

        <button
          onClick={() => {
            var asc = (hmu2 * 1000000) / ((hfsc - hfcc) * (edd - hddash));

            sethasc(parseFloat(asc));
          }}
        >
          calculate
        </button>
        {hasc ? <h4>Result: {hasc}</h4> : <h4>enter all the values</h4>}
      </label>
      {/* line 47 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3>calculate Ast2: </h3>

        <button
          onClick={() => {
            var temp = (hasc * (hfsc - hfcc)) / (0.87 * fy);
            sethast2(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {hast2 ? <h4>Result: {hast2}</h4> : <h4>enter all the values</h4>}
      </label>
      {/* line 48 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3>Ast lim: </h3>

        <button
          onClick={() => {
            var temp = (mulim * 1000000) / (0.87 * fy * (edd - 0.42 * xumaxd * edd));
            sethastlim(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {hastlim ? <h4>Result: {hastlim}</h4> : <h4>enter all the values</h4>}
      </label>
      {/* line 49 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3>Ast : </h3>

        <button
          onClick={() => {
            var temp = hastlim + hast2;
            sethast(temp);
          }}
        >
          calculate
        </button>
        {hast ? <h4>Result: {hast}</h4> : <h4>enter all the values</h4>}
      </label>
      {/* line 50 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3>Final Ast required : </h3>

        <button
          onClick={() => {
            var temp = mu < mulim ? hastrequired : hast;
            sethfast(temp);
          }}
        >
          calculate
        </button>
        {hfast ? <h3>{hfast}</h3> : null}
      </label>

      {/* line 51 */}

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> Asc required : </h3>

        <button
          onClick={() => {
            var temp = mu < mulim ? 0 : hasc;
            sethascreq(temp);
          }}
        >
          calculate
        </button>
        <h3>{hascreq}</h3>
      </label>

      {/* line 52 */}
      <h3>Provide Bottom</h3>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>number of bar</h4>
        <input
          onChange={(e) => {
            setnoOfbar1(parseFloat(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />

        <h4>Dia of bar</h4>
        <select
          onChange={(e) => {
            setdiabar1(parseFloat(e.target.value));
          }}
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="25">25</option>
          <option value="28">28</option>
          <option value="32">32</option>
          <option value="36">36</option>
          <option value="40">40</option>
        </select>
      </label>
      {/* line 53 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> Asc Provided : </h3>

        <button
          onClick={() => {
            var temp = (noOfbar1 * 3.14 * (diabar1 * diabar1)) / 4;
            setascprov(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {ascprov ? <h4>Result: {ascprov}</h4> : <h4>enter all the values</h4>}
      </label>

      {/* line 54 */}
      <h3>Provide top 1</h3>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>number of bar</h4>
        <input
          onChange={(e) => {
            setnoOfbar2(parseFloat(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />

        <h4>Dia of bar</h4>
        <select
          onChange={(e) => {
            setdiabar2(parseFloat(e.target.value));
          }}
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="25">25</option>
          <option value="28">28</option>
          <option value="32">32</option>
          <option value="36">36</option>
          <option value="40">40</option>
        </select>
      </label>
      {/* line 53 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> result : </h3>

        <button
          onClick={() => {
            var temp = (noOfbar2 * 3.14 * (diabar2 * diabar2)) / 4;
            setprovtop2(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {provtop2 ? <h4>Result: {provtop2}</h4> : <h4>enter all the values</h4>}
      </label>

      <h3>Provide top 2</h3>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>number of bar</h4>
        <input
          onChange={(e) => {
            setnoOfbar3(parseFloat(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />

        <h4>Dia of bar</h4>
        <select
          onChange={(e) => {
            setdiabar3(parseFloat(e.target.value));
          }}
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="25">25</option>
          <option value="28">28</option>
          <option value="32">32</option>
          <option value="36">36</option>
          <option value="40">40</option>
        </select>
      </label>
      {/* line 53 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> result : </h3>

        <button
          onClick={() => {
            var temp = (noOfbar3 * 3.14 * (diabar3 * diabar3)) / 4;
            setprovtop3(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {provtop3 ? <h4>Result: {provtop3}</h4> : <h4>enter all the values</h4>}
      </label>

      <h3>Provide top 3</h3>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>number of bar</h4>
        <input
          onChange={(e) => {
            setnoOfbar4(parseFloat(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />

        <h4>Dia of bar</h4>
        <select
          onChange={(e) => {
            setdiabar4(parseFloat(e.target.value));
          }}
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="25">25</option>
          <option value="28">28</option>
          <option value="32">32</option>
          <option value="36">36</option>
          <option value="40">40</option>
        </select>
      </label>
      {/* line 53 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> result : </h3>

        <button
          onClick={() => {
            var temp = (noOfbar4 * 3.14 * (diabar4 * diabar4)) / 4;
            setprovtop4(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {provtop4 ? <h4>Result: {provtop4}</h4> : <h4>enter all the values</h4>}
      </label>

      <h3>Provide top 4</h3>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>number of bar</h4>
        <input
          onChange={(e) => {
            setnoOfbar5(parseFloat(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />

        <h4>Dia of bar</h4>
        <select
          onChange={(e) => {
            setdiabar5(parseFloat(e.target.value));
          }}
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="25">25</option>
          <option value="28">28</option>
          <option value="32">32</option>
          <option value="36">36</option>
          <option value="40">40</option>
        </select>
      </label>
      {/* line 53 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> result : </h3>

        <button
          onClick={() => {
            var temp = (noOfbar5 * 3.14 * (diabar5 * diabar5)) / 4;
            setprovtop5(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {provtop5 ? <h4>Result: {provtop5}</h4> : <h4>enter all the values</h4>}
      </label>

      <h3>Provide top 5</h3>
      <label style={{display: "flex", flexDirection: "row"}}>
        <h4>number of bar</h4>
        <input
          onChange={(e) => {
            setnoOfbar6(parseFloat(e.target.value));
          }}
          placeholder="enter appropriate value:"
        />

        <h4>Dia of bar</h4>
        <select
          onChange={(e) => {
            setdiabar6(parseFloat(e.target.value));
          }}
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="25">25</option>
          <option value="28">28</option>
          <option value="32">32</option>
          <option value="36">36</option>
          <option value="40">40</option>
        </select>
      </label>
      {/* line 53 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> Result : </h3>

        <button
          onClick={() => {
            var temp = (noOfbar6 * 3.14 * (diabar6 * diabar6)) / 4;
            setprovtop6(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {provtop6 ? <h4>Result: {provtop6}</h4> : <h4>enter all the values</h4>}
      </label>

      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> Ast Provided </h3>

        <button
          onClick={() => {
            var temp = provtop6 + provtop5 + provtop4 + provtop3 + provtop2;

            setastprov(temp);
          }}
        >
          calculate
        </button>
        {astprov ? <h3>{astprov}</h3> : null}
      </label>

      {astprov <= hastlim && astprov >= hastmin && astprov >= hastrequired && mu < mulim ? (
        <h3>O.K.</h3>
      ) : mu > mulim &&
        astprov >= hastrequired &&
        ascprov >= hascreq &&
        astprov <= hastmax &&
        ascprov <= hascmax ? (
        <h3>O.K.</h3>
      ) : (
        <h3>Changeg dia of Bar or no of bar</h3>
      )}
      {/* line61 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> Calculate XU</h3>

        <button
          onClick={() => {
            var temp =
              mu < mulim
                ? (0.87 * fy * astprov) / (0.36 * fck * b)
                : (0.87 * fy * astprov - ascprov * hfsc) / (0.36 * fck * b);

            setXu(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {Xu ? <h3>{Xu}</h3> : null}
      </label>
      {/* line62 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> Calculate XU Final</h3>

        <button
          onClick={() => {
            var temp = Xu > xumaxd * edd ? xumaxd * edd : Xu;

            setfXu(temp);
          }}
        >
          calculate
        </button>
        {fXu ? <h3>{fXu}</h3> : null}
        {Xu <= xumaxd * edd ? <h3>O.K</h3> : <h3>Not O.K</h3>}
      </label>
      {/* line63 */}
      <label style={{display: "flex", flexDirection: "row"}}>
        <h3> CalculateMR</h3>

        <button
          onClick={() => {
            var temp =
              mu < mulim
                ? (0.87 * fy * astprov * (edd - 0.42 * fXu)) / 1000000
                : (0.36 * fck * b * fXu * (edd - 0.42 * fXu) +
                    ascprov * (hfsc - hfcc) * (edd - hddash)) /
                  1000000;

            setmr(parseFloat(temp));
          }}
        >
          calculate
        </button>
        {mr ? <h3>{mr}</h3> : null}
      </label>

      {/* line 64 */}

      {mr > mu ? <h3>Ok design is safe</h3> : <h3>not OK design is not safe</h3>}
      <button onClick={() => window.print()}>Print this page</button>
    </div>
  );
}

export default App;
