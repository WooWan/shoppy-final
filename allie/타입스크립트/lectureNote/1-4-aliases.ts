
{

    /**
     * type aliases
     * type을 새로 만들 수 있다.
     */
    type Text = string;

    type Student ={
        name: string;
        age: number;
    }
    const student: Student = {
        name: "woo",
        age :20,
    };

    /**
     * String Literal Types
     */
    type JSON = "json";
    const json: JSON = 'json';
}