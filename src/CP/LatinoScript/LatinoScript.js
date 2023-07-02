    console.info("[LatinoScript] Iniciando...");
    console.info("[LatinoScript] Cargando...");
    console.info("[LatinoScript] Versión 0.1.0 alpha");
    console.info("[LatinoScript] By Creadores Program");
    console.info("[LatinoScript] Redes Sociales:");
    console.info("Discord: https://discord.gg/mrmHcwxXff");
    console.info("YouTube: https://youtube.com/c/Trollhunters501");
    console.info("Facebook: https://facebook.com/profile.php?id=100089507007036");
    console.info("[LatinoScript] Basado en JavaScript y Latino");
    console.info("[LatinoScript] Cargando Lenguaje...");
    let codelatjs = "";
    function latjs(code){
      
      function incluirjs(code){
        eval(code);
      }
      function incluir(url){
        fetch(url)
        .then(response => response.text())
        .then(text => latjs(text));
      }
      let importar = incluir;
      code = " " + code + " ";
      let latjsPrefix = "[LatinoScript] ";
      console.info(latjsPrefix + "Ejecutando " + code + "...");
      let mark = "{{~strng~}}";
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
      let escribir= imprimir;
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
      
      //String prototype
      String.prototype.reemplazarTodo = String.prototype.replaceAll;
      String.prototype.reemplazar = String.prototype.replace;
      
      //Array prototype
      Array.prototype.paraCada = Array.prototype.forEach;
      
      //code remplace
      function traductorLatjsAjs(code1, metod){
       if(metod == 1){
        code1 = code1.replaceAll(/\bsolicitarPantallaCompleta\b/gi, "requestFullScreen");
        code1 = code1.replaceAll(/\bcancelarPantallaCompleta\b/gi, "cancelFullScreen");
        code1 = code1.replaceAll(/\bMates\b/gi, "Math");
        code1 = code1.replaceAll(/\bpiso\b/gi, "floor");
        code1 = code1.replaceAll(/\baleatorio\b/gi, "random");
        code1 = code1.replaceAll(/\balmLocal\b/gi, "localStorage");
        code1 = code1.replaceAll(/\bobtenerObj\b/gi, "getItem");
        code1 = code1.replaceAll(/\bestableserObj\b/gi, "setItem");
        code1 = code1.replaceAll(/\bdetener\b/gi, "stop");
        code1 = code1.replaceAll(/\btirarError\b/gi, "throw");
        code1 = code1.replaceAll(/\bpara\b/gi, "for");
        code1 = code1.replaceAll(/\brepetir\b/gi, "for");
        code1 = code1.replaceAll(/\bdesde\b/gi, "from");
        code1 = code1.replaceAll(/\botro\b/gi, "default");
        code1 = code1.replaceAll(/\bdefecto\b/gi, "default");
        code1 = code1.replaceAll(/\bimportarjs\b/gi, "import");
        code1 = code1.replaceAll(/\bexportarjs\b/gi, "export");
        code1 = code1.replaceAll(/\bnombre-modulo\b/gi, "module-name");
        code1 = code1.replaceAll(/\bnombre\b/gi, "name");
        code1 = code1.replaceAll(/\bcaso\b/gi, "case");
        code1 = code1.replaceAll("#", "//");
        code1 = code1.replaceAll(/\binicio\b/gi, "{");
        code1 = code1.replaceAll(/\bfin\b/gi, "}");
        code1 = code1.replaceAll(/\bsino\b/gi, "}else{");
        code1 = code1.replaceAll(/\belegir\b/gi, "switch");
        code1 = code1.replaceAll(/\bromper\b/gi, "break");
        code1 = code1.replaceAll(/\bhacer\b/gi, "do{");
        code1 = code1.replaceAll(/\bmientras\b/gi, "}while");
        code1 = code1.replaceAll(/\bfuncion\b/gi, "function");
        code1 = code1.replaceAll(/\blocal\b/gi, "let");
        code1 = code1.replaceAll(/\bconstante\b/gi, "const");
        code1 = code1.replaceAll(/\bnuevo\b/gi, "new");
        code1 = code1.replaceAll(/\bcomo\b/gi, "as");
        code1 = code1.replaceAll(/\bcontinuar\b/gi, "continue");
        code1 = code1.replaceAll(/\btipo\b/gi, "type");
        code1 = code1.replaceAll(/\bglobal\b/gi, "var");
        code1 = code1.replaceAll(/\bcuerpo\b/gi, "body");
        code1 = code1.replaceAll(/\bencabezados\b/gi, "headers");
        code1 = code1.replaceAll(/\bmetodo\b/gi, "method");
        code1 = code1.replaceAll(/\bbuscarUrl\b/gi, "fetch");
        code1 = code1.replaceAll(/\bconsultarUrl\b/gi, "fetch");
        code1 = code1.replaceAll(/\bosi\b/gi, "}else if");
        code1 = code1.replaceAll(/\bencadenar\b/gi, "stringify");
        code1 = code1.replaceAll(/\bclase\b/gi, "class");
        code1 = code1.replaceAll(/\bimplementos\b/gi, "implements");
        code1 = code1.replaceAll(/\bextiende\b/gi, "extends");
        code1 = code1.replaceAll(/\bestatico\b/gi, "static");
        code1 = code1.replaceAll(/\bdetectarEvento\b/gi, "addEventListener");
        code1 = code1.replaceAll(/\basincrono\b/gi, "async");
        code1 = code1.replaceAll(/\ben\b/gi, "in");
        code1 = code1.replaceAll(/\blongitud\b/gi, "length");
        code1 = code1.replaceAll(/\bde\b/gi, "of");
        code1 = code1.replaceAll(/\bsi\b/gi, "if");
        code1 = code1.replaceAll(/\bretornar\b/gi, "return");
        code1 = code1.replaceAll(/\bregresar\b/gi, "return");
        code1 = code1.replaceAll(/\bret\b/gi, "return");
        code1 = code1.replaceAll(/\bir\b/gi, "return");
        code1 = code1.replaceAll(/\bfun\b/gi, "function");
        code1 = code1.replaceAll(/\besto\b/gi, "this");
        code1 = code1.replaceAll(/\beste\b/gi, "this");
        code1 = code1.replaceAll(/\besperar\b/gi, "await");
        return code1;
       }else if(metod == 2){
        code1 = code1.replaceAll(/\brequestFullScreen\b/gi, "solicitarPantallaCompleta");
        code1 = code1.replaceAll(/\bcancelFullScreen\b/gi, "cancelarPantallaCompleta");
        code1 = code1.replaceAll(/\bMath\b/gi, "Mates");
        code1 = code1.replaceAll(/\bfloor\b/gi, "piso");
        code1 = code1.replaceAll(/\brandom\b/gi, "aleatorio");
        code1 = code1.replaceAll(/\blocalStorage\b/gi, "almLocal");
        code1 = code1.replaceAll(/\bgetItem\b/gi, "obtenerObj");
        code1 = code1.replaceAll(/\bsetItem\b/gi, "estableserObj");
        code1 = code1.replaceAll(/\bstop\b/gi, "detener");
        code1 = code1.replaceAll(/\bthrow\b/gi, "tirarError");
        code1 = code1.replaceAll(/\bfor\b/gi, "para");
        code1 = code1.replaceAll(/\bfrom\b/gi, "desde");
        code1 = code1.replaceAll(/\bdefault\b/gi, "defecto");
        code1 = code1.replaceAll(/\bimport\b/gi, "importarjs");
        code1 = code1.replaceAll(/\bexport\b/gi, "exportarjs");
        code1 = code1.replaceAll(/\bmodule-name\b/gi, "nombre-modulo");
        code1 = code1.replaceAll(/\bname\b/gi, "nombre");
        code1 = code1.replaceAll(/\bcase\b/gi, "caso");
        code1 = code1.replaceAll("{", "inicio");
        code1 = code1.replaceAll("}", "fin");
        code1 = code1.replaceAll(/\belse if\b/gi, "osi");
        code1 = code1.replaceAll(/\belse\b/gi, "sino");
        code1 = code1.replaceAll(/\bswitch\b/gi, "elegir");
        code1 = code1.replaceAll(/\break\b/gi, "romper");
        code1 = code1.replaceAll(/\bdo\b/gi, "hacer");
        code1 = code1.replaceAll(/\bwhile\b/gi, "mientras");
        code1 = code1.replaceAll(/\bfunction\b/gi, "funcion");
        code1 = code1.replaceAll(/\blet\b/gi, "local");
        code1 = code1.replaceAll(/\bconst\b/gi, "constante");
        code1 = code1.replaceAll(/\bnew\b/gi, "nuevo");
        code1 = code1.replaceAll(/\bas\b/gi, "como");
        code1 = code1.replaceAll(/\bcontinue\b/gi, "continuar");
        code1 = code1.replaceAll(/\btype\b/gi, "tipo");
        code1 = code1.replaceAll(/\bvar\b/gi, "global");
        code1 = code1.replaceAll(/\bbody\b/gi, "cuerpo");
        code1 = code1.replaceAll(/\bheaders\b/gi, "encabezados");
        code1 = code1.replaceAll(/\bmethod\b/gi, "metodo");
        code1 = code1.replaceAll(/\bfetch\b/gi, "buscarUrl");
        code1 = code1.replaceAll(/\bestringify\b/gi, "encadenar");
        code1 = code1.replaceAll(/\bclass\b/gi, "clase");
        code1 = code1.replaceAll(/\bimplements\b/gi, "implementos");
        code1 = code1.replaceAll(/\bextends\b/gi, "extiende");
        code1 = code1.replaceAll(/\bstatic\b/gi, "estatico");
        code1 = code1.replaceAll(/\baddEventListener\b/gi, "detectarEvento");
        code1 = code1.replaceAll(/\basync\b/gi, "asincrono");
        code1 = code1.replaceAll(/\bin\b/gi, "en");
        code1 = code1.replaceAll(/\blength\b/gi, "longitud");
        code1 = code1.replaceAll(/\bof\b/gi, "de");
        code1 = code1.replaceAll(/\bif\b/gi, "si");
        code1 = code1.replaceAll(/\breturn\b/gi, "retornar");
        code1 = code1.replaceAll(/\bthis\b/gi, "esto");
        code1 = code1.replaceAll(/\bawait\b/gi, "esperar");
        return code1;
       }
      }
      code = traductorLatjsAjs(code, 1);
      if(matches1 != null){
        matches1.forEach(match => code = code.replace(mark, match));
      }
      if(matches2 != null){
        matches2.forEach(match => code = code.replace(mark, match));
      }
      if(matches3 != null){
        matches3.forEach(match => code = code.replace(mark, match));
      }
      codelatjs += code;
      try{
        eval(codelatjs);
      }catch(error){
        error = traductorLatjsAjs(error, 2);
        console.error(latjsPrefix + "[Error] " + error);
      }
      //End String prototype
      
      String.prototype.reemplazarTodo = null;
      String.prototype.reemplazar = null;
      
      //End Array prototype
      Array.prototype.paraCada = null;
      
    }
    function latjsUrl(url){
      fetch(url)
      .then(response => response.text())
      .then(text => latjs(text));
    }
    console.info("[LatinoScript] Listo!");
    console.info("[LatinoScript] Usa latjs(cod); o latjsUrl(URL); para ejecutar LatinoScript!");
