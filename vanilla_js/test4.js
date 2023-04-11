function solution(citations) {
  var answer = 0;

  while (citations.length) {
    let check = citations.filter((a) => answer > a);
    console.log(check);
    answer += 1;
    if (citations.length == answer) {
      break;
    }
  }
  return answer;
}

solution([3, 12, 9]);
