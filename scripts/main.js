(()=>{var ie=Object.defineProperty;var r=(e,n)=>ie(e,"name",{value:n,configurable:!0});var u="anonymous";function _(...e){return e=e.filter(n=>typeof n=="string"),`modules/${u}/templates/${e.join("/")}`}r(_,"templatePath");function I(){let e=game.data,n=e.users.find(t=>t._id===e.userId);return!!n&&n.role>=CONST.USER_ROLES.GAMEMASTER}r(I,"isGM");function z(e,n,t){return e.getFlag(u,n)??t}r(z,"getFlag");function C(e,n,t){return e.setFlag(u,n,t)}r(C,"setFlag");function g(...e){let[n,t]=e;return n=`${u}.${n}`,t?game.i18n.format(n,t):game.i18n.localize(n)}r(g,"localize");function R(e){let n=r((...t)=>g(`${e}.${t[0]}`,t[1]),"fn");return Object.defineProperties(n,{warn:{value:(...t)=>P(`${e}.${t[0]}`,t[1],t[2]),enumerable:!1,configurable:!1},info:{value:(...t)=>ce(`${e}.${t[0]}`,t[1],t[2]),enumerable:!1,configurable:!1},error:{value:(...t)=>le(`${e}.${t[0]}`,t[1],t[2]),enumerable:!1,configurable:!1},has:{value:t=>hasLocalization(`${e}.${t}`),enumerable:!1,configurable:!1},path:{value:t=>localizePath(`${e}.${t}`),enumerable:!1,configurable:!1},template:{value:(t,{hash:o})=>n(t,o),enumerable:!1,configurable:!1}}),n}r(R,"subLocalize");function U(e){return e.combat.turns.filter(n=>n.actorId===e.actorId)}r(U,"getSameCombatants");function f(e){return game.settings.get(u,e)}r(f,"getSetting");function G(e,n){return game.settings.set(u,e,n)}r(G,"setSetting");function se(e,n,t=!1){return e.tokens.filter(o=>o.actorId===n.id&&(!t||o.actorLink))}r(se,"getActorSceneTokens");function Y(e,n=!1){return game.scenes.map(t=>se(t,e,n)).flat()}r(Y,"getActorTokens");function F(e){return e?e[0].toUpperCase()+e.slice(1):""}r(F,"capitalize");function h(e){let n=e.name;e.scope=e.scope??"world",e.config=e.config??!1,e.config&&(e.name=p(n,"name"),e.hint=p(n,"hint")),Array.isArray(e.choices)&&(e.choices=e.choices.reduce((t,o)=>(t[o]=p(n,"choices",o),t),{})),game.settings.register(u,n,e)}r(h,"registerSetting");function j(e){let n=e.name;e.name=p("menus",n,"name"),e.label=p("menus",n,"label"),e.hint=p("menus",n,"hint"),e.restricted=e.restricted??!0,e.icon=e.icon??"fas fa-cogs",game.settings.registerMenu(u,n,e)}r(j,"registerSettingMenu");function p(...e){return`${u}.settings.${e.join(".")}`}r(p,"getSettingLocalizationPath");function O(){return game.modules.get(u)}r(O,"getCurrentModule");function v(e,n,t,o){let a=typeof n=="string"?n:"info",c=typeof n=="object"?n:typeof t=="object"?t:void 0,s=typeof n=="boolean"?n:typeof t=="boolean"?t:o??!1;ui.notifications.notify(g(e,c),a,{permanent:s})}r(v,"notify");function P(...e){let[n,t,o]=e;v(n,"warning",t,o)}r(P,"warn");function ce(...e){let[n,t,o]=e;v(n,"info",t,o)}r(ce,"info");function le(...e){let[n,t,o]=e;v(n,"error",t,o)}r(le,"error");function S(e,n,t,o=!1){let a=e.find("*");o&&(a=a.addBack()),a.contents().each((c,s)=>{s.nodeType===Node.TEXT_NODE&&s.textContent?.trim()&&$(s).replaceWith(s.textContent.replace(n,t))})}r(S,"replaceHTMLText");function E(e,n){e.token?V(e.token,n):Y(e,!0).forEach(t=>V(t,n))}r(E,"updateActorTokens");function W(e,n){let t=e.object.actor;if(!t||t.hasPlayerOwner)return;let o=fe(t);o.addEventListener("click",()=>y(t)),n.find(".col.right").append(o)}r(W,"renderTokenHUD");function B(e){if(e.actor?.hasPlayerOwner)return;let n=e.displayName,t=q(n);t!==n&&(e._source.displayName=t)}r(B,"preCreateToken");function fe(e){let n=document.createElement("template"),t=m(e);return n.innerHTML=`<div class="control-icon${t?" active":""}" data-action="anonymous-toggle">
    <i class="fa-solid fa-signature" title="${g("hud.title")}"></i>
</div>`,n.content.firstChild}r(fe,"createToggle");function V(e,n){n?me(e):ge(e)}r(V,"changeDisplayName");function me(e){let n=e.displayName;if(K(n)||!f("token"))return;let t=n;t===CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER?t=CONST.TOKEN_DISPLAY_MODES.HOVER:t===CONST.TOKEN_DISPLAY_MODES.OWNER&&(t=CONST.TOKEN_DISPLAY_MODES.ALWAYS),e.update({displayName:t})}r(me,"showTokenName");function ge(e){let n=e.displayName;if(ue(n))return;let t=q(n);e.update({displayName:t})}r(ge,"hideTokenName");function ue(e){return!K(e)}r(ue,"isHidding");function K(e){return e===CONST.TOKEN_DISPLAY_MODES.HOVER||e===CONST.TOKEN_DISPLAY_MODES.ALWAYS}r(K,"isShowing");function q(e){return e===CONST.TOKEN_DISPLAY_MODES.HOVER?CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER:e===CONST.TOKEN_DISPLAY_MODES.ALWAYS?CONST.TOKEN_DISPLAY_MODES.OWNER:e}r(q,"swapToHide");function m(e){return e instanceof Combatant&&e.actor&&(e=e.actor),e instanceof Actor&&e.hasPlayerOwner?!0:!!z(e,"showName")}r(m,"playersSeeName");async function y(e){let n=!m(e);e instanceof Actor||!e.actor?await C(e,"showName",n):await C(e.actor,"showName",n),canvas.tokens.hud?.rendered&&canvas.tokens.hud.render();let t=e instanceof Actor?e:e.actor;return t&&E(t,n),n}r(y,"toggleSeeName");function d(e){let n=g("unknown"),t=e instanceof Actor?e.type:e.actor?.type;return t?(A()[t]??"").trim()||M(n,t):n}r(d,"getName");function b(){ui.combat.render()}r(b,"refresh");function A(){return f("names")}r(A,"getSavedNames");function M(e,n){return`${e} ${F(n)}`}r(M,"formatUnknown");function X(e,n){de({entries:n,defaultData:{name:t=>g(`context.${t}`),icon:"fa-solid fa-signature",callback:t=>{let o=t.attr("data-document-id"),a=game.actors.get(o);a&&y(a)},condition:(t,o)=>{let a=t.attr("data-document-id"),c=game.actors.get(a);return!!c&&!c.hasPlayerOwner&&(o==="show"?!m(c):m(c))}},choices:["show","hide"]})}r(X,"getActorDirectoryEntryContext");function J(e,n){let t=getProperty(n,`flags.${u}.showName}`)!==void 0;"ownership"in n&&(E(e,e.hasPlayerOwner),t=!0),t&&b()}r(J,"onActorUpdate");function de({entries:e,choices:n,defaultData:t={}}){Array.isArray(n)&&(n=n.reduce((o,a)=>(o[a]={},o),{}));for(let o in n){let a=n[o],c=a.name??(typeof t.name=="function"?t.name(o):t.name)??"",s=a.icon??(typeof t.icon=="function"?t.icon(o):t.icon)??"";if(!$(s).length){let i=$("<i></i>");i.addClass(s),s=i[0].outerHTML}e.unshift({name:c,icon:s,callback:i=>{a.callback?a.callback(i):t.callback&&t.callback(i,o)},condition:i=>a.condition?.(i)??t.condition?.(i,o)??!0})}}r(de,"addSelectContextEntry");var x=class extends FormApplication{static get defaultOptions(){return mergeObject(super.defaultOptions,{id:"anonymous-names-menu",title:g("templates.names.title"),template:_("names.html"),width:400})}getData(n){let t=g("unknown"),o=A(),a=game.system.documentTypes.Actor.map(c=>({type:c,value:(o[c]??"").trim(),placeholder:M(t,c)}));return{...super.getData(n),types:a,i18n:R("templates.names")}}activateListeners(n){super.activateListeners(n),n.find("[data-action=cancel]").on("click",()=>this.close())}async _updateObject(n,t){G("names",t)}};r(x,"AnonymousNamesMenu");function Q({message:e,$html:n,isAnonymous:t,actor:o}){if(t&&e.rolls.length&&f("criticals")){let a=game.i18n.localize("DND5E.CriticalHit"),c=game.i18n.localize("DND5E.PowerfulCritical"),s=new RegExp(` (\\(([\\w ]*)?(?:${a}|${c})([\\w ]*)?\\))$`,"igm"),i=n.find("header .flavor-text");game.user.isGM&&S(i,s,' <span class="anonymous-replaced">$1</span>',!0),S(i,s,"",!0)}}r(Q,"dnd5ParseChat");function Z(e){h({name:"pf2e.traits",type:String,default:"never",config:!0,choices:{never:p("pf2e.traits.choices.never"),rolls:p("pf2e.traits.choices.rolls"),always:p("pf2e.traits.choices.always")}})}r(Z,"pf2eInitHook");function ee(e){e&&pe()}r(ee,"pf2eReadyHook");function pe(){let e="";if(game.settings.settings.has("pf2e.metagame.tokenSetsNameVisibility")?e="metagame.tokenSetsNameVisibility":game.settings.settings.has("pf2e.metagame_tokenSetsNameVisibility")&&(e="metagame_tokenSetsNameVisibility"),!e||!game.settings.get("pf2e",e))return;let n=O().title,t=game.i18n.localize("PF2E.SETTINGS.Metagame.TokenSetsNameVisibility.Name");game.settings.set("pf2e",e,!1),P("pf2e.disabled",{module:n,setting:t},!0)}r(pe,"disableSettings");function te({message:e,isAnonymous:n,$html:t}){let o=game.user.isGM,a=e.target?.actor,c=f("criticals"),s=f("rolls");if(a&&!a.hasPlayerOwner&&!m(a)){let i=t.find('.flavor-text .target-dc [data-whose="target"]');if(i.length){let l=i.first();o?l.attr("data-visibility","gm"):l.text(g("pf2e.target",{name:d(a)}))}}if(!o&&n){let i=f("pf2e.traits");if(e.rolls.length)if(s){let l=t.find(".flavor-text hr + .tags");l.length&&(l.prev("hr").remove(),l.remove()),c&&t.find(".message-content .dice-roll .dice-result .dice-total").css("color","var(--color-text-dark-primary)"),i!=="never"&&t.find(".flavor-text .tags").remove()}else i==="always"&&t.find(".flavor-text .tags").first().remove();else i==="always"&&t.find(".message-content section.tags").remove()}if(n&&e.rolls.length&&s&&c){let i=game.i18n.localize("PF2E.Check.Result.Degree.Attack.criticalSuccess"),l=game.i18n.localize("PF2E.Check.Result.Degree.Attack.success"),k=new RegExp(`(\\((${i}|${l})\\))`,"gmi"),w=o?'<span class="anonymous-replaced">$1</span>':"",T=t.find("header .flavor-text");S(T,k,w,!0)}}r(te,"pf2eParseChat");var he=/\(dc \d+\)/gim;function ne({message:e,isAnonymous:n,$html:t}){if(game.user.isGM)return;if(n&&f("rolls")){let i=t.find(".dice-tooltip");i.empty(),i.css("padding-top",0),f("criticals")&&t.find(".dice-total").removeClass("critical fumble");let l=t.find(".phase-saving-throws .phase-heading");l.text(l.text().replace(he,""))}let o=t.find(".phase-attack .token-info .token-name"),a=e.getFlag("wire","activation.attack.targetActorUuid");if(o.length&&a)try{let i=fromUuidSync(a)?.actor;i&&!i.hasPlayerOwner&&!m(i)&&o.text(d(i))}catch(i){console.error(i)}let c=t.find(".phase-saving-throws .saving-throw-target:has(.target-name)"),s=e.getFlag("wire","activation.targetUuids");if(c.length&&s?.length)try{for(let i of s){let l=fromUuidSync(i)?.actor;l&&!l.hasPlayerOwner&&!m(l)&&c.filter(`[data-actor-id="${i}"]`).find(".target-name").text(d(l))}}catch(i){console.error(i)}}r(ne,"wireParseChat");var D=L(),H=L(),N=L();function re(){switch(game.system.id){case"pf2e":D.add(Z),H.add(ee),N.add(te);break;case"dnd5e":N.add(Q);break}game.modules.get("wire")?.active&&N.add(ne)}r(re,"thirdPartyInitialization");function L(){let e=[],n=r(function(...t){e.forEach(o=>o(...t))},"f");return n.add=t=>e.push(t),n}r(L,"createThirdPartyListener");function oe(e,n){if(e.blind)return;let t=game.user.isGM,o=e.speaker,a=ChatMessage.getSpeakerActor(o),c=!a||m(a),s=!!a&&!a.hasPlayerOwner;if(a&&!c&&ye(e,a,n),!t&&s){if(e.rolls.length&&f("rolls")){let i=n.find(".message-content .dice-roll .dice-result");i.find(".dice-formula, .dice-tooltip").remove(),f("criticals")&&i.find(".dice-total").removeClass("critical fumble")}f("footer")&&n.find(".message-content footer.card-footer").remove(),f("cardContent")&&n.find(".message-content .card-content").remove()}N({message:e,actor:a,$html:n,playersCanSee:c,isAnonymous:s})}r(oe,"renderChatMessage");function ye(e,n,t){let o=e.speaker,a=new Set;if(o.alias&&a.add(o.alias),n.name&&a.add(n.name),o.token&&o.scene){let T=game.scenes.get(o.scene)?.tokens.get(o.token);T?.name&&a.add(T.name)}if(!a.size)return;let s=Array.from(a).map(w=>RegExp.escape(w)).join("|"),i=new RegExp(`\\b(${s})\\b`,"gmi"),l=d(n),k=game.user.isGM?`<span class="anonymous-replaced" title="${l}">$1</span>`:l;S(t,i,k)}r(ye,"changeNames");function ae(e,n){let t=ui.combat.viewed?.combatants;!t||!t.size||n.find("#combat-tracker .combatant").each(function(){let o=this.dataset.combatantId,a=t.get(o);if(!a||!a.actor||a.actor.hasPlayerOwner)return;let c=m(a);if(game.user.isGM){let s=this.querySelector(".combatant-controls"),i=s.querySelector('.combatant-control[data-control="toggleHidden"]'),l=ke(c);l.addEventListener("click",k=>Se(k,a)),i?i.after(l):s.appendChild(l)}else if(!c){let s=this.querySelector("h4");s.textContent=d(a)}})}r(ae,"renderCombatTracker");function Se(e,n){e.preventDefault(),e.stopPropagation(),e.shiftKey&&n.actor&&n.actor.isToken&&game.combat?.scene?U(n).forEach(y):y(n)}r(Se,"toggleCombatantName");function ke(e){let n=document.createElement("template"),t=e?"context.hide":"context.show";return n.innerHTML=`<a
    class="combatant-control${e?" active":""}"
    data-control="toggle-name-visibility"
    data-tooltip="${g(t)}"
>
    <i class="fa-solid fa-signature"></i>
</a>`,n.content.firstChild}r(ke,"createToggle");Hooks.once("init",()=>{h({name:"version",type:String,default:""}),h({name:"names",type:Object,default:{},onChange:b}),h({name:"token",type:Boolean,default:!0,config:!0}),h({name:"rolls",type:Boolean,default:!0,config:!0}),h({name:"criticals",type:Boolean,default:!0,config:!0}),h({name:"cardContent",type:Boolean,default:!1,config:!0}),h({name:"footer",type:Boolean,default:!1,config:!0}),j({name:"namesMenu",type:x}),O().api={playersSeeName:m,toggleSeeName:y,getName:d};let e=I();e&&(Hooks.on("getActorDirectoryEntryContext",X),Hooks.on("renderTokenHUD",W)),re(),D(e)});Hooks.once("ready",()=>{H(game.user.isGM)});Hooks.on("renderCombatTracker",ae);Hooks.on("renderChatMessage",oe);Hooks.on("preCreateToken",B);Hooks.on("updateActor",J);})();
//# sourceMappingURL=main.js.map
