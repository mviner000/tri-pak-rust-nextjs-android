"use client"

import * as React from "react"
import { BookOpen, ChevronDown, Flag, Home, PlayCircle, ShoppingBag, Users } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function LeftSidebarContent() {
  const [isShortcutsOpen, setIsShortcutsOpen] = React.useState(true)

  return (
    <aside className="w-64 flex-shrink-0 overflow-y-auto border-r p-4">
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Avatar className="mr-2 h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <span>John Doe</span>
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-5 w-5" />
                <span>Home</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-5 w-5" />
                <span>Friends</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Friends</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <PlayCircle className="mr-2 h-5 w-5" />
                <span>Watch</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Watch</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <ShoppingBag className="mr-2 h-5 w-5" />
                <span>Marketplace</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Marketplace</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Flag className="mr-2 h-5 w-5" />
                <span>Pages</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pages</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <div className="my-4 border-t" />
      <Collapsible open={isShortcutsOpen} onOpenChange={setIsShortcutsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            <div className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              <span>Your shortcuts</span>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Avatar className="mr-2 h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Group 1" />
              <AvatarFallback>G1</AvatarFallback>
            </Avatar>
            <span>Group 1</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Avatar className="mr-2 h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Group 2" />
              <AvatarFallback>G2</AvatarFallback>
            </Avatar>
            <span>Group 2</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Avatar className="mr-2 h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Page 1" />
              <AvatarFallback>P1</AvatarFallback>
            </Avatar>
            <span>Page 1</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-blue-600">
            See more
          </Button>
        </CollapsibleContent>
      </Collapsible>
      <div className="mt-4 text-xs text-gray-500">
        <p>Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2024</p>
      </div>
    </aside>
  )
}