import {
  OwnershipTransferred as OwnershipTransferredEvent,
  liquidityTokensQty as liquidityTokensQtyEvent
} from "../generated/Uni_V1_V2_Pipe/Uni_V1_V2_Pipe"
import {
  V1toV2PipeCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Uni_V1_V2_Pipe/Uni_V1_V2_Pipe"
import {
  Uni_V1_V2_PipeOwnershipTransferredEvent,
  Uni_V1_V2_PipeliquidityTokensQtyEvent
} from "../generated/schema"
import {
  Uni_V1_V2_PipeV1toV2PipeCall,
  Uni_V1_V2_PipedestructCall,
  Uni_V1_V2_PipeinCaseTokengetsStuckCall,
  Uni_V1_V2_PiperenounceOwnershipCall,
  Uni_V1_V2_PipesetnewdzgoodwillAddressCall,
  Uni_V1_V2_PipesetnewgoodwillCall,
  Uni_V1_V2_PipetoggleContractActiveCall,
  Uni_V1_V2_PipetransferOwnershipCall,
  Uni_V1_V2_PipewithdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Uni_V1_V2_PipeOwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleliquidityTokensQtyEvent(
  event: liquidityTokensQtyEvent
): void {
  let entity = new Uni_V1_V2_PipeliquidityTokensQtyEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.param0 = event.params.param0
  entity.param1 = event.params.param1
  entity.param2 = event.params.param2
  entity.save()
}

export function handleV1toV2PipeCall(call: V1toV2PipeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PipeV1toV2PipeCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.fromTokenAddress = call.inputs.fromTokenAddress
  entity.uniV1Amount = call.inputs.uniV1Amount
  entity.toTokenAddress = call.inputs.toTokenAddress
  entity.toWhomToIssue = call.inputs.toWhomToIssue
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PipedestructCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PipeinCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PiperenounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PipesetnewdzgoodwillAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PipesetnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PipetoggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PipetransferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Uni_V1_V2_PipewithdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
