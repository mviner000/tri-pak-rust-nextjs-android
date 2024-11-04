
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ImageIcon, VideoIcon, SmileIcon } from "lucide-react"
import { StoryCards } from "./StoryCards"
import { PostSkeletons } from "./PostSkeletons"

export function AddPost() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <StoryCards />
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/40?u=you" alt="Your Avatar" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <Input
              className="flex-grow bg-gray-100 hover:bg-gray-200 transition-colors"
              placeholder="What's on your mind?"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <Button variant="ghost" className="flex-grow">
              <VideoIcon className="mr-2 h-4 w-4" />
              Live video
            </Button>
            <Button variant="ghost" className="flex-grow">
              <ImageIcon className="mr-2 h-4 w-4" />
              Photo/video
            </Button>
            <Button variant="ghost" className="flex-grow">
              <SmileIcon className="mr-2 h-4 w-4" />
              Feeling/activity
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <PostSkeletons />
      {/* Add more feed items here */}
    </div>
  )
}