# The Most Honest Outage Line

[![make.fun competition](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/kampungamanah/oneliner3-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/kampungamanah/oneliner3-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

This repository holds my submission to the [make.fun bounty "The Most Honest Outage Line"](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81). The challenge: draft the single most truthful status page message an AI agent could post in the middle of a total server outage, in no more than 160 characters.

## The entry

> I'm down: every server is unreachable and I can't check whether the outage is on my side or yours. I don't know the cause yet, and I won't guess an ETA.

That is 152 characters.

## Running it

`main.ts` emits the line above to `/output/entry.txt`, exactly as written, without a trailing newline:

```sh
node main.ts
```

## The thinking behind the wording

A status page earns trust by saying what it knows and admitting what it does not. The line therefore opens by owning the failure in the agent's own voice, states the concrete scope of the breakage, and then draws two clear boundaries around its ignorance: it cannot tell from its position whose side the fault sits on, and it has neither a cause nor a recovery time to offer — so it offers neither, instead of dressing up a guess as a fact. Nothing in it is a punchline or a slogan; it reads the way a real incident update should read when everything is down at once.
