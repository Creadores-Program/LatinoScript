    console.info("[LatinoScript] Iniciando...");
    console.info("[LatinoScript] Cargando...");
    console.info("[LatinoScript] Versión 0.2.0 alpha");
    console.info("[LatinoScript] By Creadores Program");
    function latjs(code){
      
      function incluirjs(codec){
        eval(codec);
      }
      function incluir(codec){
        latjs(codec);
      }
      const importar = function (url){
        fetch(url)
        .then(response => response.text())
        .then(text => latjs(text));
      };
      code = " " + code + " ";
      let latjsPrefix = "[LatinoScript] ";
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
      const cierto = true;
      const verdadero = true;
      const falso = false;
      const nulo = null;
      
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
      //String prototype
      let Cadena = {};
      Cadena.prototipo = String.prototype;
      Cadena = String;
      let Formacion = {};
      Formacion.prototipo = Array.prototype;
      Formacion = Array;
      String.prototype.reemplazarTodo = String.prototype.replaceAll;
      String.prototype.reemplazar = String.prototype.replace;
      String.prototype.longitud = function(){
          return this.length;
      };
      String.prototype.indiceDe = function(){
          return this.indexOf();
      };
      
      //Array prototype
      Array.prototype.paraCada = Array.prototype.forEach;
      
      //code remplace
//        code = code.replaceAll(/\bthrow\b/gi, "$$throw"+Math.random()+"$$");
        code = code.replaceAll(/\btirarError\b/gi, "throw");
//        code = code.replaceAll(/\bfor\b/gi, "$$for"+Math.random()+"$$");
        code = code.replaceAll(/\bpara\b/gi, "for");
        code = code.replaceAll(/\brepetir\b/gi, "for");
        code = code.replaceAll(/\bdesde\b/gi, "from");
        code = code.replaceAll(/\botro\b/gi, "default");
        code = code.replaceAll(/\bdefecto\b/gi, "default");
        code = code.replaceAll(/\bimportarjs\b/gi, "import");
        code = code.replaceAll(/\bexportarjs\b/gi, "export");
        code = code.replaceAll(/\bdefecto\b/gi, "default");
        code = code.replaceAll(/\bcaso\b/gi, "case");
        code = code.replaceAll("#", "//");
        code = code.replaceAll("--", "//");
        code = code.replaceAll("{", "$$llave1"+Math.random()+"$$");
        code = code.replaceAll(/\binicio\b/gi, "{");
        code = code.replaceAll("}", "$$llave2"+Math.random()+"$$");
        code = code.replaceAll(/\bfin\b/gi, "}");
//        code = code.replaceAll(/\belse\b/gi, "$$else"+Math.random()+"$$");
        code = code.replaceAll(/\bsino\b/gi, "}else{");
//        code = code.replaceAll(/\bswitch\b/gi, "$$switch"+Math.random()+"$$");
        code = code.replaceAll(/\belegir\b/gi, "switch");
        code = code.replaceAll(/\bromper\b/gi, "break");
        code = code.replaceAll(/\bhacer\b/gi, "do{");
        code = code.replaceAll(/\bmientras\b/gi, "}while");
        code = code.replaceAll(/\bfuncion\b/gi, "function");
        code = code.replaceAll(/\blocal\b/gi, "let");
        code = code.replaceAll(/\bconstante\b/gi, "const");
        code = code.replaceAll(/\bnuevo\b/gi, "new");
        code = code.replaceAll(/\bcomo\b/gi, "as");
        code = code.replaceAll(/\bcontinuar\b/gi, "continue");
        code = code.replaceAll(/\btipo\b/gi, "type");
        code = code.replaceAll(/\bglobal\b/gi, "var");
        code = code.replaceAll(/\bosi\b/gi, "}else if");
        code = code.replaceAll(/\bclase\b/gi, "class");
        code = code.replaceAll(/\bimplementos\b/gi, "implements");
        code = code.replaceAll(/\bextiende\b/gi, "extends");
        code = code.replaceAll(/\bestatico\b/gi, "static");
        code = code.replaceAll(/\basincrono\b/gi, "async");
        code = code.replaceAll(/\ben\b/gi, "in");
        code = code.replaceAll(/\bde\b/gi, "of");
        code = code.replaceAll(/\bsi\b/gi, "if");
        code = code.replaceAll(/\bretornar\b/gi, "return");
        code = code.replaceAll(/\bregresar\b/gi, "return");
        code = code.replaceAll(/\bret\b/gi, "return");
        code = code.replaceAll(/\bir\b/gi, "return");
        code = code.replaceAll(/\bfun\b/gi, "function");
        code = code.replaceAll(/\besto\b/gi, "this");
        code = code.replaceAll(/\beste\b/gi, "this");
        code = code.replaceAll(/\besperar\b/gi, "await");
        code = code.replaceAll(/\bintentar\b/gi, "try");
        code = code.replaceAll(/\batrapar\b/gi, "catch");
        code = code.replaceAll(/\bcapturar\b/gi, "catch");
        code = code.replaceAll(/\bfinalmente\b/gi, "finally");
      if(matches1 != null){
        matches1.forEach(match => code = code.replace(mark, match));
      }
      if(matches2 != null){
        matches2.forEach(match => code = code.replace(mark, match));
      }
      if(matches3 != null){
        matches3.forEach(match => code = code.replace(mark, match));
      }
      try{
        eval(code);
      }catch(error){
        console.error(latjsPrefix + "[Error] " + error);
      }

      Storage.prototype.tamaño = null;
      //End String prototype
      
      String.prototype.reemplazarTodo = null;
      String.prototype.reemplazar = null;
      String.prototype.longitud = null;
      String.prototype.indiceDe = null;
      
      //End Array prototype
      Array.prototype.paraCada = null;
      
    }
    function latjsUrl(url){
      fetch(url)
      .then(response => response.text())
      .then(text => latjs(text));
    }
window.addEventListener('load', function(){
    if(document.getElementsByTagName("script") != null){
        let latjsetiqueta = document.getElementsByTagName("script");
        for(let i of latjsetiqueta){
            if(i.hasAttribute('type') || i.getAttribute('type') != "text/latjs") continue;
            if(i.innerHTML != null && i.innerHTML != ""){
                let contenidolatjsetiqueta = i.innerHTML;
                latjs(contenidolatjsetiqueta);
            }
            if(!i.hasAttribute('src')) continue;
            let latjsetiquetaQuery = i.getAttribute('src');
            if(latjsetiquetaQuery != null){
                latjsUrl(latjsetiquetaQuery);
             }
        }
    }
    console.info("[LatinoScript] Listo!");
});
