{
  /**
   * Enum : 상수
   */

  // JavaScript에서 enum을 비슷하게 사용하는 법
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
  }

  let day = Days.Tuesday
  console.log(day); // 1
  day = Days.Wednesday
  console.log(day); // 2

  //enum 대신 union type을 사용하는 것이 좋다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Monday';


  // union types 대체
  const MOBILE_OS = {
    IOS: "ios",
    ANDROID: "android",
  } as const;

type MobileOS = typeof MOBILE_OS[keyof typeof MOBILE_OS];
  function testMobileOs(oss : MobileOS) {
    console.log(oss);
  }

  // testMobileOs('window') //error
}