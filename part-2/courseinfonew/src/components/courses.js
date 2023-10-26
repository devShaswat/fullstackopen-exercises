

const Total = ({totalExercises}) => {
    return (
        <>
            <h2> total of {totalExercises} exercises </h2>
        </>
    )
}

const Part = ({part, exercises}) => {
    return (
        <>
            <p> {part} {exercises} </p>
        </>
    )
}

const Header = ({courseName}) => {
    return (
        <> 
            <h2> {courseName} </h2>
        </>
    )
}

const Course = ({course}) => {
    const partsData = course.parts.map(part=>{
        return (
            <Part key={part.id} part={part.name} exercises={part.exercises} />   
        )
    })

    // let totalExercises = 0;
    // course.parts.forEach(part=>{
    //     return (
    //         totalExercises += part.exercises
    //     )
    // })         
    // or, 

    const totalExercises = course.parts.reduce((total, part) => {
        // console.log('whats happening?', ('total is' ,total, 'part is' ,part.exercises))
        return total + part.exercises
    }, 0)

    return(
        <>
            <Header courseName={course.name} />
            {partsData}
            <Total totalExercises={totalExercises} />
        </>
    )
}   

const Courses = ({courses}) => {
    return courses.map(course => <Course key={course.id} course={course} />)
}

export default Courses