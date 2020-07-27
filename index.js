
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce((sum,batteryBatch) => sum + batteryBatch, 0)