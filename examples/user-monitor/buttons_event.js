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
ros.connect('ws://localhost:9090');

// Publishing a Topic
// ------------------

// First, we create a Topic object with details of the topic's name and message type.
var joyButtonsTopic = new ROSLIB.Topic({
  ros : ros,
  name : '/web_jot_buttons',
  messageType : 'sensor_msgs/Joy'
});

// Then we create the payload to be published. The object we pass in to ros.Message matches the
// fields defined in the geometry_msgs/Twist.msg definition.
var joy_buttons = new ROSLIB.Message({
  header : {
    seq: 1,
    stamp: {
      
    }
  },
  axes : [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  buttons : [0, 0, 0, 0]
});
// And finally, publish.
joyButtonsTopic.publish(joy_buttons);