import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Zapper_Swap_General_V1_3/Zapper_Swap_General_V1_3"
import {
  MultiExchangeSwapCall,
  AddATokenCall,
  AddCTokenCall,
  AddYTokenCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  UnwrapCall,
  UnwrapWethCall,
  WrapCall
} from "../generated/Zapper_Swap_General_V1_3/Zapper_Swap_General_V1_3"
import { Zapper_Swap_General_V1_3OwnershipTransferredEvent } from "../generated/schema"
import {
  Zapper_Swap_General_V1_3MultiExchangeSwapCall,
  Zapper_Swap_General_V1_3addATokenCall,
  Zapper_Swap_General_V1_3addCTokenCall,
  Zapper_Swap_General_V1_3addYTokenCall,
  Zapper_Swap_General_V1_3inCaseTokengetsStuckCall,
  Zapper_Swap_General_V1_3renounceOwnershipCall,
  Zapper_Swap_General_V1_3toggleContractActiveCall,
  Zapper_Swap_General_V1_3transferOwnershipCall,
  Zapper_Swap_General_V1_3unwrapCall,
  Zapper_Swap_General_V1_3unwrapWethCall,
  Zapper_Swap_General_V1_3wrapCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Zapper_Swap_General_V1_3OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleMultiExchangeSwapCall(call: MultiExchangeSwapCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3MultiExchangeSwapCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.toWhomToIssue = call.inputs.toWhomToIssue
  entity.path = call.inputs.path
  entity.amountIn = call.inputs.amountIn
  entity.minTokenOut = call.inputs.minTokenOut
  entity.starts = call.inputs.starts
  entity.withPool = call.inputs.withPool
  entity.poolData = call.inputs.poolData
  entity.tokensBought = call.outputs.tokensBought
  entity.save()
}

export function handleaddATokenCall(call: AddATokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3addATokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleaddCTokenCall(call: AddCTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3addCTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleaddYTokenCall(call: AddYTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3addYTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleunwrapCall(call: UnwrapCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3unwrapCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.minTokens = call.inputs.minTokens
  entity.tokensUnwrapped = call.outputs.tokensUnwrapped
  entity.toToken = call.outputs.toToken
  entity.save()
}

export function handleunwrapWethCall(call: UnwrapWethCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3unwrapWethCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.minTokens = call.inputs.minTokens
  entity.tokensUnwrapped = call.outputs.tokensUnwrapped
  entity.toToken = call.outputs.toToken
  entity.save()
}

export function handlewrapCall(call: WrapCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Zapper_Swap_General_V1_3wrapCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.minTokens = call.inputs.minTokens
  entity.tokensWrapped = call.outputs.tokensWrapped
  entity.save()
}
