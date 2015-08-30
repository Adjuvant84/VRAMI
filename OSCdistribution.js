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
// ---------------------------------------------------------------------------------
// Any Javascript expressions and statements that aren’t inside functions 
// are considered to be in global code

autowatch = 1
inlets = 1;
outlets = 3;

setoutletassist(0,"First outlet msg");
setoutletassist(1,"Second outlet msg");

// ---------------------------------------------------------------------------------
// Internal Methods
function init(){
  // var api = new LiveAPI("this_device")
  api = new LiveAPI()
  api.path = 'live_set'
  post('initialised\n')
  log('this device path:', api.children);
}


function loadbang() {
  init()
  // do stuff with the Device object...
}

function bang(){
  loadbang()
}

function fireClip(track, clipID){
 var liveObject = new LiveAPI("live_set tracks " + track + " clip_slots " + clipID)
 var playing = liveObject.get("is_playing")
 // log(playing)
 if (playing == 0){  
   liveObject.call("fire")
   // log("LivePath", liveObject.path)
   // log("LiveID", liveObject.id)
 }
}

function stopClip(track){
 var liveObject = new LiveAPI("live_set tracks " + track )
 var stopped = liveObject.get("playing_slot_index")
 // log("Stopped" ,stopped)
 if (stopped >= 0){
  
   liveObject.call("stop_all_clips")
 }

}

function stopallclips(){
  var liveObject = new LiveAPI("live_set")
  liveObject.call("stop_all_clips")
}
// setQuantization(2);

function setQuantization(numID){
  var path = "live_set "
  var liveObject = new LiveAPI(this.pathcer,path)
// log(liveObject.info)
liveObject.set ("clip_trigger_quantization",numID)
// log("Stuuf",liveObject.property)
// api.set("mute", 1); 
}

function callback(args)
{
  log("callback:", args);
}
/*
var path = "live_set tracks ";
var liveObject = new LiveAPI(path);

log("path:", liveObject.path);
log("id:", liveObject.id);
log("children:", liveObject.children);
*/