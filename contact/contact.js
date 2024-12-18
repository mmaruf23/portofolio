function sendEmail(){
  const subject = document.getElementById('subject').value
  const message = document.getElementById('message').value

  const emailReceiver = "maruuf82@gmail.com"

  const a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`;
  a.target = "_blank";
  a.click();
  }