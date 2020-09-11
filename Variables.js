//var -> scope to the entire function
//let -> scope to the block
//const -> scope to the block, cannot be re-assigned...

function sampleVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sampleVar();

function sampleLet() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  //console.log(i); - err not defined
}

sampleLet();
