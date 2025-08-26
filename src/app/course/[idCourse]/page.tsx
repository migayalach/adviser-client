import React from 'react'
import {courses} from "@/src/mocks"

interface Props {
  params: { idCourse: string };
}

function page({ params }: Props) {
  return (
    <div>{params.idCourse}</div>
  )
}

export default page