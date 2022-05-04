import makeMutex from "./mutex";

function randomDelay() {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
}

async function loadBalance(account) {
  await randomDelay(); // simulate delay retrieving data from db
  return account.balance;
}

async function saveBalance(value, account) {
  await randomDelay(); // simulate delay writing data to db
  account.balance = value;
}

/**
 * Sell product for $50
 * ! Vulnerable to race conditions!
 * @param {String} product name of product
 */
async function _unsafeSell(product, price, account, log) {
  const balance = await loadBalance(account);
  console.log(`sell ${product} - balance loaded: ${balance}`);
  log.push({ product, price, operation: "read balance", balance });
  const newBalance = balance + price;
  await saveBalance(newBalance, account);
  console.log(`sell ${product} - balance updated: ${newBalance}`);
  log.push({
    product,
    price,
    operation: "update balance",
    balance: newBalance,
  });
}

// wrap sell function in mutex lock:
function makeSafeSellFunction(mutex) {
  return async (...args) => await mutex.run(_unsafeSell, ...args);
}

/**
 * Simulate multiple concurrent non-atomic transactions
 * - startingBalance
 * - transactions: list of objects { product, price }
 * Return an object with properties:
 * - operations: list of operations { product, price, operation, balance }
 * - balance: ending balance
 */
async function simulateTransactions(
  startingBalance,
  transactions,
  useMutex = false
) {
  const operations = [];
  const account = { balance: startingBalance };

  const mutex = makeMutex();

  const sellFunction = useMutex
    ? makeSafeSellFunction(mutex)
    : _unsafeSell;

  await Promise.all(
    transactions.map((transaction) =>
      sellFunction(transaction.product, transaction.price, account, operations)
    )
  );

  return { operations, balance: account.balance };
}

export default simulateTransactions;
