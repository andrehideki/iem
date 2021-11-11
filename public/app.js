(()=>{"use strict";const n={events:{},on(n,t){this.events[n]||(this.events[n]=[]),this.events[n].push(t)},emit(n){if(this.events[n])for(let t of this.events[n])t()}},t={form:null,init(n){this.form=n,n.innerHTML='\n      <label>\n        <span>Nome</span>\n        <input id="name" name="name"/>\n      </label>\n      <label>\n        <span>Descrição</span>\n        <input id="description" name="description"/>\n      </label>\n      <label>\n        <span>Data</span>\n        <input id="date" type="date" name="date"/>\n      </label>\n      <label>\n        <span>Valor</span>\n        <input id="value" type="number" name="value"/>\n      </label>\n      <button>add</button>\n    ',n.addEventListener("submit",t.onSubmit)},onSubmit(n){n.preventDefault();const e=n.target.querySelectorAll("input"),a={};for(let n of e)a[n.name]=n.value||"";t.addEntry(a)},addEntry(e){fetch("entry",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((()=>{t.clear(),n.emit("newEntry")}))},clear(){const n=this.form.querySelectorAll("input");for(let t of n)t.value=""}},e=t,a={init(n){fetch("entry/balance?initialDate=2021-11-01&endDate=2021-12-01").then((n=>n.json())).then((t=>{n.innerHTML=`\n          <div>\n            <label>Total</label>\n            <span>${t.total||0}</span>\n          </div>\n          <div>\n            <label>Despesas</label>\n            <span>${t.loss||0}</span>\n          </div>\n          <div>\n            <label>Ganhos</label>\n            <span>${t.gain||0}</span>\n          </div>\n        `}))}},i={async init(t){t.innerHTML="\n      <thead>\n        <tr>\n          <th>Nome</th>\n          <th>Descrição</th>\n          <th>Data</th>\n          <th>Valor</th>\n        </tr>\n      </thead>\n      <tbody></tbody>\n    ",this.loadEntries(t),n.on("newEntry",(()=>i.loadEntries(t)))},async loadEntries(n){fetch("entry").then((n=>n.json())).then((t=>{n.querySelector("tbody").innerHTML=`\n          ${t.map((n=>`\n            <tr>\n              <td>${n.name}</td>\n              <td>${n.description}</td>\n              <td>${n.date}</td>\n              <td>${n.value}</td>\n            </tr>\n          `)).join("")} \n        `}))}},l=i,s=document.querySelector("#form_entry");e.init(s);const o=document.querySelector("#table_entries");l.init(o);const r=document.querySelector("#section_balance");a.init(r)})();