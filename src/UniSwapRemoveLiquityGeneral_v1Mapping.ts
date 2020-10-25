import { details as detailsEvent } from "../generated/UniSwapRemoveLiquityGeneral_v1/UniSwapRemoveLiquityGeneral_v1"
import {
  LetsWithdrawonlyERCCall,
  LetsWithdrawonlyETHCall,
  DestructCall,
  InitializeCall,
  Initialize1Call,
  SetnewUniSwapFactoryAddressCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall,
  WithdrawERC20TokenCall
} from "../generated/UniSwapRemoveLiquityGeneral_v1/UniSwapRemoveLiquityGeneral_v1"
import { UniSwapRemoveLiquityGeneral_v1detailsEvent } from "../generated/schema"
import {
  UniSwapRemoveLiquityGeneral_v1LetsWithdrawonlyERCCall,
  UniSwapRemoveLiquityGeneral_v1LetsWithdrawonlyETHCall,
  UniSwapRemoveLiquityGeneral_v1destructCall,
  UniSwapRemoveLiquityGeneral_v1initializeCall,
  UniSwapRemoveLiquityGeneral_v1initialize1Call,
  UniSwapRemoveLiquityGeneral_v1setnewUniSwapFactoryAddressCall,
  UniSwapRemoveLiquityGeneral_v1setnewdzgoodwillAddressCall,
  UniSwapRemoveLiquityGeneral_v1setnewgoodwillCall,
  UniSwapRemoveLiquityGeneral_v1toggleContractActiveCall,
  UniSwapRemoveLiquityGeneral_v1transferOwnershipCall,
  UniSwapRemoveLiquityGeneral_v1withdrawCall,
  UniSwapRemoveLiquityGeneral_v1withdrawERC20TokenCall
} from "../generated/schema"

export function handledetailsEvent(event: detailsEvent): void {
  let entity = new UniSwapRemoveLiquityGeneral_v1detailsEvent(
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
  let entity = new UniSwapRemoveLiquityGeneral_v1LetsWithdrawonlyERCCall(id)
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
  let entity = new UniSwapRemoveLiquityGeneral_v1LetsWithdrawonlyETHCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1destructCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinitializeCall(call: InitializeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1initializeCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinitialize1Call(call: Initialize1Call): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1initialize1Call(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewUniSwapFactoryAddressCall(
  call: SetnewUniSwapFactoryAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1setnewUniSwapFactoryAddressCall(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1setnewdzgoodwillAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlewithdrawERC20TokenCall(
  call: WithdrawERC20TokenCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapRemoveLiquityGeneral_v1withdrawERC20TokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
