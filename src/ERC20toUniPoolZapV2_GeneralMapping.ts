import {
  details as detailsEvent,
  residualETH as residualETHEvent
} from "../generated/ERC20toUniPoolZapV2_General/ERC20toUniPoolZapV2_General"
import {
  LetsInvestCall,
  InCaseTokengetsStuckCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/ERC20toUniPoolZapV2_General/ERC20toUniPoolZapV2_General"
import {
  ERC20toUniPoolZapV2_GeneraldetailsEvent,
  ERC20toUniPoolZapV2_GeneralresidualETHEvent
} from "../generated/schema"
import {
  ERC20toUniPoolZapV2_GeneralLetsInvestCall,
  ERC20toUniPoolZapV2_GeneralinCaseTokengetsStuckCall,
  ERC20toUniPoolZapV2_GeneraltoggleContractActiveCall,
  ERC20toUniPoolZapV2_GeneraltransferOwnershipCall,
  ERC20toUniPoolZapV2_GeneralwithdrawCall
} from "../generated/schema"

export function handledetailsEvent(event: detailsEvent): void {
  let entity = new ERC20toUniPoolZapV2_GeneraldetailsEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.user = event.params.user
  entity.toWhomIssued = event.params.toWhomIssued
  entity.IncomingTokenAddress = event.params.IncomingTokenAddress
  entity.UniPoolUnderlyingTokenAddressTokenAddress =
    event.params.UniPoolUnderlyingTokenAddressTokenAddress
  entity.save()
}

export function handleresidualETHEvent(event: residualETHEvent): void {
  let entity = new ERC20toUniPoolZapV2_GeneralresidualETHEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.residualETHtransferred = event.params.residualETHtransferred
  entity.save()
}

export function handleLetsInvestCall(call: LetsInvestCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneralLetsInvestCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneralinCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneraltoggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneraltransferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ERC20toUniPoolZapV2_GeneralwithdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
