/*!
 * ------------------------------------------- START OF THIRD PARTY NOTICE -----------------------------------------
 * 
 * This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
 * 
 *   json2.js (2016-05-01)
 *   https://github.com/douglascrockford/JSON-js
 *   License: Public Domain
 * 
 * Provided for Informational Purposes Only
 * 
 * ----------------------------------------------- END OF THIRD PARTY NOTICE ------------------------------------------
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{425:function(e,n,i){var s=i(2),t=i(0),o=i(1),a=i(3),r=i(20),d=i(5),l=i(10),c=i(4),u=i(9),g=i(6),p=i(43),m=i(14),f=i(28),v=i(7);var b=window,S=o.Helper,x=o.QueryString,_=t.PaginatedState,k=t.BindProvider,T=t.ApiErrorCodes,h=a.Array,w=a.String,I=a.Object,C=g.SessionIdp,R=r.GctResultAction,F=r.GctRequestHelperFlags;function E(e){var n=this,i=null,o=0,a=null,g={},f={},b=e.serverData,E=e.serverError,y=(e.isInitialView,e.sessions),L=e.flowToken,A=e.isLogoutRequest,U=e.isTileRequestPending,O=e.otherIdpRedirectUrl,D=e.availableSignupCreds||[],M=b.str,P=b.urlLogin,q=b.urlLogout,B=b.urlForget,H=b.urlMsaLogout,N=b.urlOtherIdpForget,V=b.oUrlOtherIdpPostParams,W=b.urlHostedPrivacyLink,G=b.sRemoteConnectAppName,j=b.sRemoteClientIp,$=b.sRemoteAppLocation,J=b.iBindProvider,K=b.urlLinkedInFed,z=b.urlGitHubFed,Q=b.urlAppHrd,X=b.urlSignUp,Y=b.fShowSignupTile,Z=b.urlUpgradeRedirectWithUsernane,ee=b.urlUpgradeRedirect,ne=b.oSignUpPostParams,ie=b.oUpgradeMigrationConfig||{},se=b.oAppCobranding,te=b.urlAadSignup,oe=b.sCtx,ae=b.fCheckApiCanary,re=b.urlGetOneTimeCode,de=b.fShowRemoteConnectLocationPage,le=s.observable(L).extend({flowTokenUpdate:b});function ce(){return n.onSetPendingRequest(!1),{success:!0}}function ue(e){if(n.onSetPendingRequest(!1),e&&e.error)switch(e.error.code){case T.AuthFailure:n.usernameTextbox.error.setNonBlockingError(M.CT_PWD_STR_Error_FlowTokenExpired);break;default:n.usernameTextbox.error.setNonBlockingError(M.CT_PWD_STR_Error_GetOneTimeCodeError)}return{success:!1}}function ge(e){n.pendingRequestIndex(h.findIndex(n.sessions(),(function(n){return e===n()}))),n.onSetPendingRequest(!0)}function pe(){o++,me()}function me(){n.pendingRequestIndex(null),n.onSetPendingRequest(!1)}function fe(e){if(e&&(w.doOriginsMatch(H,e.origin)||w.doOriginsMatch(N,e.origin))){var i=e.data;"signedout"===i?(n.sessions.remove((function(e){return e().idp===C.Msa})),n.isTileRequestPending()||n.sessions().length||n.onSwitchView(_.Username,!0)):i&&"msaForgetMe"===i.messageType&&i.sessionId?n.tile_onForgetComplete(i.forgotUser,i.sessionId):be(i)}}function ve(e){if(e&&(w.doOriginsMatch(q,e.origin)||w.doOriginsMatch(B,e.origin))){var i=e.data;i&&"msaForgetMe"===i.messageType&&i.sessionId?n.tile_onForgetComplete(i.forgotUser,i.sessionId):be(i)}}function be(e){if(e&&e.sessionId){var i=s.utils.arrayFirst(n.sessions(),(function(n){return e.sessionId===n().id})),t=i();t&&(e.signoutStatus?(n.error(null),e.forgotUser?Se(t.id):(t.isSignedIn=!1,i(t))):n.error(w.format(M.TILE_STR_Signout_Error,t.displayName)))}}function Se(e){n.sessions.remove((function(n){return n().id===e})),n.isTileRequestPending()||n.sessions().length||n.onSwitchView(_.Username,!0)}n.onSwitchView=c.create(),n.onRedirect=c.create(),n.onSubmitReady=c.create(),n.onSetPendingRequest=c.create(),n.sessions=s.observableArray(),n.error=s.observable(),n.pendingRequestIndex=s.observable(),n.isBackButtonVisible=s.observable(!1),n.selectedSessionId=s.observable(),n.isTileRequestPending=s.observable(!1),n.isLogoutRequest=A,n.pageTitle=null,n.pageDescription=null,n.otherTileText=null,n.unsafe_signupTileText=null,n.dispose=function(){pe(),S.removeEventListener(window,"message",ve),S.removeEventListener(window,"message",fe)},n.saveSharedData=function(e){e.flowToken=le(),e.showCredViewBrandingDesc=!(!se||!se.showDescOnCredViews),e.sessions=s.toJS(n.sessions),i?(e.username=i.name,e.displayName=i.displayName,s.utils.extend(e,g)):(e.username=null,e.displayName=null)},n.getState=function(){return{gctRequestHelperState:a.getState()}},n.restoreState=function(e){e&&a.restoreState(e.gctRequestHelperState)},n.addNewSessions=function(e,i){n.isTileRequestPending(!1),h.forEach(e,(function(e){var t=function(e,n){for(var i=n(),s=0;s<i.length;s++){var t=i[s]();if(t.name===e.name&&t.idp===e.idp)return s}return-1}(e,n.sessions),o=s.observable(e);-1===t?e.isWindowsSso?n.sessions.unshift(o):n.sessions.push(o):e.isWindowsSso?(n.sessions.splice(t,1),n.sessions.unshift(o)):i&&(n.sessions.splice(t,1),n.sessions.push(o))}))},n.tile_onClick=function(e){pe();var t=o;if(i=e,n.error(null),A)n.selectedSessionId(e.id),n.onSubmitReady(e.isMeControlSession);else if(!e.isSignedIn&&Z)n.onRedirect(Z);else if((e.isSignedIn||e.isWindowsSso||e.isSamsungSso)&&!e.isMeControlSession&&e.id&&!e.isMsaPrt)n.onRedirect(x.appendOrReplace(P,"sessionid",e.id));else if(e.isWindowsSso){var r=new p(b);ge(e),l.throwUnhandledExceptionOnRejection(r.loginWindowsUserAsync(e.ssoLink).then(null,(function(){return null})).then((function(e){t===o&&(me(),e&&n.onRedirect(e))})))}else if(e.isOtherIdp){var d=w.trim(i.displayName),c=x.appendOrReplace(O,"username",encodeURIComponent(d)),u=V?I.clone(V):null;u&&(u.username=d),e.isMsaPrt&&((u=u||{}).ests_canary=e.estsCanary,u.ests_headers=e.estsHeaders),n.onRedirect(c,u,!0)}else ge(e),l.throwUnhandledExceptionOnRejection(a.sendAsync(O,S.htmlUnescape(e.name),le()).then((function(e){if(e.flowToken&&le(e.flowToken),t===o)switch(me(),e.action){case R.ShowError:n.error(e.error),f=s.utils.extend(e.sharedData,e.viewParams||{});break;case R.SwitchView:g=s.utils.extend(e.sharedData,e.viewParams||{}),n.onSwitchView(e.viewId);break;case R.Redirect:n.onRedirect({url:e.redirectUrl,eventOptions:{eventId:e.eventId}},e.redirectPostParams,e.isIdpRedirect)}})))},n.tile_onForgetComplete=function(e,i){e?(n.error(null),Se(i.id)):n.error(w.format(M.TILE_STR_Forget_Error,i.displayName))},n.otherTile_onClick=function(){if(i=null,Q)n.onRedirect(Q);else if(ee)n.onRedirect(ee);else switch(J){case k.LinkedIn:n.onRedirect(K);break;case k.GitHub:n.onRedirect(z);break;default:n.onSwitchView(_.Username)}},n.signup_onClick=function(){Z?n.onRedirect(Z):X?n.onRedirect(X,ne):n.onSwitchView(D.length>0?_.SignupCredentialPicker:_.SignupUsername)},n.aadSignup_onClick=function(){n.onRedirect(x.appendOrReplace(te,"email",encodeURIComponent(n.usernameTextbox.value())))},n.sendOtcLink_onClick=function(){var e;l.throwUnhandledExceptionOnRejection((e=m.Channel.EmailAddress,function(e){return new d((function(i,s){n.onSetPendingRequest(!0);var o={OriginalRequest:oe,FlowToken:le(),Channel:e};new u({checkApiCanary:ae}).Json({url:re,eventId:v.EventIds.Api_GetOneTimeCode},o,i,s,t.DefaultRequestTimeout)}))}(e).then(ce,ue)).then((function(e){e.success&&(g=f,n.onSwitchView(_.OneTimeCode))})))},n.skip_onClick=function(){null.handleOnSkip(b)},n.privacy_onClick=function(){W?n.onRedirect(W):n.onSwitchView(_.ViewAgreement)},n.secondaryButton_onClick=function(){n.onSwitchView(_.Previous)},function(){var e=null,t=M.TILE_STR_Header,o=M.TILE_STR_UseAnother;if(a=new r(b,F.CheckCurrentIdpOnly),n.isTileRequestPending(U),ie.upgradeMigrationUXID)t=M.TILE_STR_UpgradeHeader,e=M.TILE_STR_UpgradeDescription,ie.allowSignupName&&(n.unsafe_signupTileText=w.format(M.TILE_STR_Signup,S.htmlUnescape(ie.allowSignupName)));else if(Y)n.unsafe_signupTileText=M.TILE_STR_Signup;else if(M.WF_STR_Default_Desc&&!de)e=w.format(M.WF_STR_Default_Desc,G,j||$);else if(A)e=M.TILE_STR_Description;else switch(J){case k.LinkedIn:e=M.TILE_STR_Desc_LinkedIn,o=M.TILE_STR_UseAnother_LinkedIn;break;case k.GitHub:e=M.TILE_STR_Desc_GitHub,o=M.TILE_STR_UseAnother_GitHub}n.pageTitle=t,n.pageDescription=e,n.otherTileText=o,h.forEach(y,(function(e){n.sessions.push(s.observable(e)),e.matchesLoginHint&&(i=e)})),E&&(n.error(E),E=null),n.isBackButtonVisible(!0),S.addEventListener(window,"message",ve),S.addEventListener(window,"message",fe)}()}f.applyExtenders(s),s.components.register("tiles-view",{viewModel:E,template:i(602),synchronous:!b.ServerData.iMaxStackForKnockoutAsyncComponents||o.Helper.isStackSizeGreaterThan(b.ServerData.iMaxStackForKnockoutAsyncComponents),enableExtensions:!0}),e.exports=E},436:function(e,n,i){e.exports=i.p+"content/images/picker_account_aad_725681b49f77650b9c9b970eb784476c.png"},437:function(e,n,i){e.exports=i.p+"content/images/picker_account_aad_f83ebff69a4a1685e4dc9650cdab8886.svg"},490:function(e,n,i){e.exports=i.p+"content/images/picker_account_add_c9929da7ed2c1ed4745e4035cf5441cd.png"},491:function(e,n,i){e.exports=i.p+"content/images/picker_account_add_56e73414003cdb676008ff7857343074.svg"},602:function(e,n,i){e.exports="\x3c!-- "+(i(603),i(18),i(32),i(17),' --\x3e\n\n<input type="hidden" name="sessionId" data-bind="value: selectedSessionId" />\n\n<div data-bind="component: { name: \'header-control\',\n    params: {\n        serverData: svr,\n        title: pageTitle } }">\n</div>\n\n\x3c!-- ko if: pageDescription --\x3e\n<div class="row text-body">\n    <div class="wrap-content" data-bind="\n        htmlWithBindings: pageDescription,\n        childBindings: {\n            \'ipAddress\': { css: { \'bold\': true } },\n            \'location\': { css: { \'bold\': true } },\n            \'appName\': { css: { \'bold\': true } } }">\n    </div>\n</div>\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: error --\x3e\n<div class="row">\n    <div id="tileError" class="col-md-24 alert-margin-bottom" role="alert" aria-live="assertive" aria-relevant="text" aria-atomic="true" data-bind="\n        externalCss: { \'error\': true },\n        htmlWithBindings: error,\n        childBindings: {\n            \'idA_PWD_SignUp\': { href: svr.urlSignUp, click: signup_onClick },\n            \'aadSignup\': { href: svr.urlAadSignup, click: aadSignup_onClick },\n            \'aadSelfSignup\': { click: signup_onClick },\n            \'sendOtcLink\': { click: sendOtcLink_onClick } }">\n    </div>\n</div>\n\x3c!-- /ko --\x3e\n\n<div data-bind="css: { \'position-buttons\': svr.fAllowCancel }">\n    <div class="row">\n        <div id="tilesHolder" class="form-group" role="list" aria-labelledby="tileError loginHeader" data-bind="attr: { \'data-test-asynctilesloaded\': !isTileRequestPending() }">\n            \x3c!-- ko foreach: { data: sessions, as: \'session\' } --\x3e\n            <div class="tile-container" data-bind="component: { name: \'tile-field\',\n                params: {\n                    serverData: svr,\n                    session: session,\n                    hasFocus: $index() === 0,\n                    ariaDescribedBy: $index() === 0 ? \'tileError loginHeader\' : null,\n                    isLogoutRequest: $parent.isLogoutRequest,\n                    tileIndex: $index() },\n                event: {\n                    tileClick: $parent.tile_onClick,\n                    forgetComplete: $parent.tile_onForgetComplete } }">\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: isTileRequestPending --\x3e\n            <div class="row tile" role="listitem">\n                <div id="pendingTile" class="table" tabindex="0" role="button" data-bind="ariaLabel: str[\'WF_STR_ProgressText\']">\n                    <div class="table-row">\n                        <div class="table-cell tile-img">\n                            <div class="tile-img"></div>\n                        </div>\n\n                        <div class="table-cell text-left content">\n                            <div id="pendingTileText" data-bind="text: str[\'TILE_STR_AsyncTileText\']"></div>\n                            <div class="progress-container-tile-content">\n                                <div class="progress" data-bind="component: { name: \'marching-ants-control\' }"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko if: unsafe_signupTileText --\x3e\n            <div class="row tile" role="listitem">\n                <div id="signupTile" class="table" tabindex="0" role="button" aria-labelledby="signupTileText" data-bind="click: signup_onClick, pressEnter: signup_onClick">\n                    <div class="table-row">\n                        <div class="table-cell tile-img">\n                            <img class="tile-img" role="presentation" pngSrc="')+i(490)+'" svgSrc="'+i(491)+'" data-bind="imgSrc" />\n                        </div>\n\n                        <div class="table-cell text-left content">\n                            <div id="signupTileText" data-bind="text: unsafe_signupTileText"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \x3c!-- /ko --\x3e\n\n            \x3c!-- ko ifnot: isLogoutRequest || svr.fShowSignupTile --\x3e\n            <div class="row tile" role="listitem">\n                <div id="otherTile" class="table" tabindex="0" role="button" aria-labelledby="otherTileText" data-bind="click: otherTile_onClick, pressEnter: otherTile_onClick">\n                    <div class="table-row">\n                        <div class="table-cell tile-img">\n                            <img class="tile-img" role="presentation" pngSrc="'+i(490)+'" svgSrc="'+i(491)+'" data-bind="imgSrc" />\n                        </div>\n\n                        <div class="table-cell text-left content">\n                            <div id="otherTileText" data-bind="text: otherTileText"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \x3c!-- /ko --\x3e\n        </div>\n    </div>\n</div>\n\n<div class="row">\n    <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            removeBottomMargin: true,\n            isPrimaryButtonVisible: false,\n            isSecondaryButtonVisible: !!svr.fAllowCancel },\n        event: {\n            secondaryButtonClick: secondaryButton_onClick } }">\n    </div>\n</div>'},603:function(e,n,i){var s=i(2),t=i(9),o=i(1),a=i(4),r=i(0),d=i(3),l=i(6),c=i(7),u=window,g=o.Helper,p=o.QueryString,m=o.Cookies,f=l.SessionIdp,v=d.String,b=r.KeyCode;function S(e){var n,i=this,o=e.serverData,d=e.session,l=e.hasFocus,S=e.ariaDescribedBy,x=e.isLogoutRequest,_=e.tileIndex,k=o.str,T=o.urlForget,h=o.urlLogout,w=o.userRoutingCookieConfig,I=o.urlMsaLogout,C=o.urlOtherIdpForget,R=o.fUseForgetUserIframe,F=o.fHideTileMenu,E=!1,y=null;function L(e){"Escape"===(e=e||u.event).code||e.keyCode===b.Escape?(i.menuOpen(!1),i.menuFocused(!0),M()):"Enter"===e.code||e.keyCode===b.Enter?E?E=!1:(i.menuOpen(!1),M()):"ArrowUp"===e.code||e.keyCode===b.ArrowUp?i.menuOpen()&&(i.signoutAndForgetFocus()&&d.isSignedIn?i.signoutFocus(!0):i.signoutFocus()&&d.isSignedIn&&i.signoutAndForgetFocus(!0)):"ArrowDown"===e.code||e.keyCode===b.ArrowDown?i.menuOpen()&&(i.signoutFocus()&&d.isSignedIn?i.signoutAndForgetFocus(!0):i.signoutAndForgetFocus()&&d.isSignedIn&&i.signoutFocus(!0)):"Tab"!==e.code&&e.keyCode!==b.Tab||(i.menuOpen(!1),M())}function A(){E?E=!1:(i.menuOpen(!1),i.menuFocused(!0),M())}function U(){i.onForgetComplete(!0,d)}function O(){i.onForgetComplete(!1,d)}function D(e){var n=d.isMeControlSession?I:h;d.id&&(n=p.appendOrReplace(n,"sessionId",encodeURIComponent(d.id)),n=p.appendOrReplace(n,"shouldForgetUser",e)),i.iFrameSrc(n)}function M(){g.removeEventListener(document.body,"click",A),g.removeEventListener(document.body,"keydown",L)}function P(){i.forgetFocus(!d.isSignedIn),i.signoutFocus(d.isSignedIn&&!d.isMeControlSession),i.signoutAndForgetFocus(d.isSignedIn&&d.isMeControlSession)}function q(e){w&&m.isCookieSafeValue(e)&&m.writeWithExpiration(w.name,e,w.secure,m.getPersistDate(),w.domain,w.path)}i.onTileClick=a.create(),i.onForgetComplete=a.create(),i.menuOpen=s.observable(!1),i.menuFocused=s.observable(!1).extend({notify:"always"}),i.iFrameSrc=s.observable(),i.forgetIFrameSrc=s.observable(),i.forgetFocus=s.observable(!1),i.signoutFocus=s.observable(!1),i.signoutAndForgetFocus=s.observable(!1),i.session=d,i.hasFocus=l,i.ariaDescribedBy=S,i.tileIndex=_,i.hideTileMenu=!1,i.unsafe_helpText=null,i.unsafe_signedInText=null,i.dispose=function(){M(),clearTimeout(y)},i.iFrame_onload=function(){clearTimeout(y)},i.menu_onClick=function(){E=!0,P(),i.menuOpen(!0),g.addEventListener(document.body,"click",A),g.addEventListener(document.body,"keydown",L)},i.tile_onClick=function(){E||(q(d.name),i.onTileClick(d))},i.forget_onClick=function(){q(d.name);var e=d.isMeControlSession?C:T;(e=p.appendOrReplace(e,"sessionId",encodeURIComponent(d.id)),d.isMeControlSession||R)?(i.forgetIFrameSrc(e),y=setTimeout(O,r.DefaultRequestTimeout)):(new t).Get({url:e,eventId:c.EventIds.Api_Forget},r.ContentType.Json,U,O,r.DefaultRequestTimeout)},i.signout_onClick=function(){q(d.name),D(!1)},i.signoutAndForget_onClick=function(){q(d.name),D(!0)},n=g.htmlUnescape(d.homeTenantName),i.hideTileMenu=F||x||d.isWindowsSso||d.isSamsungSso,i.session.unsafe_fullName=g.htmlUnescape(d.fullName),i.session.unsafe_displayName=g.htmlUnescape(d.displayName),i.session.unsafe_name=g.htmlUnescape(d.name),i.unsafe_signedInText=n?v.format(k.TILE_STR_Active_Tenant,n):k.TILE_STR_Active,d.idp===f.Msa?i.unsafe_helpText=v.format(k.TILE_STR_MsaTileHelpText,d.unsafe_displayName):i.unsafe_helpText=v.format(k.TILE_STR_AadTileHelpText,d.unsafe_displayName),P()}s.components.register("tile-field",{viewModel:S,template:i(604),synchronous:!u.ServerData.iMaxStackForKnockoutAsyncComponents||o.Helper.isStackSizeGreaterThan(u.ServerData.iMaxStackForKnockoutAsyncComponents),enableExtensions:!0}),e.exports=S},604:function(e,n,i){e.exports="\x3c!-- "+(i(8),' --\x3e\n\n<div class="row tile" role="listitem">\n    <div class="table" tabindex="0" role="button" data-bind="\n        attr: {\n            \'data-test-id\': session.unsafe_name,\n            \'data-test-idp\': session.idp,\n            \'data-test-hometenant\': session.homeTenantName || \'\' },\n        ariaLabel: unsafe_helpText,\n        ariaDescribedBy: ariaDescribedBy,\n        click: tile_onClick,\n        pressEnter: tile_onClick,\n        hasFocus: hasFocus">\n        <div class="table-row">\n            <div class="table-cell tile-img">\n                \x3c!-- ko if: session.idp === ')+i(6).SessionIdp.Aad+' --\x3e\n                <img class="tile-img" role="presentation" pngSrc="'+i(436)+'" svgSrc="'+i(437)+'" data-bind="imgSrc" />\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: session.idp === '+i(6).SessionIdp.Msa+' --\x3e\n                <img class="tile-img" role="presentation" pngSrc="'+i(33)+'" svgSrc="'+i(34)+'" data-bind="imgSrc" />\n\n                    \x3c!-- ko if: session.isGitHubFed --\x3e\n                    <img class="tile-badge" role="presentation" pngSrc="'+i(605)+'" svgSrc="'+i(606)+'" data-bind="imgSrc" />\n                    \x3c!-- /ko --\x3e\n                \x3c!-- /ko --\x3e\n            </div>\n\n            <div class="table-cell text-left content">\n                <div data-bind="text: ((session.isSignedIn || session.isSamsungSso) && session.unsafe_fullName) || session.unsafe_displayName"></div>\n\n                \x3c!-- ko if: (session.isSignedIn || session.isSamsungSso) && session.fullName --\x3e\n                <div><small data-bind="text: session.unsafe_displayName"></small></div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: session.isSignedIn && !session.isWindowsSso && !session.isSamsungSso && !iFrameSrc() --\x3e\n                <div><small data-bind="text: unsafe_signedInText"></small></div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: session.iFrameSrc --\x3e\n                <div><small data-bind="text: str[\'TILE_STR_Signing_Out\']"></small></div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: session.isWindowsSso --\x3e\n                <div><small data-bind="text: str[\'TILE_STR_Connected\']"></small></div>\n                \x3c!-- /ko --\x3e\n\n                \x3c!-- ko if: session.isSamsungSso --\x3e\n                <div><small data-bind="text: str[\'TILE_STR_Connected_Samsung\']"></small></div>\n                \x3c!-- /ko --\x3e\n            </div>\n\n            \x3c!-- ko ifnot: hideTileMenu --\x3e\n            <div class="table-cell tile-menu">\n                <div tabindex="0" role="button"\n                    data-bind="\n                        click: menu_onClick,\n                        pressEnter: menu_onClick,\n                        hasFocus: menuFocused,\n                        ariaLabel: str[\'TILE_STR_MenuAltText\'],\n                        attr: {\n                            \'data-test-id\': session.unsafe_name + \'-menu-dots\',\n                            \'data-test-idp\': session.idp,\n                            \'aria-controls\': \'tileMenu\' + tileIndex,\n                            \'aria-expanded\': menuOpen().toString() }">\n\n                    \x3c!-- ko component: \'accessible-image-control\' --\x3e\n                    <img role="presentation" pngSrc="'+i(607)+'" svgSrc="'+i(608)+'" data-bind="imgSrc" />\n                    <img role="presentation" pngSrc="'+i(609)+'" svgSrc="'+i(610)+'" data-bind="imgSrc" />\n                    \x3c!-- /ko --\x3e\n                </div>\n            </div>\n            \x3c!-- /ko --\x3e\n        </div>\n    </div>\n</div>\n\n<ul class="menu" role="menu" data-bind="\n    visible: menuOpen,\n    if: menuOpen,\n    attr: { \'id\': \'tileMenu\' + tileIndex }">\n\n    <li role="none">\n        <a id="forgetLink" href="#" role="menuitem" tabindex="0"\n            data-bind="\n                click: forget_onClick,\n                clickBubble: false,\n                text: str[\'TILE_STR_Forget\'],\n                visible: !session.isSignedIn && session.id,\n                hasFocus: forgetFocus,\n                pressEnter: forget_onClick"></a>\n    </li>\n    <li role="none">\n        <a id="signoutLink" href="#" role="menuitem" tabindex="0"\n            data-bind="\n                click: signout_onClick,\n                clickBubble: false,\n                text: str[\'TILE_STR_Signout\'],\n                visible: session.isSignedIn && session.id,\n                hasFocus: signoutFocus,\n                pressEnter: signout_onClick"></a>\n    </li>\n    <li role="none">\n        <a id="signoutAndForgetLink" href="#" role="menuitem" tabindex="0"\n            data-bind="\n                click: signoutAndForget_onClick,\n                clickBubble: false,\n                text: str[\'TILE_STR_Signout_Forget\'],\n                visible: session.isSignedIn,\n                hasFocus: signoutAndForgetFocus,\n                pressEnter: signoutAndForget_onClick"></a>\n    </li>\n</ul>\n\n\x3c!-- ko if: iFrameSrc --\x3e\n<div data-bind="injectIframe: { url: iFrameSrc }"></div>\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: forgetIFrameSrc --\x3e\n<div data-bind="injectIframe: { url: forgetIFrameSrc, onload: iFrame_onload }"></div>\n\x3c!-- /ko --\x3e'},605:function(e,n,i){e.exports=i.p+"content/images/badge_github_2e66b03f59ea96b7c54ab4b8d11624a7.png"},606:function(e,n,i){e.exports=i.p+"content/images/badge_github_34e35e76ac36debeb920b55d4657bf4b.svg"},607:function(e,n,i){e.exports=i.p+"content/images/picker_more_white_57b8d1d8735881dd83011c6a6d5fa791.png"},608:function(e,n,i){e.exports=i.p+"content/images/picker_more_white_e2cf7fe2d41012d9bf093c258e482572.svg"},609:function(e,n,i){e.exports=i.p+"content/images/picker_more_ced331c132b5f798f1f3ab36712d4608.png"},610:function(e,n,i){e.exports=i.p+"content/images/picker_more_7568a43cf440757c55d2e7f51557ae1f.svg"}}]),window.__convergedlogin_ptiles_cd98ef1d16eac59ed37a=!0;
//# sourceMappingURL=../cd98ef1d16eac59ed37a.map