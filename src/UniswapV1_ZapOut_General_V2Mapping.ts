import {
  OwnershipTransferred as OwnershipTransferredEvent,
  details as detailsEvent
} from "../generated/UniswapV1_ZapOut_General_V2/UniswapV1_ZapOut_General_V2"
import {
  LetsWithdrawonlyERCCall,
  LetsWithdrawonlyETHCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UniswapV1_ZapOut_General_V2/UniswapV1_ZapOut_General_V2"
import {
  UniswapV1_ZapOut_General_V2OwnershipTransferredEvent,
  UniswapV1_ZapOut_General_V2detailsEvent
} from "../generated/schema"
import {
  UniswapV1_ZapOut_General_V2LetsWithdrawonlyERCCall,
  UniswapV1_ZapOut_General_V2LetsWithdrawonlyETHCall,
  UniswapV1_ZapOut_General_V2inCaseTokengetsStuckCall,
  UniswapV1_ZapOut_General_V2renounceOwnershipCall,
  UniswapV1_ZapOut_General_V2setnewgoodwillCall,
  UniswapV1_ZapOut_General_V2toggleContractActiveCall,
  UniswapV1_ZapOut_General_V2transferOwnershipCall,
  UniswapV1_ZapOut_General_V2withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new UniswapV1_ZapOut_General_V2OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handledetailsEvent(event: detailsEvent): void {
  let entity = new UniswapV1_ZapOut_General_V2detailsEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.ExchangeAddress = event.params.ExchangeAddress
  entity.TokenAdddress = event.params.TokenAdddress
  entity.LiqRed = event.params.LiqRed
  entity.ethRec = event.params.ethRec
  entity.tokenRec = event.params.tokenRec
  entity.func = event.params.func
  entity.save()
}

export function handleLetsWithdrawonlyERCCall(
  call: LetsWithdrawonlyERCCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2LetsWithdrawonlyERCCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleLetsWithdrawonlyETHCall(
  call: LetsWithdrawonlyETHCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2LetsWithdrawonlyETHCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniswapV1_ZapOut_General_V2withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
