import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./XmlSchemaAnnotated";

declare const xmlSchemaParticleBrand: unique symbol;
export interface XmlSchemaParticle extends Omit<
  System.Xml.Schema.XmlSchemaAnnotated,
  "maxOccurs" | "maxOccursString" | "minOccurs" | "minOccursString"
> {
  readonly [xmlSchemaParticleBrand]: true;
  maxOccurs: number;
  maxOccursString: string;
  minOccurs: number;
  minOccursString: string;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaParticle = import("./XmlSchemaParticle").XmlSchemaParticle;
  }
}

export interface XmlSchemaParticleHostType extends HostType<
  XmlSchemaParticle,
  ReferenceTypeTrait
> {}

export {};
