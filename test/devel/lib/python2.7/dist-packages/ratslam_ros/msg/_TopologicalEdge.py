# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from ratslam_ros/TopologicalEdge.msg. Do not edit."""
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import geometry_msgs.msg
import genpy

class TopologicalEdge(genpy.Message):
  _md5sum = "c5998f5af8b3f0379746951076b5511a"
  _type = "ratslam_ros/TopologicalEdge"
  _has_header = False #flag to mark the presence of a Header object
  _full_text = """uint32 id
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
"""
  __slots__ = ['id','source_id','destination_id','duration','transform']
  _slot_types = ['uint32','uint32','uint32','duration','geometry_msgs/Transform']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       id,source_id,destination_id,duration,transform

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(TopologicalEdge, self).__init__(*args, **kwds)
      #message fields cannot be None, assign default values for those that are
      if self.id is None:
        self.id = 0
      if self.source_id is None:
        self.source_id = 0
      if self.destination_id is None:
        self.destination_id = 0
      if self.duration is None:
        self.duration = genpy.Duration()
      if self.transform is None:
        self.transform = geometry_msgs.msg.Transform()
    else:
      self.id = 0
      self.source_id = 0
      self.destination_id = 0
      self.duration = genpy.Duration()
      self.transform = geometry_msgs.msg.Transform()

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self
      buff.write(_get_struct_3I2i7d().pack(_x.id, _x.source_id, _x.destination_id, _x.duration.secs, _x.duration.nsecs, _x.transform.translation.x, _x.transform.translation.y, _x.transform.translation.z, _x.transform.rotation.x, _x.transform.rotation.y, _x.transform.rotation.z, _x.transform.rotation.w))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    try:
      if self.duration is None:
        self.duration = genpy.Duration()
      if self.transform is None:
        self.transform = geometry_msgs.msg.Transform()
      end = 0
      _x = self
      start = end
      end += 76
      (_x.id, _x.source_id, _x.destination_id, _x.duration.secs, _x.duration.nsecs, _x.transform.translation.x, _x.transform.translation.y, _x.transform.translation.z, _x.transform.rotation.x, _x.transform.rotation.y, _x.transform.rotation.z, _x.transform.rotation.w,) = _get_struct_3I2i7d().unpack(str[start:end])
      self.duration.canon()
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self
      buff.write(_get_struct_3I2i7d().pack(_x.id, _x.source_id, _x.destination_id, _x.duration.secs, _x.duration.nsecs, _x.transform.translation.x, _x.transform.translation.y, _x.transform.translation.z, _x.transform.rotation.x, _x.transform.rotation.y, _x.transform.rotation.z, _x.transform.rotation.w))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    try:
      if self.duration is None:
        self.duration = genpy.Duration()
      if self.transform is None:
        self.transform = geometry_msgs.msg.Transform()
      end = 0
      _x = self
      start = end
      end += 76
      (_x.id, _x.source_id, _x.destination_id, _x.duration.secs, _x.duration.nsecs, _x.transform.translation.x, _x.transform.translation.y, _x.transform.translation.z, _x.transform.rotation.x, _x.transform.rotation.y, _x.transform.rotation.z, _x.transform.rotation.w,) = _get_struct_3I2i7d().unpack(str[start:end])
      self.duration.canon()
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_3I2i7d = None
def _get_struct_3I2i7d():
    global _struct_3I2i7d
    if _struct_3I2i7d is None:
        _struct_3I2i7d = struct.Struct("<3I2i7d")
    return _struct_3I2i7d
