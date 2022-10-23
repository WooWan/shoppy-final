{

    /**
     * Enum 타입 : 다른 타입으로 재할당 될 수 있어서 사용 지양해야 한다.
     */
    const DAYS_ENUM = Object.freeze({" MONDAY": 0, "TUESDAY":1})

    enum Days {
        Monday,
        Tuesday,
        Wednesday,
    }

    let day = Days.Monday;
    day = 10;
    console.log(day);

    //따라서, union Type 을 활용해서 대신 사용한다.(String literal)
    type DaysOfWeek = 'Monday' | 'Tuesday';
    let mm: DaysOfWeek = 'Monday';

}