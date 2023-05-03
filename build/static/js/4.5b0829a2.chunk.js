(this["webpackJsonpfastswap-frontend"]=this["webpackJsonpfastswap-frontend"]||[]).push([[4],{1018:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Bt}));var c=n(18),i=n(25),r=n(15),a=n(0),o=n(41),s=n(26);var l,d="undefined"!==typeof window,b=function(e,t){var n=Object(a.useState)(function(e,t){return void 0!==t?t:!!d&&window.matchMedia(e).matches}(e,t)),c=n[0],i=n[1];return Object(a.useEffect)((function(){var t=!0,n=window.matchMedia(e),c=function(){t&&i(!!n.matches)};return n.addListener(c),i(n.matches),function(){t=!1,n.removeListener(c)}}),[e]),c},j=n(7),x=n(12),p=n.n(x),u=n(240),O=n.n(u),m=n(43),h=n(27),f=n(14),y=n(354),g=n(248),k=n(63),w=n(163),v=n(39),S=n(241),T=n(4),z=j.e.div(l||(l=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: ","\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.noText?"72px":"100%"}),(function(e){return e.theme.colors.primary})),C=function(e){var t=e.onClick,n=e.expanded,c=e.noText,i=void 0!==c&&c;return Object(T.jsxs)(z,{"aria-label":"Hide or show expandable content",noText:i,role:"button",onClick:function(){return t()},children:[!i&&Object(T.jsx)(f.z,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(T.jsx)(f.h,{}):Object(T.jsx)(f.g,{})]})};C.defaultProps={expanded:!1};var L,q,A,P,I,U,F,D,B,E,N,R,M,Q,H,W,V,G,K,Y,$,J,X,Z,_,ee,te,ne,ce,ie,re,ae,oe,se,le,de,be,je,xe,pe=C,ue=n(23),Oe=n(242),me=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,i="BNB"===n?"ETH":t[56],r=c[56];return"".concat(i,"/").concat(r)},he=j.e.div(L||(L=Object(r.a)(["\n  margin-top: 24px;\n"]))),fe=Object(j.e)(f.q)(q||(q=Object(r.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),ye=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,i=e.lpLabel,r=e.addLiquidityUrl,a=Object(m.a)();return Object(T.jsxs)(he,{children:[Object(T.jsxs)(f.k,{justifyContent:"space-between",children:[Object(T.jsxs)(f.z,{children:[a(316,"Stake"),":"]}),Object(T.jsx)(fe,{href:r,children:i})]}),!n&&Object(T.jsxs)(f.k,{justifyContent:"space-between",children:[Object(T.jsxs)(f.z,{children:[a(737,"Total Liquidity"),":"]}),Object(T.jsx)(f.z,{children:c})]}),Object(T.jsx)(f.k,{justifyContent:"flex-start",children:Object(T.jsx)(f.p,{external:!0,href:t,bold:!1,children:a(356,"View on BscScan")})})]})},ge=Object(j.e)(f.k)(A||(A=Object(r.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),ke=Object(j.e)(f.y)(P||(P=Object(r.a)(["\n  margin-left: 4px;\n"]))),we=function(e){var t=e.lpLabel,n=e.multiplier,c=(e.isCommunityFarm,e.farmImage),i=c.split("-")[0],r=c.split("-")[1].split(".")[0];return Object(T.jsxs)(ge,{justifyContent:"space-between",alignItems:"flex-start",mb:"12px",children:[Object(T.jsx)("img",{src:"/images/tokens/".concat(r,".png"),alt:r,width:28,height:28,style:{border:"1.5px solid #566FFE",borderRadius:20}}),Object(T.jsx)("img",{src:"/images/tokens/".concat(i,".png"),alt:i,width:36,height:36,style:{position:"absolute",top:40,left:40,border:"1.5px solid #566FFE",borderRadius:20,background:"white"}}),Object(T.jsxs)(f.k,{flexDirection:"column",alignItems:"flex-end",children:[Object(T.jsx)(f.l,{mb:"4px",children:t}),Object(T.jsx)(f.k,{justifyContent:"center",children:Object(T.jsx)(ke,{variant:"primary",children:n})})]})]})},ve=n(2),Se=n.n(ve),Te=n(11),ze=n(24),Ce=n(37),Le=n(59),qe=n(244),Ae=n(243),Pe=n(245),Ie=n(246),Ue=n(62),Fe=n(119),De=j.e.div(I||(I=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var t=e.isWarning,n=void 0!==t&&t,c=e.theme;return n?c.shadows.warning:c.shadows.inset}),(function(e){return e.theme.colors.text})),Be=Object(j.e)(f.o)(U||(U=Object(r.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),Ee=Object(j.e)(f.z)(F||(F=Object(r.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),Ne=function(e){var t=e.max,n=e.symbol,c=e.onChange,i=e.onSelectMax,r=e.value,a=e.addLiquidityUrl,o=e.inputTitle,s=Object(m.a)(),l="0"===t||!t,d=l?"0":parseFloat(t).toFixed(4);return Object(T.jsxs)("div",{style:{position:"relative"},children:[Object(T.jsxs)(De,{isWarning:l,children:[Object(T.jsxs)(f.k,{justifyContent:"space-between",pl:"16px",children:[Object(T.jsx)(f.z,{fontSize:"14px",children:o}),Object(T.jsxs)(f.z,{fontSize:"14px",children:[s(1120,"Balance"),": ",d.toLocaleString()]})]}),Object(T.jsxs)(f.k,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(T.jsx)(Be,{onChange:c,placeholder:"0",value:r}),Object(T.jsx)(f.c,{size:"sm",onClick:i,mr:"8px",children:s(452,"Max")}),Object(T.jsx)(f.z,{fontSize:"16px",children:n})]})]}),l&&Object(T.jsxs)(Ee,{fontSize:"14px",color:"failure",children:["No tokens to stake:"," ",Object(T.jsxs)(f.p,{fontSize:"14px",bold:!1,href:a,external:!0,color:"failure",children:[s(999,"get")," ",n]})]})]})},Re=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,o=void 0===r?"":r,s=e.addLiquidityUrl,l=Object(a.useState)(""),d=Object(i.a)(l,2),b=d[0],j=d[1],x=Object(a.useState)(!1),p=Object(i.a)(x,2),u=p[0],O=p[1],h=Object(m.a)(),y=Object(a.useMemo)((function(){return Object(Ue.b)(t)}),[t]),g=Object(a.useCallback)((function(e){j(e.currentTarget.value)}),[j]),k=Object(a.useCallback)((function(){j(y)}),[y,j]);return Object(T.jsxs)(f.u,{title:h(271,"Stake LP tokens"),onDismiss:c,children:[Object(T.jsx)(Ne,{value:b,onSelectMax:k,onChange:g,max:y,symbol:o,addLiquidityUrl:s,inputTitle:h(316,"Stake")}),Object(T.jsxs)(Fe.a,{children:[Object(T.jsx)(f.c,{variant:"secondary",onClick:c,children:h(272,"Cancel")}),Object(T.jsx)(f.c,{disabled:u||"0"===y||"0"===b,onClick:Object(Te.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(b);case 3:O(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:u?h(273,"Pending Confirmation"):h(274,"Confirm")})]}),Object(T.jsxs)(f.q,{href:s,style:{alignSelf:"center"},children:[h(275,"Get")," ",o]})]})},Me=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,o=void 0===r?"":r,s=Object(a.useState)(""),l=Object(i.a)(s,2),d=l[0],b=l[1],j=Object(a.useState)(!1),x=Object(i.a)(j,2),p=x[0],u=x[1],O=Object(m.a)(),h=Object(a.useMemo)((function(){return Object(Ue.b)(c)}),[c]),y=Object(a.useCallback)((function(e){b(e.currentTarget.value)}),[b]),g=Object(a.useCallback)((function(){b(h)}),[h,b]);return Object(T.jsxs)(f.u,{title:O(276,"Unstake LP tokens"),onDismiss:n,children:[Object(T.jsx)(Ne,{onSelectMax:g,onChange:y,value:d,max:h,symbol:o,inputTitle:O(277,"Unstake")}),Object(T.jsxs)(Fe.a,{children:[Object(T.jsx)(f.c,{variant:"secondary",onClick:n,children:O(272,"Cancel")}),Object(T.jsx)(f.c,{disabled:p,onClick:Object(Te.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(d);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:p?O(273,"Pending Confirmation"):O(274,"Confirm")})]})]})},Qe=j.e.div(D||(D=Object(r.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),He=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.addLiquidityUrl,o=Object(m.a)(),s=Object(Pe.a)(r).onStake,l=Object(Ie.a)(r).onUnstake;console.log("tokenName",c);var d=Object(Ue.a)(t),b=d.toLocaleString(),j=Object(f.H)(Object(T.jsx)(Re,{max:n,onConfirm:s,tokenName:c,addLiquidityUrl:a})),x=Object(i.a)(j,1)[0],p=Object(f.H)(Object(T.jsx)(Me,{max:t,onConfirm:l,tokenName:c})),u=Object(i.a)(p,1)[0];return Object(T.jsxs)(f.k,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(f.l,{color:0===d?"textDisabled":"text",children:b}),0===d?Object(T.jsxs)(f.c,{onClick:x,children:[o(316,"Stake")," LP"]}):Object(T.jsxs)(Qe,{children:[Object(T.jsx)(f.m,{variant:"tertiary",onClick:u,mr:"6px",children:Object(T.jsx)(f.t,{color:"primary"})}),Object(T.jsx)(f.m,{variant:"tertiary",onClick:x,children:Object(T.jsx)(f.a,{color:"primary"})})]})]})},We=n(247),Ve=function(e){var t=e.earnings,n=e.pid,c=Object(m.a)(),r=Object(a.useState)(!1),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(We.a)(n).onReward,b=Object(Ue.a)(t),j=b.toLocaleString();return Object(T.jsxs)(f.k,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(f.l,{color:0===b?"textDisabled":"text",children:j}),Object(T.jsx)(f.c,{disabled:0===b||s,onClick:Object(Te.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,d();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(562,"Harvest")})]})},Ge=j.e.div(B||(B=Object(r.a)(["\n  padding-top: 16px;\n"]))),Ke=function(e){var t=e.farm,n=e.account,c=e.addLiquidityUrl,r=Object(m.a)(),o=Object(a.useState)(!1),s=Object(i.a)(o,2),l=s[0],d=s[1],b=Object(k.a)(t.lpSymbol),j=b.pid,x=b.lpAddresses,p=Object(k.b)(j),u=p.allowance,O=p.tokenBalance,h=p.stakedBalance,y=p.earnings,g=Object(ze.a)(x),w=t.lpSymbol.toUpperCase(),v=n&&u&&u.isGreaterThan(0),S=Object(Le.a)(),z=Object(Ce.a)(g,S),C=Object(qe.a)(z).onApprove,L=Object(a.useCallback)(Object(Te.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,C();case 4:d(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[C]);return Object(T.jsxs)(Ge,{children:[Object(T.jsxs)(f.k,{children:[Object(T.jsx)(f.z,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",pr:"3px",children:"FAST"}),Object(T.jsx)(f.z,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",children:r(743,"Earned")})]}),Object(T.jsx)(Ve,{earnings:y,pid:j}),Object(T.jsxs)(f.k,{children:[Object(T.jsx)(f.z,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",pr:"3px",children:w}),Object(T.jsx)(f.z,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",children:r(739,"Staked")})]}),n?v?Object(T.jsx)(He,{stakedBalance:h,tokenBalance:O,tokenName:w,pid:j,addLiquidityUrl:c}):"duke"===t.isSpecial||"fast"===t.isSpecial||"both"===t.isSpecial?Object(T.jsx)(f.c,{width:"100%",mt:"8px",children:"Coming Soon"}):Object(T.jsx)(f.c,{mt:"8px",width:"100%",disabled:l,onClick:L,children:r(741,"Approve Contract")}):Object(T.jsx)(Ae.a,{width:"100%",mt:"20px"})]})},Ye=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,i=n/365,r=1e3/e.cakePrice,a=r*Math.pow(1+c/365,365*i);return t=a-r,Math.round(100*t)/100},$e=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Je=j.e.div(E||(E=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Xe=j.e.div(N||(N=Object(r.a)(["\n  margin-bottom: '10px';\n"]))),Ze=Object(j.e)(f.z)(R||(R=Object(r.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),_e=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.cakePrice,i=e.apy,r=e.addLiquidityUrl,a=Object(m.a)(),o=i.times(new p.a(100)).toNumber(),s=1e3/c.toNumber(),l=Ye({numberOfDays:1,farmApy:o,cakePrice:c}),d=Ye({numberOfDays:7,farmApy:o,cakePrice:c}),b=Ye({numberOfDays:30,farmApy:o,cakePrice:c}),j=Ye({numberOfDays:365,farmApy:o,cakePrice:c});return Object(T.jsxs)(f.u,{title:"ROI",onDismiss:t,children:[Object(T.jsxs)(Je,{children:[Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:a(860,"Timeframe")})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:a(858,"ROI")})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:a(864,"FAST per $1000")})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{children:"1d"})}),Object(T.jsx)(Xe,{children:Object(T.jsxs)(f.z,{children:[$e({amountEarned:l,amountInvested:s}),"%"]})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{children:l})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{children:"7d"})}),Object(T.jsx)(Xe,{children:Object(T.jsxs)(f.z,{children:[$e({amountEarned:d,amountInvested:s}),"%"]})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{children:d})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{children:"30d"})}),Object(T.jsx)(Xe,{children:Object(T.jsxs)(f.z,{children:[$e({amountEarned:b,amountInvested:s}),"%"]})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{children:b})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{children:"365d(APY)"})}),Object(T.jsx)(Xe,{children:Object(T.jsxs)(f.z,{children:[$e({amountEarned:j,amountInvested:s}),"%"]})}),Object(T.jsx)(Xe,{children:Object(T.jsx)(f.z,{children:j})})]}),Object(T.jsx)(Ze,{fontSize:"12px",color:"textSubtle",children:a(866,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(T.jsx)(f.k,{justifyContent:"center",children:Object(T.jsxs)(f.q,{href:r,children:[a(999,"Get")," ",n]})})]})},et=function(e){var t=e.lpLabel,n=e.cakePrice,c=e.apy,r=e.addLiquidityUrl,a=Object(f.H)(Object(T.jsx)(_e,{lpLabel:t,cakePrice:n,apy:c,addLiquidityUrl:r})),o=Object(i.a)(a,1)[0];return Object(T.jsx)(f.m,{onClick:o,variant:"text",size:"sm",ml:"4px",children:Object(T.jsx)(f.f,{})})},tt=Object(j.f)(M||(M=Object(r.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),nt=j.e.div(Q||(Q=Object(r.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 30px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),tt),ct=j.e.div(H||(H=Object(r.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 30px;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center; \n"])),(function(e){return e.theme.card.background})),it=j.e.div(W||(W=Object(r.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),rt=j.e.div(V||(V=Object(r.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),at=function(e){var t=e.farm,n=e.removed,c=e.bnbPrice,r=e.cakePrice,o=e.dukePrice,s=e.babydukePrice,l=e.account,d=Object(m.a)(),b=Object(a.useState)(!1),j=Object(i.a)(b,2),x=j[0],u=j[1],O=S.a.includes(t.tokenSymbol),h=t.lpSymbol.split(" ")[0].toLocaleLowerCase(),y=Object(a.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===ue.b.BNB?c.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===ue.b.FAST?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===ue.b.DUKE?o.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===ue.b.BABYDUKE?s.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[c,r,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),g=y?"$".concat(Number(y).toLocaleString(void 0,{maximumFractionDigits:0})):"-",k=t.lpSymbol&&t.lpSymbol.toUpperCase(),w=t.dual?t.dual.earnLabel:"FAST",v=t.apy&&t.apy.times(new p.a(100)).toNumber().toLocaleString("en-US").slice(0,-1),z=t.quoteTokenAdresses,C=t.quoteTokenSymbol,L=t.tokenAddresses,q=me({quoteTokenAdresses:z,quoteTokenSymbol:C,tokenAddresses:L}),A="".concat(Oe.a,"/").concat(q);return Object(T.jsxs)(ct,{children:[("FAST"===t.tokenSymbol||"DUKE"===t.tokenSymbol)&&Object(T.jsx)(nt,{}),Object(T.jsx)(we,{lpLabel:k,multiplier:t.multiplier,isCommunityFarm:O,farmImage:h,tokenSymbol:t.tokenSymbol}),!n&&Object(T.jsxs)(f.k,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsxs)(f.z,{color:"primary",children:[d(736,"APR"),":"]}),Object(T.jsx)(f.z,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(et,{lpLabel:k,addLiquidityUrl:A,cakePrice:r,apy:t.apy}),v,"%"]}):Object(T.jsx)(f.x,{height:24,width:80})})]}),Object(T.jsxs)(f.k,{justifyContent:"space-between",children:[Object(T.jsxs)(f.z,{color:"primary",children:[d(318,"Earned"),":"]}),Object(T.jsx)(f.z,{bold:!0,children:w})]}),Object(T.jsx)(Ke,{farm:t,account:l,addLiquidityUrl:A}),Object(T.jsx)(it,{}),Object(T.jsx)(pe,{onClick:function(){return u(!x)},expanded:x,noText:!1}),Object(T.jsx)(rt,{expanded:x,children:Object(T.jsx)(ye,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:g,lpLabel:k,addLiquidityUrl:A})})]})},ot=j.e.div(G||(G=Object(r.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),st=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.addLiquidityUrl,o=Object(m.a)(),s=Object(Pe.a)(r).onStake,l=Object(Ie.a)(r).onUnstake,d=Object(Ue.a)(t),b=d.toLocaleString(),j=Object(f.H)(Object(T.jsx)(Re,{max:n,onConfirm:s,tokenName:c,addLiquidityUrl:a})),x=Object(i.a)(j,1)[0],p=Object(f.H)(Object(T.jsx)(Me,{max:t,onConfirm:l,tokenName:c})),u=Object(i.a)(p,1)[0];return Object(T.jsxs)(f.k,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(f.l,{color:0===d?"textDisabled":"text",children:b}),0===d?Object(T.jsxs)(f.c,{onClick:x,children:[o(316,"Stake")," LP"]}):Object(T.jsxs)(ot,{children:[Object(T.jsx)(f.m,{variant:"tertiary",onClick:u,mr:"6px",children:Object(T.jsx)(f.t,{color:"primary"})}),Object(T.jsx)(f.m,{variant:"tertiary",onClick:x,children:Object(T.jsx)(f.a,{color:"primary"})})]})]})},lt=function(e){var t=e.earnings,n=e.pid,c=Object(m.a)(),r=Object(a.useState)(!1),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(We.a)(n).onReward,b=Object(Ue.a)(t),j=b.toLocaleString();return Object(T.jsxs)(f.k,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(f.l,{color:0===b?"textDisabled":"text",children:j}),Object(T.jsx)(f.c,{disabled:0===b||s,onClick:Object(Te.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,d();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(562,"Harvest")})]})},dt=j.e.div(K||(K=Object(r.a)(["\n  width: calc(100% - 300px);\n  display: flex;\n  justify-content: space-between;\n  min-width: 562px;\n  @media (max-width: 1160px) {\n    min-width: 100%;\n  }\n  @media (max-width: 645px) {\n    flex-wrap: wrap;\n  }\n"]))),bt=j.e.div(Y||(Y=Object(r.a)(["\n  border: 3px solid #536BF1;\n  border-radius: 19px;\n  min-width: 275px;\n  padding: 12px 20px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),jt=function(e){var t=e.farm,n=e.account,c=e.addLiquidityUrl,r=Object(m.a)(),o=Object(a.useState)(!1),s=Object(i.a)(o,2),l=s[0],d=s[1],j=Object(k.a)(t.lpSymbol),x=j.pid,p=j.lpAddresses,u=Object(k.b)(x),O=u.allowance,h=u.tokenBalance,y=u.stakedBalance,g=u.earnings,w=Object(ze.a)(p),v=t.lpSymbol.toUpperCase(),S=n&&O&&O.isGreaterThan(0),z=b("(max-width: 645px)"),C=Object(Le.a)(),L=Object(Ce.a)(w,C),q=Object(qe.a)(L).onApprove,A=Object(a.useCallback)(Object(Te.a)(Se.a.mark((function e(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,q();case 4:d(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[q]);return Object(T.jsxs)(dt,{children:[Object(T.jsxs)(bt,{style:{margin:z?"0px 0px 10px 0px":"0px 10px 0px 0px"},children:[Object(T.jsxs)(f.k,{children:[Object(T.jsx)(f.z,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",pr:"3px",children:"FAST"}),Object(T.jsx)(f.z,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",children:r(743,"Earned")})]}),Object(T.jsx)(lt,{earnings:g,pid:x})]}),Object(T.jsxs)(bt,{children:[Object(T.jsxs)(f.k,{children:[Object(T.jsx)(f.z,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",pr:"3px",children:v}),Object(T.jsx)(f.z,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",children:r(739,"Staked")})]}),n?S?Object(T.jsx)(st,{stakedBalance:y,tokenBalance:h,tokenName:v,pid:x,addLiquidityUrl:c}):"duke"===t.isSpecial||"fast"===t.isSpecial||"both"===t.isSpecial?Object(T.jsx)(f.c,{width:"100%",mt:"8px",children:"Coming Soon"}):Object(T.jsx)(f.c,{mt:"8px",width:"100%",disabled:l,onClick:A,children:r(741,"Approve Contract")}):Object(T.jsx)(Ae.a,{width:"100%",mt:"20px"})]})]})},xt=j.e.div($||($=Object(r.a)(["\n  padding: 9px 20px;\n  background-color: white;\n  box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);\n"]))),pt=Object(j.e)(f.q)(J||(J=Object(r.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),ut=j.e.div(X||(X=Object(r.a)(["\n  width: 248px;\n  @media (max-width: 1160px) {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n"]))),Ot=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,i=e.lpLabel,r=e.addLiquidityUrl,a=e.farm,o=e.account,s=Object(m.a)();return Object(T.jsx)(xt,{children:Object(T.jsxs)(f.k,{justifyContent:"space-between",flexWrap:"wrap",alignItems:"center",children:[Object(T.jsxs)(ut,{children:[Object(T.jsxs)(f.k,{justifyContent:"space-between",children:[Object(T.jsxs)(f.z,{children:[s(316,"Stake"),":"]}),Object(T.jsx)(pt,{href:r,children:i})]}),!n&&Object(T.jsxs)(f.k,{justifyContent:"space-between",children:[Object(T.jsxs)(f.z,{children:[s(737,"Total Liquidity"),":"]}),Object(T.jsx)(f.z,{children:c})]}),Object(T.jsx)(f.k,{justifyContent:"flex-start",children:Object(T.jsx)(f.p,{external:!0,href:t,bold:!1,children:s(356,"View on BscScan")})})]}),Object(T.jsx)(jt,{farm:a,account:o,addLiquidityUrl:r})]})})},mt=Object(j.e)(f.k)(Z||(Z=Object(r.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n  align-items: center;\n  width: calc(100% - 505px);\n  @media (max-width: 800px) {\n    width: calc(100% - 205px);\n  }\n  @media (max-width: 430px) {\n    min-width: calc(100% - 100px);\n  }\n"]))),ht=(Object(j.e)(f.y)(_||(_=Object(r.a)(["\n  margin-left: 4px;\n"]))),function(e){var t=e.lpLabel,n=e.farmImage,c=n.split("-")[0],i=n.split("-")[1].split(".")[0];return Object(T.jsxs)(mt,{justifyContent:"flex-start",children:[Object(T.jsxs)("div",{style:{width:40,height:44},children:[Object(T.jsx)("img",{src:"/images/tokens/".concat(i,".png"),alt:i,width:25,height:25,style:{border:"1.5px solid #566FFE",borderRadius:20}}),Object(T.jsx)("img",{src:"/images/tokens/".concat(c,".png"),alt:c,width:30,height:30,style:{position:"absolute",top:23,left:35,border:"1.5px solid #566FFE",borderRadius:20,background:"white"}})]}),Object(T.jsx)("div",{style:{textAlign:"left",paddingLeft:8,width:180,marginTop:10},children:Object(T.jsx)(f.l,{mb:"8px",ml:"12px",style:{fontWeight:800,fontSize:18},children:t.replace("LP","")})})]})}),ft=j.e.div(ee||(ee=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),yt=j.e.div(te||(te=Object(r.a)(["\n  margin-bottom: '10px';\n"]))),gt=Object(j.e)(f.z)(ne||(ne=Object(r.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),kt=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.cakePrice,i=e.apy,r=e.addLiquidityUrl,a=Object(m.a)(),o=i.times(new p.a(100)).toNumber(),s=1e3/c.toNumber(),l=Ye({numberOfDays:1,farmApy:o,cakePrice:c}),d=Ye({numberOfDays:7,farmApy:o,cakePrice:c}),b=Ye({numberOfDays:30,farmApy:o,cakePrice:c}),j=Ye({numberOfDays:365,farmApy:o,cakePrice:c});return Object(T.jsxs)(f.u,{title:"ROI",onDismiss:t,children:[Object(T.jsxs)(ft,{children:[Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:a(860,"Timeframe")})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:a(858,"ROI")})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:a(864,"FAST per $1000")})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{children:"1d"})}),Object(T.jsx)(yt,{children:Object(T.jsxs)(f.z,{children:[$e({amountEarned:l,amountInvested:s}),"%"]})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{children:l})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{children:"7d"})}),Object(T.jsx)(yt,{children:Object(T.jsxs)(f.z,{children:[$e({amountEarned:d,amountInvested:s}),"%"]})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{children:d})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{children:"30d"})}),Object(T.jsx)(yt,{children:Object(T.jsxs)(f.z,{children:[$e({amountEarned:b,amountInvested:s}),"%"]})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{children:b})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{children:"365d(APY)"})}),Object(T.jsx)(yt,{children:Object(T.jsxs)(f.z,{children:[$e({amountEarned:j,amountInvested:s}),"%"]})}),Object(T.jsx)(yt,{children:Object(T.jsx)(f.z,{children:j})})]}),Object(T.jsx)(gt,{fontSize:"12px",color:"textSubtle",children:a(866,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(T.jsx)(f.k,{justifyContent:"center",children:Object(T.jsxs)(f.q,{href:r,children:[a(999,"Get")," ",n]})})]})},wt=function(e){var t=e.lpLabel,n=e.cakePrice,c=e.apy,r=e.addLiquidityUrl,a=Object(f.H)(Object(T.jsx)(kt,{lpLabel:t,cakePrice:n,apy:c,addLiquidityUrl:r})),o=Object(i.a)(a,1)[0];return Object(T.jsx)(f.m,{onClick:o,variant:"text",ml:"4px",style:{width:24},children:Object(T.jsx)(f.f,{})})},vt=Object(j.f)(ce||(ce=Object(r.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),St=(j.e.div(ie||(ie=Object(r.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 30px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),vt),j.e.div(re||(re=Object(r.a)(["\n  align-self: baseline;\n  background: ",";\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  padding: 9px 20px;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 0px;\n\n  & > * {\n    font-size: 18px;\n    text-align: left;\n  }\n"])),(function(e){return e.theme.card.background}))),Tt=(j.e.div(ae||(ae=Object(r.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),j.e.div(oe||(oe=Object(r.a)(["\n  height: ",";\n  overflow: hidden;\n  box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);\n"])),(function(e){return e.expanded?"100%":"0px"}))),zt=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,o=e.dukePrice,s=e.babydukePrice,l=e.account,d=(Object(m.a)(),b("(max-width:800px)")),j=b("(max-width:430px)"),x=Object(a.useState)(!1),u=Object(i.a)(x,2),O=u[0],h=u[1],y=(S.a.includes(t.tokenSymbol),t.lpSymbol.split(" ")[0].toLocaleLowerCase()),g=Object(a.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===ue.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===ue.b.FAST?c.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===ue.b.DUKE?o.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===ue.b.BABYDUKE?s.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),k=g?"$".concat(Number(g).toLocaleString(void 0,{maximumFractionDigits:0})):"-",w=t.lpSymbol&&t.lpSymbol.toUpperCase(),v=t.dual?t.dual.earnLabel:"FAST",z=t.apy&&t.apy.times(new p.a(100)).toNumber().toLocaleString("en-US").slice(0,-1),C=t.quoteTokenAdresses,L=t.quoteTokenSymbol,q=t.tokenAddresses,A=me({quoteTokenAdresses:C,quoteTokenSymbol:L,tokenAddresses:q}),P="".concat(Oe.a,"/").concat(A);return Object(T.jsxs)(f.k,{flexDirection:"column",children:[Object(T.jsxs)(St,{children:[Object(T.jsx)(ht,{lpLabel:w,farmImage:y,tokenSymbol:t.tokenSymbol}),!j&&Object(T.jsx)(f.z,{bold:!0,mt:"0px",style:{margin:"auto 0",width:90},children:v}),Object(T.jsx)(f.z,{bold:!0,style:{display:"flex",alignItems:"center",width:120},children:t.apy?Object(T.jsxs)(T.Fragment,{children:[z,"%",Object(T.jsx)(wt,{lpLabel:w,addLiquidityUrl:P,cakePrice:c,apy:t.apy})]}):Object(T.jsx)(f.x,{height:24,width:80})}),!d&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(f.z,{bold:!0,style:{margin:"auto 0",width:150},children:k}),Object(T.jsx)(f.z,{bold:!0,style:{margin:"auto 0",width:120},children:t.multiplier})]}),Object(T.jsx)(pe,{onClick:function(){return h(!O)},expanded:O,noText:!0})]}),Object(T.jsx)(Tt,{expanded:O,children:Object(T.jsx)(Ot,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:k,lpLabel:w,addLiquidityUrl:P,farm:t,account:l})})]})},Ct=n(69),Lt=function(e){var t=e.stakedOnly,n=e.setStakedOnly,c=e.setSpecialOnly,r=e.viewMode,s=e.setViewMode,l=e.filter,d=e.setFilter,b=Object(o.h)(),j=b.url,x=b.isExact,p=Object(m.a)(),u=Object(a.useState)(0),h=Object(i.a)(u,2),y=h[0];h[1];return Object(a.useEffect)((function(){0===y?c("all"):1===y?c("duke"):2===y&&c("fast")}),[y,c]),Object(T.jsxs)(qt,{children:[Object(T.jsxs)(At,{children:[Object(T.jsxs)(Pt,{children:[Object(T.jsx)(f.B,{checked:t,onChange:function(){return n(!t)},scale:"sm"}),Object(T.jsxs)(f.z,{fontSize:"22px",children:[" ",p(675,"Staked only")]})]}),Object(T.jsx)("div",{style:{maxHeight:"43px"},children:Object(T.jsxs)(f.d,{activeIndex:x?0:1,variant:"primary",scale:"sm",children:[Object(T.jsx)(f.e,{as:Ct.a,to:"".concat(j),style:{height:39,borderRadius:40},children:p(698,"Active")}),Object(T.jsx)(f.e,{as:Ct.a,to:"".concat(j,"/history"),style:{height:39,borderRadius:40},children:p(700,"Inactive")})]})})]}),Object(T.jsxs)(At,{children:[Object(T.jsx)(f.o,{id:"search",name:"search-card",type:"text",placeholder:p(10011,"Search"),style:{maxWidth:170,marginRight:8},value:l,onChange:function(e){return d(e.currentTarget.value)}}),Object(T.jsxs)(It,{style:{minWidth:58},children:[Object(T.jsx)(Ut,{onClick:function(){s(!0),O.a.set("viewMode","true")},style:{marginRight:21,width:20,height:13},children:r?Object(T.jsx)("img",{src:"/images/icon-card-active.svg",alt:"icon card",width:"32px",height:"32px"}):Object(T.jsx)("img",{src:"/images/icon-card.svg",alt:"icon card",width:"32px",height:"32px"})}),Object(T.jsx)(Ut,{onClick:function(){s(!1),O.a.set("viewMode","false")},style:{width:17,height:14},children:r?Object(T.jsx)("img",{src:"/images/icon-list.svg",alt:"icon list",width:"32px",height:"32px"}):Object(T.jsx)("img",{src:"/images/icon-list-active.svg",alt:"icon list",width:"32px",height:"32px"})})]})]})]})},qt=j.e.div(se||(se=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  @media (max-width: 675px) {\n    flex-wrap: wrap;\n  }\n"]))),At=j.e.div(le||(le=Object(r.a)(["\n  display: flex;\n  @media (max-width: 675px) {\n    min-width: 100%;\n    justify-content: space-between;\n    margin-top: 10px;\n  }\n"]))),Pt=j.e.div(de||(de=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),f.z),It=j.e.div(be||(be=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"]))),Ut=Object(j.e)(f.c)(je||(je=Object(r.a)(["\n  padding: 0px 0px;\n  width: 32px;\n  height: 32px;\n  background: transparent;\n  box-shadow: none;\n"]))),Ft=j.e.div(xe||(xe=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    width: 100%;\n    font-size: 18px !important; \n    :last-child {\n      border-bottom-left-radius: 28px;\n      border-bottom-right-radius: 28px;\n    }\n  }\n"]))),Dt=function(){var e=b("(max-width: 800px)"),t=b("(max-width:430px)"),n=e?t?"calc(100% - 100px)":"calc(100% - 224px)":"calc(100% - 505px)";return Object(T.jsxs)(St,{style:{height:66,borderTopLeftRadius:28,borderTopRightRadius:28,alignItems:"center"},children:[Object(T.jsx)(f.z,{bold:!0,color:"primary",style:{minWidth:n},children:"Token Pair"}),!t&&Object(T.jsx)(f.z,{bold:!0,color:"primary",style:{width:90},children:"Earned"}),Object(T.jsx)(f.z,{bold:!0,color:"primary",style:{width:120},children:"APY"}),!e&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(f.z,{bold:!0,color:"primary",style:{width:150},children:"Liquidity"}),Object(T.jsx)(f.z,{bold:!0,color:"primary",style:{width:145},children:"Multiplier"})]})]})},Bt=function(){var e=Object(o.h)().path,t=Object(k.c)(),n=Object(k.i)(),r=Object(k.h)(),l=Object(h.b)().account,d=Object(k.j)(),b=Object(k.g)(),j=(Object(m.a)(),Object(s.b)()),x=Object(w.a)().fastRefresh;Object(a.useEffect)((function(){l&&j(Object(v.b)(l))}),[l,j,x]);var u=Object(a.useState)(!1),f=Object(i.a)(u,2),S=f[0],z=f[1],C=Object(a.useState)(""),L=Object(i.a)(C,2),q=L[0],A=L[1],P=Object(a.useState)(!!O.a.get("viewMode")),I=Object(i.a)(P,2),U=I[0],F=I[1],D=Object(a.useState)("all"),B=Object(i.a)(D,2),E=(B[0],B[1]),N=t.filter((function(e){return-1!==e.pid&&"0X"!==e.multiplier}));""!==q&&(N=N.filter((function(e){return-1!==e.lpSymbol.indexOf(q.toUpperCase())})));var R=t.filter((function(e){return-1!==e.pid&&"0X"===e.multiplier}));""!==q&&(R=R.filter((function(e){return-1!==e.lpSymbol.indexOf(q.toUpperCase())})));var M=N.filter((function(e){return e.userData&&new p.a(e.userData.stakedBalance).isGreaterThan(0)})),Q=(N.filter((function(e){return"duke"===e.isSpecial||"both"===e.isSpecial})),N.filter((function(e){return"new"===e.isSpecial||"new"===e.isSpecial})),N.filter((function(e){return"no"===e.isSpecial}))),H=Object(a.useCallback)((function(e,t){var i=e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t,i=new p.a(e.amountFastTokens).div(91).times(365);return t="DUKE"===e.quoteTokenSymbol?d.times(i).div(new p.a(e.totalLiquidityWithoutPrice).times(n)).times(new p.a(10).pow(8)):n.times(i).div(new p.a(e.totalLiquidityWithoutPrice).times(n)),Object(c.a)(Object(c.a)({},e),{},{apy:t})}));return U?i.map((function(e){return Object(T.jsx)(at,{farm:e,removed:t,bnbPrice:r,cakePrice:n,dukePrice:d,babydukePrice:b,account:l},e.pid)})):i.map((function(e){return Object(T.jsx)(zt,{farm:e,removed:t,bnbPrice:r,cakePrice:n,dukePrice:d,babydukePrice:b,account:l},e.pid)}))}),[r,n,l]);return Object(T.jsxs)(g.a,{children:[Object(T.jsx)(Lt,{stakedOnly:S,setStakedOnly:z,setSpecialOnly:E,viewMode:U,setViewMode:F,filter:q,setFilter:A}),Object(T.jsx)("div",{children:U?Object(T.jsxs)(y.a,{children:[Object(T.jsx)(o.b,{exact:!0,path:"".concat(e),children:H(S?M:Q,!1)}),Object(T.jsx)(o.b,{exact:!0,path:"".concat(e,"/history"),children:H(R,!0)})]}):Object(T.jsxs)(Ft,{children:[Object(T.jsxs)(o.b,{exact:!0,path:"".concat(e),children:[Object(T.jsx)(Dt,{}),H(S?M:Q,!1)]}),Object(T.jsx)(o.b,{exact:!0,path:"".concat(e,"/history"),children:H(R,!0)})]})})]})}}}]);