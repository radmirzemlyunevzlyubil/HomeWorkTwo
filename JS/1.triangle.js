for (let line = '*'; line.length <= 7; line += '*'){
  console.log(line);
}

//////////////////////////////////////////////////////////

let line = '*';
let count = 1;
while (count <= 7) {
  console.log(line);
  line += '*';
  count++;
}

//////////////////////////////////////////////////////////

let i = 1;
do {
  let line = '*';
  let j = 0;
  do {
    line += '*';
    j++;
  } while (j < i);
  console.log(line);
  i++;
} while (i <= 7);

//////////////////////////////////////////////////////////

Array.from({ length: 7 }, (_, i) => {
  let line = '*';
  for (let j = 0; j <= i; j++) {
    line += '*';
  }
  return line;
}).forEach(line => console.log(line));

//////////////////////////////////////////////////////////

const lines = Array.from({ length: 7 }, (_, i) => {
  let line = '*';
  for (let j = 0; j <= i; j++) {
    line += '*';
  }
  return line;
});
for (const line of lines) {
  console.log(line);
}