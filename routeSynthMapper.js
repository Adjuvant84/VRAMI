function log() {
  for(var i=0,len=arguments.length; i<len; i++) {
    var message = arguments[i];
    if(message && message.toString) {
      var s = message.toString();
      if(s.indexOf("[object ") >= 0) {
        s = JSON.stringify(message);
      }
      post(s);
    }
    else if(message === null) {
      post("<null>");
    }
    else {
      post(message);
    }
  }
  post("\n");
}

log("___________________________________________________");
log("Reload:", new Date);

autowatch = 1;
inlets = 3;
outlets = 1;
var synth1 = new LiveAPI();
var synth2 = new LiveAPI();
init();

function msg_float(a,b,c){
  log("Inlet", arguments)
}

function init(){
  api = new LiveAPI()
  api.path = 'live_set tracks 0 devices 0 parameters 1'
  post('initialised\n')
  log('this device path:', api.children);
	log("name: ",api.get("name"))
	
	 synth1.path = 'live_set tracks 0 devices 1 parameters 1'
	 synth2.path = 'live_set tracks 0 devices 2 parameters 1'
	
}

function positions(){
  synth1.set("value",arguments[0])
  synth2.set("value",arguments[1])

}

function bang(){
	init()
}

function loadbang(){
	init()
}