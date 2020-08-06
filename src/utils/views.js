export default (views) => {
  const viewsLength = views.length;
  let result;

  switch (viewsLength) {
    case 4:
      const thousand = views.split('');
      thousand.splice(1, 0, '.');
      result = thousand.join('');
      break;
    case 5:
      const tenThousand = views.split('');
      tenThousand.splice(2, 0, '.');
      result = tenThousand.join('');
      break;
    case 6:
      const hundredThousand = views.split('');
      hundredThousand.splice(3, 0, '.');
      result = hundredThousand.join('');
      break;
    case 7:
      const million = views.split('');
      million.splice(2);
      if (million[2] === 0) million.pop();
      if (million[2] !== 0) million.splice(1, 0, '.');
      million.push('M');
      result = million.join('');
      break;
    case 8:
      const tenMillions = views.split('');
      tenMillions.splice(3);
      if (tenMillions[2] === 0) tenMillions.pop();
      if (tenMillions[2] !== 0) tenMillions.splice(2, 0, '.');
      tenMillions.push('M');
      result = tenMillions.join('');
      break;
    case 9:
      const hundredMillions = views.split('');
      hundredMillions.splice(4);
      if (hundredMillions[3] === 0) hundredMillions.pop();
      if (hundredMillions[3] !== 0) hundredMillions.splice(3, 0, '.');
      hundredMillions.push('M');
      result = hundredMillions.join('');
      break;
    case 10:
      const billion = views.split('');
      billion.splice(2);
      if (billion[1] === 0) billion.pop();
      if (billion[1] !== 0) billion.splice(1, 0, '.');
      billion.push('B');
      result = billion.join('');
      break;
    case 11:
      const tenBillions = views.split('');
      tenBillions.splice(4);
      if (tenBillions[2] === 0) tenBillions.pop();
      if (tenBillions[2] !== 0) tenBillions.splice(2, 0, '.');
      tenBillions.push('B');
      result = tenBillions.join('');
      break;
    case 12:
      const hundredBillions = views.split('');
      hundredBillions.splice(5);
      if (hundredBillions[3] === 0) hundredBillions.pop();
      if (hundredBillions[3] !== 0) hundredBillions.splice(3, 0, '.');
      hundredBillions.push('B');
      result = hundredBillions.join('');
      break;
    default:
      const aFuckingTrillion = views.split('');
      aFuckingTrillion.splice(1);
      aFuckingTrillion.push('T');
      result = aFuckingTrillion.join('');
      break;
  }

  return result;
};
