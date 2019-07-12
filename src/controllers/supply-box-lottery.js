class SupplyBoxLottery {
    constructor(list, key) {
        this.list = list;
        this.key = key;
        this.prizeGroup = {};
        this.setPrizeGroup();
        this.rates = Object.keys(this.prizeGroup).map(n => +n);
    }

    setPrizeGroup() {
        for(let item of this.list) {
            if(this.prizeGroup[item[this.key]]) {
                this.prizeGroup[item[this.key]].push(item);
            } else {
                this.prizeGroup[item[this.key]] = [item];
            }
        }
    }

    getPrizeGroup(key) {
        const length = this.prizeGroup[key].length;
        let index = 0;
        if(length > 1) {
            index = Math.floor(Math.random() * length);
        }
        return this.prizeGroup[key][index];
    }

    calcRandomPrize() {
        let result = this.rates[0];
        let sum = this.rates.reduce((a, b) => a + b);
        for(let rate of this.rates) {
            const rand = Math.random() * sum;
            if(rand <= rate) {
                result = rate;
                break;
            } else {
                sum -= rate;
            }
        }
        return this.getPrizeGroup(result);
    }

    getResult(num = 1) {
        const res = [];
        for(let i=0; i<num; i++) {
            res.push(this.calcRandomPrize());
        }
        return res;
    }

    static getLevelTotal(list) {
        const total = {
            1: 0,
            2: 0,
            3: 0
        };
        for(let i of list) {
            total[i.level]++;
        }
        const probability = {};
        for(let j=1; j<4; j++) {
            probability[j] = total[j] / list.length;
        }
        return {
            total,
            probability
        };
    }
}

module.exports = SupplyBoxLottery;