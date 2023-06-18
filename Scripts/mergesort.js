function mergeSortCapsUp(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortCapsUp(arr.slice(0, mid));
  const right = mergeSortCapsUp(arr.slice(mid));

  return mergeCapsUp(left, right);
}

function mergeCapsUp(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].valor < right[j].valor) {
      result.push(left[i]);
      i++;
    } else if (left[i].valor === right[j].valor) {
      if (left[i].nome < right[j].nome) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortCapsDown(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortCapsDown(arr.slice(0, mid));
  const right = mergeSortCapsDown(arr.slice(mid));

  return mergeCapsDown(left, right);
}

function mergeCapsDown(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].valor > right[j].valor) {
      result.push(left[i]);
      i++;
    } else if (left[i].valor === right[j].valor) {
      if (left[i].nome < right[i].nome) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortNomeUp(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortNomeUp(arr.slice(0, mid));
  const right = mergeSortNomeUp(arr.slice(mid));

  return mergeNomeUp(left, right);
}

function mergeNomeUp(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].nome < right[j].nome) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortNomeDown(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortNomeDown(arr.slice(0, mid));
  const right = mergeSortNomeDown(arr.slice(mid));

  return mergeNomeDown(left, right);
}

function mergeNomeDown(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].nome > right[j].nome) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortPesoUp(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortPesoUp(arr.slice(0, mid));
  const right = mergeSortPesoUp(arr.slice(mid));

  return mergePesoUp(left, right);
}

function mergePesoUp(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].peso < right[j].peso) {
      result.push(left[i]);
      i++;
    } else if (left[i].peso === right[j].peso) {
      if (left[i].nome < right[j].nome) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortPesoDown(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortPesoDown(arr.slice(0, mid));
  const right = mergeSortPesoDown(arr.slice(mid));

  return mergePesoDown(left, right);
}

function mergePesoDown(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].peso > right[j].peso) {
      result.push(left[i]);
      i++;
    } else if (left[i].peso === right[j].peso) {
      if (left[i].nome < right[j].nome) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
