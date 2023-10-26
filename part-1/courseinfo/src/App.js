

import React from 'react'
  // ********** Exercise - 1.1 and 1.2 ********
// const Header = (props) => {
//   return(
//     <>
//       <h1> {props.course} </h1>
//     </>
//   )
// }
// const Part = (props) => {
//   return(
//     <>
//       <p> {props.part} {props.exercises} </p>
//     </>
//   )
// }
// const Content = () => {
//   return(
//     <>
//       <Part part="Fundamentals of React" exercises={10} />
//       <Part part="Using props to pass data" exercises={7} />
//       <Part part="State of a component" exercises={14} />
//     </>
//   )
// }
// const Total = (props) => {
//   return(
//     <>
//       <p> Number of exercises {props.exercises} </p>
//     </>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//     <>
//       <Header course = {course} />
//       <Content />
//       <Total  exercises={exercises1 + exercises2 + exercises3} />
//     </>
//   )
// } 

// export default App


// *************** Exercise 1.4 (Implementations) *************


// const Header = (props) => {
//     console.log(props);
//     return (
//       <>
//         <p> {props.course} </p>
//       </>
//     )
// }
// const Content = (props) => {
//   console.log(props);
//     return (
//         props.parts.map(part =>
//           <p> {part.name} {part.exercises} </p>
//         )
//     )
// }  
// const Total = (props) => {  
//   console.log(props);
//   const totalExercises = props.parts.reduce((total,part) => total + part.exercises, 0);
//   return (
//     <>
//       <p> Total Exercises are : {totalExercises} </p>
//     </>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//   {
//     name: 'Fundamentals of React',
//     exercises: 10
//   },
//   {
//     name: 'Using props to pass data',
//     exercises: 7
//   },
//   {
//     name: 'State of a component',
//     exercises: 14
//   }
//   ];
//   return (  
//     <div>
//       <Header course = {course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

// export default App



// ************************  Example 1.5  ***********************

const Header = (props) => {
  console.log(props);
  return(
    <div>
      <h1> {props.courseName} </h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props);
  const courseContent = props.courseContent;
  return (
    <div>
      {courseContent.map(part => 
          <p> {part.name} {part.exercises} </p>
      )}
    </div>
  )
}
const Total = (props) => {
  console.log(props);
  const coursePart = props.coursePart;
  const totalExercises = coursePart.reduce((total, part) => total+part.exercises,0);
  console.log(totalExercises);
  return(
    <div>  
      <p> Total Exercises are : {totalExercises} </p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, 
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header courseName={course.name}/>
      <Content courseContent={course.parts} />
      <Total coursePart={course.parts} />  
    </div>
  )
}

export default App



