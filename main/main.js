module.exports = function main(inputs) {
    // write your code here...
	var price = 6;

        if(inputs.distance < 2)
                price += 6;

        if(inputs.distance > 8)
                price += 6 * 0.8 + (inputs.distance - 8) * 1.2;
        else
                price += (inputs.distance - 2) * 0.8;

        price += inputs.parkTime * 0.25;

        return (parseInt(price.toFixed(0)));
};
