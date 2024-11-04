import { Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const stories = [
  { 
    id: 1, 
    name: "Your Story", 
    image: "https://images.unsplash.com/photo-1467632499275-7a693a761056?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage: `https://i.pravatar.cc/40?u=1`, 
    color: "bg-gray-200" 
  },
  { 
    id: 2, 
    name: "John Doe", 
    image: "https://images.unsplash.com/photo-1605932949605-8904747297bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D",
    userImage: `https://i.pravatar.cc/40?u=2`, 
    color: "bg-blue-500" 
  },
  { 
    id: 3, 
    name: "Jane Smith", 
    image: "https://images.unsplash.com/photo-1531498681050-acee0b4825a3?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage: `https://i.pravatar.cc/40?u=3`, 
    color: "bg-green-500" 
  },
  { 
    id: 4, 
    name: "Mike Johnson", 
    image: "https://images.unsplash.com/photo-1590025877851-33a6250be62d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage: `https://i.pravatar.cc/40?u=4`, 
    color: "bg-yellow-500" 
  },
  { 
    id: 5, 
    name: "Emily Brown", 
    image: "https://images.unsplash.com/photo-1610571648632-7500e6e7c0e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage: `https://i.pravatar.cc/40?u=5`, 
    color: "bg-red-500" 
  },
]

export function StoryCards() {
  return (
    <div className="mb-4 overflow-x-auto">
      <div className="flex space-x-2 p-2">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`relative flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
              index === 0 ? "border-2 border-gray-300" : ""
            }`}
          >
            {/* Story Background with gradient overlay */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
              />
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-full object-cover"
              />
            </div>

            {index === 0 ? (
              // Create Story Card
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90">
                <div className="relative mb-2">
                  <Avatar className="h-12 w-12 border-2 border-white">
                    <AvatarImage src={story.userImage} alt={story.name} />
                    <AvatarFallback>{story.name[0]}</AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Create story</span>
                  </Button>
                </div>
                <span className="text-sm font-medium text-gray-900">Create Story</span>
              </div>
            ) : (
              // User Story Card
              <>
                <div className="absolute top-4 left-4">
                  <Avatar className="h-10 w-10 border-2 border-blue-500 ring-2 ring-white">
                    <AvatarImage src={story.userImage} alt={story.name} />
                    <AvatarFallback>{story.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium truncate drop-shadow-lg">
                    {story.name}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoryCards;