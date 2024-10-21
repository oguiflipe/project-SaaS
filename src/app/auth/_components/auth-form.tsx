/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form'
import { signIn } from "next-auth/react"
import { toast } from '@/hooks/use-toast'



export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const form = useForm()

  const handleSubmit = form.handleSubmit( async (data) => {
    try {
      await signIn('email', {email: data.email, redirect: false})
      toast({
        title: 'Magic Link Sent',
        description: 'Check yuor e-mail for the magic link to login'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error accurred. Please try again'
      })
    }
  })

 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Use seu e-mail para realizar o login</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                //   value={email}
                  //onChange={(e) => setEmail(e.target.value)}
                  required
                  {... form.register('email')}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading && <div className="mr-2 h-4 w-4 animate-spin" />}
              Verificar e-mail
            </Button>
            {message && <p className="mt-4 text-sm text-center text-muted-foreground">{message}</p>}
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}