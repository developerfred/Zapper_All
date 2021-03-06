// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Zapin extends ethereum.Event {
  get params(): Zapin__Params {
    return new Zapin__Params(this);
  }
}

export class Zapin__Params {
  _event: Zapin;

  constructor(event: Zapin) {
    this._event = event;
  }

  get _toWhomToIssue(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _toYVaultAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _Outgoing(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Zapout extends ethereum.Event {
  get params(): Zapout__Params {
    return new Zapout__Params(this);
  }
}

export class Zapout__Params {
  _event: Zapout;

  constructor(event: Zapout) {
    this._event = event;
  }

  get _toWhomToIssue(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _fromYVaultAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _toTokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _tokensRecieved(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class yVault_ZapInOut_General_V1_4 extends ethereum.SmartContract {
  static bind(address: Address): yVault_ZapInOut_General_V1_4 {
    return new yVault_ZapInOut_General_V1_4(
      "yVault_ZapInOut_General_V1_4",
      address
    );
  }

  CurveZapInGeneral(): Address {
    let result = super.call(
      "CurveZapInGeneral",
      "CurveZapInGeneral():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_CurveZapInGeneral(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "CurveZapInGeneral",
      "CurveZapInGeneral():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  CurveZapOutGeneral(): Address {
    let result = super.call(
      "CurveZapOutGeneral",
      "CurveZapOutGeneral():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_CurveZapOutGeneral(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "CurveZapOutGeneral",
      "CurveZapOutGeneral():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ZapOut(
    _toWhomToIssue: Address,
    _ToTokenContractAddress: Address,
    _fromYVaultAddress: Address,
    _vaultType: i32,
    _IncomingAmt: BigInt,
    _minTokensRec: BigInt
  ): BigInt {
    let result = super.call(
      "ZapOut",
      "ZapOut(address,address,address,uint16,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_toWhomToIssue),
        ethereum.Value.fromAddress(_ToTokenContractAddress),
        ethereum.Value.fromAddress(_fromYVaultAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_vaultType)),
        ethereum.Value.fromUnsignedBigInt(_IncomingAmt),
        ethereum.Value.fromUnsignedBigInt(_minTokensRec)
      ]
    );

    return result[0].toBigInt();
  }

  try_ZapOut(
    _toWhomToIssue: Address,
    _ToTokenContractAddress: Address,
    _fromYVaultAddress: Address,
    _vaultType: i32,
    _IncomingAmt: BigInt,
    _minTokensRec: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ZapOut",
      "ZapOut(address,address,address,uint16,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_toWhomToIssue),
        ethereum.Value.fromAddress(_ToTokenContractAddress),
        ethereum.Value.fromAddress(_fromYVaultAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_vaultType)),
        ethereum.Value.fromUnsignedBigInt(_IncomingAmt),
        ethereum.Value.fromUnsignedBigInt(_minTokensRec)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  goodwill(): i32 {
    let result = super.call("goodwill", "goodwill():(uint16)", []);

    return result[0].toI32();
  }

  try_goodwill(): ethereum.CallResult<i32> {
    let result = super.tryCall("goodwill", "goodwill():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stopped(): boolean {
    let result = super.call("stopped", "stopped():(bool)", []);

    return result[0].toBoolean();
  }

  try_stopped(): ethereum.CallResult<boolean> {
    let result = super.tryCall("stopped", "stopped():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _goodwill(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ZapInCall extends ethereum.Call {
  get inputs(): ZapInCall__Inputs {
    return new ZapInCall__Inputs(this);
  }

  get outputs(): ZapInCall__Outputs {
    return new ZapInCall__Outputs(this);
  }
}

export class ZapInCall__Inputs {
  _call: ZapInCall;

  constructor(call: ZapInCall) {
    this._call = call;
  }

  get _toWhomToIssue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _toYVaultAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _vaultType(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _fromTokenAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _minTokensSwapped(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ZapInCall__Outputs {
  _call: ZapInCall;

  constructor(call: ZapInCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ZapOutCall extends ethereum.Call {
  get inputs(): ZapOutCall__Inputs {
    return new ZapOutCall__Inputs(this);
  }

  get outputs(): ZapOutCall__Outputs {
    return new ZapOutCall__Outputs(this);
  }
}

export class ZapOutCall__Inputs {
  _call: ZapOutCall;

  constructor(call: ZapOutCall) {
    this._call = call;
  }

  get _toWhomToIssue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ToTokenContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _fromYVaultAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _vaultType(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _IncomingAmt(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _minTokensRec(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ZapOutCall__Outputs {
  _call: ZapOutCall;

  constructor(call: ZapOutCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AddNewCurveExchangeCall extends ethereum.Call {
  get inputs(): AddNewCurveExchangeCall__Inputs {
    return new AddNewCurveExchangeCall__Inputs(this);
  }

  get outputs(): AddNewCurveExchangeCall__Outputs {
    return new AddNewCurveExchangeCall__Outputs(this);
  }
}

export class AddNewCurveExchangeCall__Inputs {
  _call: AddNewCurveExchangeCall;

  constructor(call: AddNewCurveExchangeCall) {
    this._call = call;
  }

  get curvePoolToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get curveExchangeAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddNewCurveExchangeCall__Outputs {
  _call: AddNewCurveExchangeCall;

  constructor(call: AddNewCurveExchangeCall) {
    this._call = call;
  }
}

export class InCaseTokengetsStuckCall extends ethereum.Call {
  get inputs(): InCaseTokengetsStuckCall__Inputs {
    return new InCaseTokengetsStuckCall__Inputs(this);
  }

  get outputs(): InCaseTokengetsStuckCall__Outputs {
    return new InCaseTokengetsStuckCall__Outputs(this);
  }
}

export class InCaseTokengetsStuckCall__Inputs {
  _call: InCaseTokengetsStuckCall;

  constructor(call: InCaseTokengetsStuckCall) {
    this._call = call;
  }

  get _TokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InCaseTokengetsStuckCall__Outputs {
  _call: InCaseTokengetsStuckCall;

  constructor(call: InCaseTokengetsStuckCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetnewgoodwillCall extends ethereum.Call {
  get inputs(): SetnewgoodwillCall__Inputs {
    return new SetnewgoodwillCall__Inputs(this);
  }

  get outputs(): SetnewgoodwillCall__Outputs {
    return new SetnewgoodwillCall__Outputs(this);
  }
}

export class SetnewgoodwillCall__Inputs {
  _call: SetnewgoodwillCall;

  constructor(call: SetnewgoodwillCall) {
    this._call = call;
  }

  get _new_goodwill(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetnewgoodwillCall__Outputs {
  _call: SetnewgoodwillCall;

  constructor(call: SetnewgoodwillCall) {
    this._call = call;
  }
}

export class ToggleContractActiveCall extends ethereum.Call {
  get inputs(): ToggleContractActiveCall__Inputs {
    return new ToggleContractActiveCall__Inputs(this);
  }

  get outputs(): ToggleContractActiveCall__Outputs {
    return new ToggleContractActiveCall__Outputs(this);
  }
}

export class ToggleContractActiveCall__Inputs {
  _call: ToggleContractActiveCall;

  constructor(call: ToggleContractActiveCall) {
    this._call = call;
  }
}

export class ToggleContractActiveCall__Outputs {
  _call: ToggleContractActiveCall;

  constructor(call: ToggleContractActiveCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateCurveZapInCall extends ethereum.Call {
  get inputs(): UpdateCurveZapInCall__Inputs {
    return new UpdateCurveZapInCall__Inputs(this);
  }

  get outputs(): UpdateCurveZapInCall__Outputs {
    return new UpdateCurveZapInCall__Outputs(this);
  }
}

export class UpdateCurveZapInCall__Inputs {
  _call: UpdateCurveZapInCall;

  constructor(call: UpdateCurveZapInCall) {
    this._call = call;
  }

  get CurveZapInGeneralAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateCurveZapInCall__Outputs {
  _call: UpdateCurveZapInCall;

  constructor(call: UpdateCurveZapInCall) {
    this._call = call;
  }
}

export class UpdateCurveZapOutCall extends ethereum.Call {
  get inputs(): UpdateCurveZapOutCall__Inputs {
    return new UpdateCurveZapOutCall__Inputs(this);
  }

  get outputs(): UpdateCurveZapOutCall__Outputs {
    return new UpdateCurveZapOutCall__Outputs(this);
  }
}

export class UpdateCurveZapOutCall__Inputs {
  _call: UpdateCurveZapOutCall;

  constructor(call: UpdateCurveZapOutCall) {
    this._call = call;
  }

  get CurveZapOutGeneralAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateCurveZapOutCall__Outputs {
  _call: UpdateCurveZapOutCall;

  constructor(call: UpdateCurveZapOutCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
