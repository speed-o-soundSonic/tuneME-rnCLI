export default (contentDetails) => {
  const reg = new RegExp(/(\dM*)/g);
  const reg2 = new RegExp(/(\dH*)/g);
  const reg3 = new RegExp(/(\d*H\dM*).*/g);
  const reg4 = new RegExp(/\d+S$/);

  const times = contentDetails.duration;
  let result;

  if (!times.includes('H') && !times.includes('M') && times.includes('S')) {
    let time = contentDetails.duration.match(reg4).join('').replace('S', '');

    if (time.length === 1) time = '0' + time;
    result = `00:${time}`;
  }

  if (times.includes('H') && times.includes('M')) {
    let time = contentDetails.duration
      .match(reg3)
      .join('')
      .replace(/(H|M)/g, ':')
      .replace('S', '');

    if (!times.includes('S')) {
      const addSecondsToTime = time.split(':');
      addSecondsToTime.pop();
      addSecondsToTime.push('00');
      time = addSecondsToTime.join(':');
    }

    let [hours, minutes, seconds] = time.split(':');
    if (minutes && minutes.length === 1) minutes = '0' + minutes;
    result = `${hours}:${minutes}:${seconds}`;
  }

  if (times.includes('H') && !times.includes('M')) {
    let time = contentDetails.duration
      .match(reg2)
      .join('')
      .replace('H', ':')
      .split(':');

    if (!times.includes('S')) {
      const addSecondsToTime = time.split(':');
      addSecondsToTime.push('00');
      time = addSecondsToTime.join(':');
    }

    let [_, right] = time;
    if (right && right.length === 1) right = '0' + right;

    time.splice(1, 0, '00');
    time.splice(time.length - 1, 1, right);
    const newTime = time.join(':');

    result = newTime;
  }

  if (!times.includes('H') && times.includes('M')) {
    let time = contentDetails.duration.match(reg).join('').replace('M', ':');

    if (!times.includes('S')) {
      const addSecondsToTime = time.split(':');
      addSecondsToTime.pop();
      addSecondsToTime.push('00');
      time = addSecondsToTime.join(':');
    }

    let [left, right] = time.split(':');

    if (right && right.length === 1) right = '0' + right;
    result = `${left}:${right}`;
  }

  return result;
};
