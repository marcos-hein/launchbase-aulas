const classA = [
    {
        name: "Mayk",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Mais um student",
        grade: 10
    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Ciclano",
        grade: 0
    },
    {
        name: "Novo student",
        grade: 9
    }
]

function calculateAverage(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }


    const average = sum / students.length

    return average
}

function sendMenssage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function flukedStudents(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMenssage(average1, 'classA')
sendMenssage(average2, 'classB')

flukedStudents(classA)
flukedStudents(classB)
