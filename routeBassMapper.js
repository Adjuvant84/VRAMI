autowatch = 1;
inlets = 1;
outlets = 1;

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

var bass1 = new LiveAPI();
var bass2 = new LiveAPI();

init();

function msg_float(a,b,c){
  log("Inlet", arguments)
}

function init(){
  api = new LiveAPI()
  api.path = 'live_set tracks 2 devices 1 parameters 1'
  post('initialised\n')
  log('this device path:', api.children);
  log("name: ",api.get("name"))
log("min: ",api.get("min"))
log("max: ",api.get("max"))

	bass1.path = 'live_set tracks 2 devices 1 parameters 1'
  bass2.path = 'live_set tracks 2 devices 1 parameters 2'
	// synth1.path = 'live_set tracks 0 devices 1 parameters 1'
	// synth2.path = 'live_set tracks 0 devices 2 parameters 1'
	
}

function bang(){
	init()
}

function loadbang(){
	init()
}

function positions(){
  bass1.set("value",arguments[0])
  bass2.set("value",arguments[1])
}
