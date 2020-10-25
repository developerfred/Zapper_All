import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/ETH_ERC20_Curve_General_Zap_V1/ETH_ERC20_Curve_General_Zap_V1"
import {
  ZapInCall,
  ApproveTokenCall,
  DestructCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/ETH_ERC20_Curve_General_Zap_V1/ETH_ERC20_Curve_General_Zap_V1"
import { ETH_ERC20_Curve_General_Zap_V1OwnershipTransferredEvent } from "../generated/schema"
import {
  ETH_ERC20_Curve_General_Zap_V1ZapInCall,
  ETH_ERC20_Curve_General_Zap_V1approveTokenCall,
  ETH_ERC20_Curve_General_Zap_V1destructCall,
  ETH_ERC20_Curve_General_Zap_V1inCaseTokengetsStuckCall,
  ETH_ERC20_Curve_General_Zap_V1renounceOwnershipCall,
  ETH_ERC20_Curve_General_Zap_V1setnewdzgoodwillAddressCall,
  ETH_ERC20_Curve_General_Zap_V1setnewgoodwillCall,
  ETH_ERC20_Curve_General_Zap_V1toggleContractActiveCall,
  ETH_ERC20_Curve_General_Zap_V1transferOwnershipCall,
  ETH_ERC20_Curve_General_Zap_V1withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new ETH_ERC20_Curve_General_Zap_V1OwnershipTransferredEvent(
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
  let entity = new ETH_ERC20_Curve_General_Zap_V1ZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.crvTokensBought = call.outputs.crvTokensBought
  entity.save()
}

export function handleapproveTokenCall(call: ApproveTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1approveTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1destructCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1setnewdzgoodwillAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ETH_ERC20_Curve_General_Zap_V1withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
