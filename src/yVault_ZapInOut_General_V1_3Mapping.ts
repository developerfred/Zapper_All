import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapin as ZapinEvent,
  Zapout as ZapoutEvent
} from "../generated/yVault_ZapInOut_General_V1_3/yVault_ZapInOut_General_V1_3"
import {
  ZapInCall,
  ZapOutCall,
  AddNewCurveExchangeCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateCurveZapInCall,
  UpdateCurveZapOutCall,
  WithdrawCall
} from "../generated/yVault_ZapInOut_General_V1_3/yVault_ZapInOut_General_V1_3"
import {
  yVault_ZapInOut_General_V1_3OwnershipTransferredEvent,
  yVault_ZapInOut_General_V1_3ZapinEvent,
  yVault_ZapInOut_General_V1_3ZapoutEvent
} from "../generated/schema"
import {
  yVault_ZapInOut_General_V1_3ZapInCall,
  yVault_ZapInOut_General_V1_3ZapOutCall,
  yVault_ZapInOut_General_V1_3addNewCurveExchangeCall,
  yVault_ZapInOut_General_V1_3inCaseTokengetsStuckCall,
  yVault_ZapInOut_General_V1_3renounceOwnershipCall,
  yVault_ZapInOut_General_V1_3setnewgoodwillCall,
  yVault_ZapInOut_General_V1_3toggleContractActiveCall,
  yVault_ZapInOut_General_V1_3transferOwnershipCall,
  yVault_ZapInOut_General_V1_3updateCurveZapInCall,
  yVault_ZapInOut_General_V1_3updateCurveZapOutCall,
  yVault_ZapInOut_General_V1_3withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new yVault_ZapInOut_General_V1_3OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapinEvent(event: ZapinEvent): void {
  let entity = new yVault_ZapInOut_General_V1_3ZapinEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapoutEvent(event: ZapoutEvent): void {
  let entity = new yVault_ZapInOut_General_V1_3ZapoutEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3ZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3ZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleaddNewCurveExchangeCall(
  call: AddNewCurveExchangeCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3addNewCurveExchangeCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.curvePoolToken = call.inputs.curvePoolToken
  entity.curveExchangeAddress = call.inputs.curveExchangeAddress
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateCurveZapInCall(call: UpdateCurveZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3updateCurveZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapInGeneralAddress = call.inputs.CurveZapInGeneralAddress
  entity.save()
}

export function handleupdateCurveZapOutCall(call: UpdateCurveZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3updateCurveZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapOutGeneralAddress = call.inputs.CurveZapOutGeneralAddress
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_3withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
