import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Unipool_Bridge_Zap_V1/Unipool_Bridge_Zap_V1"
import {
  ZapBridgeCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewUniSwapFactoryAddressCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Unipool_Bridge_Zap_V1/Unipool_Bridge_Zap_V1"
import { Unipool_Bridge_Zap_V1OwnershipTransferredEvent } from "../generated/schema"
import {
  Unipool_Bridge_Zap_V1ZapBridgeCall,
  Unipool_Bridge_Zap_V1destructCall,
  Unipool_Bridge_Zap_V1inCaseTokengetsStuckCall,
  Unipool_Bridge_Zap_V1renounceOwnershipCall,
  Unipool_Bridge_Zap_V1setnewUniSwapFactoryAddressCall,
  Unipool_Bridge_Zap_V1setnewdzgoodwillAddressCall,
  Unipool_Bridge_Zap_V1setnewgoodwillCall,
  Unipool_Bridge_Zap_V1toggleContractActiveCall,
  Unipool_Bridge_Zap_V1transferOwnershipCall,
  Unipool_Bridge_Zap_V1withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Unipool_Bridge_Zap_V1OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapBridgeCall(call: ZapBridgeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1ZapBridgeCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1destructCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewUniSwapFactoryAddressCall(
  call: SetnewUniSwapFactoryAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1setnewUniSwapFactoryAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1setnewdzgoodwillAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Unipool_Bridge_Zap_V1withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
