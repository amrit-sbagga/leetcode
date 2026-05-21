/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {

    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        // console.log(" i =>", Math.abs(asteroids[i]));

        const last = stack[stack.length - 1];
        const curr = asteroids[i];
        // console.log("last, curr =>", last, curr);

        if (stack.length && last > 0 && curr < 0) {
            if (Math.abs(last) < Math.abs(curr)) {
                stack.pop();
                i--; // Re-evaluate current asteroid against the new top of the stack
            } else if (Math.abs(last) === Math.abs(curr)) {
                stack.pop(); // Both destroy each other, move to next asteroid
            }
        } else {
            // No collision possible (moving same direction, moving apart, or stack empty)
            stack.push(curr);
        }



    }

    return stack;
};
