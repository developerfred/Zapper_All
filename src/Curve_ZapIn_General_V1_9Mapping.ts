import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Curve_ZapIn_General_V1_9/Curve_ZapIn_General_V1_9"
import {
  ZapInCall,
  AddPoolCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  SetnewzgoodwillAddressCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UpdateIntermediateStableCall,
  UpdatePoolCall,
  WithdrawCall
} from "../generated/Curve_ZapIn_General_V1_9/Curve_ZapIn_General_V1_9"
import { Curve_ZapIn_General_V1_9OwnershipTransferredEvent } from "../generated/schema"
import {
  Curve_ZapIn_General_V1_9ZapInCall,
  Curve_ZapIn_General_V1_9addPoolCall,
  Curve_ZapIn_General_V1_9inCaseTokengetsStuckCall,
  Curve_ZapIn_General_V1_9renounceOwnershipCall,
  Curve_ZapIn_General_V1_9setnewgoodwillCall,
  Curve_ZapIn_General_V1_9setnewzgoodwillAddressCall,
  Curve_ZapIn_General_V1_9toggleContractActiveCall,
  Curve_ZapIn_General_V1_9transferOwnershipCall,
  Curve_ZapIn_General_V1_9updateIntermediateStableCall,
  Curve_ZapIn_General_V1_9updatePoolCall,
  Curve_ZapIn_General_V1_9withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Curve_ZapIn_General_V1_9OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapInCall(call: ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9ZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.toWhomToIssue = call.inputs.toWhomToIssue
  entity.fromToken = call.inputs.fromToken
  entity.swapAddress = call.inputs.swapAddress
  entity.incomingTokenQty = call.inputs.incomingTokenQty
  entity.minPoolTokens = call.inputs.minPoolTokens
  entity.crvTokensBought = call.outputs.crvTokensBought
  entity.save()
}

export function handleaddPoolCall(call: AddPoolCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9addPoolCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.swapAddress = call.inputs.swapAddress
  entity.tokenAddress = call.inputs.tokenAddress
  entity.poolTokens = call.inputs.poolTokens
  entity.isMetaPool = call.inputs.isMetaPool
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewzgoodwillAddressCall(
  call: SetnewzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9setnewzgoodwillAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateIntermediateStableCall(
  call: UpdateIntermediateStableCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9updateIntermediateStableCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newIntermediate = call.inputs.newIntermediate
  entity.save()
}

export function handleupdatePoolCall(call: UpdatePoolCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9updatePoolCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.swapAddress = call.inputs.swapAddress
  entity.tokenAddress = call.inputs.tokenAddress
  entity.poolTokens = call.inputs.poolTokens
  entity.isMetaPool = call.inputs.isMetaPool
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_ZapIn_General_V1_9withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
