import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <main className='w-full min-h-svh flex flex-col items-center justify-center'>
      <SignUp />
    </main>
  )
}