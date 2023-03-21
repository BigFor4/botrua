import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Container({ getMainData }) {
  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    if (event?.target?.value) {
      setInputValue(event.target.value)
    } else {
      setInputValue('')

    }
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  return (
    <div jscontroller="pc62j" jsmodel="iTeaXe" jsaction="rcuQ6b:WYd;GvneHb:og1FDd;vbaUQc:uAM5ec;">
      <div jscontroller="X4BaPc" jsaction="rcuQ6b:WYd;o6xM5b:Pg9eo;HuL2Hd:mHeCvf;VMhF5:FFYy5e;sk3Qmb:HI1Mdd;JIbuQc:rSzFEd(z2EeY),aSaF6e(ilzYPe);">
        <div jscontroller="o1L5Wb" data-sitename="bot-rua" data-universe={1} jsmodel="fNFZH" jsaction="Pe9H6d:cZFEp;WMZaJ:VsGN3;hJluRd:UADL7b;zuqEgd:HI9w0;tr6QDd:Y8aXB;MxH79b:xDkBfb;JIbuQc:SPXMTb(uxAMZ);" jsname="G0jgYd">
          <div jsname="gYwusb" className="p9b27" />
          <div jscontroller="RrXLpc" jsname="XeeWQc" role="banner" jsaction="keydown:uiKYid(OH0EC);rcuQ6b:WYd;zuqEgd:ufqpf;JIbuQc:XfTnxb(lfEfFf),AlTiYc(GeGHKb),AlTiYc(m1xNUe),zZlNMe(pZn8Oc);YqO5N:ELcyfe;">
            <div jsname="bF1uUb" className="BuY5Fd" jsaction="click:xVuwSc;" />
            <div id="searchNew" className={`TbNlJb animate__animated  ${openSearch ? 'animate__fadeInRight upKXGe vUSp5d' : 'animate__fadeOutRight'}`}>
              <div role="button" onClick={() => setOpenSearch(false)} className="U26fgb mUbCce fKz7Od h3nfre M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="GeGHKb" aria-label="Back to site" aria-disabled="false" tabIndex={0} data-tooltip="Back to site" data-tooltip-vertical-offset={-12} data-tooltip-horizontal-offset={0}>
                <div className="VTBa7b MbhUzd" jsname="ksKsZd" /><span jsslot className="xjKiLb"><span className="Ce1Y1c" style={{ top: '-12px' }}><svg className="V4YR2c" viewBox="0 0 24 24" focusable="false">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg></span></span>
              </div>
              <div className="E2UJ5" jsname="M6JdT">
                <div className="rFrNMe b7AJhc zKHdkd" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow jsname="OH0EC" aria-expanded="true">
                  <div className="aCsJod oJeWuf">
                    <div className="aXBtI I0VJ4d Wic03c"><span jsslot className="A37UZe qgcB3c iHd5yb">
                      <div role="button" className="U26fgb mUbCce fKz7Od i3PoXe M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="lfEfFf" aria-label="Search" aria-disabled="false" tabIndex={0} data-tooltip="Search" data-tooltip-vertical-offset={-12} data-tooltip-horizontal-offset={0}>
                        <div className="VTBa7b MbhUzd" jsname="ksKsZd" /><span jsslot className="xjKiLb"><span className="Ce1Y1c" style={{ top: '-12px' }}><svg className="vu8Pwe" viewBox="0 0 24 24" focusable="false">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                          </path>
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg></span></span>
                      </div>
                      <div className="EmVfjc SKShhf" data-loadingmessage="Loading…" jscontroller="qAKInc">
                        <div className="Cg7hO" aria-live="assertive" jsname="vyyg5" />
                        <div jsname="Hxlbvc" className="xu46lf">
                          <div className="ir3uv uWlRce co39ub">
                            <div className="xq3j6 ERcjC">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                            <div className="HBnAAc">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                            <div className="xq3j6 dj3yTd">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                          </div>
                          <div className="ir3uv GFoASc Cn087">
                            <div className="xq3j6 ERcjC">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                            <div className="HBnAAc">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                            <div className="xq3j6 dj3yTd">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                          </div>
                          <div className="ir3uv WpeOqd hfsr6b">
                            <div className="xq3j6 ERcjC">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                            <div className="HBnAAc">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                            <div className="xq3j6 dj3yTd">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                          </div>
                          <div className="ir3uv rHV3jf EjXFBf">
                            <div className="xq3j6 ERcjC">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                            <div className="HBnAAc">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                            <div className="xq3j6 dj3yTd">
                              <div className="X6jHbb GOJTSe" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div onClick={() => setOpenSearch(false)} role="button" className="U26fgb mUbCce fKz7Od JyJRXe M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="m1xNUe" aria-label="Back to site" aria-disabled="false" tabIndex={0} data-tooltip="Back to site" data-tooltip-vertical-offset={-12} data-tooltip-horizontal-offset={0}>
                        <div className="VTBa7b MbhUzd" jsname="ksKsZd" /><span jsslot className="xjKiLb"><span className="Ce1Y1c" style={{ top: '-12px' }}><svg className="V4YR2c" viewBox="0 0 24 24" focusable="false">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                        </svg></span></span>
                      </div>
                    </span>
                      <div className="Xb9hP"><input value={inputValue} onChange={handleInputChange} id="inputSearch" type="search" className="whsOnd zHQkBf" jsname="YPqjbf" autoComplete="off" tabIndex={0} placeholder="Tìm kiếm trên trang web này" />
                        <div jsname="LwH6nd" className="ndJi5d snByac" aria-hidden="true" />
                      </div><span jsslot className="A37UZe sxyYjd MQL3Ob">
                        {
                          inputValue ? <div id="clearInput" onClick={handleClearClick} role="button" className="U26fgb mUbCce fKz7Od Kk06A M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="pZn8Oc" aria-label="Clear search" aria-disabled="false" tabIndex={0} data-tooltip="Clear search" data-tooltip-vertical-offset={-12} data-tooltip-horizontal-offset={0}>
                            <div className="VTBa7b MbhUzd" jsname="ksKsZd" /><span jsslot className="xjKiLb"><span className="Ce1Y1c" style={{ top: '-12px' }}><svg className="fAUEUd" viewBox="0 0 24 24" focusable="false">
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                              </path>
                              <path d="M0 0h24v24H0z" fill="none" />
                            </svg></span></span>
                          </div> : ''
                        }

                      </span>
                      <div className="i9lrp mIZh1c" />
                      <div jsname="XmnwAc" className="OabDMe cXrdqd" />
                    </div>
                  </div>
                  <div className="LXRPh">
                    <div jsname="ty6ygf" className="ovnfwe Is7Fhb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div jsname="tiN4bf">
          <div className="bKy5e">
            <div className="rrJNTc" tabIndex={-1}>
              <div className="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button className="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf LjDxcd XhPA0b LQeN7 WsSUlf jz7fPb" jscontroller="soHxf" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;" data-idom-class="LjDxcd XhPA0b LQeN7 WsSUlf jz7fPb" jsname="z2EeY" tabIndex={0}>
                <div className="VfPpkd-Jh9lGc" />
                <div className="VfPpkd-J1Ukfc-LhBDec" />
                <div className="VfPpkd-RLmnJb" /><span jsname="V67aGc" className="VfPpkd-vQzf8d">Skip to main content</span>
              </button></div>
              <div className="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button className="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf LjDxcd XhPA0b LQeN7 WsSUlf br90J" jscontroller="soHxf" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;" data-idom-class="LjDxcd XhPA0b LQeN7 WsSUlf br90J" jsname="ilzYPe" tabIndex={0}>
                <div className="VfPpkd-Jh9lGc" />
                <div className="VfPpkd-J1Ukfc-LhBDec" />
                <div className="VfPpkd-RLmnJb" /><span jsname="V67aGc" className="VfPpkd-vQzf8d">Skip to navigation</span>
              </button></div>
            </div>
          </div>
          <div className="M63kCb N63NQ" />
          <div className="QZ3zWd">
            <div className="fktJzd AKpWA vS6Uxe fOU46b yMcSQd Ly6Unf G9Qloe XeSM4 XxIgdb" jsname="UzWXSb" data-uses-custom-theme="false" data-legacy-theme-name="LabelMaker" data-legacy-theme-font-kit="Classic" data-legacy-theme-color-kit="Burgundy" jscontroller="Md9ENb" jsaction="gsiSmd:Ffcznf;yj5fUd:cpPetb;HNXL3:q0Vyke;e2SXKd:IPDu5e;BdXpgd:nhk7K;rcuQ6b:WYd;">


              <Header startSlider={(e) => setOpenSearch(e)}></Header>

              {getMainData()}
              <div className="Xpil1b xgQ6eb" />

              <Footer></Footer>

              <div jscontroller="j1RDQb" jsaction="rcuQ6b:rcuQ6b;MxH79b:JdcaS;FaOgy:XuHpsb;" className="dZA9kd ynRLnc" data-last-updated-at-time={1678963452137}>
                <div role="button" className="U26fgb JRtysb WzwrXb I12f0b K2mXPb zXBiaf ynRLnc" jscontroller="iSvg6e" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;;keydown:I481le;" jsshadow jsname="Bg3gkf" aria-label="Site actions" aria-disabled="false" tabIndex={0} aria-haspopup="true" aria-expanded="false" data-menu-corner="bottom-start" data-anchor-corner="top-start">
                  <div className="NWlf3e MbhUzd" jsname="ksKsZd" /><span jsslot className="MhXXcc oJeWuf"><span className="Lw7GHd snByac"><svg width={24} height={24} viewBox="0 0 24 24" focusable="false" className=" NMm5M">
                    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
                    </path>
                  </svg></span></span>
                  <div jsname="xl07Ob" style={{ display: 'none' }} aria-hidden="true">
                    <div className="JPdR6b hVNH5c" jscontroller="uY3Nvd" jsaction="IpSVtb:TvD9Pc;fEN2Ze:xzS4ub;frq95c:LNeFm;cFpp9e:J9oOtd; click:H8nU8b; mouseup:H8nU8b; keydown:I481le; keypress:Kr2w4b; blur:O22p3e; focus:H8nU8b" role="menu" tabIndex={0} style={{ position: 'fixed' }}>
                      <div className="XvhY1d" jsaction="mousedown:p8EH2c; touchstart:p8EH2c;">
                        <div className="JAPqpe K0NPx"><span jsslot className="z80M1 FeRvI" jsaction="click:o6ZaF(preventDefault=true); mousedown:lAhnzb; mouseup:Osgxgf; mouseenter:SKyDAe; mouseleave:xq3APb;touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8(preventMouseEvents=true)" jsname="j7LFlb" data-disabled-tooltip="Report abuse is not available in preview mode" aria-label="Report abuse" role="menuitem" tabIndex={-1}>
                          <div className="aBBjbd MbhUzd" jsname="ksKsZd" />
                          <div className="uyYuVb oJeWuf" jscontroller="HYv29e" jsaction="JIbuQc:dQ6O0c;" jsname="lV5oke" data-abuse-proto="%.@.null,null,&quot;https://sites.google.com/view/bot-rua/trang-ch%E1%BB%A7&quot;,null,null,[],[]]">
                            <div className="jO7h3c">Report abuse</div>
                          </div>
                        </span><span jsslot className="z80M1 FeRvI" jsaction="click:o6ZaF(preventDefault=true); mousedown:lAhnzb; mouseup:Osgxgf; mouseenter:SKyDAe; mouseleave:xq3APb;touchstart:jJiBRc; touchmove:kZeBdd; touchend:VfAz8(preventMouseEvents=true)" jsname="j7LFlb" aria-label="Page details" role="menuitem" tabIndex={-1}>
                            <div className="aBBjbd MbhUzd" jsname="ksKsZd" />
                            <div className="uyYuVb oJeWuf" jsaction="JIbuQc:hriXLd;" jsname="Rg8K2c">
                              <div className="jO7h3c">Page details</div>
                            </div>
                          </span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div jscontroller="j1RDQb" jsaction="focusin:gBxDVb(srlkmf); focusout:zvXhGb(srlkmf); click:ro2KTd(psdQ5e),Toy3n(V2zOu);JIbuQc:DSypkd(Bg3gkf);MxH79b:JdcaS;rcuQ6b:rcuQ6b;" className="LqzjUe ynRLnc" data-last-updated-at-time={1678963452137}>
                <div jsname="psdQ5e" className="Q0cSn" />
                <div jsname="bN97Pc" className="hBW7Hb">
                  <div role="button" className="U26fgb mUbCce fKz7Od kpPxtd QMuaBc M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="Bg3gkf" aria-label="Site actions" aria-disabled="false" tabIndex={-1} aria-hidden="true">
                    <div className="VTBa7b MbhUzd" jsname="ksKsZd" /><span jsslot className="xjKiLb"><span className="Ce1Y1c" style={{ top: '-12px' }}><svg width={24} height={24} viewBox="0 0 24 24" focusable="false" className=" NMm5M">
                      <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
                      </path>
                    </svg></span></span>
                  </div>
                  <div jsname="srlkmf" className="hUphyc">
                    <div className="YkaBSd">
                      <div className="iBkmkf"><span>Page updated</span> <span jsname="CFIm1b" className="dji00c" jsaction="AHmuwe:eGiyHb; mouseover:eGiyHb;" tabIndex={0} role="contentinfo" /></div>
                    </div>
                    <div className="YkaBSd">
                      <div role="button" className="U26fgb kpPxtd J7BuEb" jsshadow jsname="V2zOu" aria-disabled="false" tabIndex={0}>Google Sites</div>
                    </div>
                    <div className="YkaBSd" jscontroller="HYv29e" jsaction="click:dQ6O0c;" data-abuse-proto="%.@.null,null,&quot;https://sites.google.com/view/bot-rua/trang-ch%E1%BB%A7&quot;,null,null,[],[]]">
                      <div role="button" className="U26fgb kpPxtd J7BuEb" jsshadow aria-label="Report abuse" aria-disabled="false" tabIndex={0}>Report abuse</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container