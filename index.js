document.getElementById('shadow-box').addEventListener('scroll', function(e) {
  // document.getElementById('content-box').scrollTop = document.getElementById('shadow-box').scrollTop;
  document.getElementById('content-box').scrollTop = document.getElementById('shadow-box').scrollTop;
});

document.getElementById('content-box').addEventListener('scroll', function(e) {
  console.log('content scrolled');
});