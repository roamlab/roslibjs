// Connecting to ROS
// -----------------
var ros = new ROSLIB.Ros();

ros.on('close', function() {
  console.log('Connection closed.');
  document.getElementById('connecting').style.display = 'none';
  document.getElementById('connected').style.display = 'none';
  document.getElementById('closed').style.display = 'inline';
});

// Create a connection to the rosbridge WebSocket server.
ros.connect('ws://127.0.0.1:9090');
// Publishing a Topic
// ------------------

// Topic objects with details of the topic's name and message type.
var joyButtonsTopic = new ROSLIB.Topic({
  ros : ros,
  name : '/joy',
  messageType : 'sensor_msgs/Joy'
});


var comdFrameTopic = new ROSLIB.Topic({
  ros : ros,
  name : '/joy',
  messageType : 'sensor_msgs/Joy'
});

// Messages

var joy_buttons = new ROSLIB.Message({
  header : {
    seq : 1,
    stamp : {
      sec : 0,
      nsec : 0      
    },
    frame_id : ""
  },
  axes : [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  buttons : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
});
// testing publish
// joyButtonsTopic.publish(joy_buttons);