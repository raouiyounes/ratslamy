// Auto-generated. Do not edit!

// (in-package ratslam_ros.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let TopologicalNode = require('./TopologicalNode.js');
let TopologicalEdge = require('./TopologicalEdge.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class TopologicalMap {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.node_count = 0;
    this.node = [];
    this.edge_count = 0;
    this.edge = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TopologicalMap
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [node_count]
    bufferInfo = _serializer.uint32(obj.node_count, bufferInfo);
    // Serialize the length for message field [node]
    bufferInfo = _serializer.uint32(obj.node.length, bufferInfo);
    // Serialize message field [node]
    obj.node.forEach((val) => {
      bufferInfo = TopologicalNode.serialize(val, bufferInfo);
    });
    // Serialize message field [edge_count]
    bufferInfo = _serializer.uint32(obj.edge_count, bufferInfo);
    // Serialize the length for message field [edge]
    bufferInfo = _serializer.uint32(obj.edge.length, bufferInfo);
    // Serialize message field [edge]
    obj.edge.forEach((val) => {
      bufferInfo = TopologicalEdge.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TopologicalMap
    let tmp;
    let len;
    let data = new TopologicalMap();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [node_count]
    tmp = _deserializer.uint32(buffer);
    data.node_count = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [node]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [node]
    data.node = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = TopologicalNode.deserialize(buffer);
      data.node[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [edge_count]
    tmp = _deserializer.uint32(buffer);
    data.edge_count = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [edge]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [edge]
    data.edge = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = TopologicalEdge.deserialize(buffer);
      data.edge[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ratslam_ros/TopologicalMap';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'deefb2c5a22caaa16af4e1b64a821bdc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    uint32 node_count
    TopologicalNode[] node
    uint32 edge_count
    TopologicalEdge[] edge
    
    	
    
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
    
    ================================================================================
    MSG: ratslam_ros/TopologicalNode
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
    
    ================================================================================
    MSG: ratslam_ros/TopologicalEdge
    uint32 id
    uint32 source_id
    uint32 destination_id
    duration duration
    geometry_msgs/Transform transform
    ================================================================================
    MSG: geometry_msgs/Transform
    # This represents the transform between two coordinate frames in free space.
    
    Vector3 translation
    Quaternion rotation
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

};

module.exports = TopologicalMap;
