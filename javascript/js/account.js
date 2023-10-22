function Account(owner, accNum, balance) {
  // 객체 속성 부여
  this.owner = owner; // 앞의 예제에서 account.owner = '홍길동'
  this.accNum = accNum;
  this.balance = balance;
  this.name = "나라사랑체크";
  this.bankname = "KB국민은행";

  // 객체 기능 부여
  this.deposit = (money) => {
    this.balance += money;
  };
  this.inquiry = () => {
    return this.balance;
  };
  this.withDraw = (money) => {
    this.balance >= money ? (this.balance -= money) : alert("잔액부족");
  };
}
