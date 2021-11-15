(()=>{"use strict";const n={events:{},on(n,t){const e=Array.isArray(n)?n:[n];for(let n of e)this.events[n]||(this.events[n]=[]),this.events[n].push(t)},emit(n,t){if(this.events[n])for(let e of this.events[n])e(t)}},t={form:null,init(n){this.form=n,n.innerHTML='\n      <label>\n        <span>Nome</span>\n        <input id="name" name="name"/>\n      </label>\n      <label>\n        <span>Descrição</span>\n        <input id="description" name="description"/>\n      </label>\n      <label>\n        <span>Data</span>\n        <input id="date" type="date" name="date"/>\n      </label>\n      <label>\n        <span>Valor</span>\n        <input id="value" type="number" name="value"/>\n      </label>\n      <button>add</button>\n    ',n.addEventListener("submit",t.onSubmit)},onSubmit(n){n.preventDefault();const e=n.target.querySelectorAll("input"),a={};for(let n of e)a[n.name]=n.value||"";t.addEntry(a)},addEntry(e){fetch("entry",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((()=>{t.clear(),n.emit("newEntry")}))},clear(){const n=this.form.querySelectorAll("input");for(let t of n)t.value=""}},e=t,a={init(t){this.getBalance(t),n.on("newEntry",(()=>this.getBalance(t)))},getBalance(n){fetch("/entry/balance?initialDate=2021-11-01&endDate=2021-12-01").then((n=>n.json())).then((t=>{n.innerHTML=`\n        <div>\n          <label>Total</label>\n          <span>${t.total||0}</span>\n        </div>\n        <div>\n          <label>Despesas</label>\n          <span>${t.loss||0}</span>\n        </div>\n        <div>\n          <label>Ganhos</label>\n          <span>${t.gain||0}</span>\n        </div>\n      `}))}};function i(){return new Date}function o(){return(new Date).toISOString().substring(0,7)}function r(){const n=new Date;return new Date(n.getFullYear(),n.getMonth()+1,0)}const l={async init(t){t.innerHTML="\n      <thead>\n        <tr>\n          <th>Nome</th>\n          <th>Descrição</th>\n          <th>Data</th>\n          <th>Valor</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody></tbody>\n    ",this.loadEntries(t,{initialDate:i(),endDate:r()}),n.on(["newEntry","deleteEntry"],(()=>l.loadEntries(t,{initialDate:i(),endDate:r()}))),n.on("periodChange",(n=>{const{initialDate:e,endDate:a}=function(n){if(!n)throw new Error("invalid year-month: "+n);const t=new Date(`${n}-1`);return{initialDate:t,endDate:new Date(t.getFullYear(),t.getMonth()+1,0)}}(n);this.loadEntries(t,{initialDate:e,endDate:a})}))},deleteEntry(t){var e;(e=`entry/${t}`,fetch(e,{method:"DELETE"})).then((()=>{n.emit("deleteEntry")}))},async loadEntries(n,{initialDate:t,endDate:e}){fetch(`entry?initialDate=${t.toISOString().substring(0,10)}&endDate=${e.toISOString().substring(0,10)}`).then((n=>n.json())).then((t=>{const e=n.querySelector("tbody");e.innerHTML=`\n          ${t.map((n=>`\n            <tr>\n              <td>\n                <input value="${n.name}" />\n              </td>\n              <td>\n                <input value="${n.description}" />\n              </td>\n              <td>\n                <input type="date" value="${n.date}" />\n              </td>\n              <td>\n                <input value="${n.value}" />\n              </td>\n              <td>\n                <button data-id="${n.id}">Excluir</button>\n              </td>\n            </tr>\n          `)).join("")} \n        `;for(let n of e.querySelectorAll("button"))n.addEventListener("click",(({target:n})=>{const t=n.dataset.id;confirm("Você confirma exclusão?")&&l.deleteEntry(t)}))}))}},s=l,d={init(t){t.innerHTML=`\n      <label>\n        <span>Periodicidade</span>\n        <input id="month" type="month" name="month" value="${o()}"/>\n      </label>\n    `;const e=t.querySelector('[name="month"]');e.addEventListener("change",this.onChange),n.on(["newEntry","deleteEntry"],(()=>e.value=o()))},onChange(t){const e=t.target.value;n.emit("periodChange",e)}},c=document.querySelector("#form_entry");e.init(c);const u=document.querySelector("#table_entries");s.init(u);const h=document.querySelector("#section_balance");a.init(h);const p=document.querySelector("#form_filter");d.init(p)})();