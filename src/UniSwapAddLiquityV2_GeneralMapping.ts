import {
  ERC20TokenHoldingsOnConversion as ERC20TokenHoldingsOnConversionEvent,
  LiquidityTokens as LiquidityTokensEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/UniSwapAddLiquityV2_General/UniSwapAddLiquityV2_General"
import {
  LetsInvestCall,
  DepositETHCall,
  RenounceOwnershipCall,
  TransferOwnershipCall,
  WithdrawCall,
  WithdrawERC20TokenCall
} from "../generated/UniSwapAddLiquityV2_General/UniSwapAddLiquityV2_General"
import {
  UniSwapAddLiquityV2_GeneralERC20TokenHoldingsOnConversionEvent,
  UniSwapAddLiquityV2_GeneralLiquidityTokensEvent,
  UniSwapAddLiquityV2_GeneralOwnershipTransferredEvent
} from "../generated/schema"
import {
  UniSwapAddLiquityV2_GeneralLetsInvestCall,
  UniSwapAddLiquityV2_GeneraldepositETHCall,
  UniSwapAddLiquityV2_GeneralrenounceOwnershipCall,
  UniSwapAddLiquityV2_GeneraltransferOwnershipCall,
  UniSwapAddLiquityV2_GeneralwithdrawCall,
  UniSwapAddLiquityV2_GeneralwithdrawERC20TokenCall
} from "../generated/schema"

export function handleERC20TokenHoldingsOnConversionEvent(
  event: ERC20TokenHoldingsOnConversionEvent
): void {
  let entity = new UniSwapAddLiquityV2_GeneralERC20TokenHoldingsOnConversionEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.param0 = event.params.param0
  entity.save()
}

export function handleLiquidityTokensEvent(event: LiquidityTokensEvent): void {
  let entity = new UniSwapAddLiquityV2_GeneralLiquidityTokensEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.param0 = event.params.param0
  entity.save()
}

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new UniSwapAddLiquityV2_GeneralOwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleLetsInvestCall(call: LetsInvestCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapAddLiquityV2_GeneralLetsInvestCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledepositETHCall(call: DepositETHCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapAddLiquityV2_GeneraldepositETHCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapAddLiquityV2_GeneralrenounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapAddLiquityV2_GeneraltransferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapAddLiquityV2_GeneralwithdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlewithdrawERC20TokenCall(
  call: WithdrawERC20TokenCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UniSwapAddLiquityV2_GeneralwithdrawERC20TokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
