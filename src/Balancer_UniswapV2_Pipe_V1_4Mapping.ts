import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/Balancer_UniswapV2_Pipe_V1_4/Balancer_UniswapV2_Pipe_V1_4"
import {
  PipeBalancerUniV2Call,
  PipeUniV2BalancerCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetBalancerZapOutCall,
  SetUniswapV2ZapInCall,
  SetUniswapV2ZapOutCall,
  SetbalancerZapInCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/Balancer_UniswapV2_Pipe_V1_4/Balancer_UniswapV2_Pipe_V1_4"
import { Balancer_UniswapV2_Pipe_V1_4OwnershipTransferredEvent } from "../generated/schema"
import {
  Balancer_UniswapV2_Pipe_V1_4PipeBalancerUniV2Call,
  Balancer_UniswapV2_Pipe_V1_4PipeUniV2BalancerCall,
  Balancer_UniswapV2_Pipe_V1_4inCaseTokengetsStuckCall,
  Balancer_UniswapV2_Pipe_V1_4renounceOwnershipCall,
  Balancer_UniswapV2_Pipe_V1_4setBalancerZapOutCall,
  Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapInCall,
  Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapOutCall,
  Balancer_UniswapV2_Pipe_V1_4setbalancerZapInCall,
  Balancer_UniswapV2_Pipe_V1_4toggleContractActiveCall,
  Balancer_UniswapV2_Pipe_V1_4transferOwnershipCall,
  Balancer_UniswapV2_Pipe_V1_4withdrawCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new Balancer_UniswapV2_Pipe_V1_4OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePipeBalancerUniV2Call(call: PipeBalancerUniV2Call): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4PipeBalancerUniV2Call(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlePipeUniV2BalancerCall(call: PipeUniV2BalancerCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4PipeUniV2BalancerCall(id)
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
  let entity = new Balancer_UniswapV2_Pipe_V1_4inCaseTokengetsStuckCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetBalancerZapOutCall(call: SetBalancerZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4setBalancerZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetUniswapV2ZapInCall(call: SetUniswapV2ZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetUniswapV2ZapOutCall(
  call: SetUniswapV2ZapOutCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4setUniswapV2ZapOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetbalancerZapInCall(call: SetbalancerZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4setbalancerZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4toggleContractActiveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new Balancer_UniswapV2_Pipe_V1_4withdrawCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
