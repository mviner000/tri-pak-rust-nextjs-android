import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LogoutButton from '@/components/LogoutButton'
import OnlineStatus from '@/components/OnlineStatus'
import LeftSidebarContent from '@/components/Sidebar/LeftSidebarContent'
import RightSidebarContent from '@/components/Sidebar/RightSidebarContent'
import { PostSkeletons } from '@/components/PostSkeletons'
import { StoryCards } from '@/components/StoryCards'
import { AddPost } from '@/components/AddPost'

async function getUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('authToken')

  if (!token) {
    redirect('/login')
  }

  const response = await fetch('http://192.168.100.7:8080/api/v1/user/me', {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    redirect('/login')
  }

  return response.json()
}

async function getAllUsers() {
  const cookieStore = await cookies()
  const token = cookieStore.get('authToken')

  if (!token) {
    return []
  }

  const response = await fetch('http://192.168.100.7:8080/api/v1/user', {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    console.error('Failed to fetch users')
    return []
  }

  return response.json()
}

export default async function Home() {
  const [user, allUsers] = await Promise.all([
    getUser(),
    getAllUsers()
  ])

  return (
    <div className="flex min-h-screen">
      <LeftSidebarContent />
      <main className="flex-1 p-8 overflow-auto">
        {/* <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
            <LogoutButton />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Your Profile</h2>
              <p className="mb-2">Username: {user.username}</p>
              <p className="mb-2">Email: {user.email}</p>
              <p>ID: {user.id}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <OnlineStatus 
                currentUser={user} 
                allUsers={allUsers}
              />
            </div>
          </div>
        </div> */}
        <div className="container mx-auto p-4">
          <AddPost />
        </div>
      </main>
      <RightSidebarContent />
    </div>
  )
}