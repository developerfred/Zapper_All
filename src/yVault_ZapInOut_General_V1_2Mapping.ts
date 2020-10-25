import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapin as ZapinEvent,
  Zapout as ZapoutEvent
} from "../generated/yVault_ZapInOut_General_V1_2/yVault_ZapInOut_General_V1_2"
import {
  ZapInCall,
  ZapOutCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateCurveZapInCall,
  UpdateCurveZapOutCall,
  WithdrawCall
} from "../generated/yVault_ZapInOut_General_V1_2/yVault_ZapInOut_General_V1_2"
import {
  yVault_ZapInOut_General_V1_2OwnershipTransferredEvent,
  yVault_ZapInOut_General_V1_2ZapinEvent,
  yVault_ZapInOut_General_V1_2ZapoutEvent
} from "../generated/schema"
import {
  yVault_ZapInOut_General_V1_2ZapInCall,
  yVault_ZapInOut_General_V1_2ZapOutCall,
  yVault_ZapInOut_General_V1_2inCaseTokengetsStuckCall,
  yVault_ZapInOut_General_V1_2renounceOwnershipCall,
  yVault_ZapInOut_General_V1_2setnewgoodwillCall,
  yVault_ZapInOut_General_V1_2toggleContractActiveCall,
  yVault_ZapInOut_General_V1_2transferOwnershipCall,
  yVault_ZapInOut_General_V1_2updateCurveZapInCall,
  yVault_ZapInOut_General_V1_2updateCurveZapOutCall,
  yVault_ZapInOut_General_V1_2withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new yVault_ZapInOut_General_V1_2OwnershipTransferredEvent(
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
  let entity = new yVault_ZapInOut_General_V1_2ZapinEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapoutEvent(event: ZapoutEvent): void {
  let entity = new yVault_ZapInOut_General_V1_2ZapoutEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2ZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2ZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateCurveZapInCall(call: UpdateCurveZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2updateCurveZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapInGeneralAddress = call.inputs.CurveZapInGeneralAddress
  entity.save()
}

export function handleupdateCurveZapOutCall(call: UpdateCurveZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2updateCurveZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.CurveZapOutGeneralAddress = call.inputs.CurveZapOutGeneralAddress
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVault_ZapInOut_General_V1_2withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
