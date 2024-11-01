class LatinoScript{
  constructor(url, debug){
    url = (url || "https://latinoeditor.koyeb.enzonotario.me")
    this.debug = (debug || false);
    this.latSocket = io(url);
    this.latSocket.on("connect", this.iniciate.bind(this));
    this.contextLat = "";
  }
  setServer(url){
    this.latSocket = io(url);
    this.latSocket.on("connect", this.iniciate.bind(this));
  }
  iniciate(){
    this.latSocket.on("execute", this.processConsoleLat.bind(this));
    this.latSocket.on("output", this.processConsoleLat.bind(this));
    if(this.debug){
      this.latSocket.onAny(this.processDebug.bind(this));
    }
     return this.loadLatBase();
  }
  agregarVarGlobal(nam, dat){
    this.contextLat += "\n" + nam + " = " + this.convertToLat(dat);
  }
  async loadLatBase(){
    let respo = await fetch("https://cdn.jsdelivr.net/gh/Creadores-Program/LatinoScript/browser/src/lat/org/CreadoresProgram/LatinoScript/JsApi.lat");
    let codelat = await respo.text();
    this.baseLat = codelat;
  }
  processConsoleLat(msg){
    if(msg.startsWith("%jsContext%")){
      msg = msg.replace("%jsContext%", "");
      if(msg.startsWith("%get%")){
        msg = msg.replace("%get%", "");
        this.sendCMD(this.convertToLat(eval(this.convertToJS(msg))));
        return;
      }
      eval(this.convertToJS(msg));
      return;
    }
    console.info(msg);
  }
  sendCMD(msg){
    this.latSocket.emit("input", msg);
  }
  convertToJS(code){
    let mark = "&&strs&&";
    let matchesl = code.match(/'([^\\']|\\')*'/g);
    let matchest = code.match(/"([^\\"]|\\")*"/g);
    let matchesr = code.match(/`([^\\`]|\\`)*`/g);
    if(matchesl != null){
      matchesl.forEach(match => code = code.replace(match, mark));
    }
    if(matchest != null){
      matchest.forEach(match => code = code.replace(match, mark));
    }
    if(matchesr != null){
      matchesr.forEach(match => code = code.replace(match, mark));
    }
    code = code.replaceAll(/\bnulo\b/gi, "null").replaceAll(/\bfalso\b/gi, "false").replaceAll(/\bverdadero\b/gi, "true").replaceAll(/\bcierto\b/gi, "true").replaceAll(/\bfun\b/gi, "function").replaceAll(/\bfuncion\b/gi, "function");
    if(matchesl != null){
      matchesl.forEach(match => code = code.replace(mark, match));
    }
    if(matchest != null){
      matchest.forEach(match => code = code.replace(mark, match));
    }
    if(matchesr != null){
      matchesr.forEach(match => code = code.replace(mark, match));
    }
    return code;
  }
  convertToLat(code){
    code = JSON.stringify(code);
    let mark = "&&strs&&";
    let matchesl = code.match(/'([^\\']|\\')*'/g);
    let matchest = code.match(/"([^\\"]|\\")*"/g);
    let matchesr = code.match(/`([^\\`]|\\`)*`/g);
    if(matchesl != null){
      matchesl.forEach(match => code = code.replace(match, mark));
    }
    if(matchest != null){
      matchest.forEach(match => code = code.replace(match, mark));
    }
    if(matchesr != null){
      matchesr.forEach(match => code = code.replace(match, mark));
    }
    code = code.replaceAll("null", "nulo").replaceAll("false", "falso").replaceAll("true", "verdadero").replaceAll("function", "fun");
    if(matchesl != null){
      matchesl.forEach(match => code = code.replace(mark, match));
    }
    if(matchest != null){
      matchest.forEach(match => code = code.replace(mark, match));
    }
    if(matchesr != null){
      matchesr.forEach(match => code = code.replace(mark, match));
    }
    return code;
  }
  processDebug(eventNam, ...args){
    console.debug(eventNam + " " + args);
  }
  eval(code){
    this.latSocket.emit("execute", this.baseLat + this.contextLat + "\n" + code);
  }
}
var InstanciaLatino = new LatinoScript(null, false);
window.addEventListener("load", function(){
  let latEtik = document.getElementsByTagName("script");
  for(var i = 0; i < latEtik.length; i++){
    if(latEtik[i].hasAttribute("type") && latEtik[i].getAttribute("type") == "text/lat"){
      InstanciaLatino.eval(latEtik[i].innerHTML);
    }
  }
})