
var StockSpanner = function() {
    this.prices = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let c = 1;
    while(this.prices.length > 0 && price >= this.prices[this.prices.length - 1][0]) {
        c += this.prices[this.prices.length - 1][1];
        this.prices.pop();
    }
    this.prices.push([price, c]);
    return c;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
