import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { VoterAdded } from "../generated/Voting/Voting"

export function createVoterAddedEvent(voter: Address): VoterAdded {
  let voterAddedEvent = changetype<VoterAdded>(newMockEvent())

  voterAddedEvent.parameters = new Array()

  voterAddedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )

  return voterAddedEvent
}
