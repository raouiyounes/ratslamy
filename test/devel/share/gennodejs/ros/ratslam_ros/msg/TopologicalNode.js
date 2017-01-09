// Auto-generated. Do not edit!

// (in-package ratslam_ros.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class TopologicalNode {
  constructor() {
    this.id = 0;
    this.pose = new geometry_msgs.msg.Pose();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TopologicalNode
    // Serialize message field [id]
    bufferInfo = _serializer.uint32(obj.id, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TopologicalNode
    let tmp;
    let len;
    let data = new TopologicalNode();
    // Deserialize message field [id]
    tmp = _deserializer.uint32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ratslam_ros/TopologicalNode';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9ad7ea65113411e05ab5cf09fc962a2d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 id
    geometry_msgs/Pose pose
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = TopologicalNode;
