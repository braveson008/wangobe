const moment = require("moment");

const pricingStrategies = {
  fixedRate: (params, startTime, endTime) => {
    const hours = (endTime - startTime) / (1000 * 60 * 60);
    return hours * params.rate;
  },
  timeBasedRate: (params, startTime, endTime) => {
    let total = 0;
    let current = moment(startTime);

    while (current.isBefore(endTime)) {
      const hour = current.hour();
      const next = current.clone().add(1, "hour");

      if (hour >= params.dayStart && hour < params.dayEnd) {
        total += params.dayRate; // Day rate
      } else {
        total += params.nightRate; // Night rate
      }

      current = next;
    }

    return total;
  },
};

module.exports = pricingStrategies;
