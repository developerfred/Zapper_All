import {
  Approval as ApprovalEvent,
  MinterAdded as MinterAddedEvent,
  MinterRemoved as MinterRemovedEvent,
  Transfer as TransferEvent
} from "../generated/AdminUpgradeabilityProxy/AdminUpgradeabilityProxy"
import {
  AddMinterCall,
  ApproveCall,
  DecreaseAllowanceCall,
  IncreaseAllowanceCall,
  InitializeCall,
  Initialize1Call,
  Initialize2Call,
  MintCall,
  RenounceMinterCall,
  TransferCall,
  TransferFromCall
} from "../generated/AdminUpgradeabilityProxy/AdminUpgradeabilityProxy"
import {
  AdminUpgradeabilityProxyApprovalEvent,
  AdminUpgradeabilityProxyMinterAddedEvent,
  AdminUpgradeabilityProxyMinterRemovedEvent,
  AdminUpgradeabilityProxyTransferEvent
} from "../generated/schema"
import {
  AdminUpgradeabilityProxyaddMinterCall,
  AdminUpgradeabilityProxyapproveCall,
  AdminUpgradeabilityProxydecreaseAllowanceCall,
  AdminUpgradeabilityProxyincreaseAllowanceCall,
  AdminUpgradeabilityProxyinitializeCall,
  AdminUpgradeabilityProxyinitialize1Call,
  AdminUpgradeabilityProxyinitialize2Call,
  AdminUpgradeabilityProxymintCall,
  AdminUpgradeabilityProxyrenounceMinterCall,
  AdminUpgradeabilityProxytransferCall,
  AdminUpgradeabilityProxytransferFromCall
} from "../generated/schema"

export function handleApprovalEvent(event: ApprovalEvent): void {
  let entity = new AdminUpgradeabilityProxyApprovalEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleMinterAddedEvent(event: MinterAddedEvent): void {
  let entity = new AdminUpgradeabilityProxyMinterAddedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.account = event.params.account
  entity.save()
}

export function handleMinterRemovedEvent(event: MinterRemovedEvent): void {
  let entity = new AdminUpgradeabilityProxyMinterRemovedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.account = event.params.account
  entity.save()
}

export function handleTransferEvent(event: TransferEvent): void {
  let entity = new AdminUpgradeabilityProxyTransferEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleaddMinterCall(call: AddMinterCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxyaddMinterCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.account = call.inputs.account
  entity.save()
}

export function handleapproveCall(call: ApproveCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxyapproveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.spender = call.inputs.spender
  entity.amount = call.inputs.amount
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledecreaseAllowanceCall(call: DecreaseAllowanceCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxydecreaseAllowanceCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.spender = call.inputs.spender
  entity.subtractedValue = call.inputs.subtractedValue
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleincreaseAllowanceCall(call: IncreaseAllowanceCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxyincreaseAllowanceCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.spender = call.inputs.spender
  entity.addedValue = call.inputs.addedValue
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinitializeCall(call: InitializeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxyinitializeCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.name = call.inputs.name
  entity.symbol = call.inputs.symbol
  entity.decimals = call.inputs.decimals
  entity.save()
}

export function handleinitialize1Call(call: Initialize1Call): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxyinitialize1Call(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinitialize2Call(call: Initialize2Call): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxyinitialize2Call(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.sender = call.inputs.sender
  entity.save()
}

export function handlemintCall(call: MintCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxymintCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.account = call.inputs.account
  entity.amount = call.inputs.amount
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlerenounceMinterCall(call: RenounceMinterCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxyrenounceMinterCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferCall(call: TransferCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxytransferCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.recipient = call.inputs.recipient
  entity.amount = call.inputs.amount
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handletransferFromCall(call: TransferFromCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new AdminUpgradeabilityProxytransferFromCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.sender = call.inputs.sender
  entity.recipient = call.inputs.recipient
  entity.amount = call.inputs.amount
  entity.value0 = call.outputs.value0
  entity.save()
}
