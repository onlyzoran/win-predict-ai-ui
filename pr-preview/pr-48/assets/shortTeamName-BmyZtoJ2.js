const o=["Red Sox","White Sox","Blue Jays"];function r(n){const t=n.trim();for(const e of o)if(t.endsWith(e))return e;const s=t.split(/\s+/);return s[s.length-1]??t}export{r as s};
