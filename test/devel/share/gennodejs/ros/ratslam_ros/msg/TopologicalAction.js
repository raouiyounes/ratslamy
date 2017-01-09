// Auto-generated. Do not edit!

// (in-package ratslam_ros.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class TopologicalAction {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.action = 0;
    this.src_id = 0;
    this.dest_id = 0;
    this.relative_rad = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TopologicalAction
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [action]
    bufferInfo = _serializer.uint32(obj.action, bufferInfo);
    // Serialize message field [src_id]
    bufferInfo = _serializer.uint32(obj.src_id, bufferInfo);
    // Serialize message field [dest_id]
    bufferInfo = _serializer.uint32(obj.dest_id, bufferInfo);
    // Serialize message field [relative_rad]
    bufferInfo = _serializer.float64(obj.relative_rad, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TopologicalAction
    let tmp;
    let len;
    let data = new TopologicalAction();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [action]
    tmp = _deserializer.uint32(buffer);
    data.action = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [src_id]
    tmp = _deserializer.uint32(buffer);
    data.src_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dest_id]
    tmp = _deserializer.uint32(buffer);
    data.dest_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [relative_rad]
    tmp = _deserializer.float64(buffer);
    data.relative_rad = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ratslam_ros/TopologicalAction';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '365d6e23e0fb90a477e21472cd2edf80';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # actions
    uint32 CREATE_NODE=1
    uint32 CREATE_EDGE=2
    uint32 SET_NODE=3
    
    Header header
    
    uint32 action
    
    uint32 src_id
    uint32 dest_id
    
    float64 relative_rad
    
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

};

// Constants for message
TopologicalAction.Constants = {
  CREATE_NODE: 1,
  CREATE_EDGE: 2,
  SET_NODE: 3,
}

module.exports = TopologicalAction;
