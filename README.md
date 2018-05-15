# Change Generator
A project set up and TDD exercise.

## Task
write a program that, given a value (e.g. £8.99) and a set of banknotes (e.g. £5 + £5) calculates the denomination of change due (in this case, 1 x £1 + 1 x 1p.

### Current order of events

```
cg = new ChangeGenerator()
let highNum = cg.turnToNumber('2p')
let lowNum = cg.turnToNumber('1p')
cg.setChangeOwed(highNum, lowNum)
let coinToBeAdded = cg.highestPossibleReturn(cg.changeOwed)
cg.addCoin(coinToBeAdded);
```