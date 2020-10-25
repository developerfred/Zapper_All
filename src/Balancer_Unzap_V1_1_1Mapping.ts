import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Zapout as ZapoutEvent
} from "../generated/Balancer_Unzap_V1_1_1/Balancer_Unzap_V1_1_1"
import {
  EasyZapOutCall,
  ZapOutCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateSlippageCall,
  WithdrawCall
} from "../generated/Balancer_Unzap_V1_1_1/Balancer_Unzap_V1_1_1"
import {
  Balancer_Unzap_V1_1_1OwnershipTransferredEvent,
  Balancer_Unzap_V1_1_1ZapoutEvent
} from "../generated/schema"
import {
  Balancer_Unzap_V1_1_1EasyZapOutCall,
  Balancer_Unzap_V1_1_1ZapOutCall,
  Balancer_Unzap_V1_1_1destructCall,
  Balancer_Unzap_V1_1_1inCaseTokengetsStuckCall,
  Balancer_Unzap_V1_1_1renounceOwnershipCall,
  Balancer_Unzap_V1_1_1setnewdzgoodwillAddressCall,
  Balancer_Unzap_V1_1_1setnewgoodwillCall,
  Balancer_Unzap_V1_1_1toggleContractActiveCall,
  Balancer_Unzap_V1_1_1transferOwnershipCall,
  Balancer_Unzap_V1_1_1updateSlippageCall,
  Balancer_Unzap_V1_1_1withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_Unzap_V1_1_1OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapoutEvent(event: ZapoutEvent): void {
  let entity = new Balancer_Unzap_V1_1_1ZapoutEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.save()
}

export function handleEasyZapOutCall(call: EasyZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1EasyZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.slippage = call.inputs.slippage
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1ZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.slippage = call.inputs.slippage
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1destructCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1setnewdzgoodwillAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateSlippageCall(call: UpdateSlippageCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1updateSlippageCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_Unzap_V1_1_1withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
