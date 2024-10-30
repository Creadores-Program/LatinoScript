console.info("[LatinoScript] Iniciando...");
console.info("[LatinoScript] Cargando...");
console.info("[LatinoScript] Versión 0.2.0 alpha");
console.info("[LatinoScript] By Creadores Program");
console.info("[LatinoScript] Redes Sociales:");
console.info("Discord: https://discord.gg/mrmHcwxXff");
console.info("[LatinoScript] Basado en JavaScript, Python y Latino");
console.info("[LatinoScript] Cargando Lenguaje...");
function latjs(code){

  let prefixs = {
    cadenas: "&&~cads"+Math.random()+"~&&",
    ifsF: ("LT_ifF"+Math.random()+"_LT").replaceAll(".", ""),
    llaveun: ("LT_llave1"+Math.random()+"_LT").replaceAll(".", ""),
    llavedo: ("LT_llave2"+Math.random()+"_LT").replaceAll(".", ""),
    forsF: ("LT_forF"+Math.random()+"_LT").replaceAll(".", ""),
    switchsF: ("LT_switch"+Math.random()+"_LT").replaceAll(".", ""),
    casesF: ("LT_case"+Math.random()+"_LT").replaceAll(".", ""),
    trueF: ("LT_true"+Math.random()+"_LT").replaceAll(".", ""),
    falseF: ("LT_false"+Math.random()+"_LT").replaceAll(".", ""),
    continueF: ("LT_continue"+Math.random()+"_LT").replaceAll(".", ""),
    defaultF: ("LT_default"+Math.random()+"_LT").replaceAll(".", ""),
    functi: ("LT_function"+Math.random()+"_LT").replaceAll(".", ""),
    varsF: ("LT_var"+Math.random()+"_LT").replaceAll(".", ""),
    letsF: ("LT_let"+Math.random()+"_LT").replaceAll(".", ""),
    constsF: ("LT_const"+Math.random()+"_LT").replaceAll(".", ""),
    whilesF: ("LT_while"+Math.random()+"_LT").replaceAll(".", ""),
    nullsF: ("LT_null"+Math.random()+"_LT").replaceAll(".", ""),
    elsesF: ("LT_else"+Math.random()+"_LT").replaceAll(".", ""),
    breaksF: ("LT_break"+Math.random()+"_LT").replaceAll(".", ""),
    retF: ("LT_retur"+Math.random()+"_LT").replaceAll(".", ""),
    classF: ("LT_class"+Math.random()+"_LT").replaceAll(".", ""),
    staticsF: ("LT_static"+Math.random()+ "_LT").replaceAll(".", ""),
    extendsF: ("LT_extends"+Math.random()+"_LT").replaceAll(".", ""),
    insF: ("LT_in"+Math.random()+"_LT").replaceAll(".", ""),
    stringsF: ("LT_String"+Math.random()+"_LT").replaceAll(".", ""),
    arraysF: ("LT_Array"+Math.random()+"_LT").replaceAll(".", ""),
    thisF: ("LT_this"+Math.random()+"_LT").replaceAll(".", "")
  };
  let matches1 = code.match(/'([^\\']|\\')*'/g);
  let matches2 = code.match(/"([^\\"]|\\")*"/g);
  let matches3 = code.match(/`([^\\`]|\\`)*`/g);
  function procesarCadenas(prefix, code){
    if(matches1 != null){
      matches1.forEach(match => code = code.replace(match, mark));
    }
    if(matches2 != null){
      matches2.forEach(match => code = code.replace(match, mark));
    }
    if(matches3 != null){
      matches3.forEach(match => code = code.replace(match, mark));
    }
    return code;
  }
  function decodCadenas(prefix, code){
    if(matches1 != null){
      matches1.forEach(match => code = code.replace(mark, match));
    }
    if(matches2 != null){
      matches2.forEach(match => code = code.replace(mark, match));
    }
    if(matches3 != null){
      matches3.forEach(match => code = code.replace(mark, match));
    }
    return code;
  }
  function precesarLlaves(code){
    code = code.replaceAll("{", prefixs.llaveun)
       .replaceAll("}", prefixs.llavedo)
       .replaceAll(/\binicio\b/gi, "{")
       .replaceAll(/\bfin\b/gi, "}");
    return code;
  }
  function procesarPalabrasDef(code){
    code = code.replaceAll(/\bcase\b/gi, prefixs.casesF)
      .replaceAll(/\bcaso\b/gi, "case")
      .replaceAll(/\btrue\b/gi, prefixs.trueF)
      .replaceAll(/\bverdadero\b/gi, "true")
      .replaceAll(/\bfalse\b/gi, prefixs.falseF)
      .replaceAll(/\bfalso\b/gi, "false")
      .replaceAll(/\bcierto\b/gi, "true")
      .replaceAll(/\bcontinue\b/gi, prefixs.continueF)
      .replaceAll(/\bcontinuar\b/gi, "continue")
      .replaceAll(/\bdefault\b/gi, prefixs.defaultF)
      .replaceAll(/\bdefecto\b/gi, "default")
      .replaceAll(/\botro\b/gi, "default")
      .replaceAll(/\bfor\b/gi, prefixs.forsF)
      .replaceAll(/\bdesde\b/gi, "for")
      .replaceAll(/\bswitch\b/gi, prefixs.switchsF)
      .replaceAll(/\belegir\b/gi, "switch")
      .replaceAll(/\bfunction\b/gi, prefixs.functi)
      .replaceAll(/\bfun\b/gi, "function")
      .replaceAll(/\bfuncion\b/gi, "function")
      .replaceAll(/\bvar\b/gi, prefixs.varsF)
      .replaceAll(/\bglobal\b/gi, "var")
      .replaceAll(/\blet\b/gi, prefixs.letsF)
      .replaceAll(/\blocal\b/gi, "let")
      .replaceAll(/\bconst\b/gi, prefixs.constsF)
      .replaceAll(/\bconstante\b/gi, "const")
      .replaceAll(/\bwhile\b/gi, prefixs.whilesF)
      .replaceAll(/\bmientras\b/gi, "while")
      .replaceAll(/\bnull\b/gi, prefixs.nullsF)
      .replaceAll(/\bnulo\b/gi, "null")
      .replaceAll(/\bif\b/gi, prefixs.ifsF)
      .replaceAll(/\bsi\b/gi, "if")
      .replaceAll(/\belse\b/gi, prefixs.elsesF)
      .replaceAll(/\bosi\b/gi, "else if")
      .replaceAll(/\bsino\b/gi, "else")
      .replaceAll(/\breturn\b/gi, prefixs.retF)
      .replaceAll(/\bret\b/gi, "return")
      .replaceAll(/\bretorno\b/gi, "return")
      .replaceAll(/\bretornar\b/gi, "return")
      .replaceAll(/\bbreak\b/gi, prefixs.breaksF)
      .replaceAll(/\bromper\b/gi, "break")
      .replaceAll(/\bhasta\b/gi, "")
      .replaceAll(/\brepetir\b/gi, "do")
      .replaceAll(/\bpara\b/gi, "for")
      .replaceAll(/\bir\b/gi, "return")
      .replaceAll(/\bclass\b/gi, prefixs.classF)
      .replaceAll(/\bclase\b/gi, "class")
      .replaceAll(/\bstatic\b/gi, prefixs.staticsF)
      .replaceAll(/\bestatico\b/gi, "static")
      .replaceAll(/\bextends\b/gi, prefixs.extendsF)
      .replaceAll(/\bextender\b/gi, "extends")
      .replaceAll(/\bin\b/gi, prefixs.insF)
      .replaceAll(/\ben\b/gi, "in")
      .replaceAll(/\bString\b/gi, prefixs.stringsF)
      .replaceAll(/\bArray\b/gi, prefixs.arraysF)
      .replaceAll(/\bthis\b/gi, prefixs.thisF)
      .replaceAll(/\besto\b/gi, "this");
    return code;
  }
  code = procesarCadenas(prefixs.cadenas, code);
  code = procesarLlaves(code);
  code = procesarPalabrasDef(code);
  code = decodCadenas(prefixs.cadenas, code);
  function incluirjs(codec){
    eval(codec);
  }
  function incluir(codec){
    latjs(codec);
  }
  let importar = function (url){
    fetch(url)
    .then(response => response.text())
    .then(text => latjs(text));
  };
  code = " " + code + " ";
  let latjsPrefix = "[LatinoScript] ";
  console.info(latjsPrefix + "Ejecutando " + code + "...");
  let mark = "$$~strng"+Math.random()+"~$$";
  let matches1 = code.match(/'([^\\']|\\')*'/g);
  let matches2 = code.match(/"([^\\"]|\\")*"/g);
  let matches3 = code.match(/`([^\\`]|\\`)*`/g);
  if(matches1 != null){
    matches1.forEach(match => code = code.replace(match, mark));
  }
  if(matches2 != null){
    matches2.forEach(match => code = code.replace(match, mark));
  }
  if(matches3 != null){
    matches3.forEach(match => code = code.replace(match, mark));
  }
  
  //Funciones y variables
  function añadirError(err){
    throw err;
  }
  let poner = function(txt){
    alert(txt);
  };
  let consola = {};
  consola = console;
  consola.registrar = console.log;
  consola.depurar = console.debug;
  consola.afirmar = console.assert;
  consola.limpiar = console.clear;
  consola.advertir = console.warn;
  let imprimir = function(txt){
    alert(txt);
  };
  let escribir = imprimir;
  let escribirPregunta = function(prompt1, txt){
      prompt(prompt1, txt);
  }
  let cierto = true;
  let verdadero = true;
  let falso = false;
  let nulo = null;
  let rango = function(start, stop=undefined, step=1){
    let startArray = stop  === undefined ? 0 : start;
    let stopArray = stop  === undefined ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
  };
  let alerta = function(txt){
    alert(txt);
  };
  let ventana = window;
  let documento = document;
  let establecerIntervalo = function(functi, time){
    setInterval(functi, time);
  };
  let establecerTiempoEspera = function(functi, time){
    setTimeout(functi, time);
  };
  
  let preguntar = function(txt){
    confirm(txt);
  };
  let confirmar = preguntar;
  let sis = {};
  sis.op = function(sistem){
      if(!navigator.userAgentData.platform){
          Object.defineProperty(navigator, "userAgentData.platform", { get: function(){ return navigator.userAgent; } });
      }
      if(!sistem){
          return navigator.userAgentData.platform.toLowerCase();
      }else{
          if(navigator.userAgentData.platform.toLowerCase().indexOf(sistem) != -1){
            return true;
          }else{
            return false;
          }
      }
  };
  sis.operativo = sis.op;
  sis.avisar = function(level){
    console.warn(latjsPrefix + "No soportado");
  };

  //Storage prototype
  Storage.prototype.tamaño = function(units) {
      'use strict';
      units = units ? units.toUpperCase() : 'MB';
      let size = unescape(encodeURIComponent(JSON.stringify(this))).length;
      switch (units){
          case 'B': return [size,'B'].join('');
          case 'KB': return [+(size / 1024).toFixed(3),'KB'].join('');
          case 'MB': return [+(size / 1024 / 1024).toFixed(3),'MB'].join('');
          case 'GB': return [+(size / 1024 / 1024 / 1024).toFixed(3),'GB'].join('');
          default: return [+(size / 1024 / 1024).toFixed(3),'MB'].join('');
      }
  };
  try{
    eval(code);
  }catch(error){
    console.error(latjsPrefix + "[Error] " + error);
  }
  
}
function latjsUrl(url){
  fetch(url)
  .then(response => response.text())
  .then(text => latjs(text));
}
function loadLS(){
if(document.getElementsByTagName("script")){
    let latjsetiqueta = document.getElementsByTagName("script");
    for(let i = 0; i < latjsetiqueta.length; i++){
      if(latjsetiqueta[i].hasAttribute("type") || latjsetiqueta[i].getAttribute("type") != "text/latjs") continue;
        if(latjsetiqueta[i].innerHTML != null && latjsetiqueta[i].innerHTML != ""){
            let contenidolatjsetiqueta = latjsetiqueta[i].innerHTML;
            latjs(contenidolatjsetiqueta);
        }
        if(!latjsetiqueta[i].hasAttribute("src")) continue;
        latjsUrl(latjsetiqueta[i].getAttribute("src"));
    }
}
}
window.addEventListener("load", loadLS);
console.info("[LatinoScript] Listo!");
console.info("[LatinoScript] Usa latjs(cod); o latjsUrl(URL); para ejecutar LatinoScript!");
