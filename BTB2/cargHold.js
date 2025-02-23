let cargoHold = [
    'oxygen tanks',
    'space suits',
    'parrot',
    'instruction manual',
    'meal packs',
    'slinky',
    'security blanket'
  ];
  
  // 1. Thay 'slinky' bằng 'space tether' và in mảng
  cargoHold[cargoHold.indexOf('slinky')] = 'space tether';
  console.log("Mảng sau khi thay thế 'slinky': ", cargoHold);
  
  // 2. Xóa phần tử cuối dùng pop(), in phần tử bị xóa và mảng mới
  let removedItem = cargoHold.pop();
  console.log("Phần tử bị xóa (pop): ", removedItem);
  console.log("Mảng sau khi dùng pop(): ", cargoHold);
  
  // 3. Xóa phần tử đầu dùng shift(), in phần tử bị xóa và mảng mới
  removedItem = cargoHold.shift();
  console.log("Phần tử bị xóa (shift): ", removedItem);
  console.log("Mảng sau khi dùng shift(): ", cargoHold);
  
  // 4. Thêm 1138 vào đầu và '20 meters' vào cuối, in mảng mới
  cargoHold.unshift(1138);
  cargoHold.push('20 meters');
  console.log("Mảng sau khi thêm phần tử: ", cargoHold);
  
  // 5. In mảng cuối cùng kèm chiều dài bằng template literal
  console.log(`Mảng cuối cùng: ${cargoHold}, chiều dài: ${cargoHold.length}`);