
//Java: Exceptioin
//JavaScript: Error 클래스

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {

}

//error 가 발생할 수 있을 경우 try, catch로 발생할 수 있는 에러에 대해서 처리해준다

const fileName = 'file';
console.log(readFile(fileName));

const noneFileName = 'not exist!';
try {
  console.log(readFile(noneFileName));
}catch(error){
  console.log(`catched!!`);
}finally {
  closeFile(fileName);
  closeFile(noneFileName);
}

