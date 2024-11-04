"use client"

import * as React from "react"
import { Calendar, Gift, Plus, Search, Users } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function RightSidebarContent() {
  return (
    <aside className="w-80 flex-shrink-0 border-l p-4">
      <div className="space-y-4">
        <div>
          <h2 className="mb-2 text-lg font-semibold">Upcoming Events</h2>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Team Meeting
              <span className="ml-auto text-xs text-muted-foreground">Today, 3 PM</span>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Gift className="mr-2 h-4 w-4" />
              Sarah's Birthday
              <span className="ml-auto text-xs text-muted-foreground">Tomorrow</span>
            </Button>
          </div>
        </div>
        <Separator />
        <div>
          <h2 className="mb-2 text-lg font-semibold">Friend Requests</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">2 mutual friends</p>
                </div>
              </div>
              <div className="space-x-2">
                <Button size="sm" variant="secondary">
                  Ignore
                </Button>
                <Button size="sm">Accept</Button>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <h2 className="mb-2 text-lg font-semibold">Sponsored</h2>
          <div className="space-y-2">
            <div className="rounded-lg border p-2">
              <img
                src="/placeholder.svg?height=100&width=280"
                alt="Sponsored content"
                className="mb-2 rounded-md"
              />
              <p className="text-sm font-medium">Amazing Product</p>
              <p className="text-xs text-muted-foreground">www.amazingproduct.com</p>
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Contacts</h2>
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <Button key={i} variant="ghost" className="w-full justify-start">
                  <Avatar className="mr-2 h-8 w-8">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32&text=U${i + 1}`} alt={`User ${i + 1}`} />
                    <AvatarFallback>U{i + 1}</AvatarFallback>
                  </Avatar>
                  <span>User {i + 1}</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-green-500" />
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </aside>
  )
}