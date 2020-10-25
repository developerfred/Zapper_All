import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Curve_General_ZapOut_V2/Curve_General_ZapOut_V2"
import {
  ZapOutCall,
  ZapoutToUnderlyingCall,
  Token2EthCall,
  Token2TokenCall,
  AddCRVTokenCall,
  AddCTokenCall,
  AddYTokenCall,
  ApproveTokenCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetCRVTokenAddressesCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  SetnewsUSDTokenAddressCall,
  SetcTokensCall,
  SetyTokensCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Curve_General_ZapOut_V2/Curve_General_ZapOut_V2"
import { Curve_General_ZapOut_V2OwnershipTransferredEvent } from "../generated/schema"
import {
  Curve_General_ZapOut_V2ZapOutCall,
  Curve_General_ZapOut_V2ZapoutToUnderlyingCall,
  Curve_General_ZapOut_V2token2EthCall,
  Curve_General_ZapOut_V2token2TokenCall,
  Curve_General_ZapOut_V2addCRVTokenCall,
  Curve_General_ZapOut_V2addCTokenCall,
  Curve_General_ZapOut_V2addYTokenCall,
  Curve_General_ZapOut_V2approveTokenCall,
  Curve_General_ZapOut_V2inCaseTokengetsStuckCall,
  Curve_General_ZapOut_V2renounceOwnershipCall,
  Curve_General_ZapOut_V2setCRVTokenAddressesCall,
  Curve_General_ZapOut_V2setnewdzgoodwillAddressCall,
  Curve_General_ZapOut_V2setnewgoodwillCall,
  Curve_General_ZapOut_V2setnewsUSDTokenAddressCall,
  Curve_General_ZapOut_V2setcTokensCall,
  Curve_General_ZapOut_V2setyTokensCall,
  Curve_General_ZapOut_V2toggleContractActiveCall,
  Curve_General_ZapOut_V2transferOwnershipCall,
  Curve_General_ZapOut_V2withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Curve_General_ZapOut_V2OwnershipTransferredEvent(
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
  let entity = new Curve_General_ZapOut_V2ZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.ToTokensBought = call.outputs.ToTokensBought
  entity.save()
}

export function handleZapoutToUnderlyingCall(
  call: ZapoutToUnderlyingCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2ZapoutToUnderlyingCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoken2EthCall(call: Token2EthCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2token2EthCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handletoken2TokenCall(call: Token2TokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2token2TokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.tokens2Trade = call.inputs.tokens2Trade
  entity.tokenBought = call.outputs.tokenBought
  entity.save()
}

export function handleaddCRVTokenCall(call: AddCRVTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2addCRVTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleaddCTokenCall(call: AddCTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2addCTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleaddYTokenCall(call: AddYTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2addYTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleapproveTokenCall(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2approveTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetCRVTokenAddressesCall(
  call: SetCRVTokenAddressesCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setCRVTokenAddressesCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setnewdzgoodwillAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewsUSDTokenAddressCall(
  call: SetnewsUSDTokenAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setnewsUSDTokenAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetcTokensCall(call: SetcTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setcTokensCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetyTokensCall(call: SetyTokensCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2setyTokensCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Curve_General_ZapOut_V2withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
