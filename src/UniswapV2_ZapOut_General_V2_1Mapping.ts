import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/UniswapV2_ZapOut_General_V2_1/UniswapV2_ZapOut_General_V2_1"
import {
  ZapOutCall,
  ZapOut2PairTokenCall,
  ZapOut2PairTokenWithPermitCall,
  ZapOutWithPermitCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniswapV2_ZapOut_General_V2_1/UniswapV2_ZapOut_General_V2_1"
import { UniswapV2_ZapOut_General_V2_1OwnershipTransferredEvent } from "../generated/schema"
import {
  UniswapV2_ZapOut_General_V2_1ZapOutCall,
  UniswapV2_ZapOut_General_V2_1ZapOut2PairTokenCall,
  UniswapV2_ZapOut_General_V2_1ZapOut2PairTokenWithPermitCall,
  UniswapV2_ZapOut_General_V2_1ZapOutWithPermitCall,
  UniswapV2_ZapOut_General_V2_1inCaseTokengetsStuckCall,
  UniswapV2_ZapOut_General_V2_1renounceOwnershipCall,
  UniswapV2_ZapOut_General_V2_1setnewgoodwillCall,
  UniswapV2_ZapOut_General_V2_1toggleContractActiveCall,
  UniswapV2_ZapOut_General_V2_1transferOwnershipCall,
  UniswapV2_ZapOut_General_V2_1withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new UniswapV2_ZapOut_General_V2_1OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1ZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOut2PairTokenCall(call: ZapOut2PairTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1ZapOut2PairTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.amountA = call.outputs.amountA
  entity.amountB = call.outputs.amountB
  entity.save()
}

export function handleZapOut2PairTokenWithPermitCall(
  call: ZapOut2PairTokenWithPermitCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1ZapOut2PairTokenWithPermitCall(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.v = call.inputs.v
  entity.r = call.inputs.r
  entity.s = call.inputs.s
  entity.amountA = call.outputs.amountA
  entity.amountB = call.outputs.amountB
  entity.save()
}

export function handleZapOutWithPermitCall(call: ZapOutWithPermitCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1ZapOutWithPermitCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.v = call.inputs.v
  entity.r = call.inputs.r
  entity.s = call.inputs.s
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV2_ZapOut_General_V2_1withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
