//Business Interface Logic
function BankAccount(initialDeposit, deposit, withdrawal, balance) {
  this.initialDeposit = initialDeposit,
  this.deposit = deposit,
  this. withdrawal = withdrawal,
  this.balance = balance
}
BankAccount.prototype.calcDeposit = function() {

}

BankAccount.prototype.calcWithdrawal = function() {

}

BankAccount.prototype.calcBalance = function() {

}

//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  });
});
var newBankAccount = new BankAccount ()
