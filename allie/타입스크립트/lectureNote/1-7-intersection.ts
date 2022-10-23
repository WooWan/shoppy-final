{


    /**
     * intersection Types : &
     */

    type Student = {
        name: string;
        score: number;
    }
    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId);
    }

    internWork({
        name: "woo",
        score: 100,
        employeeId: 12,
        work: () =>{},
    });
}