
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bank Balance Card</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3f6fa;
    }

    .balance-card {
      position: relative;
      width: 380px;
      min-height: 210px;
      padding: 28px;
      border-radius: 20px;
      overflow: hidden;

      /* Standard professional banking background */
      background: linear-gradient(
        135deg,
        #0f4c81 0%,
        #1769aa 55%,
        #2389c9 100%
      );




      color: white;
      box-shadow: 0 12px 30px rgba(15, 76, 129, 0.25);
    }

    /* Decorative background circles */
    .balance-card::before,
    .balance-card::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
    }

    .balance-card::before {
      width: 180px;
      height: 180px;
      right: -70px;
      top: -70px;
    }

    .balance-card::after {
      width: 140px;
      height: 140px;
      left: -60px;
      bottom: -70px;
    }

    .balance-content {
      position: relative;
      z-index: 1;
    }

    .account-title {
      font-size: 14px;
      opacity: 0.8;
      margin-bottom: 12px;
    }

    .balance-label {
      font-size: 13px;
      opacity: 0.75;
      margin-bottom: 6px;
    }

    .balance {
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .account-number {
      margin-top: 24px;
      font-size: 13px;
      opacity: 0.75;
      letter-spacing: 2px;
    }
  </style>
</head>

<body>

  <div class="balance-card">
    <div class="balance-content">

      <div class="account-title">
        My Bank Account
      </div>

      <div class="balance-label">
        Available Balance
      </div>

      <div class="balance">
        ₹1,25,000.00
      </div>

      <div class="account-number">
        •••• •••• 4582
      </div>

    </div>
  </div>

</body>
</html>
