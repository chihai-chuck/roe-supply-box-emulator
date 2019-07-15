// const data = require("../../data/blaze");
const data = require("../../data/electrified");
const SupplyBoxLottery = require("../controllers/supply-box-lottery");

const supplyBoxLottery = new SupplyBoxLottery(data, "rate");
const result = supplyBoxLottery.getResult(100);

console.log(result);
console.log(supplyBoxLottery.getLevelTotal(result));
