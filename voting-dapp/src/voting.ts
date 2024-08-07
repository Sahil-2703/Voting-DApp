import { VoterAdded as VoterAddedEvent } from "../generated/Voting/Voting"
import { VoterAdded } from "../generated/schema"

export function handleVoterAdded(event: VoterAddedEvent): void {
  let entity = new VoterAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter = event.params.voter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
