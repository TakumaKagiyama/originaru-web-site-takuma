document.getElementById('btn-ja').addEventListener('click', function() {
  document.getElementById('text-ja').style.display = 'block';
  document.getElementById('text-en').style.display = 'none';
});

document.getElementById('btn-en').addEventListener('click', function() {
  document.getElementById('text-ja').style.display = 'none';
  document.getElementById('text-en').style.display = 'block';
});
