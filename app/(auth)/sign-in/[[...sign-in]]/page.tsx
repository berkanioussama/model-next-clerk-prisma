import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className='w-full min-h-svh flex flex-col items-center justify-center'>
      <SignIn />
    </main>
  )
}