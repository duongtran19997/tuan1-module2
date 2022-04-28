class Instructor {
    role: string
    name: string

    constructor({name = 'Trung', role = 'assistant'}) {
        this.role = role
        this.name = name
    }

    static helloWorld() {
        console.log('xin chao')
    }

    static canTeach(instructor) {
        return (instructor.role === 'classroom')
    }

    renderDetails() {
        console.log(`${this.name}-${this.role}`)
    }
}

let juniorInstructor = new Instructor({name: 'Brian'})
let seniorInstructor = new Instructor({role: 'classroom'})

juniorInstructor.renderDetails()
seniorInstructor.renderDetails()

Instructor.helloWorld();
console.log(
    Instructor.canTeach(juniorInstructor)
);