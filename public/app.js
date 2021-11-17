(()=>{"use strict";const n={events:{},on(n,t){const e=Array.isArray(n)?n:[n];for(let n of e)this.events[n]||(this.events[n]=[]),this.events[n].push(t)},emit(n,t){if(this.events[n])for(let e of this.events[n])e(t)}},t={form:null,init(n){this.form=n,n.innerHTML='\n      <div class="row">\n        <div class="col">\n          <label>Nome</label>\n          <input id="name" name="name" class="form-control form-control-sm" />\n        </div>\n        <div class="col">\n          <label>Descrição</label>\n          <input id="description" name="description" class="form-control form-control-sm"/>\n        </div>\n        <div class="col">\n          <label>Conta</label>\n          <input id="account" name="account" class="form-control form-control-sm"/>\n        </div>\n        <div class="col">\n          <label>Data</label>\n          <input id="date" type="date" name="date" class="form-control form-control-sm"/>\n        </div>\n        <div class="col">\n          <label>Valor</label>\n          <input id="value" type="number" name="value" class="form-control form-control-sm"/>\n        </div>\n        <div class="col">\n          <button class="btn btn-primary mt-3">\n            <i class="bi bi-plus"></i>\n            add\n          </button>\n        </div>\n      </div>\n    ',n.addEventListener("submit",t.onSubmit)},onSubmit(n){n.preventDefault();const e=n.target.querySelectorAll("input"),a={};for(let n of e)a[n.name]=n.value||"";t.addEntry(a)},addEntry(e){fetch("entry",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((()=>{t.clear(),n.emit("newEntry")}))},clear(){const n=this.form.querySelectorAll("input");for(let t of n)t.value=""}},e=t;function a(){return(new Date).toISOString().substring(0,7)}function o(){const n=new Date;return new Date(n.getFullYear(),n.getMonth(),1)}function i(){const n=new Date;return new Date(n.getFullYear(),n.getMonth()+1,0)}const l={init(t){this.getBalance(t,{initialDate:o(),endDate:i()}),n.on(["newEntry","deleteEntry","updateEntry"],(()=>this.getBalance(t,{initialDate:o(),endDate:i()})))},getBalance(n,{initialDate:t,endDate:e}){fetch(`/entry/balance?initialDate=${t.toISOString().substring(0,10)}&endDate=${e.toISOString().substring(0,10)}`).then((n=>n.json())).then((t=>{n.innerHTML=`\n        <div>\n          <label>Total</label>\n          <span>${t.total||0}</span>\n        </div>\n        <div>\n          <label>Despesas</label>\n          <span>${t.loss||0}</span>\n        </div>\n        <div>\n          <label>Ganhos</label>\n          <span>${t.gain||0}</span>\n        </div>\n      `}))}},r={async init(t){t.innerHTML='\n      <thead>\n        <tr>\n          <th style="width: 25%">Nome</th>\n          <th style="width: 35%">Descrição</th>\n          <th style="width: 10%">Conta</th>\n          <th style="width: 5%">Data</th>\n          <th style="width: 25%">Valor</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody></tbody>\n    ',this.loadEntries(t,{initialDate:o(),endDate:i()}),n.on(["newEntry","deleteEntry"],(()=>r.loadEntries(t,{initialDate:o(),endDate:i()}))),n.on("filterChange",(n=>{const{initialDate:e,endDate:a}=function(n){if(!n)throw new Error("invalid year-month: "+n);const t=new Date(`${n}-1`);return{initialDate:t,endDate:new Date(t.getFullYear(),t.getMonth()+1,0)}}(n.month),{account:o}=n;this.loadEntries(t,{initialDate:e,endDate:a,account:o})}))},deleteEntry(t){var e;(e=`entry/${t}`,fetch(e,{method:"DELETE"})).then((()=>{n.emit("deleteEntry")}))},async loadEntries(t,{initialDate:e,endDate:a}){fetch(`entry?initialDate=${e.toISOString().substring(0,10)}&endDate=${a.toISOString().substring(0,10)}`).then((n=>n.json())).then((e=>{const a=t.querySelector("tbody");a.innerHTML=`\n          ${e.map((n=>`\n            <tr>\n              <input type="hidden" name="id" value="${n.id}" />\n              <td>\n                <input name="name" value="${n.name}" class="form-control form-control-sm updateEntry" />\n              </td>\n              <td>\n                <input name="description" value="${n.description}" class="form-control form-control-sm updateEntry" />\n              </td>\n              <td>\n                <input name="account" value="${n.account}" class="form-control form-control-sm updateEntry" />\n              </td>\n              <td>\n                <input type="date" name="date" value="${n.date}" class="form-control form-control-sm updateEntry" />\n              </td>\n              <td>\n                <input name="value" value="${n.value}" class="form-control form-control-sm updateEntry" />\n              </td>\n              <td>\n                <button data-id="${n.id}" class="btn btn-outline-danger btn-sm">\n                <i class="bi bi-trash2-fill"></i>\n                </button>\n              </td>\n            </tr>\n          `)).join("")} \n        `;for(let n of a.querySelectorAll("button"))n.addEventListener("click",(({target:n})=>{const t=n.dataset.id;confirm("Você confirma exclusão?")&&r.deleteEntry(t)}));for(let t of a.querySelectorAll(".updateEntry"))t.addEventListener("change",(()=>{const e=t.parentElement.parentElement.querySelectorAll("input"),a={};for(let n of e)a[n.name]=(n.value||"").trim();fetch(`entry/${a.id}`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((()=>{n.emit("updateEntry")}))}))}))}},s=r,c={values:{month:a(),account:""},init(t){fetch("account").then((n=>n.json())).then((e=>{t.innerHTML=`\n          <div class="row">\n            <div class="col-3">\n              <label>Periodicidade</label>\n              <input id="month" type="month" name="month" value="${a()}" class="form-control form-control-sm mb-2" />\n            </div>\n            <div class="col-2">\n              <label>Conta</label>\n              <select name="account" class="form-control form-control-sm">\n                <option value="">Todos</option>\n                ${e.map((n=>`<option value="${n}">${n}</option>`)).join("")}\n              </select>\n            </div>\n          </div>\n        `;const o=t.querySelector('[name="month"]');o.addEventListener("change",this.onChange),t.querySelector('[name="account"]').addEventListener("change",this.onChange),n.on(["newEntry","deleteEntry"],(()=>o.value=a()))}))},onChange(t){const{name:e,value:a}=t.target;this.values={...this.values,[e]:a},n.emit("filterChange",this.values)}},d=document.querySelector("#form_entry");e.init(d);const u=document.querySelector("#table_entries");s.init(u);const m=document.querySelector("#section_balance");l.init(m);const h=document.querySelector("#form_filter");c.init(h)})();