import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Header({ startSlider }) {
  const history = useHistory();
  const [checkOpenTool, setCheckOpenTool] = useState(false)
  const pageActive = () => {
    let page = '/'
    switch (history?.location?.pathname) {
      case '/botrua/trangchu':
        page = 'trangchu'
        break;
      case '/botrua/ykien':
        page = 'ykien'
        break;
      case '/botrua/lienhe':
        page = 'lienhe'
        break;
      case '/botrua/sukien':
        page = 'sukien'
        break;
      default:
        page = 'trangchu'
        break
    }
    return page
  }
  const openTool = () => {
    setCheckOpenTool(true)
  }

  const closeTool = () => {
    setCheckOpenTool(false)
  }

  return (
    <header id="atIdViewHeader">
      <div className="BbxBP LBrwzc K5Zlne" jsname="WA9qLc" jscontroller="RQOkef" jsaction="rcuQ6b:JdcaS;MxH79b:JdcaS;VbOlFf:ywL4Jf;FaOgy:ywL4Jf; keydown:Hq2uPe; wheel:Ut4Ahc;" data-top-navigation="true" data-is-preview="false">
        {checkOpenTool ? '' : <div id="openTool" onClick={openTool} className="DXsoRd YTv4We oNsfjf" style={{ backgroundColor: 'rgb(255, 255, 255)' }} role="button" tabIndex={0} jsaction="click:LUvzV" jsname="z4Tpl" aria-haspopup="true" aria-controls="yuynLe" aria-expanded="false"><svg className="wFCWne" viewBox="0 0 24 24" stroke="currentColor" jsname="B1n9ub" focusable="false">
          <g transform="translate(12,12)">
            <path className="hlJH0" d="M-9 -5 L9 -5" fill="none" strokeWidth={2} />
            <path className="HBu6N" d="M-9 0 L9 0" fill="none" strokeWidth={2} />
            <path className="cLAGQe" d="M-9 5 L9 5" fill="none" strokeWidth={2} />
          </g>
        </svg>
        </div>}
        {checkOpenTool ?

          <div id="closeTool s9iPrd" onClick={closeTool} className="DXsoRd YTv4We oNsfjf" style={{ backgroundColor: 'rgb(255, 255, 255)' }} role="button" tabIndex={0} jsaction="click:LUvzV" jsname="z4Tpl" aria-haspopup="true" aria-controls="yuynLe" aria-expanded="false"><svg className="fAUEUd" viewBox="0 0 24 24" focusable="false">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
            </path>
            <path d="M0 0h24v24H0z" fill="none" />
          </svg></div> : ''
        }
        {
          checkOpenTool ?
            <nav id="navMobile yuynLe" className={`JzO0Vc jsnVQ`} style={{ backgroundColor: 'rgb(255, 255, 255)' }} jsname="ihoMLd" role="navigation" tabIndex={-1} jsaction="transitionend:UD2r5"><Link className="Zjiec oNsfjf" to="/"><span>bot rua</span></Link>
              <ul className="jYxBte Fpy8Db" role="navigation" tabIndex={-1}>
                <li jsname="ibnC6b" data-nav-level={1}>
                  <div className={`PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf ${pageActive() === 'trangchu' ? 'lhZOrc' : ''}`}>
                    <div className="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><Link className="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/trangchu" >Trang
                      chủ</Link></div>
                  </div>
                </li>
                <li jsname="ibnC6b" data-nav-level={1}>
                  <div className={`PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf ${pageActive() === 'sukien' ? 'lhZOrc' : ''}`}>
                    <div className="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);">
                      <Link className="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/sukien"  >Sự Kiện</Link>
                    </div>
                  </div>
                </li>
                <li jsname="ibnC6b" data-nav-level={1}>
                  <div className={`PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf ${pageActive() === 'ykien' ? 'lhZOrc' : ''}`} aria-current="true">
                    <div className="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><Link className="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} aria-selected="true" to="/botrua/ykien"  >Ý kiến
                      khách hàng</Link></div>
                  </div>
                </li>
                <li jsname="ibnC6b" data-nav-level={1}>
                  <div className={`PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf ${pageActive() === 'lienhe' ? 'lhZOrc' : ''}`}>
                    <div className="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><Link className="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/lienhe"  >Liên hệ</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </nav> : null
        }
        <div className="VLoccc K5Zlne QDWEj U8eYrb" style={{ backgroundColor: 'rgb(255, 255, 255)' }} jsname="rtFGi" aria-hidden="false">
          <div className="Pvc6xe">
            <div jsname="I8J07e" className="TlfmSc YSH9J"><Link className="GAuSPc" jsname="jIujaf" to="/botrua/trangchu" aria-hidden="false" tabIndex={0}><span className="QTKDff">bot rua</span></Link></div>
            <nav className="plFg0c" jscontroller="HXO1uc" jsaction="rcuQ6b:rcuQ6b;MxH79b:CfS0pe;" id="WDxLfe" data-is-preview="false" style={{ visibility: 'visible' }} role="navigation" tabIndex={-1}>
              <ul jsname="waIgnc" className="K1Ci7d oXBWEc jYxBte">
                <li jsname="ibnC6b" data-nav-level={1} className="VsJjtf">
                  <div id="trang-chu" className={`PsKE7e qV4dIc Qrrb5 YSH9J ${pageActive() === 'trangchu' ? 'M9vuGd' : ''}`}>
                    <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb dk90Ob jgXgSe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/trangchu" style={{}}>Trang chủ</Link></div>
                  </div>
                  <div className="rgLkl" />
                </li>
                <li jsname="ibnC6b" data-nav-level={1} className="VsJjtf">
                  <div id="su-kien" className={`PsKE7e qV4dIc Qrrb5 YSH9J ${pageActive() === 'sukien' ? 'M9vuGd' : ''}`}>
                    <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb dk90Ob jgXgSe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/sukien" style={{}}>Sự Kiện</Link></div>
                  </div>
                  <div className="rgLkl" />
                </li>
                <li jsname="ibnC6b" data-nav-level={1} className="VsJjtf">
                  <div id="y-kien" className={`PsKE7e qV4dIc Qrrb5 YSH9J ${pageActive() === 'ykien' ? 'M9vuGd' : ''}`} aria-current="true">
                    <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb dk90Ob jgXgSe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} aria-selected="true" to="/botrua/ykien" style={{}}>Ý kiến khách hàng</Link></div>
                  </div>
                  <div className="rgLkl" />
                </li>
                <li jsname="ibnC6b" data-nav-level={1} className="VsJjtf">
                  <div id="lien-he" className={`PsKE7e qV4dIc Qrrb5 YSH9J ${pageActive() === 'lienhe' ? 'M9vuGd' : ''}`}>
                    <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb dk90Ob jgXgSe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/lienhe" style={{}}>Liên hệ</Link></div>
                  </div>
                  <div className="rgLkl" />
                </li>
                {/* <li jsname="ibnC6b" data-nav-level={1} className="VsJjtf ZmrVpf oXBWEc" more-menu-item jsaction="mouseenter:Vx8Jlb; mouseleave:ysDRUd" style={{ display: 'none' }} aria-hidden="true">
                  <div className={`PsKE7e qV4dIc Qrrb5 YSH9J ${pageActive() === 'trangchu' ? 'M9vuGd' : ''}`}>
                    <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb dk90Ob jgXgSe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} aria-expanded="false" aria-haspopup="true" data-level={1} style={{}}>Thêm</Link>
                      <div className="mBHtvb u5fiyc" role="presentation" title="Mở rộng/thu gọn" jsaction="click:oESVTe" jsname="ix0Hvc"><svg className="dvmRw" viewBox="0 0 24 24" stroke="currentColor" jsname="HIH2V" focusable="false">
                        <g transform="translate(9.7,12) rotate(45)">
                          <path className="K4B8Y" d="M-4.2 0 L4.2 0" strokeWidth={2} />
                        </g>
                        <g transform="translate(14.3,12) rotate(-45)">
                          <path className="MrYMx" d="M-4.2 0 L4.2 0" strokeWidth={2} />
                        </g>
                      </svg></div>
                    </div>
                  </div>
                  <div className="oGuwee eWDljc RPRy1e Mkt3Tc" style={{ backgroundColor: 'rgb(255, 255, 255)', display: 'none' }} jsname="QXE97" jsaction="transitionend:SJBdh" role="group">
                    <ul className="VcS63b">
                      <li jsname="ibnC6b" data-nav-level={2} className="ijMPi ZmrVpf" in-more-item>
                        <div className="PsKE7e IKA38e oNsfjf">
                          <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb hDrhEe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/trangchu" data-type={1} data-in-more-submenu="true" data-level={2} style={{}}>Trang chủ</Link></div>
                        </div>
                      </li>
                      <li jsname="ibnC6b" data-nav-level={2} className="ijMPi ZmrVpf" in-more-item>
                        <div className="PsKE7e IKA38e oNsfjf">
                          <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb hDrhEe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/sukien"  data-type={1} data-in-more-submenu="true" data-level={2} style={{}}>Sự Kiện</Link></div>
                        </div>
                      </li>
                      <li jsname="ibnC6b" data-nav-level={2} className="ijMPi ZmrVpf" in-more-item>
                        <div className="PsKE7e IKA38e oNsfjf lhZOrc" aria-current="true">
                          <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb hDrhEe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} aria-selected="true" to="/botrua/ykien"  data-type={1} data-in-more-submenu="true" data-level={2} style={{}}>Ý kiến khách hàng</Link></div>
                        </div>
                      </li>
                      <li jsname="ibnC6b" data-nav-level={2} className="ijMPi ZmrVpf" in-more-item>
                        <div className="PsKE7e IKA38e oNsfjf">
                          <div className="I35ICb" jsaction="click:vHQTA(QwLHlb); keydown:mPuKz(QwLHlb);"><Link className="aJHbb hDrhEe HlqNPb" jscontroller="yUHiM" jsaction="rcuQ6b:WYd;" jsname="QwLHlb" role="link" tabIndex={0} data-navtype={1} to="/botrua/lienhe"  data-type={1} data-in-more-submenu="true" data-level={2} style={{}}>Liên hệ</Link></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li> */}
              </ul>
            </nav>
            <div jscontroller="gK4msf" className="RBEWZc" jsname="h04Zod" jsaction="rcuQ6b:WYd;JIbuQc:AT95Ub;VbOlFf:HgE5D;FaOgy:HgE5D;MxH79b:JdcaS;" data-side-navigation="false">
              <div role="button" onClick={() => startSlider(true)} className="U26fgb mUbCce fKz7Od iWs3gf Wdnjke M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;" jsshadow jsname="R9oOZd" aria-label="Mở thanh tìm kiếm" aria-disabled="false" tabIndex={0} data-tooltip="Mở thanh tìm kiếm" aria-expanded="false" data-tooltip-vertical-offset={-12} data-tooltip-horizontal-offset={0}>
                <div className="VTBa7b MbhUzd" jsname="ksKsZd" /><span jsslot className="xjKiLb"><span className="Ce1Y1c" style={{ top: '-12px' }}><svg className="vu8Pwe tCHXDc YSH9J" viewBox="0 0 24 24" focusable="false">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                  </path>
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg></span></span>
              </div>
            </div>
          </div>
          <div jsname="mADGA" className="zDUgLc" style={{ backgroundColor: 'rgb(255, 255, 255)' }} />
        </div>
        <div className="TxnWlb" jsname="BDdyze" jsaction="click:LUvzV" />
      </div>
    </header>
  )
}

export default Header