import React, { useState } from "react";
import "../Styles/SignUp.css";
import Phone from "../Assets/images/phone-img-png.png";
import logo from "../Assets/images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

function SignUp(props) {
  const { state } = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  if (state != null) {
    const { hello } = state;
    console.log(hello);
  }
  const [name, setName] = useState("");
  const [code, setCode] = useState("91");
  const [phoneno, setPhoneNo] = useState("");
  const navigate = useNavigate();
  const btnClick = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      document.getElementById("nm").style.borderColor = "red";
    } else {
      document.getElementById("nm").style.borderColor = "initial";
    }
    if (
      code.length + phoneno.length > 11 &&
      code.length + phoneno.length < 13
    ) {
      if(name.length>1){
        navigate("/otp", { state: { name: name, code: code, phoneno: phoneno } });
      }
      
    } else {
      setErrorMessage("Please enter valid number");
      document.getElementById("cd").style.borderColor = "red";
      document.getElementById("phone").style.borderColor = "red";
    }
  };

  return (
    <div className="cont">
      <img className="img" src={Phone} alt="Phone" />
      <div className="rect">
        <img className="lgo" src={logo} alt="Logo" />
        <p className="para1">Personal Training is now simpler,</p>
        <p className="para2">smarter and more accessible.</p>
        <p className="para3">
          Enter your details below to access our closed beta.
        </p>
        <p className="para4">
          We promise to use your information for feedback purposes only.
        </p>
        <div className="rectinner">
          <form onSubmit={btnClick}>
            <br />
            <label className="labal">Enter your full name</label>
            <br />
            <input
              className="inpt"
              name="name"
              id="nm"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <label className="labal">Enter your mobile number</label>
            <br />
            {/* <div className="new"> */}
            <select
              name="countryCode"
              onChange={(e) => setCode(e.target.value)}
              value={code}
              className="cc"
              id="cd"
            >
              {/* <option data-countryCode="IN" value="">
              </option> */}
              <option data-countryCode="IN" value="91">
                India (+91)
              </option>
              <option data-countryCode="GB" value="44">
                UK (+44)
              </option>
              {/* <option data-countryCode="IN" value="91" Selected>
                India (+91)
              </option> */}
              <option data-countryCode="US" value="1">
                USA (+1)
              </option>
              <optgroup label="Other countries">
                <option data-countryCode="DZ" value="213">
                  Alg (+213)
                </option>
                <option data-countryCode="AD" value="376">
                  And (+376)
                </option>
                <option data-countryCode="AO" value="244">
                  Ang (+244)
                </option>
                <option data-countryCode="AI" value="1264">
                  Ang(+1264)
                </option>
                <option data-countryCode="AG" value="1268">
                  Anti(+1268)
                </option>
                <option data-countryCode="AR" value="54">
                  Arg (+54)
                </option>
                <option data-countryCode="AM" value="374">
                  Arm (+374)
                </option>
                <option data-countryCode="AW" value="297">
                  Aru (+297)
                </option>
                <option data-countryCode="AU" value="61">
                  Aus (+61)
                </option>
                <option data-countryCode="AT" value="43">
                  Aus (+43)
                </option>
                <option data-countryCode="AZ" value="994">
                  Aze (+994)
                </option>
                <option data-countryCode="BS" value="1242">
                  Bah (+1242)
                </option>
                <option data-countryCode="BH" value="973">
                  Bahr (+973)
                </option>
                <option data-countryCode="BD" value="880">
                  Ban (+880)
                </option>
                <option data-countryCode="BB" value="1246">
                  Bar (+1246)
                </option>
                <option data-countryCode="BY" value="375">
                  Bel (+375)
                </option>
                <option data-countryCode="BE" value="32">
                  Belg (+32)
                </option>
                <option data-countryCode="BZ" value="501">
                  Beli (+501)
                </option>
                <option data-countryCode="BJ" value="229">
                  Benin (+229)
                </option>
                <option data-countryCode="BM" value="1441">
                  Ber(+1441)
                </option>
                <option data-countryCode="BT" value="975">
                  Bhu (+975)
                </option>
                <option data-countryCode="BO" value="591">
                  Bol (+591)
                </option>
                <option data-countryCode="BA" value="387">
                  Bos (+387)
                </option>
                <option data-countryCode="BW" value="267">
                  Bot (+267)
                </option>
                <option data-countryCode="BR" value="55">
                  Br (+55)
                </option>
                <option data-countryCode="BN" value="673">
                  Bru (+673)
                </option>
                <option data-countryCode="BG" value="359">
                  Bul (+359)
                </option>
                <option data-countryCode="BF" value="226">
                  Bur (+226)
                </option>
                <option data-countryCode="BI" value="257">
                  Bi (+257)
                </option>
                <option data-countryCode="KH" value="855">
                  Cam (+855)
                </option>
                <option data-countryCode="CM" value="237">
                  Cm (+237)
                </option>
                <option data-countryCode="CA" value="1">
                  Can (+1)
                </option>
                <option data-countryCode="CV" value="238">
                  Cap (+238)
                </option>
                <option data-countryCode="KY" value="1345">
                  Cay (+1345)
                </option>
                <option data-countryCode="CF" value="236">
                  CF (+236)
                </option>
                <option data-countryCode="CL" value="56">
                  Cl (+56)
                </option>
                <option data-countryCode="CN" value="86">
                  Chi (+86)
                </option>
                <option data-countryCode="CO" value="57">
                  Col (+57)
                </option>
                <option data-countryCode="KM" value="269">
                  Com (+269)
                </option>
                <option data-countryCode="CG" value="242">
                  Con (+242)
                </option>
                <option data-countryCode="CK" value="682">
                  Ck (+682)
                </option>
                <option data-countryCode="CR" value="506">
                  Cr (+506)
                </option>
                <option data-countryCode="HR" value="385">
                  Cro (+385)
                </option>
                <option data-countryCode="CU" value="53">
                  Cuba (+53)
                </option>
                <option data-countryCode="CY" value="90392">
                  Cyp (+90392)
                </option>
                <option data-countryCode="CY" value="357">
                  CY (+357)
                </option>
                <option data-countryCode="CZ" value="42">
                  CR (+42)
                </option>
                <option data-countryCode="DK" value="45">
                  Den (+45)
                </option>
                <option data-countryCode="DJ" value="253">
                  Dji (+253)
                </option>
                <option data-countryCode="DM" value="1809">
                  Dom (+1809)
                </option>
                <option data-countryCode="DO" value="1809">
                  DO (+1809)
                </option>
                <option data-countryCode="EC" value="593">
                  Ec (+593)
                </option>
                <option data-countryCode="EG" value="20">
                  Egy (+20)
                </option>
                <option data-countryCode="SV" value="503">
                  El (+503)
                </option>
                <option data-countryCode="GQ" value="240">
                  Equ (+240)
                </option>
                <option data-countryCode="ER" value="291">
                  Eri (+291)
                </option>
                <option data-countryCode="EE" value="372">
                  Est (+372)
                </option>
                <option data-countryCode="ET" value="251">
                  Ethi (+251)
                </option>
                <option data-countryCode="FK" value="500">
                  Fk (+500)
                </option>
                <option data-countryCode="FO" value="298">
                  FO (+298)
                </option>
                <option data-countryCode="FJ" value="679">
                  Fj (+679)
                </option>
                <option data-countryCode="FI" value="358">
                  Fi (+358)
                </option>
                <option data-countryCode="FR" value="33">
                  Fr (+33)
                </option>
                <option data-countryCode="GF" value="594">
                  Fg (+594)
                </option>
                <option data-countryCode="PF" value="689">
                  Fp (+689)
                </option>
                <option data-countryCode="GA" value="241">
                  Gab (+241)
                </option>
                <option data-countryCode="GM" value="220">
                  Gam (+220)
                </option>
                <option data-countryCode="GE" value="7880">
                  Geo (+7880)
                </option>
                <option data-countryCode="DE" value="49">
                  Ger (+49)
                </option>
                <option data-countryCode="GH" value="233">
                  Gha (+233)
                </option>
                <option data-countryCode="GI" value="350">
                  Gib (+350)
                </option>
                <option data-countryCode="GR" value="30">
                  Gre (+30)
                </option>
                <option data-countryCode="GL" value="299">
                  Gl (+299)
                </option>
                <option data-countryCode="GD" value="1473">
                  Gd (+1473)
                </option>
                <option data-countryCode="GP" value="590">
                  Gp (+590)
                </option>
                <option data-countryCode="GU" value="671">
                  Guam (+671)
                </option>
                <option data-countryCode="GT" value="502">
                  Guat (+502)
                </option>
                <option data-countryCode="GN" value="224">
                  Gui (+224)
                </option>
                <option data-countryCode="GW" value="245">
                  Gw (+245)
                </option>
                <option data-countryCode="GY" value="592">
                  Guy (+592)
                </option>
                <option data-countryCode="HT" value="509">
                  Haiti (+509)
                </option>
                <option data-countryCode="HN" value="504">
                  Hon (+504)
                </option>
                <option data-countryCode="HK" value="852">
                  HK (+852)
                </option>
                <option data-countryCode="HU" value="36">
                  Hun (+36)
                </option>
                <option data-countryCode="IS" value="354">
                  Ice (+354)
                </option>
                <option data-countryCode="ID" value="62">
                  Ind (+62)
                </option>
                <option data-countryCode="IR" value="98">
                  Iran (+98)
                </option>
                <option data-countryCode="IQ" value="964">
                  Iraq (+964)
                </option>
                <option data-countryCode="IE" value="353">
                  Ie (+353)
                </option>
                <option data-countryCode="IL" value="972">
                  Il (+972)
                </option>
                <option data-countryCode="IT" value="39">
                  It (+39)
                </option>
                <option data-countryCode="JM" value="1876">
                  Jam (+1876)
                </option>
                <option data-countryCode="JP" value="81">
                  Jap (+81)
                </option>
                <option data-countryCode="JO" value="962">
                  Jor (+962)
                </option>
                <option data-countryCode="KZ" value="7">
                  Kaz (+7)
                </option>
                <option data-countryCode="KE" value="254">
                  Ken (+254)
                </option>
                <option data-countryCode="KI" value="686">
                  Kir (+686)
                </option>
                <option data-countryCode="KP" value="850">
                  Kor (+850)
                </option>
                <option data-countryCode="KR" value="82">
                  KS (+82)
                </option>
                <option data-countryCode="KW" value="965">
                  Kuw (+965)
                </option>
                <option data-countryCode="KG" value="996">
                  Kyr (+996)
                </option>
                <option data-countryCode="LA" value="856">
                  Lao (+856)
                </option>
                <option data-countryCode="LV" value="371">
                  Lat (+371)
                </option>
                <option data-countryCode="LB" value="961">
                  Leb (+961)
                </option>
                <option data-countryCode="LS" value="266">
                  Les (+266)
                </option>
                <option data-countryCode="LR" value="231">
                  Lib (+231)
                </option>
                <option data-countryCode="LY" value="218">
                  Ly (+218)
                </option>
                <option data-countryCode="LI" value="417">
                  Lie (+417)
                </option>
                <option data-countryCode="LT" value="370">
                  Lit (+370)
                </option>
                <option data-countryCode="LU" value="352">
                  Lux (+352)
                </option>
                <option data-countryCode="MO" value="853">
                  Mac (+853)
                </option>
                <option data-countryCode="MK" value="389">
                  Mace (+389)
                </option>
                <option data-countryCode="MG" value="261">
                  Mad (+261)
                </option>
                <option data-countryCode="MW" value="265">
                  Mal (+265)
                </option>
                <option data-countryCode="MY" value="60">
                  My (+60)
                </option>
                <option data-countryCode="MV" value="960">
                  Mal (+960)
                </option>
                <option data-countryCode="ML" value="223">
                  Mali (+223)
                </option>
                <option data-countryCode="MT" value="356">
                  Malta (+356)
                </option>
                <option data-countryCode="MH" value="692">
                  Mar (+692)
                </option>
                <option data-countryCode="MQ" value="596">
                  Mart (+596)
                </option>
                <option data-countryCode="MR" value="222">
                  Mau (+222)
                </option>
                <option data-countryCode="YT" value="269">
                  May (+269)
                </option>
                <option data-countryCode="MX" value="52">
                  Mex (+52)
                </option>
                <option data-countryCode="FM" value="691">
                  Mic (+691)
                </option>
                <option data-countryCode="MD" value="373">
                  Mol (+373)
                </option>
                <option data-countryCode="MC" value="377">
                  Mc (+377)
                </option>
                <option data-countryCode="MN" value="976">
                  Mn (+976)
                </option>
                <option data-countryCode="MS" value="1664">
                  Ms (+1664)
                </option>
                <option data-countryCode="MA" value="212">
                  Ma (+212)
                </option>
                <option data-countryCode="MZ" value="258">
                  Mz (+258)
                </option>
                <option data-countryCode="MN" value="95">
                  Mn (+95)
                </option>
                <option data-countryCode="NA" value="264">
                  Nam (+264)
                </option>
                <option data-countryCode="NR" value="674">
                  Nr (+674)
                </option>
                <option data-countryCode="NP" value="977">
                  Nep (+977)
                </option>
                <option data-countryCode="NL" value="31">
                  Net (+31)
                </option>
                <option data-countryCode="NC" value="687">
                  NC (+687)
                </option>
                <option data-countryCode="NZ" value="64">
                  NZ (+64)
                </option>
                <option data-countryCode="NI" value="505">
                  Nic (+505)
                </option>
                <option data-countryCode="NE" value="227">
                  Nig (+227)
                </option>
                <option data-countryCode="NG" value="234">
                  Nige (+234)
                </option>
                <option data-countryCode="NU" value="683">
                  Niue (+683)
                </option>
                <option data-countryCode="NF" value="672">
                  NF (+672)
                </option>
                <option data-countryCode="NP" value="670">
                  NP (+670)
                </option>
                <option data-countryCode="NO" value="47">
                  NO (+47)
                </option>
                <option data-countryCode="OM" value="968">
                  Om (+968)
                </option>
                <option data-countryCode="PW" value="680">
                  Pal (+680)
                </option>
                <option data-countryCode="PA" value="507">
                  Pan (+507)
                </option>
                <option data-countryCode="PG" value="675">
                  PNG (+675)
                </option>
                <option data-countryCode="PY" value="595">
                  Py (+595)
                </option>
                <option data-countryCode="PE" value="51">
                  Peru (+51)
                </option>
                <option data-countryCode="PH" value="63">
                  Ph (+63)
                </option>
                <option data-countryCode="PL" value="48">
                  Pl (+48)
                </option>
                <option data-countryCode="PT" value="351">
                  Pt (+351)
                </option>
                <option data-countryCode="PR" value="1787">
                  Pr (+1787)
                </option>
                <option data-countryCode="QA" value="974">
                  Qa (+974)
                </option>
                <option data-countryCode="RE" value="262">
                  Re (+262)
                </option>
                <option data-countryCode="RO" value="40">
                  Ro (+40)
                </option>
                <option data-countryCode="RU" value="7">
                  Ru (+7)
                </option>
                <option data-countryCode="RW" value="250">
                  Rw (+250)
                </option>
                <option data-countryCode="SM" value="378">
                  Sm (+378)
                </option>
                <option data-countryCode="ST" value="239">
                  St (+239)
                </option>
                <option data-countryCode="SA" value="966">
                  SA (+966)
                </option>
                <option data-countryCode="SN" value="221">
                  Sn (+221)
                </option>
                <option data-countryCode="CS" value="381">
                  Ser (+381)
                </option>
                <option data-countryCode="SC" value="248">
                  Sc (+248)
                </option>
                <option data-countryCode="SL" value="232">
                  Sl (+232)
                </option>
                <option data-countryCode="SG" value="65">
                  Sg (+65)
                </option>
                <option data-countryCode="SK" value="421">
                  Sk (+421)
                </option>
                <option data-countryCode="SI" value="386">
                  Si (+386)
                </option>
                <option data-countryCode="SB" value="677">
                  Sb (+677)
                </option>
                <option data-countryCode="SO" value="252">
                  So (+252)
                </option>
                <option data-countryCode="ZA" value="27">
                  SA (+27)
                </option>
                <option data-countryCode="ES" value="34">
                  Spain (+34)
                </option>
                <option data-countryCode="LK" value="94">
                  SL (+94)
                </option>
                <option data-countryCode="SH" value="290">
                  St. Hel (+290)
                </option>
                <option data-countryCode="KN" value="1869">
                  St. Kit (+1869)
                </option>
                <option data-countryCode="SC" value="1758">
                  St. Luc (+1758)
                </option>
                <option data-countryCode="SD" value="249">
                  Sud (+249)
                </option>
                <option data-countryCode="SR" value="597">
                  Sur (+597)
                </option>
                <option data-countryCode="SZ" value="268">
                  Sz (+268)
                </option>
                <option data-countryCode="SE" value="46">
                  Se (+46)
                </option>
                <option data-countryCode="CH" value="41">
                  Swi (+41)
                </option>
                <option data-countryCode="SI" value="963">
                  Syria (+963)
                </option>
                <option data-countryCode="TW" value="886">
                  Tai (+886)
                </option>
                <option data-countryCode="TJ" value="7">
                  Taj (+7)
                </option>
                <option data-countryCode="TH" value="66">
                  Thai (+66)
                </option>
                <option data-countryCode="TG" value="228">
                  Togo (+228)
                </option>
                <option data-countryCode="TO" value="676">
                  Tong (+676)
                </option>
                <option data-countryCode="TT" value="1868">
                  TT (+1868)
                </option>
                <option data-countryCode="TN" value="216">
                  Tun (+216)
                </option>
                <option data-countryCode="TR" value="90">
                  Tur (+90)
                </option>
                <option data-countryCode="TM" value="7">
                  Tm (+7)
                </option>
                <option data-countryCode="TM" value="993">
                  Tm (+993)
                </option>
                <option data-countryCode="TC" value="1649">
                  TC (+1649)
                </option>
                <option data-countryCode="TV" value="688">
                  Tuv (+688)
                </option>
                <option data-countryCode="UG" value="256">
                  Uga (+256)
                </option>
                <option data-countryCode="UA" value="380">
                  Ua (+380)
                </option>
                <option data-countryCode="AE" value="971">
                  UAE (+971)
                </option>
                <option data-countryCode="UY" value="598">
                  Uru (+598)
                </option>
                <option data-countryCode="UZ" value="7">
                  Uz (+7)
                </option>
                <option data-countryCode="VU" value="678">
                  Van (+678)
                </option>
                <option data-countryCode="VA" value="379">
                  Va (+379)
                </option>
                <option data-countryCode="VE" value="58">
                  Ven (+58)
                </option>
                <option data-countryCode="VN" value="84">
                  Vn (+84)
                </option>
                <option data-countryCode="VG" value="84">
                  VG (+1284)
                </option>
                <option data-countryCode="VI" value="84">
                  Vi (+1340)
                </option>
                <option data-countryCode="WF" value="681">
                  WF (+681)
                </option>
                <option data-countryCode="YE" value="969">
                  YN (+969)
                </option>
                <option data-countryCode="YE" value="967">
                  YS (+967)
                </option>
                <option data-countryCode="ZM" value="260">
                  Zam (+260)
                </option>
                <option data-countryCode="ZW" value="263">
                  Zim (+263)
                </option>
              </optgroup>
            </select>
            <input
              className="inpt2"
              onChange={(e) => setPhoneNo(e.target.value)}
              id="phone"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={phoneno}
              name="mobileno"
            />
            <div className="error"><span className="dum">H</span> {errorMessage} </div>
            {/* </div> */}
            <br />
            <button className="btn" type="submit">
              Continue with OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
