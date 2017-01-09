// Auto-generated. Do not edit!

// (in-package ratslam_ros.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class TopologicalEdge {
  constructor() {
    this.id = 0;
    this.source_id = 0;
    this.destination_id = 0;
    this.duration = {secs: 0, nsecs: 0};
    this.transform = new geometry_msgs.msg.Transform();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TopologicalEdge
    // Serialize message field [id]
    bufferInfo = _serializer.uint32(obj.id, bufferInfo);
    // Serialize message field [source_id]
    bufferInfo = _serializer.uint32(obj.source_id, bufferInfo);
    // Serialize message field [destination_id]
    bufferInfo = _serializer.uint32(obj.destination_id, bufferInfo);
    // Serialize message field [duration]
    bufferInfo = _serializer.duration(obj.duration, bufferInfo);
    // Serialize message field [transform]
    bufferInfo = geometry_msgs.msg.Transform.serialize(obj.transform, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TopologicalEdge
    let tmp;
    let len;
    let data = new TopologicalEdge();
    // Deserialize message field [id]
    tmp = _deserializer.uint32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [source_id]
    tmp = _deserializer.uint32(buffer);
    data.source_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [destination_id]
    tmp = _deserializer.uint32(buffer);
    data.destination_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [duration]
    tmp = _deserializer.duration(buffer);
    data.duration = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [transform]
    tmp = geometry_msgs.msg.Transform.deserialize(buffer);
    data.transform = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ratslam_ros/TopologicalEdge';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c5998f5af8b3f0379746951076b5511a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = TopologicalEdge;
