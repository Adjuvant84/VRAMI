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

var beat1 = new LiveAPI();
var beat2 = new LiveAPI();
var beat3 = new LiveAPI();
var beat4 = new LiveAPI();
init();

function init(){
	api = new LiveAPI()
  	api.path = 'live_set tracks 0 devices 1 parameters 1'
  	post('initialised\n')
  	log('this device path:', api.children);
	log("name: ",api.get("name"))
	
	beat1.path = 'live_set tracks 0 devices 1 parameters 1'
	beat2.path = 'live_set tracks 0 devices 2 parameters 1'
	beat3.path = 'live_set tracks 0 devices 3 parameters 1'
	beat4.path = 'live_set tracks 0 devices 4 parameters 1'
}

function bang(){
	init()
}

function loadbang(){
	init()
}

function gains(){
	beat1.set("value",arguments[0])
	beat2.set("value",arguments[1])
	beat3.set("value",arguments[2])
	beat4.set("value",arguments[3])
}
