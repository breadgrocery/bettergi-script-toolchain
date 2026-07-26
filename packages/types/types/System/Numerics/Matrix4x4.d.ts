import type {
  ClrHostValue,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import "../IEquatable";
import "../ValueType";
import "./Matrix3x2";
import "./Plane";
import "./Quaternion";
import "./Vector3";

declare const matrix4x4Brand: unique symbol;
export interface Matrix4x4 extends ClrHostValue {
  readonly [matrix4x4Brand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.Numerics.Matrix4x4): boolean;
  getDeterminant(): number;
  getHashCode(): number;
  item: {
    (row: number | StrongNumeric<Int32Host>, column: number | StrongNumeric<Int32Host>): number;
    get(row: number | StrongNumeric<Int32Host>, column: number | StrongNumeric<Int32Host>): number;
    set(
      row: number | StrongNumeric<Int32Host>,
      column: number | StrongNumeric<Int32Host>,
      value: number | StrongNumeric<SingleHost>
    ): number;
  };
  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m21: number;
  m22: number;
  m23: number;
  m24: number;
  m31: number;
  m32: number;
  m33: number;
  m34: number;
  m41: number;
  m42: number;
  m43: number;
  m44: number;
  readonly isIdentity: boolean;
  toString(): string;
  translation: System.Numerics.Vector3;
}

declare global {
  namespace System.Numerics {
    type Matrix4x4 = import("./Matrix4x4").Matrix4x4;
  }
}

export interface Matrix4x4HostType extends HostType<Matrix4x4, ValueTypeTrait> {
  new (
    m11: number | StrongNumeric<SingleHost>,
    m12: number | StrongNumeric<SingleHost>,
    m13: number | StrongNumeric<SingleHost>,
    m14: number | StrongNumeric<SingleHost>,
    m21: number | StrongNumeric<SingleHost>,
    m22: number | StrongNumeric<SingleHost>,
    m23: number | StrongNumeric<SingleHost>,
    m24: number | StrongNumeric<SingleHost>,
    m31: number | StrongNumeric<SingleHost>,
    m32: number | StrongNumeric<SingleHost>,
    m33: number | StrongNumeric<SingleHost>,
    m34: number | StrongNumeric<SingleHost>,
    m41: number | StrongNumeric<SingleHost>,
    m42: number | StrongNumeric<SingleHost>,
    m43: number | StrongNumeric<SingleHost>,
    m44: number | StrongNumeric<SingleHost>
  ): Matrix4x4;
  new (value: System.Numerics.Matrix3x2): Matrix4x4;
  readonly identity: System.Numerics.Matrix4x4;
  add(
    value1: System.Numerics.Matrix4x4,
    value2: System.Numerics.Matrix4x4
  ): System.Numerics.Matrix4x4;
  createBillboard(
    objectPosition: System.Numerics.Vector3,
    cameraPosition: System.Numerics.Vector3,
    cameraUpVector: System.Numerics.Vector3,
    cameraForwardVector: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createConstrainedBillboard(
    objectPosition: System.Numerics.Vector3,
    cameraPosition: System.Numerics.Vector3,
    rotateAxis: System.Numerics.Vector3,
    cameraForwardVector: System.Numerics.Vector3,
    objectForwardVector: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createFromAxisAngle(
    axis: System.Numerics.Vector3,
    angle: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createFromQuaternion(quaternion: System.Numerics.Quaternion): System.Numerics.Matrix4x4;
  createFromYawPitchRoll(
    yaw: number | StrongNumeric<SingleHost>,
    pitch: number | StrongNumeric<SingleHost>,
    roll: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createLookAt(
    cameraPosition: System.Numerics.Vector3,
    cameraTarget: System.Numerics.Vector3,
    cameraUpVector: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createLookAtLeftHanded(
    cameraPosition: System.Numerics.Vector3,
    cameraTarget: System.Numerics.Vector3,
    cameraUpVector: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createLookTo(
    cameraPosition: System.Numerics.Vector3,
    cameraDirection: System.Numerics.Vector3,
    cameraUpVector: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createLookToLeftHanded(
    cameraPosition: System.Numerics.Vector3,
    cameraDirection: System.Numerics.Vector3,
    cameraUpVector: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createOrthographic(
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    zNearPlane: number | StrongNumeric<SingleHost>,
    zFarPlane: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createOrthographicLeftHanded(
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    zNearPlane: number | StrongNumeric<SingleHost>,
    zFarPlane: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createOrthographicOffCenter(
    left: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>,
    bottom: number | StrongNumeric<SingleHost>,
    top: number | StrongNumeric<SingleHost>,
    zNearPlane: number | StrongNumeric<SingleHost>,
    zFarPlane: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createOrthographicOffCenterLeftHanded(
    left: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>,
    bottom: number | StrongNumeric<SingleHost>,
    top: number | StrongNumeric<SingleHost>,
    zNearPlane: number | StrongNumeric<SingleHost>,
    zFarPlane: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createPerspective(
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    nearPlaneDistance: number | StrongNumeric<SingleHost>,
    farPlaneDistance: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createPerspectiveLeftHanded(
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    nearPlaneDistance: number | StrongNumeric<SingleHost>,
    farPlaneDistance: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createPerspectiveFieldOfView(
    fieldOfView: number | StrongNumeric<SingleHost>,
    aspectRatio: number | StrongNumeric<SingleHost>,
    nearPlaneDistance: number | StrongNumeric<SingleHost>,
    farPlaneDistance: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createPerspectiveFieldOfViewLeftHanded(
    fieldOfView: number | StrongNumeric<SingleHost>,
    aspectRatio: number | StrongNumeric<SingleHost>,
    nearPlaneDistance: number | StrongNumeric<SingleHost>,
    farPlaneDistance: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createPerspectiveOffCenter(
    left: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>,
    bottom: number | StrongNumeric<SingleHost>,
    top: number | StrongNumeric<SingleHost>,
    nearPlaneDistance: number | StrongNumeric<SingleHost>,
    farPlaneDistance: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createPerspectiveOffCenterLeftHanded(
    left: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>,
    bottom: number | StrongNumeric<SingleHost>,
    top: number | StrongNumeric<SingleHost>,
    nearPlaneDistance: number | StrongNumeric<SingleHost>,
    farPlaneDistance: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createReflection(value: System.Numerics.Plane): System.Numerics.Matrix4x4;
  createRotationX(radians: number | StrongNumeric<SingleHost>): System.Numerics.Matrix4x4;
  createRotationX(
    radians: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createRotationY(radians: number | StrongNumeric<SingleHost>): System.Numerics.Matrix4x4;
  createRotationY(
    radians: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createRotationZ(radians: number | StrongNumeric<SingleHost>): System.Numerics.Matrix4x4;
  createRotationZ(
    radians: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createScale(
    xScale: number | StrongNumeric<SingleHost>,
    yScale: number | StrongNumeric<SingleHost>,
    zScale: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createScale(
    xScale: number | StrongNumeric<SingleHost>,
    yScale: number | StrongNumeric<SingleHost>,
    zScale: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createScale(scales: System.Numerics.Vector3): System.Numerics.Matrix4x4;
  createScale(
    scales: System.Numerics.Vector3,
    centerPoint: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createScale(scale: number | StrongNumeric<SingleHost>): System.Numerics.Matrix4x4;
  createScale(
    scale: number | StrongNumeric<SingleHost>,
    centerPoint: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  createShadow(
    lightDirection: System.Numerics.Vector3,
    plane: System.Numerics.Plane
  ): System.Numerics.Matrix4x4;
  createTranslation(position: System.Numerics.Vector3): System.Numerics.Matrix4x4;
  createTranslation(
    xPosition: number | StrongNumeric<SingleHost>,
    yPosition: number | StrongNumeric<SingleHost>,
    zPosition: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createViewport(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    minDepth: number | StrongNumeric<SingleHost>,
    maxDepth: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createViewportLeftHanded(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    minDepth: number | StrongNumeric<SingleHost>,
    maxDepth: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  createWorld(
    position: System.Numerics.Vector3,
    forward: System.Numerics.Vector3,
    up: System.Numerics.Vector3
  ): System.Numerics.Matrix4x4;
  decompose(
    matrix: System.Numerics.Matrix4x4,
    scale: HostVariableOut<System.Numerics.Vector3>,
    rotation: HostVariableOut<System.Numerics.Quaternion>,
    translation: HostVariableOut<System.Numerics.Vector3>
  ): boolean;
  invert(
    matrix: System.Numerics.Matrix4x4,
    result: HostVariableOut<System.Numerics.Matrix4x4>
  ): boolean;
  lerp(
    matrix1: System.Numerics.Matrix4x4,
    matrix2: System.Numerics.Matrix4x4,
    amount: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  multiply(
    value1: System.Numerics.Matrix4x4,
    value2: System.Numerics.Matrix4x4
  ): System.Numerics.Matrix4x4;
  multiply(
    value1: System.Numerics.Matrix4x4,
    value2: number | StrongNumeric<SingleHost>
  ): System.Numerics.Matrix4x4;
  negate(value: System.Numerics.Matrix4x4): System.Numerics.Matrix4x4;
  subtract(
    value1: System.Numerics.Matrix4x4,
    value2: System.Numerics.Matrix4x4
  ): System.Numerics.Matrix4x4;
  transform(
    value: System.Numerics.Matrix4x4,
    rotation: System.Numerics.Quaternion
  ): System.Numerics.Matrix4x4;
  transpose(matrix: System.Numerics.Matrix4x4): System.Numerics.Matrix4x4;
}

export {};
