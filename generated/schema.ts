// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Event extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("type", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Event entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Event must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Event", id.toString(), this);
    }
  }

  static load(id: string): Event | null {
    return changetype<Event | null>(store.get("Event", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get involvedEntity(): Bytes | null {
    let value = this.get("involvedEntity");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set involvedEntity(value: Bytes | null) {
    if (!value) {
      this.unset("involvedEntity");
    } else {
      this.set("involvedEntity", Value.fromBytes(<Bytes>value));
    }
  }
}

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("birth", Value.fromBigInt(BigInt.zero()));
    this.set("expiry", Value.fromBigInt(BigInt.zero()));
    this.set("initiator", Value.fromBytes(Bytes.empty()));
    this.set("signers", Value.fromBytesArray(new Array(0)));
    this.set("signedSigners", Value.fromBytesArray(new Array(0)));
    this.set("viewers", Value.fromBytesArray(new Array(0)));
    this.set("signed", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Contract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Contract", id.toString(), this);
    }
  }

  static load(id: string): Contract | null {
    return changetype<Contract | null>(store.get("Contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get birth(): BigInt {
    let value = this.get("birth");
    return value!.toBigInt();
  }

  set birth(value: BigInt) {
    this.set("birth", Value.fromBigInt(value));
  }

  get expiry(): BigInt {
    let value = this.get("expiry");
    return value!.toBigInt();
  }

  set expiry(value: BigInt) {
    this.set("expiry", Value.fromBigInt(value));
  }

  get initiator(): Bytes {
    let value = this.get("initiator");
    return value!.toBytes();
  }

  set initiator(value: Bytes) {
    this.set("initiator", Value.fromBytes(value));
  }

  get signers(): Array<Bytes> {
    let value = this.get("signers");
    return value!.toBytesArray();
  }

  set signers(value: Array<Bytes>) {
    this.set("signers", Value.fromBytesArray(value));
  }

  get signedSigners(): Array<Bytes> {
    let value = this.get("signedSigners");
    return value!.toBytesArray();
  }

  set signedSigners(value: Array<Bytes>) {
    this.set("signedSigners", Value.fromBytesArray(value));
  }

  get viewers(): Array<Bytes> {
    let value = this.get("viewers");
    return value!.toBytesArray();
  }

  set viewers(value: Array<Bytes>) {
    this.set("viewers", Value.fromBytesArray(value));
  }

  get signed(): boolean {
    let value = this.get("signed");
    return value!.toBoolean();
  }

  set signed(value: boolean) {
    this.set("signed", Value.fromBoolean(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("joinedTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get joinedTimestamp(): BigInt {
    let value = this.get("joinedTimestamp");
    return value!.toBigInt();
  }

  set joinedTimestamp(value: BigInt) {
    this.set("joinedTimestamp", Value.fromBigInt(value));
  }
}
