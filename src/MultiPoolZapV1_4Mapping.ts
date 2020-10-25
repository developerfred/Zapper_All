import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/MultiPoolZapV1_4/MultiPoolZapV1_4"
import {
  MultipleZapInCall,
  RenounceOwnershipCall,
  SetUniswapFactoryCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  SetuniswapPoolZapAddressCall,
  TransferOwnershipCall
} from "../generated/MultiPoolZapV1_4/MultiPoolZapV1_4"
import { MultiPoolZapV1_4OwnershipTransferredEvent } from "../generated/schema"
import {
  MultiPoolZapV1_4multipleZapInCall,
  MultiPoolZapV1_4renounceOwnershipCall,
  MultiPoolZapV1_4setUniswapFactoryCall,
  MultiPoolZapV1_4setnewdzgoodwillAddressCall,
  MultiPoolZapV1_4setnewgoodwillCall,
  MultiPoolZapV1_4setuniswapPoolZapAddressCall,
  MultiPoolZapV1_4transferOwnershipCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new MultiPoolZapV1_4OwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlemultipleZapInCall(call: MultipleZapInCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4multipleZapInCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.underlyingTokenAddresses = call.inputs.underlyingTokenAddresses
  entity.respectiveWeightedValues = call.inputs.respectiveWeightedValues
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4renounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetUniswapFactoryCall(call: SetUniswapFactoryCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4setUniswapFactoryCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4setnewdzgoodwillAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4setnewgoodwillCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetuniswapPoolZapAddressCall(
  call: SetuniswapPoolZapAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4setuniswapPoolZapAddressCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new MultiPoolZapV1_4transferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}
