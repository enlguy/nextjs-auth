import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async () => {
  const session = await getServerSession(authOptions);
  
  if(session?.user) {
    return <h2 className="text-2xl">Welcome to your Admin Panel, {session?.user.username || session.user.name}!</h2>
  }

  return (
    <h2>Please login</h2>
    )
}

export default page
