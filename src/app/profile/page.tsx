import Container from '@/components/Container'
import ProfileInfo from '@/components/ProfileInfo'
import React from 'react'
import {getServerSession} from "next-auth"
import { redirect } from 'next/navigation'

async function page() {
    const session = await getServerSession();

if(!session || !session.user) {
    redirect('/');
}


  return (
    <Container>
        <p className="text-xl font-semibold pb-10 underline underline-offset-4 decoration-[1px]">
          Profile Information
        </p>
        <ProfileInfo />
    </Container>
  )
}

export default page